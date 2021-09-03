let a = 3;
a = 4;
console.log(a);
const cong = (num1, num2, callBack) => {
  setTimeout(() => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return callBack(new Error('parameter not number in function cộng'));
    }
    callBack(undefined, num1 + num2);
  }, 5000);
};
const nhan = (num1, num2, callBack) => {
  setTimeout(() => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return callBack(new Error('parameter not number in function cộng'));
    }
    callBack(undefined, num1 * num2);
  }, 5000);
};
const chia = (num1, num2, callBack) => {
  setTimeout(() => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return callBack(new Error('parameter not number in function cộng'));
    }
    callBack(undefined, num1 / num2);
  }, 5000);
};

const tinhDienTich = (a, b, h, callBack) => {
  cong(a, b, (err, result) => {
    if (err) return console.log(err);
    nhan(result, h, (err, result) => {
      if (err) {
        return console.log(err);
      }
      chia(result, 2, (err, result) => {
        if (err) {
          return console.log(err);
        }
        callBack(err, result);
      });
    });
  });
};
tinhDienTich('abc', 3, 2, (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log(result);
});
