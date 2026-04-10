import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll behavior:
 * - If URL has a hash (/#secao), scrolls to that element.
 * - Otherwise scrolls to top when pathname changes.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace(/^#/, ''))
      const el = id ? document.getElementById(id) : null
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}

