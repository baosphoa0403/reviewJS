// higher order function
// const tinhTong = (a) => (b) => a + b;
// const callSum = (a) => (b) => {
//   return a + b;
// };
// console.log(callSum(1)(10));
// const ketQua = [1, 3, 4, 5].map((item) => item * item);
// console.log(ketQua);
// // closure
// const increase = () => {
//   let x = 0;
//   const increaseInner = () => ++x;
//   return increaseInner;
// };
// const myFunc = increase();
// // console.log(increase()());
// console.log(myFunc());
// console.log(myFunc());
// console.log(myFunc());
// console.log(myFunc());

// const callSum1 = () => {
//   let a = 3;
//   let b = 4;
//   const sum = () => ++a + ++b;
//   return sum;
// };
// console.log(callSum1()());

const findNumber1 = () => {
  const result = [];
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 1) {
      result.push(i);
    }
  }
  return result;
};
const findNumber1 = () => {
  const result = [];
  for (let i = 0; i < 10; i++) {
    if (i % 2 !== 1) {
      result.push(i);
    }
  }
  return result;
};
const findNumber1 = () => {
  const result = [];
  for (let i = 0; i < 10; i++) {
    if (i % 3 === 0) {
      result.push(i);
    }
  }
  return result;
};

// const findNumber = (num, callBack) => {
//   const result = [];
//   for (let i = 0; i <= num; i++) {
//     // console.log(callBack);
//     if (callBack(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// };

// const arr = findNumber(4, (number) => number % 2 === 1);
// const arr1 = findNumber(4, (number) => number % 2 === 0);
// console.log(arr);
// console.log(arr1);
const findNumber = (num) => (callBack) => {
  const result = [];
  for (let i = 0; i <= num; i++) {
    // console.log(callBack);
    if (callBack(i)) {
      result.push(i);
    }
  }
  return result;
};

const arr = findNumber(4)((number) => number % 2 === 1);
const arr1 = findNumber(4)((number) => number % 2 === 0);
console.log(arr);
console.log(arr1);
