// Countdown also starts at 60 seconds (same at the limit of the page timer)
var count = 60;

$(document).ready(function(){
  // Show the Game Div
  $("#game_container").show();

  startCountdown();
	return;
})

function countdown(){
  // Decrement the counter, down from 60 seconds
  count--;

  $("#done_button").on("click", function(){

    // Stop the countdown and run the timeUp function
    //clearInterval(startCountdown);
    count = 0; // <---- Needed a hack since I couldn't get the clearInterval function to work... It's been a long week :/
    return;

  });

  if(count == -1){

    // Collect the radio inputs
    timeUp();

    // Hide the game Div from the user
    $("#game_container").hide();

  }
}

//the countdown, increment is 1 second
function startCountdown(){

  setInterval(countdown, 1000);

}

// Function to be run after the timer is up
function timeUp(){
  // Show the completed Score Div
  $("#end_container").show();
}