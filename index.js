// ~~~~~~~~~ Truethy
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Infinity);
// console.log(Boolean(Infinity));
//~~~~~~~~ Falsy
// console.log('~~~~~~~~ falsy ~~~~~~~');
// console.log(Boolean(false));
// console.log(Boolean(null));
// console.log(Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(undefined));
// console.log(true || 'gia bảo');
// console.log(null ?? 'hieu');
// console.log(0 ?? 'hieu');
// console.log(0 || 'hieu');

// console.log('' ?? 'bao');
// console.log('' || 'bao');

// difference null - undefine - NaN
// console.log('null');
// console.log(typeof null);

// console.log(null === false); // because null is address of object can't compare
// console.log(null + 5); //  because null return 0 default

// console.log('undefined'); // it first value when you declare variable
// var a;
// console.log(a);
// console.log(typeof a);
// console.log(!a);
// console.log(a / 3);

// console.log(typeof NaN);
// console.log(isNaN(NaN + 6));
// console.log(isNaN(7));
// it

// difference let var const
// var a = 1;
// var a = 2;

// console.log(a); // declare variable again

// let b = 3; //  not declare variable again
// let b = 4;
// console.log(b);

// const c = 5; // constant not assign value again;
// c = 8;
// console.log(c);

// hoisting

// console.log(a); //
// var a = 1;

// console.log(b); // result:  Cannot access 'b' before initialization let catch hoisting
// let b = 3;
// scope
// ~~ function scope
// function abc() {
//   var a = 3;
// }
// console.log(a);
//  ~~ block scope

// if (true) {
//   var b = 4;
//   let c = 5;
// }
// console.log(b);
// console.log(c); imporve get value out of block scope

// rest params
// const sum = (...numbers) => {
//   return numbers.reduce((sum, item) => {
//     return (sum += item);
//   }, 0);
// };

// console.log(sum(1, 2, 3, 4, 5));

// spread operator

// console.log([1, 3, 5]);
// console.log(...[1, 3, 5]);
// console.log(...['bảo', 'sang', 'hiếu']);
// console.log([...'bảosanghiếu']);
// console.log([...'bao', ...'hieu']);
// // Sao chép một mảng
// const array = [1, 3, 4];
// const array1 = [2, 5, 8];
// const b = [...array1];
// const a = [...array, ...array1];
// console.log(a);
// Tách console.log(...[1, 3, 5]);
// hoặc kết hợp một hay nhiều mảng
// console.log(true && 'bảo');
// console.log(false && 'bảo');
// console.log({} || 'bảo');
// console.log(typeof num1 !== 'number');
// const thefirst = (callback) => {
//   setTimeout(() => {
//     console.log('run 1');
//     callback();
//   }, 5000);
// };

// const thesecond = () => {
//   console.log('run 2');
// };

// thefirst(thesecond);
// function callAPI() {
//   setTimeout(() => {
//     console.log('call API');
//   }, 5000);
// }
// const thefirst = async () => {
//   await callAPI();
//   //   console.log('after run api');
// };

// thefirst();
// console.log('haha');
const increase = () => {
  let x = 0;
  const increaseInner = () => ++x;
  return increaseInner;
};
const myFunc = increase();
console.log(increase()());
console.log(myFunc()); // 1
console.log(myFunc()); // 1
console.log(myFunc()); // 1
console.log(myFunc());
