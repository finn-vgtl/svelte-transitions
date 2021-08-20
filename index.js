import { circOut } from 'svelte/easing'

export function grow(node, { duration = 100 }) {
  return {
    duration,
    css: (t) => {
      const EASED = circOut(t)

      return `
        transform: scale(${0.9 + 0.1 * EASED});
        opacity: ${EASED};
      `
    }
  }
}