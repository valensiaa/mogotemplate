function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'linear-gradient(to top, rgba(252, 227, 138, 0.9) 0%, rgba(243, 129, 129, 0.9) 100%), url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}
ibg();

//menu burger
const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
   const menuBody = document.querySelector('.menu__body');
   iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
   })
}

// hover effect images
const hoverAboutImg = document.querySelector('.block__gallery');
hoverAboutImg.addEventListener('mouseover', function (e) {
   //console.log(e.target);
   // if (e.target.classList.contains("item__bg")) {
   if (e.target.tagName == "IMG") {
      e.target.parentElement.classList.add('active');

      // e.stopPropagation();

   }
   else return;
})
hoverAboutImg.addEventListener('mouseout', function (e) {
   // if (e.target.classList.contains("gallery__item")) {
   e.target.classList.remove('active');
   // e.target.stopPropagation();
})
  // else return;

//)
