let ct = 0;
const MAX = 100_000

const A = () => {
  fp = B;
}

const B = () => {
  fp = A;
}

let fp = B;

const then = process.hrtime.bigint();

for (; ;) {

  if (++ct > MAX) {
    const now = process.hrtime.bigint();
    const nanos = now - then;

    const runtime = Number(nanos) / 1_000_000_000
    ct--
    console.log({ ct, runtime });
    break;
  }
  fp()
  continue;
}


