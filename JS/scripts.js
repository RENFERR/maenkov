var counter = 0;
var busketElement = document.getElementById('busket-counter');
var itemList =  document.getElementById('itemList');

function addItemToCart() {
    counter++;
    busketElement.innerText = counter;
}

/*function openPopup() {
    popup.style.visibility = 'visible';
}*/

// открыть по кнопке
$('.js-button-campaign').click(function() {	
	$('.js-overlay-campaign').fadeIn();
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		
	}
});