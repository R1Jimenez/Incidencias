<style scoped>
.incidencia {
    display: flex;
    flex-direction: column;
    gap: .75rem;

    box-sizing: border-box;
    width: 90%;
    height: 200px;
    padding: 1rem;
    background-color: #F0F0F0;
    border-radius: 22px;
    overflow: hidden;
    cursor: pointer;
    flex-shrink: 0;
}

.incidencia h2 {
    color: #080E98;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.incidencia .descripcion {
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}

.estado {
    margin-top: auto;
    font-weight: bold;
}

.incidencia.prioridad-baja {
    border: 2.5px solid #1ffd4b;
}

.incidencia.prioridad-media {
    border: 3px solid #f7d44a;
}

.incidencia.prioridad-alta {
    border: 2.5px solid #f54f4f;
}
</style>

<template>
    <div class="incidencia" :class="`prioridad-${prioridad}`" @click="emit('click')">
        <h2>{{ titulo }}</h2>
        <p class="descripcion">{{ descripcion }}</p>
        <p class="estado">Estado: {{ estado }}</p>
    </div>
</template>

<script setup>
defineProps({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    prioridad: { type: String, required: true },
    estado: { type: String, required: true },
})

const emit = defineEmits(['click'])
</script>