<script setup>
import { Github, Linkedin, Mail } from "lucide-vue-next";

defineProps({
  active: { type: String, default: "about" },
});

const emit = defineEmits(["navigate"]);

const navItems = [
  { id: "about", label: "About", number: "01" },
  { id: "experience", label: "Experience", number: "02" },
  { id: "projects", label: "Projects", number: "03" },
  { id: "contact", label: "Contact", number: "04" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/dev-auladhossen", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aulad-hossen-himel/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:auladhossen3021@gmail.com", icon: Mail },
];

function onNavClick(id) {
  emit("navigate", id);
}
</script>

<template>
  <header
    class="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-48% flex flex-col justify-between px-6 pt-12 sm:px-12 lg:px-12 lg:py-24"
  >
    <div>
      <h1 class="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
        <a
          href="#about"
          class="hover:text-teal transition-colors"
          @click.prevent="onNavClick('about')"
        >
          Aulad Hossen
        </a>
      </h1>
      <h2 class="mt-3 text-lg sm:text-xl font-semibold text-lightest-slate">
        Full-Stack Engineer
      </h2>
      <p class="mt-4 max-w-xs text-slate leading-relaxed">
        I build production-grade systems,&nbsp;crafting
        pixel-perfect experiences for the software & web.

        
      </p>

      <nav class="mt-12 hidden lg:block" aria-label="In-page">
        <ul class="space-y-5">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="group flex items-center gap-4"
              @click.prevent="onNavClick(item.id)"
            >
              <span
                class="h-px bg-slate-dark transition-all duration-200 ease-out"
                :class="
                  active === item.id
                    ? 'w-20 bg-teal'
                    : 'w-8 group-hover:w-20 group-hover:bg-lightest-slate'
                "
              />
              <span
                class="font-mono text-xs tracking-widest uppercase transition-colors duration-200"
                :class="
                  active === item.id
                    ? 'text-lightest-slate font-medium'
                    : 'text-slate group-hover:text-lightest-slate'
                "
              >
                {{ item.label }}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <ul class="my-6 md:mt-24 lg:mt-12 flex items-center gap-5">
      <li v-for="social in socials" :key="social.label">
        <a
          :href="social.href"
          :aria-label="social.label"
          target="_blank"
          rel="noreferrer noopener"
          class="text-slate hover:text-teal hover:-translate-y-1 transition-all duration-200 inline-block"
        >
          <component :is="social.icon" :size="20" stroke-width="1.75" />
        </a>
      </li>
    </ul>
  </header>
</template>
