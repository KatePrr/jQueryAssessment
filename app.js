var counter = 0;
$(document).ready(function() {

	$('.buttonDiv').on('click', '.generateButton', appendDOM);
	$('.container').on('click', '.delete-button', deleteButton);
	$('.container').on('click', '.change-button', changeColor);
});

function appendDOM() {
	counter++;
	var newDiv = $('.container').append('<div class="newDiv"></div>');

	$('.container').children().last().append('<button class="delete-button">Delete</button>');
	$('.container').children().last().append('<button class="change-button">Change</button>');

	var $el = $('#countNumber').text('Clicked: '+ counter);
}

function deleteButton(){
		$(this).parent().remove();
}

function changeColor(){
	$(this).parent().toggleClass("colored");
}