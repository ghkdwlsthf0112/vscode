console.log(10 + 1);
console.log(10 - 1);
console.log(10 * 3);
console.log(10 / 4);
console.log(parseInt(10 / 4)); // 몫만 구하고 싶다면 parseInt()f를 해야한다
console.log(255 % 10);

let a = 20;
let b = 17;

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

let c =1;
let d = '1';
let e = 1;

// 두개 짜리 비교연산자는 1과 '1'을 같은 것으로 여긴다
console.log('1 == \'1\':', c == d);
console.log('1 != \'1\':', c != d);
console.log('1 == \'1\':', c == e);
console.log('1 != \'1\':', c != e);

// 세개짜리 비교연산자는 1과 '1'을 다른 것으로 여긴다
console.log('1 == \'1\':', c === d);
console.log('1 !== \'1\':', c !== d);
console.log('1 === 1:', c === e);
console.log('1 !== 1:', c !== e);