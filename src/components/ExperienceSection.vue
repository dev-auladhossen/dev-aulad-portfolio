<script setup>
const jobs = [
  {
    date: "2022 — 2024",
    role: "Software Programmer",
    company: "Caction",
    location: "Selangor, Malaysia",
    responsibilities: "Developed and optimized responsive Vue.js components from Figma designs across Caction's product, improving user experience and load performance. Revamped legacy features, leading to 20% faster performance and reduced UI bugs, while collaborating closely with cross-functional teams — design, QA, and backend — to deliver product features on time. Researched and prepared datasets that supported feature improvements, and maintained daily communication with overseas teams to ensure smooth coordination.",
    tech: [
      "Vue.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "PrimeVue",
      "Pinia",
      "Figma",
      "Git",
      "Jira",
    ],
  },
  {
    date: "2022 — 2022",
    role: "Junior Software Programmer",
    company: "Caction",
    location: "Selangor, Malaysia",
    responsibilities: "Converted Figma designs into interactive Vue.js components and designed UI mockups, performing manual testing of new features throughout development. Worked closely with senior developers to refine UI/UX and resolve frontend issues, building a strong foundation in component-driven development and design collaboration.",
    tech: ["Vue.js", "PrimeVue", "Figma", "Git", "Chrome DevTools"],
  },
];
</script>

<template>
  <section id="experience" class="scroll-mt-24 my-16">
    <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 class="font-bold uppercase tracking-widest lg:sr-only text-sm sm:text-xl text-lightest-slate">
        Experience
      </h2>

    </div>
    <ol class="space-y-14">
      <li
        v-for="job in jobs"
        :key="job.company + job.date"
        class="group grid sm:grid-cols-[140px_1fr] gap-3 sm:gap-8"
      >
        <div class="font-mono text-xs uppercase tracking-wider text-slate pt-1">
          {{ job.date }}
        </div>
        <div>
          <h3 class="text-lightest-slate font-semibold md:text-lg leading-snug">
            {{ job.role }} · {{ job.company }}
          </h3>

          <p>
            <span class="mt-2 text-sm leading-relaxed text-slate max-w-lg">
            {{ job.responsibilities }}
          </span>
          </p>

          <ul class="mt-4 flex flex-wrap gap-2">
            <li v-for="t in job.tech" :key="t" class="tag-pill">{{ t }}</li>
          </ul>
        </div>
      </li>
    </ol>

    <div class="mt-12">
      <a
        href="/Resume_of_Aulad_Hossen.pdf"
        target="_blank"
        rel="noreferrer noopener"
        class="inline-link font-mono text-sm text-lightest-slate"
      >
        View Full Resume &nbsp;&rarr;
      </a>
    </div>
  </section>
</template>
