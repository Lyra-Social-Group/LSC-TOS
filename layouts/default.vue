<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} — Lyra Social Group Legal` : 'Lyra Social Group Legal Portal'
  },
  meta: [
    { name: 'theme-color', content: '#120924' },
    { name: 'description', content: 'Official legal documentation, terms of service, and privacy policies for Lyra Social Group.' }
  ]
})
</script>

<template>
  <div class="app-wrapper">
    <!-- Header component auto-imported from components/Header.vue -->
    <Header />

    <!-- Main Container Card -->
    <main class="lsg-card-wrapper">
      <div class="lsg-card">
        <slot />
      </div>
    </main>
  </div>
</template>

<style>
/* CSS Variables based on LSG Branding */
:root {
  --lsg-cyan: #45D0FF;
  --lsg-violet: #9E65FF;
  --lsg-pink: #FCE1EC;
  --lsg-magenta: #FF3EA5;
  --lsg-card-bg: rgba(18, 9, 36, 0.82);
  --lsg-border: rgba(158, 101, 255, 0.35);
  --lsg-text: #E6E1FA;
}

/* Global Reset & Gradient Background */
html, body, #__nuxt {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: var(--lsg-text);
  background: linear-gradient(135deg, #FF3EA5 0%, #A033ED 35%, #4C2BB7 70%, #1A0B40 100%) fixed;
  -webkit-font-smoothing: antialiased;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.lsg-card-wrapper {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
}

/* Document Container Card */
.lsg-card {
  width: 100%;
  max-width: 960px;
  margin: 3rem 1.5rem;
  padding: 2.5rem;
  background: var(--lsg-card-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--lsg-border);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(158, 101, 255, 0.2);
  box-sizing: border-box;
}

/* Responsive Scaling */
@media (max-width: 768px) {
  .lsg-card {
    margin: 1.5rem 1rem;
    padding: 1.5rem;
  }
}
</style>