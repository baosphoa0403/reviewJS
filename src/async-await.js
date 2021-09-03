const cong = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return reject(new Error('tham số not a number at cong'));
      }
      resolve(a + b);
    }, 5000);
  });
};

const nhan = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return reject(new Error('tham số not a number at cong'));
      }
      resolve(a * b);
    }, 5000);
  });
};
const chia = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return reject(new Error('tham số not a number at cong'));
      }
      resolve(a / b);
    }, 5000);
  });
};
const tinhDienTich = async (a, b, h) => {
  const ab = await cong(a, b);
  const abh = await nhan(ab, h);
  const abh2 = await chia(abh, 2);
  console.log('diện tích  hình ' + abh2);
};
