

/*==================== MENU SHOW Y HIDDEN ====================*/

let  navMenu = document.getElementById('nav-menu');
 let   navToggle = document.getElementById('nav-toggle');
  let  navClose = document.getElementById('nav-close');


/*===== MENU SHOW =====*/
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu");
        
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navClose){
    navClose.addEventListener("click",()=>{

        navMenu.classList.remove("show-menu");
        //console.log("sdd");

    })
}


/*==================== REMOVE MENU MOBILE ====================*/

let navLink = document.querySelectorAll(".nav__link");

// navLink= Array.from(navLink)

function linkAction(){

    
         //let  navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove("show-menu");
        //console.log("dfdf");
    


}

navLink.forEach((link)=>link.addEventListener("click",linkAction))

// navLink.forEach((link)=>{
//     link.addEventListener("click",()=>{


//           navMenu.classList.remove("show-menu");
//         console.log("dfdf");

//     })

// })


/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills__content");
  let    skillsHeader = document.querySelectorAll(".skills__header");


function toggleSkills(){

    let itemClass = this.parentNode.className;

    for( i=0 ; i<skillsContent.length ; i++){  
        skillsContent[i].className = "skills__content skills__close";
    }

    if(itemClass ==="skills__content skills__close"){
        this.parentNode.className = "skills__content skills__open";
    }

}

skillsHeader.forEach((el) =>{
    el.addEventListener("click",toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");


tabs.forEach((tab)=>{

    tab.addEventListener("click",()=>{
        const target = document.querySelector(tab.dataset.target);


        tabContents.forEach((tabContent)=>{

            tabContent.classList.remove("qualification__active");
        })

        target.classList.add("qualification__active");

        tabs.forEach((tab)=>{

            tab.classList.remove("qualification__active");

        })

        tab.classList.add("qualification__active");
    });
})


/*==================== SERVICES MODAL ====================*/


const modalViews = document.querySelectorAll(".services__modal");

const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");


let modal = function(modalClick){

    modalViews[modalClick].classList.add("active-modal");
}

modalBtns.forEach((modalBtn , i)=>{

    modalBtn.addEventListener("click",()=>{
        modal(i);
    })

})

modalCloses.forEach((modalclose)=>{

    modalclose.addEventListener('click',()=>{

        modalViews.forEach((modalView)=>{

             modalView.classList.remove("active-modal");
        })
       
    })

})


/*==================== PORTFOLIO SWIPER  ====================*/

      let swiperProtfolio = new Swiper(".protfolio__container ", {
        cssMode: true,
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable:true,
        },
 
      });


/*==================== TESTIMONIAL ====================*/


      let swiperTestimonial = new Swiper(".testimonial__container", {
        
        loop:true,

        grabCursor: true,

        spaceBetween : 48,

        pagination: {
          el: ".swiper-pagination",
          clickable:true,
          dynamicBullets:true,
        },

        breakpoints:{
            568:{
                slidesPerView:2,
            }
        }
 
      });



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 