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

	game();

	function game() {
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
			clearTimeout(timer);
			index++;
			//Check if finished all questions
			if (index == 10) {
				//alert("done");
			//If not done with questions, go to next one and reset timer
			} else {
				timeLeft = 30;
				game();
			}
		//Display remaining time
		} else {
			$("#timer").text(timeLeft + " seconds remaining");
			timeLeft--;
		}
	}

	$(".option").click(function() {
		var answer = $(this).attr("id");
		if (index == 0) {
			if (answer == "option-1") {
				alert("You were right!");
			} else {
				alert("You were wrong!");
			}
		} else if (index == 1) {
			if (answer == "option-0") {
				alert("You were right!");
			} else {
				alert("You were wrong!");
			}
		} else if (index == 2) {
			if (answer == "option-3") {
				alert("You were right!");
			} else {
				alert("You were wrong!");
			}
		} else if (index == 3) {
			if (answer == "option-3") {
				alert("You were right!");
			} else {
				alert("You were wrong!");
			}
		} else if (index == 4) {
			if (answer == "option-2") {
				alert("You were right!");
			} else {
				alert("You were wrong!");
			}
		} else if (index == 5) {
			if (answer == "option-2") {
				alert("You were right!");
			} else {
				alert("You were wrong!");
			}
		} else if (index == 6) {
			if (answer == "option-0") {
				alert("You were right!");
			} else {
				alert("You were wrong!");
			}
		} else if (index == 7) {
			if (answer == "option-0") {
				alert("You were right!");
			} else {
				alert("You were wrong!");
			}
		} else if (index == 8) {
			if (answer == "option-0") {
				alert("You were right!");
			} else {
				alert("You were wrong!");
			}
		} else if (index == 9) {
			if (answer == "option-1") {
				alert("You were right!");
			} else {
				alert("You were wrong!");
			}
		}
	});




});


