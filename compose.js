
const compose = (...funcs) => {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

const f = x => 2 * x + 3
const g = x => x ^ 2
const h = compose(g, f)
h(2) // 49