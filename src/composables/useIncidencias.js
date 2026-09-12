import { reactive, watch } from 'vue'

const STORAGE_KEY = 'ecosat-incidencias'

function cargarEstadoGuardado() {
    try {
        const guardado = JSON.parse(localStorage.getItem(STORAGE_KEY))
        if (guardado && Array.isArray(guardado.incidencias)) return guardado
    } catch {
        // Datos corruptos en localStorage: se ignora y se parte de un estado vacío.
    }
    return { incidencias: [], nextId: 1 }
}

const estadoGuardado = cargarEstadoGuardado()

const incidencias = reactive(estadoGuardado.incidencias)

let nextId = estadoGuardado.nextId

watch(
    incidencias,
    () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ incidencias, nextId }))
    },
    { deep: true }
)

function registrarIncidencia({ titulo, descripcion, prioridad }) {
    incidencias.unshift({
        id: nextId++,
        titulo,
        descripcion,
        prioridad,
        estado: 'Nueva',
    })
}

function actualizarEstado(id, estado) {
    const incidencia = incidencias.find((incidencia) => incidencia.id === id)
    if (incidencia) incidencia.estado = estado
}

export function useIncidencias() {
    return {
        incidencias,
        registrarIncidencia,
        actualizarEstado,
    }
}
