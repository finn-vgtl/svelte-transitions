const EASING = require('svelte/easing')
const TRANSITIONS = require('svelte/transition')

function grow(node, { duration = 100, percentage = .1 }) {
  return {
    duration,
    css: (t) => {
      const EASE = EASING.circOut(t)

      return `
        transform: scale(${(1 - percentage) + (percentage * EASE)});
        opacity: ${EASE};
      `
    }
  }
}

module.exports = {
  ...TRANSITIONS,
  grow
}