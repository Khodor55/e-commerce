var swiper = new Swiper(".slide-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests : true,
      clickable: true,

    },
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },loop : true,
     
  });
//   swiper slide for product
var swiper = new Swiper(".slide_product", {
    slidesPerView: 5,
    spaceBetween: 30,
   
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },loop : true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
    
    }
     
  });