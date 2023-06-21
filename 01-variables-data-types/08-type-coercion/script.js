let x;

x = 5 + '5';
// Returns 55 as a string because Js saw this as a string
console.log(x, typeof x);

a = 5 + Number('5');
// Returns 10 as a number because the string was converted and it added them
console.log(a, typeof a);

b = 5 * '5';
// Returns 25 as a number because I used the muliply operator, it doesn't make sense to multiply a number and string
// so JS made the decision to coerce or parse the string of '5' into a number
console.log(b, typeof b);

c = 5 + null;
// Returns 5, null was coerced into a 0
console.log(c, typeof c);

d = Number(null);
// Returns 0 it just converted null to the number 0
console.log(d, typeof d);

f = Number(true);
// Returns 1 because the boolean of true is always 1
console.log(f, typeof f);

g = Number(false);
// Returns 0 because the boolean of false is always 0
console.log(g, typeof g);

h = 5 + true;
// Returns 6 refer to line 25 for reason why
console.log(h, typeof h);

i = 5 + false;
// Returns 5 refer to line 29 for reason why
console.log(i, typeof i);

j = 5 + undefined;
// Returns NaN
console.log(j, typeof j);