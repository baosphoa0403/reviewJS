// const cong = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         return reject(new Error('tham số not a number at cong'));
//       }
//       resolve(a + b);
//     }, 5000);
//   });
// };

// const nhan = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         return reject(new Error('tham số not a number at cong'));
//       }
//       resolve(a * b);
//     }, 5000);
//   });
// };
// const chia = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         return reject(new Error('tham số not a number at cong'));
//       }
//       resolve(a / b);
//     }, 5000);
//   });
// };

// const tinhDienTich = (a, b, h) => {
//   return cong(a, b).then((res) => {
//     return nhan(res, h).then((data) => {
//       return chia(data, 2);
//     });
//   });
// };

// tinhDienTich(2, 3, 2).then((res) => {
//   console.log('diện tich hình thang ' + res);
// });

// function main() {
//   console.log('Hi!');
//   setTimeout(function timeout() {
//     console.log('There!');
//   }, 3000);
//   console.log('Welcome to loupe!');
// }
// main();

