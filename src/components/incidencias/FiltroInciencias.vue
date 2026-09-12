<style scoped>
.incidenciasfilt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: auto;
    background-color: #F0F0F0;
    border: 2px solid #4A8FC0;
    border-radius: 22px;
    padding-bottom: 1%;
}

.filtheader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 16px;
    width: 100%;
    background-color: #080E98;
    border-bottom: 1.5px solid #4A8FC0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    flex-shrink: 0;
}

.filtheader h2 {
    color: #FFFFFF;
    font-size: 1.5rem;
    font-weight: bold;
    padding-left: 16px;
}

.rowfilt {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10%;
    margin-top: 20px;
}

.mincol {
    display: flex;
    flex-direction: column;
    justify-content: first baseline;
    align-items: flex-start;
    width: 40%;
    gap: 5px;
}

.mincol text {
    font-size: 1.25rem;
    font-weight: bold;
    color: #080E98;
    margin-left: 25px;
}

.dropdown {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2px 1rem;
    border: 2px solid #4A8FC0;
    border-radius: 15px;
    background: radial-gradient(
        ellipse at bottom,
        #F0F0F0 50%,
        #BCBCBC 150%
    );
    color: #130348;
    font-size: 1rem;
    cursor: pointer;
}

.dropdownwrap {
    position: relative;
    width: 100%;
}

.dropdownoptions {
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    width: 100%;
    background-color: #F0F0F0;
    border: 2px solid #4A8FC0;
    border-radius: 15px;
    overflow: hidden;
    z-index: 10;
    list-style: none;
}

.dropdownoptions li {
    padding: 6px 1rem;
    cursor: pointer;
    color: #130348;
}

.dropdownoptions li:hover {
    background-color: #4A8FC0;
    color: white;
}
</style>

<template>
    <div class="incidenciasfilt">
        <div class="filtheader">
            <h2>Filtrar Incidencias</h2>
        </div>
        <div class="rowfilt">
            <div class="mincol">
                <text>Estado:</text>
                <div class="dropdownwrap">
                    <div class="dropdown" @click="estadoAbierto = !estadoAbierto; prioridadAbierto = false">
                        <span>{{ etiquetaEstado }}</span>
                        <span class="material-icons">arrow_drop_down</span>
                    </div>
                    <ul v-if="estadoAbierto" class="dropdownoptions">
                        <li
                            v-for="opcion in estadoOpciones"
                            :key="opcion.value"
                            @click="seleccionarEstado(opcion.value)"
                        >
                            {{ opcion.label }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mincol">
                <text>Prioridad:</text>
                <div class="dropdownwrap">
                    <div class="dropdown" @click="prioridadAbierto = !prioridadAbierto; estadoAbierto = false">
                        <span>{{ etiquetaPrioridad }}</span>
                        <span class="material-icons">arrow_drop_down</span>
                    </div>
                    <ul v-if="prioridadAbierto" class="dropdownoptions">
                        <li
                            v-for="opcion in prioridadOpciones"
                            :key="opcion.value"
                            @click="seleccionarPrioridad(opcion.value)"
                        >
                            {{ opcion.label }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const estado = defineModel('estado', { default: 'todos' })
const prioridad = defineModel('prioridad', { default: 'todas' })

const estadoOpciones = [
    { value: 'todos', label: 'Todos los estados' },
    { value: 'Nueva', label: 'Nueva' },
    { value: 'En proceso', label: 'En proceso' },
    { value: 'Resuelta', label: 'Resuelta' },
]

const prioridadOpciones = [
    { value: 'todas', label: 'Todas las prioridades' },
    { value: 'alta', label: 'Alta' },
    { value: 'media', label: 'Media' },
    { value: 'baja', label: 'Baja' },
]

const estadoAbierto = ref(false)
const prioridadAbierto = ref(false)

const etiquetaEstado = computed(
    () => estadoOpciones.find((opcion) => opcion.value === estado.value)?.label ?? 'Seleccione estado'
)
const etiquetaPrioridad = computed(
    () => prioridadOpciones.find((opcion) => opcion.value === prioridad.value)?.label ?? 'Seleccione prioridad'
)

function seleccionarEstado(value) {
    estado.value = value
    estadoAbierto.value = false
}

function seleccionarPrioridad(value) {
    prioridad.value = value
    prioridadAbierto.value = false
}
</script>
