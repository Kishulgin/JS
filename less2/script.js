var yourBudget = prompt('Введите ваш месячный бюджет' , 1000 ); 
var yourShopName = prompt('Введите название вашего магазина' , "Дети хоронят коня" ); 
var time = 1;




let MainList = {
			Budget: yourBudget,
			Name: yourShopName,
			open: true,
			shopGoods: [],
			employers: {},
};



// Вариант цикла №1

for (let i = 0; i < 5; i++) {

let a = prompt('Введите название вашего товара' , "например" ); 
// проверки
if ((typeof(a)) === 'string' &&  a != '' && a.length < 50 ) {
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
















if (time < 0 ) {
	console.log ('Такого просто не может быть');
} else if (time > 8 && time < 20) {
	console.log ('time to work');
} else if ( time < 24) {
	console.log ('too late for work');
} else {
	console.log ('в моих сутках 24 часа');
}





console.log(MainList.Budget);
console.log(MainList);


alert("Ваш бюджет на день\n" + (MainList.Budget/30));




