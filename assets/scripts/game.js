var timerLength = 25;
var waitLength = 5;

var buttons = [];
$("li").each(function() {
	buttons.push(this);
});

function timerText(timeLeft) {
	if (timeLeft <= 9) {
		$("#timerSpacer").text("0");
	} else {
		$("#timerSpacer").text("");
	}

	$("#timerText").text(timeLeft);
}

function shuffle(arr) {
	for (var i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random()*(i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

function startGame() {
	let timeLeft = 20;
	let questionsLeft = shuffle(Questions.slice())

	let wins = 0;
	let losses = 0;
	let misses = 0;

	let canAnswer = false;
	let curQ = 0;
	let cur = questionsLeft[curQ];

	let currentInterval = null;

	// Asynchronous control flow is fucking weird
	let end = function() {
		$("#timer").css({visibility: "hidden"})
		$("#question, #answers").css({display: "none"})
		$("#resultHeader, #results").css({display: "flex"})

		$("#winCounter").text(wins);
		$("#lossCounter").text(losses);
		$("#missCounter").text(misses);

		$("li").off();
	}

	let setUp = function() {
		for (var i = 0; i < 4; i++) {
			$(buttons[i]).text(cur.answers[i]);
		}

		$("li").removeClass("wrong correct");
		$("ul").addClass("userHover");

		$("#question").text(cur.question);

		timeLeft = timerLength;
		timerText(timeLeft);
		currentInterval = setInterval(function() {
			timerText(--timeLeft);

			if (timeLeft === 0) {
				clearInterval(currentInterval);
				misses++;
				$("#question").html("Time's up!<br>" + cur.defaultAfterText);
				nextQ();
			}
		}, 1000);

		canAnswer = true;
	}

	let nextQ = function() {

		$("ul").removeClass("userHover");
		$(buttons[cur.correct]).addClass("correct");

		timeLeft = waitLength;
		timerText(timeLeft);
		let int = setInterval(function() {
			timerText(--timeLeft);

			if (timeLeft === 0) {
				clearInterval(int);

				if (curQ + 1 < questionsLeft.length) {
					cur = questionsLeft[++curQ];
					setUp();
				} else {
					end();
				}
			}
		}, 1000);
	}

	$("li").on("click", function(e) {
		if (!canAnswer) { return; }
		canAnswer = false;

		if (currentInterval && timeLeft > 0) {
			clearInterval(currentInterval);

//			[ 1, 3, 4, 2 ].findIndex(x => x > 3) // 2
			let i = buttons.findIndex(x => x == this);
			let j = questionsLeft[curQ].correct;
			console.log(i, j)
			if (i == j) {
				wins++;
				$("#question").text("Correct!");
			} else {
				losses++;
				$("#question").text("Wrong!");
				$(this).addClass("wrong");
			}
			$("#question").append("<br>" + cur.afterText[i]);
			nextQ();
		}
	});

	setUp();
}
startGame();

$("#restartButton").on("click", function(e) {
	$("#timer").css({visibility: "inherit"});
	$("#question, #answers").css({display: "flex"});
	$("#resultHeader, #results").css({display: "none"});

	startGame();
});