'use strict';

$(document).ready(function() {
	initializePage();
	$(".next-btn").click(function() {
		console.log("button clicked");
	event.preventDefault();
	$(".storystyle p").text("The story will change when the 'Next Story' button is clicked.");
});
	$(".word-btn").click(function() {
		event.preventDefault();

		alert("Popup with words in the text will appear!");
	});
})

function initializePage() {
	console.log("Javascript connected!");
}

function changeInterest() {
	var interest = document.getElementById("interests").value;
	$(".storystyle p").text("This new story will be about " + interest + "!");
}