// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");

    // define var for targetScore to generate random number between 20 and 99 and display on HMTL class targetscore.

    var targetScore = Math.floor(Math.random() * 101) + 19;
    console.log(targetScore);
    $(".targetScore").text(targetScore);

    // wins and losses var 

    var wins = 0;
    var loss = 0;
    $("#wins").text(wins);
    $("#loss").text(loss);


    //your score var and display
    var yourScore = 0;
    $(".yourScore").text(yourScore);

    //define var for all color crystals and generate random number between 1 and 12

    $(function () {
        $(".goldenCrystal").click(function () {
            var goldenCrystal = Math.floor(Math.random() * 12) + 1;
            console.log(goldenCrystal);
            $(".goldenCrystal").push(yourScore);

        });
        $(".greenCrystal").click(function () {
            var greenCrystal = Math.floor(Math.random() * 12) + 1;
            console.log(greenCrystal);
            $(".greenCrystal").push(yourScore);

        });

        $(".indicoCrystal").click(function () {
            // alert("click");
            var indicoCrystal = Math.floor(Math.random() * 12) + 1;
            console.log(indicoCrystal);
            $(".indicoCrystal").push(yourScore);

        });

        $(".pinkCrystal").click(function () {
            // alert("click");
            var pinkCrystal = Math.floor(Math.random() * 12) + 1;
            console.log(pinkCrystal);
            $(".pinkCrystal").push(yourScore);

        });

    });

});

