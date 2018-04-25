$(document).ready(function () {
	$('.model-couch-mark').click(function() {
		$('.model-couch-hover').toggleClass('-visible');
		$('.model-couch').toggleClass('-invisible');
		$('.couch-text').toggleClass('-hover-text');
	});
	$('.model-armchair-mark').click(function() {
		$('.model-armchair-hover').toggleClass('-visible');
		$('.model-armchair').toggleClass('-invisible');
		$('.armchair-text').toggleClass('-hover-text');
	});
	$('.model-mattress-mark').click(function() {
		$('.model-mattress-hover').toggleClass('-visible');
		$('.model-mattress').toggleClass('-invisible');
		$('.mattress-text').toggleClass('-hover-text');
	});
	$('.model-chair-mark').click(function() {
		$('.model-chair-hover').toggleClass('-visible');
		$('.model-chair').toggleClass('-invisible');
		$('.chair-text').toggleClass('-hover-text');
	});
	$('.model-carpet-mark').click(function() {
		$('.model-carpet-hover').toggleClass('-visible');
		$('.model-carpet').toggleClass('-invisible');
		$('.carpet-text').toggleClass('-hover-text');
	});
	$('.model-bean-mark').click(function() {
		$('.model-bean-hover').toggleClass('-visible');
		$('.model-bean').toggleClass('-invisible');
		$('.bean-text').toggleClass('-hover-text');
	});
	$('.model-sofa-mark').click(function() {
		$('.model-sofa-hover').toggleClass('-visible');
		$('.model-sofa').toggleClass('-invisible');
		$('.sofa-text').toggleClass('-hover-text');
	});
 
	
	$('.js-minus').click(function () { 
		var $input = $(this).parent().find('.js-input-quantity'); 
		var count = parseInt($input.val()) - 1; 
		count = count < 1 ? 1 : count; 
		$input.val(count); 
		$input.change(); 
		return false; 
	}); 
	$('.js-plus').click(function () { 
		var $input = $(this).parent().find('.js-input-quantity'); 
		$input.val(parseInt($input.val()) + 1); 
		$input.change(); 
		return false; 
	});

	xCal("date8", {
		id: "cssworldru8", 
		"class": "xcalend",
		hide: 0,
		x: 0,
		autoOff: 0, 
		to: "date8" 
	});


	///////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////
	let priceBean = 100;
	let priceSofa = 500;
	let priceMattress = 300;
	let priceChair = 200;
	let priceCouch = 350;
	let priceCarpet = 150;
	let priceArmchair = 250;
	let amauntBean = $('.amount-bean').val();
	let amauntSofa = $('.amount-sofa').val();
	let amauntMattress = $('.amount-mattress').val();
	let amauntChair = $('.amount-chair').val();
	let amauntCouch = $('.amount-couch').val();
	let amauntCarpet = $('.amount-carpet').val();
	let amauntArmchair = $('.amount-armchair').val();
	let priceEnd = 1//= $('.js-price-end')

	$('.model-couch-mark').click(function() {
		priceEnd =  priceCouch * amauntCouch
		alert(priceEnd)
	})

	$('.model-armchair-mark').click(function() {
		
	});
	$('.model-mattress-mark').click(function() {
		
	});
	$('.model-chair-mark').click(function() {
		
	});
	$('.model-carpet-mark').click(function() {
		
	});
	$('.model-bean-mark').click(function() {
		
	});
	$('.model-sofa-mark').click(function() {
		
	});
});
