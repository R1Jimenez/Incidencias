<style scoped>
.incidenciacontent {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: auto;
    background: #F0F0F0;
    border: 2px solid #4A8FC0;
    border-radius: 16px;
    padding: 1rem;
    gap: .5rem;
    box-sizing: border-box;
}

.incidenciacontent h3 {
    color: #080E98;
}

.incidenciacontent .descripcion {
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}

.incidenciacontent .meta {
    display: flex;
    gap: 1rem;
    font-size: .9rem;
    color: #4A8FC0;
    font-weight: bold;
}
</style>

<template>
    <div class="incidenciacontent">
        <h3>{{ titulo }}</h3>
        <p class="descripcion">{{ descripcion }}</p>
        <div class="meta">
            <span>Prioridad: {{ prioridad }}</span>
            <span>Estado: {{ estado }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    prioridad: { type: String, required: true },
    estado: { type: String, required: true },
})
</script>