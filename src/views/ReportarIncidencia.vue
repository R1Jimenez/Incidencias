<style scoped>
.reporteIncidenciaPrincipal {
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

.informacionAdicional {
    width: min(90%, 900px);
    padding: 1.25rem 1.5rem;
    background-color: rgba(255, 255, 255, 0.9);
    color: #252525;
    border: 2px solid #4a8fc0;
    border-radius: 18px;
    line-height: 1.6;
    text-align: left;
    width: 95%;
}

.informacionAdicional h2 {
    margin-bottom: 0.75rem;
    color: #080e98;
    font-size: 1.5rem;
}

.informacionAdicional p {
    margin-bottom: 1rem;
}

.informacionAdicional p:last-child {
    margin-bottom: 0;
}

.informacionAdicional ol {
    margin: 0 0 1rem 1.5rem;
}

.informacionAdicional li {
    margin-bottom: 0.35rem;
}

.verincidencias {
    color: white;
    border: 2px solid transparent;
    border-radius: 22px;
    padding: 10px 20px;
    font-size: 1.5rem;
    cursor: pointer;
    box-sizing: border-box;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    background-color: #080E98;
    border: 2px solid #F0F0F0;
    margin-top: 1rem;
}

.verincidencias:hover {
    background-color: #F0F0F0;
    color: #080E98;
    border: 2px solid #080E98;
}
</style>

<template>
    <div class="reporteIncidenciaPrincipal">
        <Header />

        <div class="informacionAdicional">
            <h2>¿Cómo levantar una incidencia?</h2>

            <p>
                Completa el formulario con información suficiente para que el equipo
                pueda comprender e investigar el problema. Utiliza un título breve y
                describe qué ocurrió, cuándo sucedió y cómo afecta tus actividades.
            </p>
            
            <ol>
                <li>
                    Escribe un título que permita identificar rápidamente el problema.
                </li>
                <li>
                    Describe detalladamente la situación y, si es posible, incluye los
                    pasos que realizaste antes de que ocurriera.
                </li>
                <li>
                    Selecciona la prioridad considerando el impacto de la incidencia.
                </li>
                <li>
                    Presiona “Registrar incidencia” para enviar el reporte.
                </li>
            </ol>
            <p>
                Las incidencias nuevas comenzarán con el estado “Nueva”. Posteriormente
                podrás consultar su progreso en la sección “Reporte de incidencias”.
            </p>
        </div>
        
        <Incidenciacontent />

        <button class="verincidencias" type="button" @click="mostrarModal = true">Ver Incidencias Reportadas</button>

        <IncidenciasReportadas v-if="mostrarModal" @close="mostrarModal = false" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Incidenciacontent from '../components/reportarincidencia/DescripcionIncidencia.vue'
import IncidenciasReportadas from '../components/incidenciasreportadas.vue/IncidenciasReportadas.vue'

const mostrarModal = ref(false)
</script>