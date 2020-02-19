

var losses = 0;
var wins = 0;
var usernumber = 0;

var compnumber = Math.floor(Math.random() * 40) + 20;
var bluen = Math.floor(Math.random() * 10) + 1;
var orangen = Math.floor(Math.random() * 10) + 1;
var pinkn = Math.floor(Math.random() * 10) + 1;
var redn = Math.floor(Math.random() * 10) + 1;


var blueg = $("#bluegem")
var orangeg = $("#orangegem")
var pinkg = $("#pinkgem")
var redg = $("#redgem")


$(document).ready(function () {

    $("#guess").text(compnumber);
    $("#usertotal").text(usernumber);
    $("#winsc").text(wins);
    $("#lossesc").text(losses);

    function winOrLoss() {
        if (usernumber === compnumber) {
            wins++
            $("#winxloss").text("You Won! Click to play again!")
            usernumber = 0;
            bluen = Math.floor(Math.random() * 10) + 1;
            orangen = Math.floor(Math.random() * 10) + 1;
            pinkn = Math.floor(Math.random() * 10) + 1;
            redn = Math.floor(Math.random() * 10) + 1;
            compnumber = Math.floor(Math.random() * 40) + 20;
        }
        if (usernumber > compnumber) {
            losses++
            $("#winxloss").text("You Loss! Click to play again!")
            usernumber = 0;
            bluen = Math.floor(Math.random() * 10) + 1;
            orangen = Math.floor(Math.random() * 10) + 1;
            pinkn = Math.floor(Math.random() * 10) + 1;
            redn = Math.floor(Math.random() * 10) + 1;
            compnumber = Math.floor(Math.random() * 40) + 20;
        }
    }
// This function is so that the computer score persists after the user has either won or loss so they can compare thier numbers.
    function restart() {
        $("#winxloss").empty();
        $("#guess").text(compnumber);

    }

    function winLossCounter() {
        $("#winsc").text(wins);
        $("#lossesc").text(losses);
    }


    $(blueg).on("click", function () {
        usernumber = usernumber + bluen
        $("#usertotal").text(usernumber);
        restart();
        winOrLoss();
        winLossCounter();
    });
    $(orangeg).on("click", function () {
        usernumber = usernumber + orangen
        $("#usertotal").text(usernumber);
        restart();
        winOrLoss();
        winLossCounter();
    });
    $(pinkg).on("click", function () {
        usernumber = usernumber + pinkn
        $("#usertotal").text(usernumber);
        restart();
        winOrLoss();
        winLossCounter();
    });
    $(redg).on("click", function () {
        usernumber = usernumber + redn
        $("#usertotal").text(usernumber);
        restart();
        winOrLoss();
        winLossCounter();
    });


})