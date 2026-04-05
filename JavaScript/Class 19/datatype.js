const a = 123456;
console.log(a);

const b = 123456n;
console.log(b);
console.log(typeof b);

const c = BigInt(1234567891023456789);
console.log(c);
console.log(typeof c);
console.log(c + b);

let d = c;
console.log(d);
console.log(typeof d);