// Store items in localStorage
function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: productName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}

window.onload = function () {
  const cartItemsDiv = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  if (cartItemsDiv && cartTotal) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsDiv.innerHTML = cart.map(item => `
      <div>
        <strong>${item.name}</strong>: $${item.price.toFixed(2)}
      </div>
    `).join('');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
  }
};
