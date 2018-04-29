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
	let	priceEndCouch = 0,
		priceEndArmchair  = 0,
		priceEndMattress = 0,
		priceEndChair = 0,
		priceEndCarpet = 0,
		priceEndBean = 0,
		priceEndSofa = 0

	$('.model-couch-mark').click(function() {
		priceEndCouch = priceCouch * $('.amount-couch').val();
		endPrice();
		return priceEndCouch;
	})

	$('.model-armchair-mark').click(function() {
		priceEndArmchair = priceArmchair * $('.amount-armchair').val();
		endPrice();
		return priceEndArmchair;
	});
	$('.model-mattress-mark').click(function() {
		priceEndMattress = priceMattress * $('.amount-mattress').val();
		endPrice();
		return priceEndMattress;
	});


	$('.model-chair-mark').click(function() {
		priceEndChair = priceChair * $('.amount-chair').val();
		endPrice();
		return priceEndChair;
	});
	$('.model-carpet-mark').click(function() {
		priceEndCarpet = priceCarpet * $('.amount-carpet').val();
		endPrice();
		return priceEndCarpet;
	});
	$('.model-bean-mark').click(function() {
		priceEndBean = priceBean * $('.amount-bean').val();
		endPrice();
		return priceEndBean;
	});
	$('.model-sofa-mark').click(function() {
		priceEndSofa = priceSofa * $('.amount-sofa').val();
		endPrice();
		return priceEndSofa;
	});
	
	let priceEnd = 0;

	endPrice();

	$('.model-couch-hover').click(function() {
		priceEndCouch = 0;
		endPrice()
		return priceEndCouch
	});

	$('.model-armchair-hover').click(function() {
		priceEndArmchair = 0;
		endPrice()
		return priceEndArmchair
	});

	$('.model-sofa-hover').click(function() {
		priceEndSofa = 0;
		endPrice()
		return priceEndSofa
	});

	$('.model-mattress-hover').click(function() {
		priceEndMattress = 0;
		endPrice()
		return priceEndMattress
	});

	$('.model-Bean-hover').click(function() {
		priceEndBean = 0;
		endPrice()
		return priceEndBean
	});

	$('.model-chair-hover').click(function() {
		priceEndChair = 0;
		endPrice()
		return priceEndChair
	});

	$('.model-carpet-hover').click(function() {
		priceEndCarpet = 0;
		endPrice()
		return priceEndCarpet
	});

	function endPrice() {
		priceEnd = priceEndCarpet + priceEndArmchair + priceEndSofa + priceEndMattress + priceEndBean + priceEndChair + priceEndCouch;
		$('.js-price-end').text(priceEnd + 'тнг.');
		if (priceEnd < 500) {
			$('.js-discount').text('5%');
		}; 
		if (priceEnd > 500) {
			$('.js-discount').text('15%');
		};
		if (priceEnd > 1000) {
			$('.js-discount').text('20%');
		};
		if (priceEnd > 2000) {
			$('.js-discount').text('25%');
		};
	};

});
