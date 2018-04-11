$(document).ready(function(){
$('.main_btn, .main_btna, li:contains("расписа")').on('click', function() {
$('.overlay').animate(
{
		opacity: 'toggle',


},2000);
$('.modal').slideDown(1000);
});
$('.close').on('click', function(){
	$('.overlay').hide(),
	$('.modal').slideUp(500);
}

	);

});

