// IF statement
if (1 === 1) {
	console.log("its true");
}
let rating = 3;

if (rating > 3) {
	console.log("you are a superstar!");
}

let num = 37;

if (num % 2 !== 0) {
	console.log("odd number");
}

// IF-ELSE IF
if (rating === 3) {
	console.log("You are a Superstar!");
} else if (rating == 2) {
	console.log("Meets expectations!");
} else if (rating == 1) {
	console.log("Needs Improvement!");
}

// ELSE

if (rating === 3) {
	console.log("You are a Superstar!");
} else if (rating == 2) {
	console.log("Meets expectations!");
} else if (rating == 1) {
	console.log("Needs Improvement!");
} else {
	console.log("invalid rating!");
}

let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
	console.log(`Congrats, you have the new high score of ${userScore}`);
	highScore = userScore;
} else {
	console.log(
		`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`,
	);
}

// Nesting Conditionals
let password = "datdaa";
if (password.length >= 6) {
	if (password.indexOf(" ") === -1) {
		console.log("Valid Password!");
	} else {
		console.log("Password is long enough, but cannot contain spaces");
	}
} else {
	console.log("password must be longer");
}
