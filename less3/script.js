let yourBudget,
    yourShopName ,
    time,
    price = 100;

// Функция ввода бюджета и названия
function start () {
				yourBudget = prompt('Введите ваш месячный бюджет' , 1000 ); 
				while (isNaN(yourBudget) || yourBudget === "" || yourBudget === null) {
		yourBudget = prompt('Введите ваш месячный бюджет' , 1000 ); 

				}

				yourShopName = prompt('Введите название вашего магазина' , "Дети хоронят коня" ).toUpperCase(); 
				time = 1;
}
start();

let MainList = {
			Budget: yourBudget,
			Name: yourShopName,
			open: true,
			shopGoods: [],
			employers: {},
			discount: true,
};



// Вариант цикла №1
// Функция ввода названия товара
function chooseGoods() {

						for (let i = 0; i < 5; i++) {

						let a = prompt('Введите название вашего товара' , "например" ); 
						// проверки
						if ((typeof(a)) === 'string' &&  a !== '' && a.length < 50 ) {
						 console.log('все вёрно!');
							MainList.shopGoods[i] = a;
						} else if ((a) === null)  {
						 console.log('Нельзя нажимать отмена');
						 i--;
						} else {
						 console.log('лажа какая-то');
						 i--;
						}
						}
}
chooseGoods();

// Функция найма сотрудников
function chooseEmployers() {

						for (let i = 1; i < 5; i++) {

						let a = prompt('Введите Имя сотрудника' , "Иван" ); 
						// проверки
						if ((typeof(a)) === 'string' &&  a !== '' && a.length < 50 ) {
						 console.log('все вёрно!');
							MainList.employers[i] = a;
						} else if ((a) === null)  {
						 console.log('Нельзя нажимать отмена');
						 i--;
						} else {
						 console.log('лажа какая-то');
						 i--;
						}
						}
}

chooseEmployers();
// Функция проверки времени
function workTime (time){
			if (time < 0 ) {
				console.log ('Такого просто не может быть');
			} else if (time > 8 && time < 20) {
				console.log ('time to work');
			} else if ( time < 24) {
				console.log ('too late for work');
			} else {
				console.log ('в моих сутках 24 часа');
			}
}
workTime(18);
// Функция расчета бюджета
let yourBudgetCalc = MainList.Budget;
function calculateBudget (){
 yourBudgetCalc = (MainList.Budget/30);
alert("Ваш бюджет на день\n" + (yourBudgetCalc));
}

calculateBudget();
// Функция проверки скидки

function chkDiscount() {
	if (MainList.discount === true) {
		var newprice = (price*0.8);
		alert("Ваша цена со скидкой\n" + newprice);
	} else {
		alert("Скидка не действует");
	}
}

chkDiscount();


console.log(yourBudgetCalc);
console.log(MainList);
console.log(yourShopName);








// Вариант цикла №2
// let i = 0;
// while (i < 5 ){

// let a = prompt('Введите название вашего товара' , "например" ); 
// // проверки
// if ((typeof(a)) === 'string' &&  a != '' && a.length < 50 ) {
//  console.log('все вёрно!');
// 	MainList.shopGoods[i] = a;
// 	i++;
// } else if ((a) === null)  {
//  console.log('Нельзя нажимать отмена');
// } else {
//  console.log('лажа какая-то');
// }
// }


// Вариант цикла №3 по моему он тут не совсем подходит под задачу, но было интересно попробовать, break нет умышленно
// let i = 0;
// switch (i) {
// 	case 0:
// 		let a = prompt('Введите название вашего товара' , "например" ); 
// 		MainList.shopGoods[0] = a;
// 	case 1: 
// 			let b = prompt('Введите название вашего товара' , "например" ); 
// 		MainList.shopGoods[1] = b;
// 	case 2: 
// 			let c = prompt('Введите название вашего товара' , "например" ); 
// 		MainList.shopGoods[2] = c;
// 		break;
// }
