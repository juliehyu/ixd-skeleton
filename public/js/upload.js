
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$("#photography").click(changeToPhotography);
    $("#illustration").click(changeToIllustration);
	$("#graphicdesign").click(changeToGraphicdesign);
	
	$("#prompt1").click(changeToPrompt1);
    $("#prompt2").click(changeToPrompt2);
    $("#prompt3").click(changeToPrompt3);
}

function inputFile(){
	$("#inpImg").click();
	$("#imgButton").addClass("disabled");
}

function removeFile(){
	$("#removeButton").click();
}

function inputImg(input){
	 if (input.files && input.files[0]) {
    	var reader = new FileReader();
    
    	reader.onload = function(e) {
      		$('#preview').attr('src', e.target.result);
      		//$('#inpImg').attr('name', e.target.result);
    	}
    
    	reader.readAsDataURL(input.files[0]);
  	}
	//var newImg = "source/images/" + document.getElementById("inpImg").files[0].name;
	//console.log(newImg);
	//$("#preview").attr("src", newImg);
	$("i.rmv_initial").addClass("rmv_final");
	$('#inpImg').attr('name', e.target.result);

}

function deleteImg(){
	$("#preview").attr("src", "source/images/default.jpg");
	$("i.rmv_initial").removeClass("rmv_final");
	$("#imgButton").removeClass("disabled");
}


function changeToPhotography(e) {
    e.preventDefault();
    $("#dropdown1").html("Photography");
}

function changeToIllustration(e) {
    e.preventDefault();
    $("#dropdown1").html("Illustration");
}

function changeToGraphicdesign(e) {
    e.preventDefault();
    $("#dropdown1").html("Graphic Design");
}

function changeToPrompt1(e) {
	e.preventDefault();
    $("#dropdown2").text("About the color");
}

function changeToPrompt2(e) {
	e.preventDefault();
    $("#dropdown2").text("About the layout");
}

function changeToPrompt3(e) {
	e.preventDefault();
    $("#dropdown2").text("About the lighting");
}