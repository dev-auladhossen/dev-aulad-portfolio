<script setup>
import { Sun, Moon } from "lucide-vue-next";
import { onMounted, ref } from "vue";

const isLight = ref(true);

function applyTheme(light) {
  document.documentElement.setAttribute("data-theme", light ? "light" : "dark");
}

function toggleTheme() {
  isLight.value = !isLight.value;
  applyTheme(isLight.value);
  localStorage.setItem("theme", isLight.value ? "light" : "dark");
}

onMounted(() => {
  const saved = localStorage.getItem("theme");
  isLight.value = saved === "light";
  applyTheme(isLight.value);
});
</script>

<template>
  <button
    type="button"
    role="switch"
    :aria-checked="isLight"
    aria-label="Toggle light and dark theme"
    class="fixed top-5 right-5 sm:top-8 sm:right-8 z-50 flex items-center gap-2 rounded-full border border-navy-lightest bg-navy-light/80 backdrop-blur px-2 py-1.5 shadow-lg"
    @click="toggleTheme"
  >
    <Sun :size="15" class="text-slate shrink-0" />
    <span
      class="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-300"
      :class="isLight ? 'bg-teal' : 'bg-slate-dark'"
    >
      <span
        class="inline-block h-3.5 w-3.5 transform rounded-full bg-navy shadow transition-transform duration-300"
        :class="isLight ? 'translate-x-[18px]' : 'translate-x-[3px]'"
      />
    </span>
    <Moon :size="15" class="text-slate shrink-0" />
  </button>
</template>
