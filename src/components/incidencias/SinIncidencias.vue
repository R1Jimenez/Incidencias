<style scoped>
.sinincidencias {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    width: 90%;
    padding: 2.5rem 1.5rem;
    background-color: rgba(255, 255, 255, 0.9);
    border: 2px solid #4a8fc0;
    border-radius: 22px;
    text-align: center;
}

.sinincidencias .material-icons {
    font-size: 2.5rem;
    color: #4a8fc0;
}

.sinincidencias p {
    color: #080E98;
    font-size: 1.15rem;
    font-weight: bold;
}
</style>

<template>
    <div class="sinincidencias">
        <span class="material-icons">inbox</span>
        <p>{{ mensaje }}</p>
    </div>
</template>

<script setup>
defineProps({
    mensaje: { type: String, default: 'No se encontraron incidencias.' },
})
</script>
