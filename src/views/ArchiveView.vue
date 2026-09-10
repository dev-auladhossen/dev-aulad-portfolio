<script setup>
import { ArrowUpRight, ArrowLeft } from 'lucide-vue-next'
import { projects } from '../data/projects.js'

const sorted = [...projects].sort((a, b) => b.year - a.year)
</script>

<template>
  <div class="mx-auto max-w-5xl px-6 sm:px-12 py-16 sm:py-24">
    <router-link
      to="/"
      class="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all duration-200"
    >
      <ArrowLeft :size="18" />
      Aulad Hossen
    </router-link>

    <h1 class="mt-4 text-4xl sm:text-5xl font-extrabold text-lightest-slate">
      All Projects
    </h1>

    <div class="mt-14 overflow-x-auto">
      <table class="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr class="border-b border-navy-lightest">
            <th class="pb-4 pr-4 font-semibold text-lightest-slate w-20">Year</th>
            <th class="pb-4 pr-4 font-semibold text-lightest-slate">Project</th>
            <th class="pb-4 pr-4 font-semibold text-lightest-slate">Made at</th>
            <th class="pb-4 pr-4 font-semibold text-lightest-slate">Built with</th>
            <th class="pb-4 font-semibold text-lightest-slate">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="project in sorted"
            :key="project.title"
            class="border-b border-navy-lightest/60 hover:bg-navy-light transition-colors duration-200"
          >
            <td class="py-5 pr-4 align-top text-slate">{{ project.year }}</td>
            <td class="py-5 pr-4 align-top font-semibold text-lightest-slate">
              {{ project.title }}
            </td>
            <td class="py-5 pr-4 align-top text-slate">{{ project.madeAt }}</td>
            <td class="py-5 pr-4 align-top">
              <ul class="flex flex-wrap gap-2">
                <li v-for="t in project.tech" :key="t" class="tag-pill">{{ t }}</li>
              </ul>
            </td>
            <td class="py-5 align-top">
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noreferrer noopener"
                class="inline-flex items-center gap-1 text-slate hover:text-teal transition-colors"
              >
                {{ project.link.replace(/^https?:\/\//, '') }}
                <ArrowUpRight :size="14" />
              </a>
              <span v-else class="text-slate-dark">&mdash;</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
