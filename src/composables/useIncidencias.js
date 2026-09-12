import { reactive } from 'vue'

// Module-level state so it stays shared (and persists) across every component that imports this composable.
const incidencias = reactive([])

let nextId = 1

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
