// cart.js
let cart = JSON.parse(localStorage.getItem('cart')) || [
    {
      productId: 1,
      quantity: 2
    },
    {
      productId: 11,
      quantity: 1
    }
  ];


function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
  let quantity = parseInt(document.getElementById(`quantity-${productId}`).value);
  let matchItem;
  cart.forEach(item => {
    if (productId === item.productId) {
      matchItem = item;
    }
  });
  if (matchItem) {
    matchItem.quantity +=quantity ;
  } else {
    cart.push({ productId, quantity});
  }
  saveToStorage();
}

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach(item => {
    cartQuantity += item.quantity;
  });
  return cartQuantity;
}

function removeCartItem(productId) {
    cart = cart.filter(item => item.productId !== productId);
    saveToStorage();
}


