$(document).ready(function() {
    $('.btnLeft').html('Prev');
	$('.btnRight').html('Next');
	$('.sum').html('120');
	$('.titlequest').html('<img src="images/question.png" width="25"><p>Question:</p>');
	$('.titleans').html('<img src="images/answer.png" width="25"><p>Answer:</p>');
	$('.header h1').html('Q & A');
});

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