'use strict';
$(document).ready(function() {
	initializePage();
})

var count;
function initializePage() {
    $("#skip").click(changeActive);
    console.log("intialize");
    count = 1;
    var current = $("#"+count);
    current.attr('class', 'item active');

    var link = $("#linkToGiveFeedback");
    var newLink = '/givefeedback/' + count;
    link.attr('href', newLink);
}

function changeActive(e) {
	// Prevent following the link
	e.preventDefault();
    console.log("skip");
    
    console.log("before: ", count);
    var current= $("#"+count);
    current.attr('class', 'item');

    count += 1;

    console.log("after: ", count);
    var current = $("#"+count);
    current.attr('class', 'item active');

    var link = $("#linkToGiveFeedback");
    var newLink = '/givefeedback/' + count;
    link.attr('href', newLink);
}