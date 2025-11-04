/**
 * Tính tổng số lượng món trong giỏ
 * @param {Array} cart
 */
export const getCartCount = (cart) =>
  cart.reduce((sum, item) => sum + item.quantity, 0);

/**
 * Tính tổng tiền của giỏ hàng
 * @param {Array} cart
 */
export const getCartTotal = (cart) =>
  cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
