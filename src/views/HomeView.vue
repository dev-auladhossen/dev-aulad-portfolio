<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import SideBar from "../components/SideBar.vue";
import AboutSection from "../components/AboutSection.vue";
import ExperienceSection from "../components/ExperienceSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import SiteFooter from "../components/SiteFooter.vue";
import ContactSection from '../components/ContactSection.vue';

const activeSection = ref("about");
const sectionIds = ["about", "experience", "projects", "contact"];
let observer = null;

function navigate(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  activeSection.value = id;
}

onMounted(() => {
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) {
        activeSection.value = visible[0].target.id;
      }
    },
    {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0.1, 0.25, 0.5, 0.75],
    },
  );

  sections.forEach((section) => observer.observe(section));
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <div class="relative z-10 mx-auto max-w-[1400px] lg:flex">
    <SideBar :active="activeSection" @navigate="navigate" />

    <main
      id="content"
      class="flex-1 px-6 sm:px-12 lg:pl-[min(400px,42vw)] lg:pr-24 xl:pr-24"
    >
      <div class="max-w-2xl lg:ml-auto lg:mr-0">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <SiteFooter />
      </div>
    </main>
  </div>
</template>
