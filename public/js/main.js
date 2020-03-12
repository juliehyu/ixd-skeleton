'use strict';
$(document).ready(function() {
	initializePage();
})

function initializePage() {
    $("#skipP").click(changeActive);
    $("#skipI").click(changeActive);
    $("#skipG").click(changeActive);
    $("#photography").click(changeToPhotography);
    $("#illustration").click(changeToIllustration);
    $("#graphicdesign").click(changeToGraphicdesign);
    console.log("intialize");
    localStorage.setItem("count", 0);
    
    var current = $("#0");
    current.attr('class', 'carousel-item active');

    var link = $(".linkToGiveFeedback");
    var newLink = '/givefeedback/0';
    link.attr('href', newLink);

    $('#I').hide();
    $('#G').hide();
}

function changeActive(e) {
	// Prevent following the link
	e.preventDefault();
    // var count = parseInt(localStorage.getItem("count"));
    // var currentPost= $("#"+count);
    // currentPost.attr('class', 'carousel-item');

    // count += 1;
    // if(count == 8) count = 0;
    // localStorage.removeItem("count");
    // localStorage.setItem("count", count);

    // var newPost = $("#"+count);
    // newPost.attr('class', 'carousel-item active');

    // var link = $("#linkToGiveFeedback");
    // var newLink = '/givefeedback/' + count;
    // link.attr('href', newLink);


    var nowPost = $(this).parents(".text-center").parents(".posts").find(".active");
    var newPost = nowPost.next();
    if(jQuery.type(newPost.attr('id')) === "undefined"){
        console.log("reach the end");
    }else {
        console.log(nowPost.attr('id'));
        nowPost.attr('class', 'carousel-item');

        var newPost = nowPost.next();
        newPost.attr('class', 'carousel-item active');
        var newPostId = newPost.attr('id');

        var link = $(".linkToGiveFeedback");
        var newLink = '/givefeedback/' + newPostId;
        link.attr('href', newLink);
    }
}

function changeToPhotography(e) {
    e.preventDefault();
    var current = $("#0");
    current.attr('class', 'carousel-item active');


    var link = $(".linkToGiveFeedback");
    var newLink = '/givefeedback/0';
    link.attr('href', newLink);

    $("#dropdown").html("Photography");
    $('#P').show();
    $('#I').hide();
    $('#G').hide();
    console.log("photography");
}

function changeToIllustration(e) {
    e.preventDefault();
    var current = $("#3");
    current.attr('class', 'carousel-item active');

    var link = $(".linkToGiveFeedback");
    var newLink = '/givefeedback/3';
    link.attr('href', newLink);

    $("#dropdown").html("Illustration");
    $('#P').hide();
    $('#I').show();
    $('#G').hide();
    console.log("Illustration");
}

function changeToGraphicdesign(e) {
    e.preventDefault();
    var current = $("#4");
    current.attr('class', 'carousel-item active');

    var link = $(".linkToGiveFeedback");
    var newLink = '/givefeedback/4';
    link.attr('href', newLink);

    $('#P').hide();
    $('#I').hide();
    $('#G').show();
    $("#dropdown").html("Graphic Design");
    console.log("graphic design");
}