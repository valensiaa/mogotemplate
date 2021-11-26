function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}
ibg();

//menu burger
const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    })
}

// hover effect images
const hoverAboutImg = document.querySelector('.block__gallery');

hoverAboutImg.addEventListener('mouseover', function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.classList.add('active');
    } else return;
})
hoverAboutImg.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
    }
    
})

 //append div to img hover 
 // const hoverImg = document.querySelector('.ourwork__column');
 // hoverImg.addEventListener('mouseover', function(e) {
 //     if (e.target.tagName == "IMG") {
 //        e.target.classList.add('hover');
 //    } else return;
 // })


//tabs open
const tabArrow = document.querySelector('.whatwedo__tabs');
const tabDesc = document.querySelectorAll('.tab__desc-wrap');

 window.addEventListener('load', function() {
     tabDesc[0].classList.add('open');
 })

tabArrow.addEventListener('click', function(e) {
    var curElem = e.target;    
    if (curElem.classList.contains('tab__arrow')) {
        
        if(curElem.parentElement.nextElementSibling.classList.contains('open')) {
            curElem.parentElement.nextElementSibling.classList.remove('open');
            //toggleArrow(curElem);
            for (var i=0; i < tabDesc.length; i++) {
                if (tabDesc[i] === curElem.parentElement.nextElementSibling) {      
                     if(i === tabDesc.length-1) { 
                         tabDesc[0].classList.add('open');
                     } else { tabDesc[i+1].classList.add('open'); }
                }
            }          
        } else {
            for (var i=0; i < tabDesc.length; i++) {
               if (tabDesc[i].classList.contains('open')) {
                 tabDesc[i].classList.remove('open'); 
            }
        }
            curElem.parentElement.nextElementSibling.classList.add('open');
        }
    } else return;
})

//sliders
var slideIndex = [1, 1];
var sliderClass = ['.grey-row .reviews__row', '.testimonials .reviews__row']
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, index) {  
  showSlides(slideIndex[index] += n, index);
}
function showSlides(n, index) {
  var i; 
  var slides = document.querySelectorAll(sliderClass[index]);
  if (n > slides.length) {slideIndex[index] = 1}
    if (n < 1) {slideIndex[index] = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    } 
    slides[slideIndex[index]-1].style.display = "flex";
}