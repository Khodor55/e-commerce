fetch('products.json')
.then(response => response.json())
.then(data => {
    const swiper_item_sale = document.getElementById('swiper_item_sale');
    const electronique_item = document.getElementById('electronique_item');
    let appliances_item =document.getElementById('appliances_item');
    let mobiles_item = document.getElementById('mobiles_item');
    data.forEach(product =>{
        if(product.old_price){
            const percent_discount = Math.floor((product.old_price - product.price) / product.old_price * 100)
            swiper_item_sale.innerHTML +=`
            
  <div class="swiper-slide product">

<div class="img_product">
  <a href="#"><img src='${product.img}'></a>
</div>
<div class="stars">
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
</div>
<div class="name_product"><a href="">${product.name}</a></div>
<div class="price"><p><span>${product.price}$</span></p>
  <p class="old_price">${product.old_price}$</p>
  </div>
  <div class="icons">
    <span class="btn_add_cart" data-id='${product.id}'>
      <i class="fa-solid fa-shopping"></i>add to cart
    </span>
    <span class="icon_product">
      <i class="fa-solid fa-heart"></i>
    </span>
  </div>  
</div>
            

            `
        }
    })
    data.forEach(product =>{
        if(product.catetory === 'appliances'){
        let old_price_p;
        let percent_discount_p;
        let percent_discount = Math.floor((product.old_price - product.price) / product.old_price * 100)
        if(product.old_price){
            old_price_p =`<p class="old_price">${product.old_price}$</p>`;
            percent_discount_p =`
            <span class="sale_persenr">
  ${percent_discount}% off
</span>
            `
        }else{
            old_price_p = '';
            percent_discount_p ='';
        }
        
        appliances_item.innerHTML +=`
            
  <div class="swiper-slide product">
${percent_discount_p}
<div class="img_product">
  <a href="#"><img src='${product.img}'></a>
</div>
<div class="stars">
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
</div>
<div class="name_product"><a href="">${product.name}</a></div>
<div class="price"><p><span>${product.price}$</span></p>
${old_price_p}
  </div>
  <div class="icons">
    <span class="btn_add_cart" data-id='${product.id}'>
      <i class="fa-solid fa-shopping"></i>add to cart
    </span>
    <span class="icon_product">
      <i class="fa-solid fa-heart"></i>
    </span>
  </div>  
</div>
            

            `
        
        }
        
    })
    data.forEach(product =>{
        if(product.catetory === 'electronics'){
        let old_price_p;
        let percent_discount_p;
        let percent_discount = Math.floor((product.old_price - product.price) / product.old_price * 100)
        if(product.old_price){
            old_price_p =`<p class="old_price">${product.old_price}$</p>`;
            percent_discount_p =`
            <span class="sale_persenr">
  ${percent_discount}% off
</span>
            `
        }else{
            old_price_p = '';
            percent_discount_p ='';
        }
        
            electronique_item.innerHTML +=`
            
  <div class="swiper-slide product">
${percent_discount_p}
<div class="img_product">
  <a href="#"><img src='${product.img}'></a>
</div>
<div class="stars">
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
</div>
<div class="name_product"><a href="">${product.name}</a></div>
<div class="price"><p><span>${product.price}$</span></p>
${old_price_p}
  </div>
  <div class="icons">
    <span class="btn_add_cart" data-id='${product.id}'>
      <i class="fa-solid fa-shopping"></i>add to cart
    </span>
    <span class="icon_product">
      <i class="fa-solid fa-heart"></i>
    </span>
  </div>  
</div>
            

            `
        
        }
        
    })
    data.forEach(product =>{
        if(product.catetory === 'mobiles'){
        let old_price_p;
        let percent_discount_p;
        let percent_discount = Math.floor((product.old_price - product.price) / product.old_price * 100)
        if(product.old_price){
            old_price_p =`<p class="old_price">${product.old_price}$</p>`;
            percent_discount_p =`
            <span class="sale_persenr">
  ${percent_discount}% off
</span>
            `
        }else{
            old_price_p = '';
            percent_discount_p ='';
        }
        
            mobiles_item.innerHTML +=`
            
  <div class="swiper-slide product">
${percent_discount_p}
<div class="img_product">
  <a href="#"><img src='${product.img}'></a>
</div>
<div class="stars">
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
</div>
<div class="name_product"><a href="">${product.name}</a></div>
<div class="price"><p><span>${product.price}$</span></p>
${old_price_p}
  </div>
  <div class="icons">
    <span class="btn_add_cart" data-id='${product.id}'>
      <i class="fa-solid fa-shopping"></i>add to cart
    </span>
    <span class="icon_product">
      <i class="fa-solid fa-heart"></i>
    </span>
  </div>  
</div>
            

            `
        
        }
        
    })
    
})