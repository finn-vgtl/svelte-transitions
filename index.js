const EASING = require('svelte/easing')
const TRANSITIONS = require('svelte/transition')

function grow(node, { delay = 0, duration = 100, percentage = .1 }) {
  return {
    delay,
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