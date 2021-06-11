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
const outItemBg = document.querySelector('.item__bg');

hoverAboutImg.addEventListener('mouseover', function(e) {
    if (e.target.tagName == "IMG") {
        e.target.parentElement.classList.add('active');
    } else return;
})
hoverAboutImg.addEventListener('mouseout', function(e) {
    e.target.classList.remove('active');
})

//tabs open
let clickArrow;
const tabArrow = document.querySelector('.whatwedo__tabs');
const tabDesc = document.querySelector('.tab__desc-wrap');

window.addEventListener('load', function() {
    tabDesc.classList.add('open');
})

tabArrow.addEventListener('click', function(e) {
    tabDesc.classList.remove('open');
    let target = e.target;
    if (target.className != 'tab__arrow') return;
    open(target);

})

function open(e) {
    if (clickArrow) {
        clickArrow.parentElement.nextElementSibling.classList.remove('open');
    }
    clickArrow = e;
    clickArrow.parentElement.nextElementSibling.classList.add('open');
}