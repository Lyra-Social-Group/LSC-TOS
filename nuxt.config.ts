// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  
  // Enables SSR and edge-rendering on Cloudflare Pages
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
    // Enable code syntax highlighting for code blocks in Markdown
    highlight: {
      theme: 'one-dark-pro'
    },
    // Document-driven configuration disabled in favor of custom router
    documentDriven: false
  },

  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      // Prevents broken links or missing content queries from blowing up the deployment
      failOnError: false,
      // Exclude legacy/orphan routes that no longer have valid Markdown files
      ignore: [
        '/old-tos/holy-moly-bot-tos',
        '/tos'
      ],
      routes: [
        '/',
        '/tos/discord',
        '/tos/bot',
        '/tos/contributors',
        '/privacy/privacy-policy',
        '/privacy/data-retention',
        '/community/guidelines',
        '/community/moderation',
        '/community/appeals',
        '/community/creators',
        '/community/events',
        '/community/verification',
        '/governance/staff-code-of-conduct',
        '/hosted-services/beammp'
      ]
    }
  }
})