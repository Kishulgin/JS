var yourBudget = prompt('Введите ваш месячный бюджет' , 1000 ); 
var yourShopName = prompt('Введите название вашего магазина' , "Дети хоронят коня" ); 


var yourShopGoods0 = prompt('Введите название вашего товара' , "Мазь" ); 
var yourShopGoods1 = prompt('Введите название вашего товара' , "крем" ); 
var yourShopGoods2 = prompt('Введите название вашего товара' , "йод" ); 



MainList = {
			Budget: yourBudget,
			Name: yourShopName,
			open: true,
			shopGoods:['yourShopGoods0', 'yourShopGoods1', 'yourShopGoods2'],
			Employers: {
			 NameFirst: 'Ivan',
			 NameFirs: 'Ivan',
}
};


console.log(MainList.Budget);
console.log(MainList.Name);
console.log(yourShopGoods0);
console.log(yourShopGoods1);
console.log(yourShopGoods2);
console.log(MainList.Employers.NameFirst);
alert("Ваш бюджет на день\n" + (MainList.Budget/30));




