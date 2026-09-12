<style scoped>
.Incidenciacontent {
    display: flex;
    flex-direction: column;
    width: 95%;
    height: auto;
    background-color: rgba(255, 255, 255, 0.9);
    border: 2px solid #4a8fc0;
    border-radius: 22px;
    padding: 1rem;
    gap: .5rem;
}

.Incidenciacontent p {
    margin-left: 3rem;
    color: #080E98;
    font-size: 1.25rem;
    font-weight: bold;
}

.input {
    width: 100%;
    padding: 5px 1rem;
    border: 2px solid #4a8fc0;
    border-radius: 25px;
    font-size: 1rem;
    transition: all 0.2s;
    background: radial-gradient(
        ellipse at bottom,
        #F0F0F0 50%,
        #BCBCBC 150%
    );
    color: #130348;
    padding: 0.5rem 2rem;
}

textarea.input {
    resize: none;
    overflow: hidden;
    border-radius: 22px;
}

.prioridadrow {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;
    gap: 1rem;
}

.prioridadrow label{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
}

.prioridadrow text {
    color: #080E98;
    font-size: 1.25rem;
    font-weight: bold;
}

.botonrow {
    display: flex;
    justify-content: end;
    margin-top: 1rem;
    padding-right: 1.5rem;
    gap: 1rem;
}

.Registrar,
.limpiar {
    color: white;
    border: 2px solid transparent;
    border-radius: 22px;
    padding: 2px 10px;
    font-size: 1.25rem;
    cursor: pointer;
    box-sizing: border-box;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
}

.limpiar {
    background-color: #4a8fc0;
}

.limpiar:hover {
    background-color: #F0F0F0;
    color: #4a8fc0;
    border: 2px solid #4a8fc0;
}

.Registrar {
    background-color: #080E98;
}

.Registrar:hover {
    background-color: #F0F0F0;
    color: #080E98;
    border: 2px solid #080E98;
}

.overlayerror {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.modalerror {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: min(90%, 400px);
    background-color: #FFFFFF;
    border: 2px solid #FB1C2E;
    border-radius: 22px;
    padding: 1.5rem;
    text-align: center;
}

.modalerror h3 {
    color: #FB1C2E;
    font-size: 1.5rem;
}

.modalerror p {
    margin: 0;
    color: #252525;
    font-size: 1rem;
    font-weight: normal;
}

.modalerror button {
    color: white;
    background-color: #080E98;
    border: 2px solid transparent;
    border-radius: 22px;
    padding: 5px 20px;
    font-size: 1rem;
    cursor: pointer;
}

.modalerror button:hover {
    background-color: #F0F0F0;
    color: #080E98;
    border: 2px solid #080E98;
}
</style>

<template>
    <div class="Incidenciacontent">
            <p>Título de la incidencia:</p>
            <input class="input" type="text" id="titulo" name="titulo" v-model="titulo" required>

            <p for="descripcion">Descripción:</p>
            <textarea
                class="input"
                id="descripcion"
                name="descripcion"
                rows="3"
                v-model="descripcion"
                required
                @input="autoGrow"
            ></textarea>

            <div class="prioridadrow">
                <label>
                    <input type="radio" name="prioridad" value="baja" v-model="prioridad" required>
                    <text>Baja</text>
                </label>
                <label>
                    <input type="radio" name="prioridad" value="media" v-model="prioridad" required>
                    <text>Media</text>
                </label>
                <label>
                    <input type="radio" name="prioridad" value="alta" v-model="prioridad" required>
                    <text>Alta</text>
                </label>
            </div>

            <div class="botonrow">
                <button class="limpiar" type="button" @click="limpiar">limpiar</button>
                <button class="Registrar" type="button" @click="registrar">Registrar incidencia</button>
            </div>
        </div>

    <div v-if="mostrarError" class="overlayerror" @click.self="mostrarError = false">
        <div class="modalerror">
            <h3>Faltan datos</h3>
            <p>Completa el título, la descripción y selecciona una prioridad antes de registrar la incidencia.</p>
            <button type="button" @click="mostrarError = false">Entendido</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useIncidencias } from '@/composables/useIncidencias'

const { registrarIncidencia } = useIncidencias()

const titulo = ref('')
const descripcion = ref('')
const prioridad = ref('')
const mostrarError = ref(false)

function autoGrow(event) {
    const textarea = event.target
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
}

function limpiar() {
    titulo.value = ''
    descripcion.value = ''
    prioridad.value = ''
}

function registrar() {
    if (!titulo.value.trim() || !descripcion.value.trim() || !prioridad.value) {
        mostrarError.value = true
        return
    }

    registrarIncidencia({
        titulo: titulo.value.trim(),
        descripcion: descripcion.value.trim(),
        prioridad: prioridad.value,
    })

    limpiar()
}
</script>