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

	for(var i = 0;i < 10; i++) {
		var timeLeft = 3;
		var timer = setInterval(countdown, 1000);
		$("#question").text(questionBank.questions[i].question);
		$("#option-0").text(questionBank.questions[i].answers[0]);
		$("#option-1").text(questionBank.questions[i].answers[1]);
		$("#option-2").text(questionBank.questions[i].answers[2]);
		$("#option-3").text(questionBank.questions[i].answers[3]);
	}

	
	function countdown() {
		if (timeLeft == 0) {
			clearTimeout(timer);
		} else {
			$("#timer").text(timeLeft + " seconds remaining");
			timeLeft--;
		}
	}


	$("#option-0").click(function() {
		alert("Option 0");
	});

	$("#option-1").click(function() {
		alert("Option 1");
	});


});


