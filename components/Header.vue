<script setup>
const route = useRoute()
</script>

<template>
  <header class="lsg-header">
    <NuxtLink to="/" class="lsg-brand">
      <img src="/logo.png" alt="Lyra Social Group Logo" class="lsg-logo" />
      <span class="brand-text">Lyra Social Group <span class="badge">Legal</span></span>
    </NuxtLink>
    
    <nav class="lsg-nav">
      <NuxtLink to="/">Home</NuxtLink>

      <!-- Terms of Service -->
      <NuxtLink to="/tos">TOS</NuxtLink>

      <!-- Privacy Dropdown -->
      <div class="nav-dropdown">
        <span class="dropdown-trigger" :class="{ 'is-active': route.path.startsWith('/privacy') }">
          Privacy ▾
        </span>
        <div class="dropdown-menu">
          <NuxtLink to="/privacy/privacy-policy">Privacy Policy</NuxtLink>
          <NuxtLink to="/privacy/data-retention">Data Retention Policy</NuxtLink>
        </div>
      </div>

      <!-- Community Dropdown -->
      <div class="nav-dropdown">
        <span class="dropdown-trigger" :class="{ 'is-active': route.path.startsWith('/community') }">
          Community ▾
        </span>
        <div class="dropdown-menu">
          <NuxtLink to="/community/guidelines">Community Guidelines</NuxtLink>
          <NuxtLink to="/community/moderation">Moderation Policy</NuxtLink>
          <NuxtLink to="/community/appeals">Appeals Process</NuxtLink>
          <NuxtLink to="/community/creators">Creators Policy</NuxtLink>
          <NuxtLink to="/community/events">Events Rules</NuxtLink>
          <NuxtLink to="/community/verification">Verification Policy</NuxtLink>
        </div>
      </div>

      <!-- Governance Link -->
      <NuxtLink to="/governance/staff-code-of-conduct">Staff Conduct</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
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
  align-items: center;
  gap: 20px;
}

.lsg-nav a, 
.dropdown-trigger {
  color: var(--lsg-text);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
}

.lsg-nav a:hover, 
.lsg-nav a.router-link-active, 
.dropdown-trigger:hover,
.dropdown-trigger.is-active {
  color: var(--lsg-cyan);
  text-shadow: 0 0 10px rgba(69, 208, 255, 0.6);
}

/* Dropdown Menu Styling */
.nav-dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background: rgba(18, 9, 36, 0.95);
  backdrop-filter: blur(16px);
  border: 1px solid var(--lsg-border);
  border-radius: 10px;
  padding: 8px 0;
  min-width: 210px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.nav-dropdown:hover .dropdown-menu {
  display: flex;
  flex-direction: column;
}

.dropdown-menu a {
  padding: 8px 16px;
  white-space: nowrap;
}

.dropdown-menu a:hover {
  background: rgba(158, 101, 255, 0.15);
}

@media (max-width: 768px) {
  .lsg-header {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .lsg-nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
}
</style>