<template>
  <article class="markdown-body">
    <ContentDoc />
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

.markdown-body h2, .markdown-body h3 {
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
</style>