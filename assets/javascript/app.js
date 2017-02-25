$(document).ready(function(){

	var questionBank = {
		"questions": [
		{
			"question": "Out of all the Digimon in the Digidestined group, who is the last to digivolve to the Champion level?",
			"answers": [
			"Palmon",
			"Patamon",
			"Gomamon",
			"Tentomon"
			]
		},
		{
			"question": "In 'Wizardmon's Gift', whose idea was it to transfer all of the Digimon's power to Angewomon in order to defeat Myotismon?",
			"answers": [
			"Garudamon",
			"Kari",
			"Izzy",
			"Wizardmon"
			]
		},
		{
			"question": "Which one of these Digimon is not associated with the Dark Masters?",
			"answers": [
			"Scorpiomon",
			"Gigadramon",
			"LadyDevimon",
			"DemiDevimon"
			]
		},
		{
			"question": "Who was the last person out of the original seven Digidestined to obtain their crest?",
			"answers": [
			"T.K.",
			"Joe",
			"Mimi",
			"Sora"
			]
		},
		{
			"question": "Who was Gatomon's best non-human friend?",
			"answers": [
			"DemiDevimon",
			"Chuumon",
			"Wizardmon",
			"Miko"
			]
		},
		{
			"question": "Where is Infinity Mountain located?",
			"answers": [
			"It does not exist",
			"Server",
			"File Island",
			"Highton View Terrace"
			]
		},
		{
			"question": "This Digimon met Tai and Izzy in the sewers of Machinedramon's city and was looking for Digimon to create an army to oppose the Dark Masters. Who was he?",
			"answers": [
			"Andromon",
			"Leomon",
			"Meramon",
			"Frigimon"
			]
		},
		{
			"question": "Who was the last Digidestined to join in the fight against Piedmon?",
			"answers": [
			"Mimi",
			"Matt",
			"Joe",
			"Kari"
			]
		},
		{
			"question": "Which one of these attacks belongs to Myotismon?",
			"answers": [
			"Crimson Lightning",
			"Death Claw",
			"Darkness Wing",
			"Touch of Evil"
			]
		},
		{
			"question": "These Digimon were once infatuated with Mimi, but later on came to call Kari their queen. Who are they?",
			"answers": [
			"Gekomon",
			"Numemon",
			"Otamamon",
			"Yokomon"
			]
		},
		]
	}

	var answerKey = [1, 0, 3, 3, 2, 2, 0, 0, 0, 1];

	var index = 0;
	var timeLeft = 29;
	var timer;
	var shortTimer;
	var wins = 0;
	var losses = 0;
	var unanswered = 0;
	var digimon = ["Patamon", "birdramon", "DemiDevimon", "Sora+digimon", "digimon+sad", "digimon+game",
	"digimon+adventure+02", "Mimi+digimon", "Myotismon", "Numemon"];

	game();

	function game() {
		clearTimeout(shortTimer);
		timer = setInterval(countdown, 1000);
		$("#question").text(questionBank.questions[index].question);
		$("#option-0").text(questionBank.questions[index].answers[0]);
		$("#option-1").text(questionBank.questions[index].answers[1]);
		$("#option-2").text(questionBank.questions[index].answers[2]);
		$("#option-3").text(questionBank.questions[index].answers[3]);

	}

	function countdown() {
		//Time is up
		if (timeLeft == -1) {
			timeUp(index, answerKey[index]);
		//Display remaining time
	} else {
		$("#timer").text(timeLeft + " seconds remaining");
		timeLeft--;
	}
}

$(".option").click(function() {
	var answer = $(this).attr("id");
	clearTimeout(timer);
	if (index == 0) {
		if (answer == "option-1") {
			correct(index, answerKey[index]);
		} else {
			wrong(index, answerKey[index]);
		}
	} else if (index == 1) {
		if (answer == "option-0") {
			correct(index, answerKey[index]);
		} else {
			wrong(index, answerKey[index]);
		}
	} else if (index == 2) {
		if (answer == "option-3") {
			correct(index, answerKey[index]);
		} else {
			wrong(index, answerKey[index]);
		}
	} else if (index == 3) {
		if (answer == "option-3") {
			correct(index, answerKey[index]);
		} else {
			wrong(index, answerKey[index]);
		}
	} else if (index == 4) {
		if (answer == "option-2") {
			correct(index, answerKey[index]);
		} else {
			wrong(index, answerKey[index]);
		}
	} else if (index == 5) {
		if (answer == "option-2") {
			correct(index, answerKey[index]);
		} else {
			wrong(index, answerKey[index]);
		}
	} else if (index == 6) {
		if (answer == "option-0") {
			correct(index, answerKey[index]);
		} else {
			wrong(index, answerKey[index]);
		}
	} else if (index == 7) {
		if (answer == "option-0") {
			correct(index, answerKey[index]);
		} else {
			wrong(index, answerKey[index]);
		}
	} else if (index == 8) {
		if (answer == "option-0") {
			correct(index, answerKey[index]);
		} else {
			wrong(index, answerKey[index]);
		}
	} else if (index == 9) {
		if (answer == "option-1") {
			correct(index, answerKey[index]);
		} else {
			wrong(index, answerKey[index]);
		}
	}
});

function correct(ind, ans) {
	clearTimeout(timer);
	$("#question").text("Correct!");
	$(".option").empty();
	timeLeft = 30;
	wins++;
	// Constructing a URL to search Giphy for the name of the person who said the quote
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	digimon[index] + "&api_key=dc6zaTOxFJmzC&limit=1";

	// Performing our AJAX GET request
	$.ajax({
		url: queryURL,
		method: "GET"
	})
    // After the data comes back from the API
    .done(function(response) {
        // Storing an array of results in the results variable
        var results = response.data;
        var gif = $("<img>");
        gif.attr("src", results[0].images.fixed_height.url);
        $("#option-1").append(gif);
    });
    index++;
    if (index == 10) {
    	shortTimer = window.setTimeout(gameComplete, 5000);
    } else {
    	shortTimer = window.setTimeout(game, 5000);
    }
}

function wrong(ind, ans) {
	clearTimeout(timer);
	$("#question").text("Wrong!");
	$(".option").empty();
	$("#option-0").text("The correct answer was: " + questionBank.questions[ind].answers[ans]);
	timeLeft = 30;
	losses++;
	// Constructing a URL to search Giphy for the name of the person who said the quote
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	digimon[index] + "&api_key=dc6zaTOxFJmzC&limit=1";

    // Performing our AJAX GET request
    $.ajax({
    	url: queryURL,
    	method: "GET"
    })
    // After the data comes back from the API
    .done(function(response) {
        // Storing an array of results in the results variable
        var results = response.data;
        var gif = $("<img>");
        gif.attr("src", results[0].images.fixed_height.url);
        $("#option-1").append(gif);
    });
    index++;
    if (index == 10) {
    	shortTimer = window.setTimeout(gameComplete, 5000);
    } else {
    	shortTimer = window.setTimeout(game, 5000);
    }
}

function timeUp(ind, ans) {
	clearTimeout(timer);
	$("#question").text("You ran out of time!");
	$(".option").empty();
	$("#option-0").text("The correct answer was: " + questionBank.questions[ind].answers[ans]);
	timeLeft = 30;
	unanswered++;
		// Constructing a URL to search Giphy for the name of the person who said the quote
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
		digimon[index] + "&api_key=dc6zaTOxFJmzC&limit=1";

      	// Performing our AJAX GET request
      	$.ajax({
      		url: queryURL,
      		method: "GET"
      	})
        // After the data comes back from the API
        .done(function(response) {
          	// Storing an array of results in the results variable
          	var results = response.data;
          	var gif = $("<img>");
          	gif.attr("src", results[0].images.fixed_height.url);
          	$("#option-1").append(gif);
          });
        index++;
        if (index == 10) {
        	shortTimer = window.setTimeout(gameComplete, 5000);
        } else {
        	shortTimer = window.setTimeout(game, 5000);
        }
    }

    function gameComplete() {
    	clearTimeout(timer);
    	clearTimeout(shortTimer);
    	$("#question").text("Game Over!");
    	$(".option").empty();
    	$("#option-0").text("Correct Answers: " + wins);
    	$("#option-1").text("Incorrect Answers: " + losses);
    	$("#option-2").text("Unanswered: " + unanswered);
    	$("#option-3").text("Play Again?");

    	$("#option-3").click(function() {
    		wins = 0;
    		losses = 0;
    		unanswered = 0;
    		index = 0;
    		game();
    	});

    }

});


