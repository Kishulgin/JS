let adv = document.querySelector('.adv');
console.log(adv);
adv.parentNode.removeChild(adv);
let menu = document.querySelector('.menu');
let title = document.querySelector('.title');
let list = document.getElementsByClassName('menu-item');
let body = document.querySelector('body');
let promtFeed = document.getElementById ('prompt');

let feed = prompt('Как вы относитесь к технике APPLE?', " Не очень");
console.log(feed);

console.log(list[1]);
console.log(body);

var newItem = list[3].cloneNode(true);
menu.insertBefore(list[2], list[1]);
newItem.textContent = "Пятый пункт";
menu.appendChild(newItem);
promtFeed.textContent = feed;
title.textContent = "Мы продаем только подлинную технику Apple";
document.body.style.backgroundImage = "url(../archiv/img/apple_true.jpg)";