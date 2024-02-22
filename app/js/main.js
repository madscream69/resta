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


    const choose = document.querySelectorAll('.nav-menu'),
          choose_parent = document.querySelector('nav-menu'),
          menu = document.querySelectorAll('.menu');

    function hideMenuContent() {
        menu.forEach(item =>{
          item.classList.add('hide-menu');
        });
        choose.forEach(item =>{
          item.classList.remove('active');
        });
    }
    function showMenuContent(i=0) {
      menu[i].classList.remove('hide-menu');
      choose[i].classList.add('active');
    }
    hideMenuContent();
    showMenuContent();
    //не работает, страница обновляется при нажатии на кнопки
    // choose_parent.addEventListener('click', (event)=>{
    //   const target = event.target;
    //   event.preventDefault();
    //   if(target && target.classList.contains('nav-menu')){
    //     choose.forEach((item, i)=>{
    //       if(target == item){
    //         hideMenuContent();
    //         showMenuContent(i);
    //       }
    //     });
    //   }
    // });
})