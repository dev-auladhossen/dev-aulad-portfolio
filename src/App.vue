<script setup>
import MouseGlow from './components/MouseGlow.vue'
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<template>
  <div class="relative min-h-screen bg-navy text-slate transition-colors duration-300">
    <MouseGlow />
    <ThemeToggle />
    <router-view />
  </div>
</template>
