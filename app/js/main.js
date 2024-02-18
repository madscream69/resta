window.addEventListener('DOMContentLoaded', ()=>{
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        
    });
  // document.querySelector('[data-inst="inst"]').style.height = "23rem";
  // console.log();
  
    const HeaderSticky = document.querySelector('.header-sticky'),
          sticky = HeaderSticky.offsetTop;
    console.log(sticky);
    window.addEventListener('scroll', ()=>{
      if (window.pageYOffset > 350) {
        HeaderSticky.classList.add("sticky")
      } else {
        HeaderSticky.classList.remove("sticky");
      }
      
    });
})