// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

// define var for targetScore to generate random number between 12 and 99 and display on HMTL class targetscore.

var targetScore = Math.floor(Math.random() * 101) + 19;
console.log(targetScore);
$(".targetScore").text(targetScore);  // ? how to write this like the document.getelement way?//

// wins and losses var 

var wins = 0;
var losses = 0;
$(".wins").text(wins);
$(".losses").text(losses);


//your score var and display
var yourScore = 0;
$(".yourScore").text(yourScore);











});

