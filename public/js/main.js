'use strict';
$(document).ready(function() {
	initializePage();
})

var count;
function initializePage() {
    $("#skip").click(changeActive);
    $("#photography").click(changeToPhotography);
    $("#illustration").click(changeToIllustration);
    $("#graphicdesign").click(changeToGraphicdesign);
    console.log("intialize");
    count = 0;
    var current = $("#"+count);
    current.attr('class', 'carousel-item active');

    var link = $("#linkToGiveFeedback");
    var newLink = '/givefeedback/' + count;
    link.attr('href', newLink);
}

function changeActive(e) {
	// Prevent following the link
	e.preventDefault();
    
    console.log("before: ", count);
    var currentPost= $("#"+count);
    currentPost.attr('class', 'carousel-item');

    count += 1;

    console.log("after: ", count);
    var newPost = $("#"+count);
    newPost.attr('class', 'carousel-item active');

    var link = $("#linkToGiveFeedback");
    var newLink = '/givefeedback/' + count;
    link.attr('href', newLink);
}


function changeToPhotography(e) {
    e.preventDefault();
    $("#dropdown").text("Photography");
    console.log("photography");
}

function changeToIllustration(e) {
    e.preventDefault();
    $("#dropdown").text("Illastration");
    console.log("illustration");
}

function changeToGraphicdesign(e) {
    e.preventDefault();
    $("#dropdown").text("Graphic Design");
    console.log("graphic design");
}