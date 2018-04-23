window.addEventListener ('DOMContentLoaded', () => { 
let modal = document.querySelector('.popup'),
    mainButton = document.getElementById('popup-btn'),
    rdyButton = document.getElementById('ready'),
    overlayMain = document.querySelector('.overlay'),
    // mainCard = document.querySelector('.main-cards'),
    // mainButtons = document.querySelector('.main-buttons');
    main = document.querySelector('.main'),
    customization = document.querySelector(".custom");
    customChilds = customization.children;
    sexM = document.getElementById('male');
    sexF = document.getElementById('female');
    personM = document.querySelector('.person-easy');
    preview = document.querySelector('.preview');
    radio = document.querySelector('.radio')
    prev = document.querySelector('.prev');
    next = document.querySelector('.next');
    candidat = document.querySelector('#my-candidat');
    myCandidatFace = document.getElementById('my-candidat-photo')
    myCandidatSex = document.getElementsByClassName('sex')[1];
    myCandidatSelect = document.getElementById('select');
    console.log(myCandidatSelect)
    myCandidatView = document.getElementsByClassName ('views')[1];
    firstCand= document.getElementsByClassName ('main-cards-item')[0]
    votebtn = document.getElementById("voting")
    crime = document.getElementById('crime')
    MyCand = document.getElementsByClassName ('main-cards-item')[1]
    reset = document.getElementById ('reset')


    n = 11;
    s = 11;

// Появление конструктора персонажа
mainButton.addEventListener('click', function(){
myCandidatFace.classList.add('type11');

modal.classList.add('hidden');
overlayMain.classList.add('hidden');
main.classList.add('hidden');
// mainCard.classList.add('hidden');
// mainButtons.classList.add('hidden');
customization.classList.add('showf');
personM.classList.add('type11');
preview.classList.add('type11');
var i;
for (i = 0; i < customChilds.length; i++) {
    customChilds[i].style.display = "block";
}
})

// Проверка слайдер
function checkRadio(){
sexM.addEventListener('click', function(){
    myCandidatSex.textContent = "Мужской";
  n = 11,
  s = 11,
  myCandidatFace.classList.add('type11');
  personM.classList.add('type11');
  preview.classList.add('type11');
    personM.classList.remove('type1');
  preview.classList.remove('type1');
  myCandidatFace.classList.remove('type1');
  myCandidatFace.classList.remove('type2');
  myCandidatFace.classList.remove('type3');
  myCandidatFace.classList.remove('type4');

   personM.classList.remove('type2');
  preview.classList.remove('type2');
   personM.classList.remove('type3');
  preview.classList.remove('type3');
   personM.classList.remove('type4');
  preview.classList.remove('type4');
});
sexF.addEventListener('click', function(){
n = 1,
s = 1,
myCandidatSex.textContent = "Женский";

  personM.classList.remove('type11');
  preview.classList.remove('type11');
  myCandidatFace.classList.remove('type11');
   personM.classList.remove('type12');
  preview.classList.remove('type12');
    myCandidatFace.classList.remove('type12');
   personM.classList.remove('type13');
  preview.classList.remove('type13');
    myCandidatFace.classList.remove('type13');

   personM.classList.remove('type14');
  preview.classList.remove('type14');
    myCandidatFace.classList.remove('type14');
    myCandidatFace.classList.remove('photo-3');
    myCandidatFace.classList.add('photo-4');
    myCandidatFace.classList.add('type1');

  personM.classList.add('type1');
  preview.classList.add('type1');
})
function plusSlides (n) {
    preview.classList.remove(`type${n}`);
    personM.classList.remove(`type${n}`);
    myCandidatFace.classList.remove(`type${n}`);

    n++;
     if  ((n > 14) && sexM.checked) {
         (n = 11) 
        } else if ((n > 5) && sexF.checked) {
            (n = 1);
        }
    preview.classList.add(`type${n}`);
    personM.classList.add(`type${n}`);
     myCandidatFace.classList.add(`type${n}`);
    s = n;
}
function minusSlides (n) {
    preview.classList.remove(`type${n}`);
    personM.classList.remove(`type${n}`);
    myCandidatFace.classList.remove(`type${n}`);

    n--;
     if  ((n < 11) && sexM.checked) {
         (n = 14)
        } else if ((n < 1) && sexF.checked) {
            (n = 4)
        }
    preview.classList.add(`type${n}`);
    personM.classList.add(`type${n}`);
    myCandidatFace.classList.add(`type${n}`);
    s = n;
}
// минус  слайд
prev.addEventListener('click', function(){
    minusSlides(s);
});
// плюс  слайд
next.addEventListener('click', function(){
    plusSlides(s);
});
};
checkRadio();




// сохранение данных -
let name = document.getElementById('name');
let age = document.getElementById('age');
let bio = document.getElementById('bio');
let myCandidatName = document.getElementById('my-candidat-name')
let myCandidatBio = document.getElementById('my-candidat-bio')
let myCandidatAge = document.getElementById('my-candidat-age')
let progressbar1 = document.getElementsByClassName('progress-bar-1')[0]
let progressbar2 = document.getElementsByClassName('progress-bar-2')[0]
let progressbar3 = document.getElementsByClassName('progress-bar-3')[0]
let result1 = document.getElementsByClassName('result-count')[0]
let result2 = document.getElementsByClassName('result-count')[1]
let result3 = document.getElementsByClassName('result-count')[2]


name.addEventListener('change' ,() => {
let nameCandidat = name.value;
 if ((typeof(nameCandidat)) === 'string' &&  nameCandidat !== '' && nameCandidat.length < 50) {
    myCandidatName.textContent = nameCandidat;

}
})

bio.addEventListener('change' ,() => {
let bioCandidat = bio.value;
 if ((typeof(bioCandidat)) === 'string' &&  bioCandidat !== '') {
    myCandidatBio.textContent = bioCandidat;

}
})

age.addEventListener('change' ,() => {
let ageCandidat = age.value;
 if (ageCandidat !== '' && ageCandidat.length < 50 && ageCandidat > 34 && ageCandidat < 100 ) {
    myCandidatAge.textContent = ageCandidat+" лет";
} else  { 
alert("Введите корректный возраст ( согласно Конституции РФ, в Президенты РФ могут баллотироваться кандидаты старше 35 лет")
}



})
myCandidatSelect.addEventListener('change' ,() => {
let viewCandidat = myCandidatSelect.value;
    myCandidatView.textContent = viewCandidat;
})

// создание кандидата на главной
rdyButton.addEventListener('click', function(){
  if( age.value !== 0 && age.value !== '' && age.value.length >= 2 && name.value.length >2 ){
modal.classList.remove('hidden');
main.classList.remove('hidden');
candidat.classList.remove('hidden');
customization.classList.remove('showf');
progressbar1.style.height = '0'
progressbar2.style.height = '0'
progressbar3.style.height = '0'
result1.textContent = "0%"
result2.textContent = "0%"
result3.textContent = "0%"
firstCand.classList.remove('main-cards-item-active')
MyCand.classList.remove('main-cards-item-active')
} else {
  alert("Введите корректные данные")
}
});

// честные выборы
votebtn.addEventListener('click' , function(){
  progressbar1.style.height = '46%'
  progressbar3.style.height = '30%'
  progressbar2.style.height = '24%'
  result1.textContent = "46%"
  result2.textContent = "30%"
  result3.textContent = "24%"
  firstCand.classList.add('main-cards-item-active')
  MyCand.classList.remove('main-cards-item-active')


})
crime.addEventListener('click' , function(){
  progressbar1.style.height = '21%'
  progressbar3.style.height = '55%'
  progressbar2.style.height = '24%'
  result1.textContent = "21%"
  result2.textContent = "55%"
  result3.textContent = "24%"
  firstCand.classList.remove('main-cards-item-active')
  MyCand.classList.add('main-cards-item-active')


})
reset.addEventListener('click' , function(){
modal.classList.add('hidden');
overlayMain.classList.add('hidden');
main.classList.add('hidden');
// mainCard.classList.add('hidden');
// mainButtons.classList.add('hidden');
customization.classList.add('showf');
name.value = '';
age.value  = '';
bio.value  = '';
myCandidatSelect.value = "Либеральные";
myCandidatView.textContent = "Либеральные";
myCandidatBio.textContent = '';
sexM.checked = true;
myCandidatFace.classList.add('type11');
personM.classList.add('type11');
preview.classList.add('type11');
  personM.classList.remove('type1');
preview.classList.remove('type1');
myCandidatFace.classList.remove('type1');
myCandidatFace.classList.remove('type2');
myCandidatFace.classList.remove('type3');
myCandidatFace.classList.remove('type4');

 personM.classList.remove('type2');
preview.classList.remove('type2');
 personM.classList.remove('type3');
preview.classList.remove('type3');
 personM.classList.remove('type4');
preview.classList.remove('type4');
 personM.classList.remove('type12');
preview.classList.remove('type12');
  myCandidatFace.classList.remove('type12');
 personM.classList.remove('type13');
preview.classList.remove('type13');
  myCandidatFace.classList.remove('type13');

 personM.classList.remove('type14');
preview.classList.remove('type14');


})




});


