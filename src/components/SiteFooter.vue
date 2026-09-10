<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="pb-12 pt-16 text-center lg:text-left">
    <p class="font-mono text-xs text-slate">
      Designed &amp; built by Aulad Hossen. Built with
      <span class="text-slate-light">Vue.js</span> and
      <span class="text-slate-light">Tailwind CSS</span>.
      &copy; {{ year }}
    </p>
  </footer>
</template>
