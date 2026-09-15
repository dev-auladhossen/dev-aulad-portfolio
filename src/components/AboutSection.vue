<script setup>
const skills = [
  "JavaScript (ES6+)",
  "Vue.js & Vue Router",
  "Node.js & Express",
  "Tailwind CSS",
  "MongoDB & MySQL",
  "PrimeVue & Pinia",
];
</script>

<template>
  <section id="about" class="scroll-mt-24 md:py-24 lg:py-20">
    <div
      class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2
        class="font-bold uppercase tracking-widest lg:sr-only text-sm sm:text-xl text-lightest-slate"
      >
        About Me
      </h2>
    </div>
    <div
      class="mb-16 scroll-mt-16 md:mb-6 lg:mb-6 lg:scroll-mt-24 font-sans md:py-16 lg:py-0"
    >
      <div class="text-slate leading-relaxed space-y-4">
        <p>
          Hi there! I'm Aulad, and I like building things end-to-end. I'm a
          full-stack engineer with expertise in crafting responsive,
          production-ready software & web applications, from pixel-accurate Vue.js
          interfaces to the Node.js APIs and databases that power them. I take
          pride in writing clean, maintainable code and have a sharp eye for the
          details that separate a good feature from a reliable one. I enjoy
          working most across the whole stack, where solid data models meet
          thoughtful, accessible interfaces.
        </p>
        <p>
          Currently, I'm a Software Programmer at
          <span class="text-lightest-slate font-medium">Caction</span>
          (formerly SalesConnection), where I build Vue.js components from Figma
          designs, modernize legacy features, improve performance, and
          collaborate with design, QA, backend, and international teams to
          deliver quality products.
        </p>
        <p>
          I hold an
          <span class="text-lightest-slate font-medium"
            >MSc in Computer Science</span
          >
          from Jahangirnagar University and a BSc in Computer Science and
          Engineering from IUBAT. Outside of work, I build side projects and
          continuously explore new technologies to strengthen my skills across
          the stack.
        </p>
        <p>Here are a few technologies I've been working with recently:</p>
        <ul class="grid grid-cols-2 gap-x-4 gap-y-2 pt-1 font-mono text-sm">
          <li
            v-for="skill in skills"
            :key="skill"
            class="flex items-center gap-2 text-slate"
          >
            <span class="text-teal">▹</span>{{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
