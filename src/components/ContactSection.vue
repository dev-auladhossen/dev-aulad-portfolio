<script setup>
import { reactive, ref } from "vue";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-vue-next";

const form = reactive({
  name: "",
  email: "",
  budget: "",
  message: "",
});

const status = ref("idle"); // idle | submitting | success | error

const contactMethods = [
  {
    label: "Email",
    value: "auladhossen3021@gmail.com",
    href: "mailto:auladhossen3021@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aulad-hossen-himel/",
    href: "https://www.linkedin.com/in/aulad-hossen-himel",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/dev-auladhossen",
    href: "https://github.com/dev-auladhossen",
    icon: Github,
  },
];

const budgetRanges = [
  "< ৳20,000",
  "৳20,000 – ৳50,000",
  "৳50,000 – ৳1,00,000",
  "৳1,00,000+",
  "Not sure yet",
];

async function handleSubmit() {
  status.value = "submitting";
  try {
    const res = await fetch("https://formspree.io/f/xzebywjj", {
      // 👈 paste your real URL here
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        budget: form.budget,
        message: form.message,
      }),
    });

    if (!res.ok) throw new Error("Formspree request failed");

    status.value = "success";
    Object.assign(form, { name: "", email: "", budget: "", message: "" });
  } catch (e) {
    status.value = "error";
  }
}
</script>

<template>
  <section id="contact" class="scroll-mt-24 py-12 lg:py-6">
    <div
      class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2
        class="font-bold uppercase tracking-widest lg:sr-only text-sm sm:text-xl text-lightest-slate"
      >
        Contact
      </h2>
    </div>
    <div class="max-w-2xl text-center">
      <h2
        class="font-serif text-4xl sm:text-4xl leading-tight text-lightest-slate"
      >
        Let's build <span class="italic font-medium text-teal">something</span>
      </h2>
    </div>

    <!-- intro + contact methods -->
    <div class="grid lg:grid-cols-2 md:gap-12 items-start">
      <p class="md:my-6 mt-2 text-slate leading-relaxed">
        Have a project in mind? I'd love to hear about it. Whether you're a
        startup needing an MVP or a company looking to scale — let's talk.
      </p>
      <ul class="my-6 space-y-2">
        <li v-for="method in contactMethods" :key="method.label">
          <a
            :href="method.href"
            target="_blank"
            rel="noreferrer noopener"
            class="group flex items-center gap-6 rounded-lg transition-colors duration-300 hover:bg-navy-light"
          >
            <span
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-navy-lightest bg-navy-light text-teal transition-all duration-300 group-hover:border-teal group-hover:shadow-[0_0_0_3px_rgba(100,255,218,0.12)]"
            >
              <component :is="method.icon" :size="18" stroke-width="1.75" />
            </span>
            <span>
              <span
                class="block font-mono text-[11px] tracking-wider text-slate"
              >
                {{ method.value }}
              </span>
            </span>
          </a>
        </li>
      </ul>
    </div>

    <div class="">
      <!-- Right: form -->
      <form
        class="grid grid-cols-1 gap-6 md:grid-cols-2"
        @submit.prevent="handleSubmit"
      >
        <div>
          <label
            for="contact-name"
            class="mb-2 block font-mono text-[11px] uppercase tracking-wider text-slate"
          >
            Your Name
          </label>

          <input
            id="contact-name"
            v-model="form.name"
            type="text"
            required
            placeholder="What should I call you?"
            class="w-full rounded-md border border-navy-lightest bg-navy-light px-4 py-3 text-lightest-slate placeholder:text-slate-dark outline-none transition-all duration-200 focus:border-teal focus:shadow-[0_0_0_3px_rgba(100,255,218,0.15)]"
          />
        </div>

        <div>
          <label
            for="contact-email"
            class="mb-2 block font-mono text-[11px] uppercase tracking-wider text-slate"
          >
            Email Address
          </label>

          <input
            id="contact-email"
            v-model="form.email"
            type="email"
            required
            placeholder="your@company.com"
            class="w-full rounded-md border border-navy-lightest bg-navy-light px-4 py-3 text-lightest-slate placeholder:text-slate-dark outline-none transition-all duration-200 focus:border-teal focus:shadow-[0_0_0_3px_rgba(100,255,218,0.15)]"
          />
        </div>

        <div class="md:col-span-2">
          <label
            for="contact-budget"
            class="mb-2 block font-mono text-[11px] uppercase tracking-wider text-slate"
          >
            Budget Range
          </label>

          <select
            id="contact-budget"
            v-model="form.budget"
            class="w-full cursor-pointer rounded-md border border-navy-lightest bg-navy-light px-4 py-3 text-lightest-slate outline-none transition-all duration-200 focus:border-teal focus:shadow-[0_0_0_3px_rgba(100,255,218,0.15)]"
          >
            <option value="" disabled>Select a range…</option>

            <option v-for="range in budgetRanges" :key="range" :value="range">
              {{ range }}
            </option>
          </select>
        </div>

        <div class="md:col-span-2">
          <label
            for="contact-message"
            class="mb-2 block font-mono text-[11px] uppercase tracking-wider text-slate"
          >
            About Your Project
          </label>

          <textarea
            id="contact-message"
            v-model="form.message"
            rows="5"
            required
            placeholder="Describe what you're building, your timeline, and the ideal outcome…"
            class="w-full resize-y rounded-md border border-navy-lightest bg-navy-light px-4 py-3 text-lightest-slate placeholder:text-slate-dark outline-none transition-all duration-200 focus:border-teal focus:shadow-[0_0_0_3px_rgba(100,255,218,0.15)]"
          />
        </div>

        <div class="flex md:col-span-2 md:justify-end">
          <button
            type="submit"
            :disabled="status === 'submitting'"
            class="inline-flex w-full items-center justify-center gap-2 rounded-md bg-teal px-6 py-3.5 font-semibold text-navy transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_25px_-8px_rgba(100,255,218,0.5)] disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
          >
            {{ status === "submitting" ? "Sending…" : "Send Message" }}

            <ArrowRight :size="18" class="transition-transform duration-300" />
          </button>
        </div>

        <p
          v-if="status === 'success'"
          class="font-mono text-sm text-teal md:col-span-2"
        >
          Thanks — I'll get back to you soon.
        </p>

        <p
          v-if="status === 'error'"
          class="font-mono text-sm md:col-span-2"
          style="color: #ff6b6b"
        >
          Something went wrong. Try again, or email me directly.
        </p>
      </form>
    </div>
  </section>
</template>
