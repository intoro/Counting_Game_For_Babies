$(document).ready(function(){
	var clickCallbackser = $.Callbacks();
	var clickCallbacky = $.Callbacks();


	clickCallbackser.add(function() {
	    var count = parseInt(this.text(), 10);
	    this.text(count + 1);
	});
	clickCallbacky.add(function() {
			var count = parseInt(this.text(), 10);
			this.text(count + 2);
	});


	clickCallbackser.add(function(id) {
	    $('span', '#last').text(id);
			$('div', '#lastly').text(id);
			$('span', '#last').text(id);
	});

	clickCallbacky.add(function(id) {
			$('div', '#lastly').text(id);
	});

	$('.clicker').click(function() {
	    var $element = $(this).next('div').find('[id^="clickCount"]');
	    clickCallbackser.fireWith($element, [this.id]);
	});
	$('.click').click(function() {
	    var $element = $(this).next('div').find('[id^="clickCount"]');
	    clickCallbacky.fireWith($element, [this.id]);
	});



});
