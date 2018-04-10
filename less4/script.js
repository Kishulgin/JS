let yourBudget,
    yourShopName ,
    time,
    price = 100;



let MainList = {
			Budget: yourBudget,
			Name: yourShopName,
			open: false,
			shopGoods: [],
			employers: {},
			discount: true,
			shopItems: [],

},
workTime: function workTime (time){
			if (time < 0 ) {
				console.log ('Такого просто не может быть');
			} else if (time > 8 && time < 20) {
				console.log ('time to work');
				MainList.open = true;
			} else if ( time < 24) {
				console.log ('too late for work');
			} else {
				console.log ('в моих сутках 24 часа');
			}
},
calculateBudget: function calculateBudget (){
	let yourBudgetCalc = MainList.Budget;
 yourBudgetCalc = (MainList.Budget/30);
alert("Ваш бюджет на день\n" + (yourBudgetCalc));
console.log(yourBudgetCalc);
},



chkDiscount: function chkDiscount() {
	if (MainList.discount === true) {
		var newprice = (price*0.8);
		alert("Ваша цена со скидкой\n" + newprice);
	} else {
		alert("Скидка не действует");
	}
},

chooseEmployers: function chooseEmployers() {

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
},
chooseShopItems : function chooseShopItems() {



},
};



console.log(MainList);
console.log(yourShopName);



			chooseGoods: function chooseGoods() {
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
