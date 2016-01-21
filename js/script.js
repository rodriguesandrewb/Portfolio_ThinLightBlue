var main = function() {
	$(window).scroll (function () {
		var sT = $(document).scrollTop();
		console.log(sT);
  	});

  	$('#navPlus').click(function() {
  		$('#dropDown').toggle();
  		console.log('in');
  	});

  	$('.twoNav').mouseleave(function() {
  		$('#dropDown').hide();
  	});

  	$('#dropDown').mouseleave(function() {
  		$(this).hide();
  	});

}

$(document).ready(main);