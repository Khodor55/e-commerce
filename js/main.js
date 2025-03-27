let fa_angle_down = document.querySelector('.fa-angle-down');
let category_nav_list = document.querySelector(".category_nav_list");
let category_nav_list___true = false;

function categoryNavList() {
  if (category_nav_list___true) {
    category_nav_list.style.height = "0";
    category_nav_list___true = false;
   fa_angle_down.classList.replace("fa-angle-up", "fa-angle-down");
  } else {
    category_nav_list.style.height ='auto'
    category_nav_list___true = true;
     fa_angle_down.classList.replace("fa-angle-down", "fa-angle-up");
  }
}
var cart = document.querySelector(".cart");
function open_close_Cart(){
    cart.classList.toggle('active');

}
// nav open
let nav_link= document.querySelector('.nav_link');
function openCloseMenu(){
    nav_link.classList.toggle('active');
}
fetch('products.json')
.then(response => response.json())
.then(data =>{
const addToCartBTN = document.querySelectorAll('.btn_add_cart');
addToCartBTN.forEach(button =>{
    button.addEventListener('click',(event) =>{
        const productId = Number(event.target.getAttribute('data-id'));
const selectedProduct = data.find(product => product.id === productId);

        addToCart(selectedProduct)
        const allMarchingButton = document.querySelectorAll(`.btn_add_cart[data-id = '${productId}']`)
        allMarchingButton.forEach(btn =>{
            btn.classList.add('active');
            btn.innerHTML = 'item in cart';
        })
    })
})
})
function addToCart(product){
    console.log(product)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({
        ...product,
        quantity: 1
    })
    localStorage.setItem('cart',JSON.stringify(cart))
    updateCart()
}
function updateCart(){
const cartItemsContainer = document.getElementById('cart_items');
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let checkout_items = document.getElementById('checkout_items');
if(checkout_items){
    checkout_items.innerHTML = ''
}

var totale_price = 0;
var total_count = 0;
cartItemsContainer.innerHTML ='';
cart.forEach((item,index)=>{
  let total_price_item = item.price * item.quantity;
  totale_price += total_price_item;
  total_count += item.quantity;
    cartItemsContainer.innerHTML +=`
        <div class="item_cart">
        <img src="${item.img}" alt="">
        <div class="content">
          <h4>
          ${item.name}

          </h4>
          <p class="price_cart">${total_price_item}</p>
          <div class="quantity_control">
            <button class="decrease_quantity" data-index='${index}'>-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="increase_quantity" data-index='${index}'>+</button>
          </div>
        </div>
        <button class="delete_item" data-index='${index}'>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    
    `
     
    if(checkout_items){
        checkout_items.innerHTML +=`
        <div class="item_card">
    <div class="img_name">
        <img src="${item.img}" alt="">
        <div class="content">
            <h4>${item.name}</h4>
            <p class="price_cart">${item.price}</p>
            <div class="quantity_control">
                <button class="decrease_quantity" data-index='${index}'>-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="increase_quantity" data-index='${index}'>+</button>
              </div>
        </div>
        <button class="delete_item" data-index='${index}'>
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>
</div>
        `
    }
})
let price_cart_total = document.querySelector('.price_cart_total');
let Count_item_cart = document.querySelector('.Count_item_cart');
let count_item_header = document.querySelector('.count_item_header');
price_cart_total.innerHTML = totale_price + `$`;
    Count_item_cart.innerHTML = total_count;
    count_item_header.innerHTML = total_count;
if(checkout_items){
    const subtotal_checkout = document.querySelector('.subtotal_checkout');
    const subtotal_total = document.querySelector('.subtotal_total');
    subtotal_checkout.innerHTML = totale_price + `$`;
    subtotal_total.innerHTML = totale_price + `$`;
}



const increaseBtn = document.querySelectorAll('.increase_quantity');
const decreaseBtn = document.querySelectorAll('.decrease_quantity');
increaseBtn.forEach(button =>{
    button.addEventListener('click' ,(event) =>{

        const itemIndex = event.target.closest('button').getAttribute('data-index');
        increaseQuantity(itemIndex);

    })
})
decreaseBtn.forEach(button =>{
    button.addEventListener('click' ,(event) =>{
        const itemIndex = event.target.closest('button').getAttribute('data-index');
        decreaseQuantity(itemIndex);

    })
})
    const deletebutton = document.querySelectorAll('.delete_item');
    deletebutton.forEach(button =>{

        button.addEventListener('click',(event) =>{
            const itemIndex = event.target.closest('button').getAttribute('data-index');
            removeFromCart(itemIndex)
      
    })
})
}
function increaseQuantity(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart[index].quantity++;
    localStorage.setItem('cart',JSON.stringify(cart))
    updateCart()
}
function decreaseQuantity(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if(cart[index].quantity > 1){
        cart[index].quantity -= 1
    }
    localStorage.setItem('cart',JSON.stringify(cart))
    updateCart()
   
}
function increaseQuantity(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity++;
    localStorage.setItem('cart',JSON.stringify(cart))
    updateCart()
}

function removeFromCart(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const removeP = cart.splice(index,1)[0];
    localStorage.setItem('cart',JSON.stringify(cart))
    updateCart()
  updatebuttonssate(removeP.id);
}

function updatebuttonssate(params){
    let allMarchingButton = document.querySelectorAll(`.btn_add_cart[data-id = '${params}']`)
    allMarchingButton.forEach(btn =>{
        btn.classList.remove('active');
        btn.innerHTML = 'add to cart';
    })
}

updateCart()