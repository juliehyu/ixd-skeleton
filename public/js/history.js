$(document).ready(function() {
	initializePage();
})
var count;
var maxCount;
var minCount;
function initializePage() {
	maxCount = 5;
	minCount = 0;
    count = 0;
	$(".1star").click(changeTo1Star);
    $(".2star").click(changeTo2Star);
    $(".3star").click(changeTo3Star);
    $(".4star").click(changeTo4Star);
    $(".5star").click(changeTo5Star);
    $(".adding").click(add);
    $(".subtracting").click(minus);
    // $(".submitBtn").click(submitEvent);
}


function add(){
    var starItem = $(this).parents('.rating').find('h5')
    var currentStar = starItem.text();
    var starInput = $(this).parents('.rating').parents('#rateFB').find('#hiddenStars');
    if (currentStar != maxCount){
        currentStar++;
        starItem.text(currentStar);
        starInput.attr("value", currentStar);
    }
    ga('send', 'event', 'rating', 'click');
}

function minus(){
    var starItem = $(this).parents('.rating').find('h5')
    var currentStar = starItem.text();
    var starInput = $(this).parents('.rating').parents('#rateFB').find('#hiddenStars');
	if (currentStar != minCount){
        currentStar--;
        starItem.text(currentStar);
        starInput.attr("value", currentStar);
    }
    ga('send', 'event', 'rating', 'click');
}

function changeTo1Star(e) {
    e.preventDefault();
    var dropdownText = $(this).parents('#rateFB').find('.ratingA').find('.myBtn');
    dropdownText.html('<i class="fas fa-star" style="color: white"></i> 1 ');
    var starInput = $(this).parents('#rateFB').find('#hiddenStars');
    starInput.attr("value", 1);
    console.log("1 star");
    ga('send', 'event', 'rating', 'click');
}

function changeTo2Star(e) {
    e.preventDefault();
    var dropdownText = $(this).parents('#rateFB').find('.ratingA').find('.myBtn');
    dropdownText.html('<i class="fas fa-star" style="color: white"></i> 2 ');
    var starInput = $(this).parents('#rateFB').find('#hiddenStars');
    starInput.attr("value", 2);
    console.log("2 star");
    ga('send', 'event', 'rating', 'click');
}

function changeTo3Star(e) {
    e.preventDefault();
    var dropdownText = $(this).parents('#rateFB').find('.ratingA').find('.myBtn');
    dropdownText.html('<i class="fas fa-star" style="color: white"></i> 3 ');
    var starInput = $(this).parents('#rateFB').find('#hiddenStars');
    starInput.attr("value", 3);
    console.log("3 star");
    ga('send', 'event', 'rating', 'click');
}

function changeTo4Star(e) {
    e.preventDefault();
    var dropdownText = $(this).parents('#rateFB').find('.ratingA').find('.myBtn');
    dropdownText.html('<i class="fas fa-star" style="color: white"></i> 4 ');
    var starInput = $(this).parents('#rateFB').find('#hiddenStars');
    starInput.attr("value", 4);
    console.log("4 star");
    ga('send', 'event', 'rating', 'click');
}

function changeTo5Star(e) {
    e.preventDefault();
    var dropdownText = $(this).parents('#rateFB').find('.ratingA').find('.myBtn');
    dropdownText.html('<i class="fas fa-star" style="color: white"></i> 5 ');
    var starInput = $(this).parents('#rateFB').find('#hiddenStars');
    starInput.attr("value", 5);
    console.log("5 star");
    ga('send', 'event', 'rating', 'click');
}

// function submitEvent(e){
//    e.preventDefault();
//    ga('send', 'event', 'submit', 'click');
//    console.log("submit");
// }