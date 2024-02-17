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
  
    const tableElement = document.querySelectorAll('.classtime__nav li'),
          contentTable = document.querySelectorAll('.ts-item'),
          tableParent = document.querySelector('.classtime__nav');
    // tableElement.forEach(item=>{
    //   console.log(item);
    // })
    function hideTabContent() {
      contentTable.forEach(item =>{
        item.style.visibility = 'hidden';
      })
      tableElement.forEach(item=>{
        item.classList.remove('active');
      })
    }
  
    function showTabContent(i =0) {
      tableElement[i].classList.add('active');
      switch(tableElement[i].dataset.tsfilter){
        case "all":
          contentTable.forEach(item =>{
            item.style.visibility = 'visible';
          });
          break;
        case "crossfit":
          contentTable.forEach(item =>{
            if(item.dataset.tsmeta == 'crossfit'){
              item.style.visibility = 'visible';
            }
          });
          break;
        case "lunge":
          contentTable.forEach(item =>{
            if(item.dataset.tsmeta == 'lunge'){
              item.style.visibility = 'visible';
            }
          });
          break
        case "ppsr":
          contentTable.forEach(item =>{
            if(item.dataset.tsmeta == 'ppsr'){
              item.style.visibility = 'visible';
            }
          });
          break
        case "walls":
          contentTable.forEach(item =>{
            if(item.dataset.tsmeta == 'walls'){
              item.style.visibility = 'visible';
            }
          });
          break
        case "candy":
          contentTable.forEach(item =>{
            if(item.dataset.tsmeta == 'candy'){
              item.style.visibility = 'visible';
            }
          });
          break
        default:
          console.log("Sorry, we are out of");
      }
  
      // if(tableElement[i].dataset.tsfilter == "all"){
      //   contentTable.forEach(item =>{
      //     item.style.display = 'table-cell';
      //   })
      // }
  
      // contentTable[i].style.display = 'table-cell';
      
    }
    // hideTabContent();
    // showTabContent();
  
    
  
    tableParent.addEventListener('click', (event)=>{
      const target = event.target;
      if(target && target.classList.contains('classtime__li')){
        tableElement.forEach((item, i)=>{
          if(target == item){
            hideTabContent();
            showTabContent(i);
          }
        })
      }
    });
})