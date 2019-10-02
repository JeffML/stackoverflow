let ct = 0;
const MAX = 100_000

const recurse = () => {
  if (++ct > MAX) return
  recurse()
}

try {
  recurse()
} catch (e) {
  console.error({ ct, e })
}


