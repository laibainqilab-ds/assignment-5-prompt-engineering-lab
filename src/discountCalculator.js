function calculateDiscount(price, discount) {
  return price - price * (discount / 100);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = calculateDiscount;
}
