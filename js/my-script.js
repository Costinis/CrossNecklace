
$(function() {

	$.getJSON('data2.json', function(data) {
		var template = $('#speak').html();
		var html = Mustache.to_html(template, data);
		$('.container1').html(html);		
		
		$('.container1').cycle({
			fx: 'shuffle',
			pause: 1,
			next: '.btnRight',
			prev: '.btnLeft',
			speed: 500,
			timeout: 0
		});
		
	}); //getJSON
	
	$.getJSON('number.json', function(data) {
		var template = $('#count').html();
		var html = Mustache.to_html(template, data);
		$('.nr').html(html);		
		
		$('.nr').cycle({
			fx: 'fade',
			pause: 1,
			next: '.btnRight',
			prev: '.btnLeft',
			speed: 500,
			timeout: 0
		});
		
	}); //getJSON
	
}); //function