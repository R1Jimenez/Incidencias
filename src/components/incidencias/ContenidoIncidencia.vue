<style scoped>
.overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.modal {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: min(90%, 500px);
    max-height: 85vh;
    overflow-y: auto;
    background-color: #FFFFFF;
    border: 2px solid #4a8fc0;
    border-radius: 22px;
    padding: 1.5rem;
    box-sizing: border-box;
}

.modal h2 {
    color: #080E98;
}

.modal .descripcion {
    color: #252525;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
}

.modal .prioridad {
    font-weight: bold;
}

.modal .prioridad-baja {
    color: #2e7d32;
}

.modal .prioridad-media {
    color: #a67c00;
}

.modal .prioridad-alta {
    color: #c62828;
}

.estadorow {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.estadorow p {
    margin: 0;
    color: #080E98;
    font-weight: bold;
}

.estadoopciones {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
}

.estadoopciones label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #080E98;
}

.botonrow {
    display: flex;
    justify-content: end;
}

.cerrar {
    color: white;
    background-color: #080E98;
    border: 2px solid transparent;
    border-radius: 22px;
    padding: 5px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
}

.cerrar:hover {
    background-color: #F0F0F0;
    color: #080E98;
    border: 2px solid #080E98;
}
</style>

<template>
    <div class="overlay" @click.self="emit('close')">
        <div class="modal">
            <h2>{{ incidencia.titulo }}</h2>
            <p class="descripcion">{{ incidencia.descripcion }}</p>
            <p class="prioridad" :class="`prioridad-${incidencia.prioridad}`">
                Prioridad: {{ incidencia.prioridad }}
            </p>

            <div class="estadorow">
                <p>Estado:</p>
                <div class="estadoopciones">
                    <label>
                        <input type="radio" name="estado" value="En proceso" v-model="estadoSeleccionado">
                        En proceso
                    </label>
                    <label>
                        <input type="radio" name="estado" value="Resuelta" v-model="estadoSeleccionado">
                        Resuelta
                    </label>
                </div>
            </div>

            <div class="botonrow">
                <button class="cerrar" type="button" @click="emit('close')">Cerrar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useIncidencias } from '@/composables/useIncidencias'

const props = defineProps({
    incidencia: { type: Object, required: true },
})

const emit = defineEmits(['close'])

const { actualizarEstado } = useIncidencias()

const estadoSeleccionado = ref(null)

watch(estadoSeleccionado, (nuevoEstado) => {
    actualizarEstado(props.incidencia.id, nuevoEstado)
})
</script>
