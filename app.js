var counter = 0;
$(document).ready(function() {

	$('#generate').append('<button class="generate-button">Generate</button>');

	$('.generate-button').on('click', appendDOM )
	$('#generate').on('click', '.clickNumber', showCount);



$('#delete').on('click', function() {
		$('#delete').remove();
	});

$('#change').on('click', function() {

		$('#container').css("background-color", "white");
		$(this).css("background-color", "red");
	});





});


function appendDOM() {
	counter++;
	$('#container').append('<button class="delete-button" id="delete">Delete</button>');
	$('#container').append('<button class="change-button" id="change">Change</button>');

	var $el = $('#generate').children().last();
	$el.data("clickValue", counter);
	
	$el.append('<p class="clickNumber">Clicked: ' + counter + '</p>');
}

function showCount(){
	console.log($(this).parent().data(''))
}


