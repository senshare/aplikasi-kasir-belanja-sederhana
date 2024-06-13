// Data to store items and their prices
let items = [];

// Function to add item to the cart
function addItem(name, price) {
  items.push({ name, price });
  updateCart();
}

// Function to update the cart UI
function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  let cartHTML = "";
  let total = 0;

  items.forEach((item) => {
    cartHTML += `<li>${item.name} - Rp ${item.price}</li>`;
    total += item.price;
  });

  cartItemsElement.innerHTML = cartHTML;
  totalElement.textContent = total;
}

// Function to handle checkout
function checkout() {
  alert("Total belanja: Rp " + document.getElementById("total").textContent);
  items = []; // Empty the cart after checkout
  updateCart(); // Update the cart UI
}

// Initial cart update (in case there are any initial items)
updateCart();
