/*jshint esversion: 6 */
// class Options {
//  constructor (height, width, bg, fontSize, textAlign){
//          this.bg = bg;
//          this.width = width;
//          this.height = height;
//          this.fontSize = fontSize;
//          this.textAlign = textAlign;
//  }
// createDiv(){
//    let main = document.querySelector('.main');
//              let d = document.createElement('div');
//              main.appendChild(d);
//          d.style.cssText =`width: ${this.width}; \
//                                                                               height: ${this.height}; \
//                                                                               background: ${this.bg}; \
//                                                                               font-size: ${this.fontSize}; \
//                                                                                  text-align: ${this.textAlign}; \
//                                                                                  display: block;`;
//          d.textContent="любой";
// }
// }
// const newDiv = new Options('100px','300px','red','50px','center');
// console.log(newDiv.createDiv());
 window.addEventListener ('DOMContentLoaded', () => { 
    let tab                             = document.getElementsByClassName('info-header-tab');
    let tabContent = document.getElementsByClassName('info-tabcontent');
    let info = document.getElementsByClassName('info-header')[0];

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++){
                            tabContent[i].classList.remove('show');
                            tabContent[i].classList.add('hide');
            }
    }
                         
    hideTabContent(1);


    function showTabContent(b) {
        if( tabContent[b].classList.contains('hide')){
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');

        }
    }

    info.addEventListener('click', event => {
     let target = event.target;
     if(target.className == 'info-header-tab'){
            for (let i = 0; i < tab.length; i++) {
            if (target == tab [i]) {
                            showTabContent(i);
                            break;
            }
            }


                          
                     }
                });

    let deadline = '2018-04-13';

    function getTimeRemaining (endtime) {
        let t = Date.parse(endtime) - Date.parse (new Date());
        let seconds = Math.floor((t/1000) % 60);
        let minutes = Math.floor( (t/1000/60) % 60);
        let hours   = Math.floor( (t/(1000*60*60)) );

        return {
           'total' : t,
           'hours': hours,
           'minutes': minutes,
           'seconds': seconds
        };
    }

    function setClock(id, endtime){
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        function updateClock () {
            let t = getTimeRemaining(endtime);
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
            if (t.total <= 0)                clearInteval(timeInterval);
        }
        updateClock();
        let timeInterval = setInterval(updateClock, 1000);
    }
    setClock('timer', deadline);
    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');



    document.body.addEventListener('click', event => {
     let target = event.target;
     if(target.classList.contains('description-btn')){
                target.classList.add('more-splash');
                overlay.style.display = "block";
                document.body.style.overflow ="hidden";

            }
            });

    more.addEventListener('click', function(){
        this.classList.add('more-splash');
        overlay.style.display = "block";
        document.body.style.overflow ="hidden";
    });

    close.addEventListener('click', () => {
        overlay.style.display = "none";
        document.body.style.overflow ="";
    });


  let message = new Object();
    message.loading = "Загрузка...";
    message.success = "Спасибо! Скоро мы с вами свяжемся";
    message.failure = "Что-то пошло не так";

    let form = document.getElementsByClassName('main-form')[0],
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        contacts = document.getElementsByClassName('contact-form')[0];
   




        contacts.addEventListener('submit', function(event) {
            event.preventDefault();
            contacts.appendChild(statusMessage);

          let request = new XMLHttpRequest();
            request.open("POST", 'server.php');

            request.setRequestHeader('Content-Type', "application/x-www-form-urlencoded" );

            let formData = new FormData(form);
            request.send(formData);


            request.onreadystatechange = function() {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4) {
                    if(request.status == 200 && request.status < 300) {
                        statusMessage.innerHTML = message.success;
                    }
                    else {
                      statusMessage.innerHTML = message.failure;
                    }
                }
            };

        });
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open("POST", 'server.php');

            request.setRequestHeader('Content-Type', "application/x-www-form-urlencoded" );

            let formData = new FormData(form);
            request.send(formData);


            request.onreadystatechange = function() {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4) {
                    if(request.status == 200 && request.status < 300) {
                        statusMessage.innerHTML = message.success;
                    }
                    else {
                      statusMessage.innerHTML = message.failure;
                    }
                }
            };
for (let i = 0; i < input.length; i++) {
    input[i].value = '';
}
        });
 
 //slider
 let slideIndex = 1,
     slides = document.getElementsByClassName('slider-item'),
     prev = document.querySelector('.prev'),
     next = document.querySelector('.next'),
     dotsWrap = document.querySelector('.slider-dots'),
     dots = document.getElementsByClassName('dot');
     showSlides(slideIndex);
     function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        };
        if  (n < 1) {
            slideIndex = slides.length ;
        };
        for ( let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        };
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('dot-active');
        };
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
     

   
    };
    for (let i = 0; i < input.length; i++) {
    input[i].value = '';
}
function plusSlides (n) {
    showSlides(slideIndex+=n);
}
function currentSlide(n) {
    showSlides(slideIndex =n) ;
}

prev.addEventListener('click', function(){
    plusSlides(-1);
});

next.addEventListener('click', function(){
    plusSlides(1);
});

dotsWrap.addEventListener('click', function(event){
    for (let i = 0; i < dots.length + 1;i++) {
        if (event.target.classList.contains('dot')&& event.target == dots [i-1]) {
            currentSlide (i);
        }
    }
})
//calc
let persons = document.getElementsByClassName('counter-block-input')[0],
    restDays = document.getElementsByClassName('counter-block-input')[1],
place = document.getElementById('select'),
totalValue = document.getElementById('total'),
personsSum = 0,
daysSum = 0,
total = 0;

totalValue.innerHTML = 0;


persons.addEventListener('change', function (){
    personsSum = +this.value;
total = ((daysSum + personsSum)*4000)-4000;
    
if (restDays.value == ''){
    totalValue.innerHTML = 0;
} else {
    totalValue.innerHTML = total;
}      
});

restDays.addEventListener('change', function (){
    daysSum = +this.value;
total = ((daysSum + personsSum)*4000)-4000;

if (persons.value == ''){
    totalValue.innerHTML = 0;
} else {

    totalValue.innerHTML = total;
}
});

place.addEventListener('change' , function() {
    if (restDays.value == '' || persons.value == '') {
       totalValue.innerHTML = 0;
       } else {
        let a = total; 
        totalValue.innerHTML = a * this.options[this.selectedIndex].value;
       } 
    
});
    
});

