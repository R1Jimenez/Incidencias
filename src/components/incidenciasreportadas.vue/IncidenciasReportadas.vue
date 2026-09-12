<style scoped>
.overlay {
    display: flex;
    flex-direction: column;
    gap: 5%;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: min(90%, 700px);
    max-height: 85vh;
    overflow-y: auto;
    background: #FFFFFF;
    border-radius: 22px;
    border: 2px solid #080E98;
    padding: 1.5rem;
    box-sizing: border-box;
}

.content h2 {
    color: #080E98;
    text-align: center;
}

.sinincidencias {
    text-align: center;
    color: #252525;
}
</style>

<template>
    <div class="overlay" @click.self="cerrar">
        <div class="content">
            <h2>Incidencias Reportadas</h2>
            <p v-if="!incidencias.length" class="sinincidencias">Aún no se han reportado incidencias.</p>
            <IncidenciaReportada
                v-for="incidencia in incidencias"
                :key="incidencia.id"
                :titulo="incidencia.titulo"
                :descripcion="incidencia.descripcion"
                :prioridad="incidencia.prioridad"
                :estado="incidencia.estado"
            />
        </div>
    </div>
</template>

<script setup>
import IncidenciaReportada from './IncidenciaReportada.vue';
import { useIncidencias } from '@/composables/useIncidencias'

const emit = defineEmits(['close'])

const { incidencias } = useIncidencias()

function cerrar() {
    emit('close')
}
</script>