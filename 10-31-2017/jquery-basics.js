function main() {

//document.getElementById("google").innerHTML = "Google";
$('#google').html("Google");

//let links = document.getElementsByClassName("my-link");
let links = $(".my-link");

links[0].innerHTML = "Twitter";
links[0].href="http://www.twitter.com";
links[1].innerHTML = "TBD";
links[1].href="#";

//hide and show main text
$("#main-text").hide();
$("#main-text").fadeIn(2000);

//hide projects
$(".projects").hide();

//button click
$(".my-buttons").click(function () {

  $(this).next().slideToggle(500);
})

}

$(document).ready(main);
