import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * GitHub Pages em `https://<user>.github.io/<repo>/` precisa de `base` = `/<repo>/`.
 * No GitHub Actions, `GITHUB_REPOSITORY` vem definido (owner/repo).
 * Repositório `*.github.io` (site de utilizador) usa raiz `/`.
 */
function githubPagesBase(): string {
  const full = process.env.GITHUB_REPOSITORY
  if (!full) return '/'
  const name = full.split('/')[1]
  if (!name) return '/'
  if (name.endsWith('.github.io')) return '/'
  return `/${name}/`
}

export default defineConfig({
  base: githubPagesBase(),
  plugins: [react(), tailwindcss()],
})
