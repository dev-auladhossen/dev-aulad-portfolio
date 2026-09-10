<script setup>
import { ArrowUpRight } from "lucide-vue-next";
import { projects } from "../data/projects.js";

const openProject = (link) => {
  if (link) window.open(link, "_blank");
};
</script>

<template>
  <section id="projects" class="scroll-mt-24 my-24">
    <div
      class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2
        class="font-bold uppercase tracking-widest lg:sr-only text-sm sm:text-xl text-lightest-slate"
      >
        Projects
      </h2>
    </div>
    <ul class="space-y-2">
      <li
        @click="openProject(project.link)"
        v-for="project in projects"
        :key="project.title"
        class="cursor-pointer group relative -mx-4 sm:-mx-6 rounded-md p-4 sm:p-6 grid sm:grid-cols-[220px_1fr] gap-6 items-start transition-all duration-300 ease-out hover:bg-navy-light hover:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]"
      >
        <div
          class="aspect-video rounded-md border border-navy-lightest overflow-hidden relative flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5"
          :style="
            !project.thumbnail
              ? {
                  background: `linear-gradient(155deg, ${project.accent}1a, #0a192f 70%)`,
                }
              : {}
          "
        >
          <!-- Real thumbnail, if provided -->
          <template v-if="project.thumbnail">
            <img
              :src="project.thumbnail"
              :alt="`${project.title} screenshot`"
              class="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <!-- subtle darken so the fake browser dots stay legible on bright screenshots -->
            <div
              class="absolute inset-0 bg-gradient-to-b from-navy/70 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300"
            />
          </template>

          <!-- Fallback placeholder (no thumbnail yet) -->
          <template v-else>
            <span
              class="font-mono text-xs tracking-wide"
              :style="{ color: project.accent }"
            >
              &lt;/&gt;
            </span>
          </template>

          <div class="absolute top-3 left-3 flex gap-1.5 z-10">
            <span class="w-2 h-2 rounded-full bg-slate-dark" />
            <span class="w-2 h-2 rounded-full bg-slate-dark" />
            <span class="w-2 h-2 rounded-full bg-slate-dark" />
          </div>
        </div>

        <div>
          <h3
            class="inline-flex items-center gap-1.5 text-lightest-slate font-semibold md:text-lg transition-colors group-hover:text-teal"
          >
            {{ project.title }}
            <ArrowUpRight
              :size="16"
              class="-translate-x-1 transition-all duration-200 group-hover:translate-x-0"
            />
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-slate max-w-lg">
            {{ project.description }}
          </p>
          <ul class="mt-3 flex flex-wrap gap-2">
            <li v-for="t in project.tech" :key="t" class="tag-pill">{{ t }}</li>
          </ul>
        </div>
      </li>
    </ul>

    <div class="mt-10">
      <router-link
        to="/archive"
        class="inline-link font-mono text-sm text-lightest-slate"
      >
        View Full Project Archive &nbsp;&rarr;
      </router-link>
    </div>
  </section>
</template>
