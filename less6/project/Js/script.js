let btn = document.getElementById('open-btn');
console.log(btn);


// левое поле
let name_value = document.getElementsByClassName('name-value')[0];

let budget_value = document.getElementsByClassName('budget-value')[0];

let goodsValue = document.getElementsByClassName('goods-value')[0];
console.log(goodsValue);
let itemsValue = document.getElementsByClassName('items-value')[0];
console.log(itemsValue);
let employersValue = document.getElementsByClassName('employers-value')[0];
console.log(employersValue);
let discountValue = document.getElementsByClassName('discount-value')[0];
console.log(discountValue);
let isopenValue = document.getElementsByClassName('isopen-value')[0];
console.log(isopenValue);

// goods
let goods = document.getElementsByClassName('goods-item');
console.log(goods);
// btn
let goods_btn = document.getElementsByTagName ('button')[1];

let budget_btn = document.getElementsByTagName ('button')[2];

let employers_btn = document.getElementsByTagName ('button')[3];

// поля ввода
let chooseItems = document.querySelector('.choose-item');
console.log(chooseItems);
let timeValue = document.querySelector('.time-value');
console.log(time);
let countBudget = document.querySelector('.count-budget-value');
console.log(countBudget);

// Имена сотрудников
let names = document.querySelectorAll('.hire-employers-item');
console.log(names);

btn.addEventListener('click', () => {
				yourBudget = prompt('Введите ваш месячный бюджет' , 1000 ); 
				while (isNaN(yourBudget) || yourBudget === "" || yourBudget === null) {
		yourBudget = prompt('Введите ваш месячный бюджет' , 1000 ); 
				}
				name_value.textContent = prompt('Введите название вашего магазина' , "Дети хоронят коня" ).toUpperCase(); 
    budget_value.textContent = yourBudget;

});



goods_btn.addEventListener('click', () => {
for (let i = 0; i < goods.length; i++) {
						let a = goods[i].value 
						// проверки
						if ((typeof(a)) === 'string' && a.length < 50 ) {
						 console.log('все вёрно!');
							MainList.shopGoods[i] = a;
							goodsValue.textContent = MainList.shopGoods;
						} else if ((a) === null)  {
						 console.log('Нельзя нажимать отмена');
						 i--;
						} else {
						 console.log('лажа какая-то');
						 i--;
						}
						}
});

chooseItems.addEventListener('change' ,() => {

	 let items = chooseItems.value;
	 if ((typeof(items)) === 'string' &&  items !== '' && items.length < 50 ) {
					 		MainList.shopItems = items.split(",");
								MainList.shopItems.sort();
								itemsValue.textContent = MainList.shopItems;

		}
})
timeValue.addEventListener('change' ,() => {
let time = timeValue.value
			if (time < 0 ) {
				console.log ('Такого просто не может быть');
				MainList.open = false;

			} else if (time > 8 && time < 20) {
				console.log ('time to work');
				MainList.open = true;
			} else if ( time < 24) {
				console.log ('too late for work');
								MainList.open = false;
			} else {
				console.log ('в моих сутках 24 часа');
								MainList.open = false;
}

if (MainList.open == true){
	isopenValue.style.backgroundColor = 'green';
}
else {
	isopenValue.style.backgroundColor = 'red';

}
});


budget_btn.addEventListener ('click', () => {
countBudget.value = (yourBudget/30)

});
employers_btn.addEventListener('click' , () => {
	for (let i = 0; i < names.length; i++) {
						let name = names[i].value;
							MainList.employers[i] = name;
							employersValue.textContent +=MainList.employers[i] + ', ';


						} 
})
var discount = confirm('Есть ли у вас скидка?');
if (discount == true) {
discountValue.style.backgroundColor = 'green';
} else{
discountValue.style.backgroundColor = 'red';


}


let MainList = {
			open: false,
			shopGoods: [],
			employers: {},
			// discount: true,
			shopItems: [],
};