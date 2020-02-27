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
	$("#1star").click(changeTo1Star);
    $("#2star").click(changeTo2Star);
    $("#3star").click(changeTo3Star);
    $("#4star").click(changeTo4Star);
    $("#5star").click(changeTo5Star);
}

function add(){
	
	if (count != maxCount){
		count += 1;
		$('#numStars').html(count);
	}
	
}

function minus(){
	if (count != minCount){
		count -= 1;
		$('#numStars').html(count);
    }
    
}

function changeTo1Star(e) {
    e.preventDefault();
    $("#dropdown").text("1");
    console.log("1 star");
}

function changeTo2Star(e) {
    e.preventDefault();
    $("#dropdown").text("2");
    console.log("2 star");
}

function changeTo3Star(e) {
    e.preventDefault();
    $("#dropdown").text("3");
    console.log("3 star");
}

function changeTo4Star(e) {
    e.preventDefault();
    $("#dropdown").text("4");
    console.log("4 star");
}

function changeTo5Star(e) {
    e.preventDefault();
    $("#dropdown").text("5");
    console.log("5 star");
}