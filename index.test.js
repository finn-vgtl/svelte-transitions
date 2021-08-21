const index = require('./index.js')

describe('default svelte transitions', () => {
  const FNS = [
    'blur',
    'crossfadeblur',
    'drawblur',
    'fadeblur',
    'flyblur',
    'scaleblur',
    'slidblur',
    'groblur'
  ]

  FNS.forEach(FN => {
    test(`exports ${FN}()`, () => {
      expect.anything(index[FN])
    })
  });
})
  
describe('custom transitions', () => {
  test('exports grow()', () => {
    expect.anything(index.grow)
  })
})