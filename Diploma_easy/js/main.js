window.addEventListener ('DOMContentLoaded', () => { 
let modal = document.querySelector('.popup'),
    mainButton = document.getElementById('popup-btn'),
    overlayMain = document.querySelector('.overlay'),
    // mainCard = document.querySelector('.main-cards'),
    // mainButtons = document.querySelector('.main-buttons');
    main = document.querySelector('.main'),
    customization = document.querySelector(".custom");
    customChilds = customization.children;
    console.log(customChilds);

mainButton.addEventListener('click', function(){
modal.classList.add('hidden-a');
overlayMain.classList.add('hidden-a');
main.classList.add('hidden');
// mainCard.classList.add('hidden');
// mainButtons.classList.add('hidden');
customization.classList.add('showf');

var i;
for (i = 0; i < customChilds.length; i++) {
    customChilds[i].style.display = "block";
}
})




































});