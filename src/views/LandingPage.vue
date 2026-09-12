<style scoped>
.landingpage {
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

.landingheader {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 98%;
    height: 60px;
    align-items: center;
    background-color: #080E98;
    border-radius: 22px;
    border: 2px solid #4A8FC0;
    flex-shrink: 0;
}

.landingheader h1 {
    color: white;
    font-size: 2em;
    text-align: center;
}

.landingcontent {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    padding: 1%;
    background-color: #FFFFFF;
    border-radius: 22px;
    border: 2px solid #080E98;
    color: #080E98;
    font-size: 1.2em;
    font-weight: bold;
}

.landingdescription {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 10%;
    width: 80%;
    height: 30%;
    padding: 1%;
    background-color: #FFFFFF;
    border-radius: 22px;
    border: 2px solid #080E98;
    color: #080E98;
    font-size: 1.2em;
    font-weight: bold;
}

.landingfooter{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 80%;
    padding: 1%;
    border-radius: 22px;
    margin-top: auto;
    gap: 5%;
}

.levIncidencia,
.Incidencias {
    color: white;
    border: 2px solid transparent;
    border-radius: 22px;
    padding: 10px 20px;
    font-size: 1.5rem;
    cursor: pointer;
    box-sizing: border-box;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
}

.levIncidencia {
    background-color: #4A8FC0;
}

.levIncidencia:hover {
    background-color: #D4D8DB;
    color: #4A8FC0;
    border: 2px solid #4A8FC0;
}

.Incidencias {
    background-color: #080E98;
}

.Incidencias:hover {
    background-color: #D4D8DB;
    color: #080E98;
    border: 2px solid #080E98;
}
</style>

<template>
    <div class="landingpage">
        <Header />

        <div class="landingcontent">
            <p>Bienvenido a la página de incidencias de Ecosat. Aquí podrás ver y gestionar todas las incidencias reportadas.</p>
        </div>

        <div class="landingdescription">
            <h2>Aquí puedes levantar una nueva incidencia o consultar las incidencias existentes.</h2>
            <p>
                Usa el botón "Reportar Incidencia" para completar un formulario con el
                título, la descripción y la prioridad del problema que deseas reportar.
                Usa el botón "Reporte de Incidencias" para ver el listado de incidencias
                registradas, filtrarlas por estado o prioridad, y dar seguimiento a su progreso.
            </p>
        </div>

        <div class="landingfooter">
            <button class="levIncidencia" @click="levantarIncidencia">
                Reportar Incidencia
            </button>
            <button class="Incidencias" @click="verIncidencias">
                Reporte de Incidencias
            </button>
        </div>

        <Footer />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const router = useRouter()

const levantarIncidencia = () => {
    router.push('/reportar')
}

const verIncidencias = () => {
    router.push('/incidencias')
}
</script>