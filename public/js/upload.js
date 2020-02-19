
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("check");
    
}

function inputFile(){
	$("#inpImg").click();
	$("#imgButton").addClass("disabled");
}

function removeFile(){
	$("#removeButton").click();
}

function inputImg(input){
	var newImg = "source/images/" + document.getElementById("inpImg").files[0].name;
	console.log(newImg);
	$("#preview").attr("src", newImg);
	$("i.rmv_initial").addClass("rmv_final");
}

function deleteImg(){
	$("#preview").attr("src", "source/images/default.jpg");
	$("i.rmv_initial").removeClass("rmv_final");
	$("#imgButton").removeClass("disabled");
}


