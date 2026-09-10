<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const x = ref(50);
const y = ref(50);
const visible = ref(false);
let raf = null;

function handleMove(e) {
  if (raf) cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    x.value = e.clientX;
    y.value = e.clientY;
    visible.value = true;
  });
}

function handleLeave() {
  visible.value = false;
}

onMounted(() => {
  window.addEventListener("mousemove", handleMove, { passive: true });
  window.addEventListener("mouseout", handleLeave);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMove);
  window.removeEventListener("mouseout", handleLeave);
  if (raf) cancelAnimationFrame(raf);
});
</script>

<template>
  <div
    class="mouse-glow pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
    :class="visible ? 'opacity-100' : 'opacity-0'"
    :style="{
      background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    }"
    aria-hidden="true"
  />
</template>
