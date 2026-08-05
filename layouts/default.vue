<template>
  <div class="app-wrapper">
    <!-- Header Navbar -->
    <header class="lsg-header">
      <NuxtLink to="/" class="lsg-brand">
        <img src="/logo.png" alt="Lyra Social Group Logo" class="lsg-logo" />
        <span class="brand-text">Lyra Social Group <span class="badge">Legal</span></span>
      </NuxtLink>
      
      <nav class="lsg-nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/tos/discord">Discord TOS</NuxtLink>
        <NuxtLink to="/privacy/privacy-policy">Privacy Policy</NuxtLink>
        <NuxtLink to="/community/guidelines">Guidelines</NuxtLink>
      </nav>
    </header>

    <!-- Main Container Card -->
    <main class="lsg-card">
      <slot />
    </main>
  </div>
</template>

<style>
/* CSS Variables based on LSG Logo */
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
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: var(--lsg-text);
  background: linear-gradient(135deg, #FF3EA5 0%, #A033ED 35%, #4C2BB7 70%, #1A0B40 100%) fixed;
  min-height: 100vh;
}

/* Header Styling */
.lsg-header {
  background: rgba(15, 7, 30, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--lsg-border);
  padding: 0.8rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}

.lsg-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--lsg-cyan);
  font-weight: 700;
  font-size: 1.25rem;
}

.lsg-logo {
  height: 42px;
  width: auto;
}

.badge {
  font-size: 0.75rem;
  background: var(--lsg-magenta);
  color: #fff;
  padding: 2px 8px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.lsg-nav {
  display: flex;
  gap: 20px;
}

.lsg-nav a {
  color: var(--lsg-text);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.lsg-nav a:hover, .lsg-nav a.router-link-active {
  color: var(--lsg-cyan);
  text-shadow: 0 0 10px rgba(69, 208, 255, 0.6);
}

/* Document Container Card */
.lsg-card {
  max-width: 960px;
  margin: 3rem auto;
  padding: 2.5rem;
  background: var(--lsg-card-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--lsg-border);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(158, 101, 255, 0.2);
}
</style>