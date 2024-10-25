/*  Nav Slider */

document.getElementById("bars").addEventListener("click", function () {
  const navSlider = document.getElementById("navSlider");
  // Toggle the slider's position
  if (navSlider.style.right === "0px") {
    navSlider.style.right = "-500px"; // Hide
  } else {
    navSlider.style.right = "0px"; // Show
  }
});



//*-- ADD TO CART

var additemid = 0;

function addtocart(item) {
  additemid += 1;

  // Create a div for the selected item
  var selecteditem = document.createElement('div');
  selecteditem.classList.add('cart-item');
  selecteditem.setAttribute('id', `item-${additemid}`); // Assign a unique ID

  // Create the product image
  var img = document.createElement('img');
  img.setAttribute('src', item.children[0].currentSrc);

  // Create the product title
  var title = document.createElement('h4');
  title.innerText = item.querySelector('.des h4').innerText;

  // Create the product price
  var price = document.createElement('p');
  price.innerText = item.querySelector('.price').innerText;

  // Create a delete button
  var deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';


  // Set the delete function with a closure to capture the correct ID
  (function (id) {
    deleteBtn.onclick = function () {
      del(id); // Pass the correct item ID
    };
  })(`item-${additemid}`); // Immediately invoke with the current ID





  // Append elements to the selected item div
  selecteditem.append(img, title, price, deleteBtn);

  // Append the selected item to the cart
  var cartitems = document.getElementById('title'); // Assuming 'title' is the cart container
  cartitems.appendChild(selecteditem);
}

// Delete function to remove the selected item
function del(itemId) {
  var item = document.getElementById(itemId); // Get the item by its ID
  if (item) {
    item.remove(); // Remove the item from the DOM
  }
}


function checkout(){
  window.alert("Choose payment Method")
}