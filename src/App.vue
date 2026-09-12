<script setup></script>

<template>
  <RouterView />
</template>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
}

#app {
  position: relative;
  isolation: isolate;

  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
}

#app::before {
  content: "";
  position: fixed;
  inset: -20px;

  background-image: url('./assets/ecosatlogo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  filter: blur(7px);
  opacity: 0.35;

  z-index: 0;
  pointer-events: none;
}

#app > * {
  position: relative;
  z-index: 1;
}
</style>