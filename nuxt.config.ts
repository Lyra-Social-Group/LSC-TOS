// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  
  // Ensures static HTML generation for GitHub Pages hosting
  ssr: true,
  
  app: {
    head: {
      title: 'Lyra Social Group — Legal & Community Hub',
      meta: [
        { name: 'description', content: 'Official Legal Terms, Privacy Disclosures, and Governance Documentation for LSG.' },
        { name: 'theme-color', content: '#A033ED' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ]
    }
  },

  content: {
    highlight: {
      theme: 'one-dark-pro'
    }
  }
})