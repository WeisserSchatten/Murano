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





	$('.options-sofa-img').click(function() {
		$('.options-sofa-img').addClass('-invisible');
		$('.sofa-options-second').addClass('-visible');
		$('.options-sofa-img-hover').addClass('-visible');
	});
	$('.options-carpet-img').click(function() {
		$('.options-carpet-img').addClass('-invisible');
		$('.carpet-options-second').addClass('-visible');
		$('.options-carpet-img-hover').addClass('-visible');
	});
	$('.options-mattress-img').click(function() {
		$('.options-mattress-img').addClass('-invisible');
		$('.mattress-options-second').addClass('-visible');
		$('.options-mattress-img-hover').addClass('-visible');
	});
	$('.options-chair-img').click(function() {
		$('.options-chair-img').addClass('-invisible');
		$('.chair-options-second').addClass('-visible');
		$('.options-chair-img-hover').addClass('-visible');
	});



	function FirstParameterSofa() {
		$('.options-sofa-img').removeClass('-invisible');
		$('.sofa-options-second').removeClass('-visible');
		$('.options-sofa-img-hover').removeClass('-visible');
	};
	function SecondParameterSofa() {
		$('.options-sofa-img').removeClass('-invisible');
		$('.sofa-options-first').removeClass('-visible');
		$('.options-sofa-img-hover').removeClass('-visible');
	};

	function FirstParameterChair() {
		$('.options-chair-img').removeClass('-invisible');
		$('.chair-options-second').removeClass('-visible');
		$('.options-chair-img-hover').removeClass('-visible');
	};
	function SecondParameterChair() {
		$('.options-chair-img').removeClass('-invisible');
		$('.chair-options-first').removeClass('-visible');
		$('.options-chair-img-hover').removeClass('-visible');
	}

	function FirstParameterCarpet() {
		$('.options-carpet-img').removeClass('-invisible');
		$('.carpet-options-second').removeClass('-visible');
		$('.options-carpet-img-hover').removeClass('-visible');
	}
	function SecondParameterCarpet() {
		$('.options-carpet-img').removeClass('-invisible');
		$('.carpet-options-first').removeClass('-visible');
		$('.options-carpet-img-hover').removeClass('-visible');
	}

	function FirstParameterMattress () {
		$('.options-mattress-img').removeClass('-invisible')
		$('.mattress-options-second').removeClass('-visible')
		$('.options-mattress-img-hover').removeClass('-visible');
	}
	function SecondParameterMattress () {
		$('.options-mattress-img').removeClass('-invisible');
		$('.mattress-options-first').removeClass('-visible');
		$('.options-mattress-img-hover').removeClass('-visible');
	}



	$('.options-mattress-img-hover').click(FirstParameterMattress)
	$('.mattress-options-first').click(FirstParameterMattress())
	$('.mattress-options-second').click( SecondParameterMattress() );


});