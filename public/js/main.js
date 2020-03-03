'use strict';
$(document).ready(function() {
	initializePage();
})

function initializePage() {
    $("#skip").click(changeActive);
    $("#photography").click(changeToPhotography);
    $("#illustration").click(changeToIllustration);
    $("#graphicdesign").click(changeToGraphicdesign);
    console.log("intialize");
    localStorage.setItem("count", 0);
    
    var current = $("#0");
    current.attr('class', 'carousel-item active');

    var link = $("#linkToGiveFeedback");
    var newLink = '/givefeedback/0';
    link.attr('href', newLink);
}

function changeActive(e) {
	// Prevent following the link
	e.preventDefault();
    var count = parseInt(localStorage.getItem("count"));
    var currentPost= $("#"+count);
    currentPost.attr('class', 'carousel-item');

    count += 1;
    localStorage.removeItem("count");
    localStorage.setItem("count", count);

    var newPost = $("#"+count);
    newPost.attr('class', 'carousel-item active');

    var link = $("#linkToGiveFeedback");
    var newLink = '/givefeedback/' + count;
    link.attr('href', newLink);
}

function changeToPhotography(e) {
    e.preventDefault();
    $("#dropdown").html("Photography");
    console.log("photography");
}

function changeToIllustration(e) {
    e.preventDefault();
    $("#dropdown").html("Illustration");
    console.log("Illustration");
}

function changeToGraphicdesign(e) {
    e.preventDefault();
    $("#dropdown").html("Graphic Design");
    console.log("graphic design");
}