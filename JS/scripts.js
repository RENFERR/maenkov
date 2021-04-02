var counter = 0;
var busketElement = document.getElementById('busket-counter');
function addItemToCart() {
    counter++;
    busketElement.innerText = counter;
}
