<style scoped>
.Header {
    position: relative;
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
    overflow: hidden;
}

.logo {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    height: 100%;
    padding: 0 1rem;
    background-color: white;
    border: 2px solid #4A8FC0;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
    cursor: pointer;
}

.logo img {
    height: 70%;
}
</style>

<template>
    <div class="Header">
        <div class="logo" @click="goToLandingPage">
            <img src="@/assets/EcosatN.png" alt="Ecosat">
        </div>
        <h1>{{ route.meta.titulo }}</h1>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goToLandingPage = () => {
    router.push('/')
}
</script>