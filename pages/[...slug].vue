<script setup>
const route = useRoute()

// 1. Cleanly parse path segments from route params
const slugArray = Array.isArray(route.params.slug) 
  ? route.params.slug 
  : (route.params.slug ? [route.params.slug] : [])

const cleanSlug = slugArray.filter(Boolean).join('/')
const pathWithSlash = '/' + cleanSlug
const pathNoSlash = cleanSlug || 'index'

// 2. Fetch document matching Nuxt Content indexing variants
const { data: page } = await useAsyncData(`content-${pathWithSlash}`, async () => {
  // Query 1: Leading slash (e.g., '/old-tos/lch-tos')
  let doc = await queryContent().where({ _path: pathWithSlash }).findOne().catch(() => null)
  if (doc) return doc

  // Query 2: Standard route lookup shorthand
  doc = await queryContent(pathWithSlash).findOne().catch(() => null)
  if (doc) return doc

  // Query 3: Without leading slash (e.g., 'old-tos/lch-tos')
  doc = await queryContent().where({ _path: pathNoSlash }).findOne().catch(() => null)
  if (doc) return doc

  // Query 4: Folder index fallback (e.g., '/old-tos/index')
  return await queryContent().where({ _path: pathWithSlash + '/index' }).findOne().catch(() => null)
})

// 3. Dynamically update Page Title & Description using getter functions for reactivity
useHead({
  title: () => page.value?.title || 'Document Not Found',
  meta: [
    { 
      name: 'description', 
      content: () => page.value?.description || 'Lyra Social Group Legal Portal Document' 
    }
  ]
})
</script>

<template>
  <article class="markdown-body">
    <!-- Render document if found -->
    <ContentRenderer v-if="page" :value="page" />
    
    <!-- Custom Glassmorphic 404 Fallback -->
    <div v-else class="not-found-card">
      <h1>404 — Document Not Found</h1>
      <p>The requested legal document or archived spec does not exist at <code>{{ route.path }}</code>.</p>
      <NuxtLink to="/">Return to Main Portal</NuxtLink>
    </div>
  </article>
</template>

<style>
/* Markdown Content Typography */
.markdown-body h1 {
  background: linear-gradient(90deg, var(--lsg-cyan), var(--lsg-violet));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.2rem;
  font-weight: 700;
  border-bottom: 2px solid var(--lsg-border);
  padding-bottom: 0.5rem;
  margin-top: 0;
}

.markdown-body h2, 
.markdown-body h3 {
  color: #FFFFFF;
  border-bottom: 1px solid var(--lsg-border);
  padding-bottom: 0.3rem;
  margin-top: 1.8rem;
}

.markdown-body a {
  color: var(--lsg-cyan);
  text-decoration: none;
}

.markdown-body a:hover {
  color: var(--lsg-pink);
  text-shadow: 0 0 8px rgba(252, 225, 236, 0.8);
}

.markdown-body blockquote {
  border-left: 4px solid var(--lsg-magenta);
  background: rgba(255, 62, 165, 0.08);
  margin: 1.5rem 0;
  padding: 0.8rem 1.2rem;
  border-radius: 0 8px 8px 0;
}

.markdown-body code {
  background: rgba(8, 4, 17, 0.85);
  border: 1px solid var(--lsg-border);
  border-radius: 6px;
  padding: 0.2rem 0.4rem;
  color: var(--lsg-pink);
}

.markdown-body pre code {
  display: block;
  padding: 1rem;
  overflow-x: auto;
}

/* 404 Fallback Styling */
.not-found-card {
  text-align: center;
  padding: 3rem 1rem;
}

.not-found-card h1 {
  margin-bottom: 1rem;
}

.not-found-card p {
  color: var(--lsg-text);
  margin-bottom: 1.5rem;
}

.not-found-card a {
  display: inline-block;
  background: rgba(158, 101, 255, 0.2);
  border: 1px solid var(--lsg-border);
  color: var(--lsg-cyan);
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.not-found-card a:hover {
  background: rgba(158, 101, 255, 0.4);
  color: #FFFFFF;
  box-shadow: 0 0 12px rgba(69, 208, 255, 0.4);
}
</style>