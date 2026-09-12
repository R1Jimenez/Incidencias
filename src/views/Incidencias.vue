<style scoped>
.IncidenciasContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    padding: .5%;
    padding-top: 1%;
    padding-bottom: 0%;
    gap: 5%;
}

.headerInc {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 98%;
    height: 60px;
    background-color: #080E98;
    color: white;
    border: 2px solid #4A8FC0;
    border-radius: 22px;
    flex-shrink: 0;
}

.incidenciasList {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    justify-items: center;
    align-items: start;

    gap: 1.5rem;
    width: 98%;
    padding: 0 2.5rem 2rem;
}
</style>

<template>
    <div class="IncidenciasContent">
        <div class="headerInc">
            <h1>Incidencias</h1>
        </div>

        <FiltroInciencias v-model:estado="filtroEstado" v-model:prioridad="filtroPrioridad" />

        <SinIncidencias v-if="incidenciasOrdenadas.length === 0" :mensaje="mensajeSinIncidencias" />

        <div v-else class="incidenciasList">
            <Incidencia
                v-for="incidencia in incidenciasOrdenadas"
                :key="incidencia.id"
                :titulo="incidencia.titulo"
                :descripcion="incidencia.descripcion"
                :prioridad="incidencia.prioridad"
                :estado="incidencia.estado"
                @click="incidenciaSeleccionada = incidencia"
            />
        </div>

        <ContenidoIncidencia
            v-if="incidenciaSeleccionada"
            :incidencia="incidenciaSeleccionada"
            @close="incidenciaSeleccionada = null"
        />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Incidencia from '../components/incidencias/Incidencia.vue';
import FiltroInciencias from '../components/incidencias/FiltroInciencias.vue';
import SinIncidencias from '../components/incidencias/SinIncidencias.vue';
import ContenidoIncidencia from '../components/incidencias/ContenidoIncidencia.vue';
import { useIncidencias } from '@/composables/useIncidencias'

const { incidencias } = useIncidencias()

const filtroEstado = ref('todos')
const filtroPrioridad = ref('todas')
const incidenciaSeleccionada = ref(null)

const ordenPrioridad = { alta: 0, media: 1, baja: 2 }

const incidenciasFiltradas = computed(() =>
    incidencias.filter(
        (incidencia) =>
            (filtroEstado.value === 'todos' || incidencia.estado === filtroEstado.value) &&
            (filtroPrioridad.value === 'todas' || incidencia.prioridad === filtroPrioridad.value)
    )
)

const incidenciasOrdenadas = computed(() =>
    [...incidenciasFiltradas.value].sort((a, b) => ordenPrioridad[a.prioridad] - ordenPrioridad[b.prioridad])
)

const mensajeSinIncidencias = computed(() =>
    incidencias.length === 0
        ? 'Aún no se han registrado incidencias.'
        : 'No se encontraron incidencias con los filtros seleccionados.'
)
</script>