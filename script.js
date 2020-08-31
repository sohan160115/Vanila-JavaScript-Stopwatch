window.onload = function () {
	var seconds = 00;
	var tens = 00;

	var appendTens = document.querySelector("#tens");
	var appendSeconds = document.querySelector("#seconds");
	var start = document.querySelector("#start");
	var stop = document.querySelector("#stop");
	var reset = document.querySelector("#reset");

	var interval;

	start.addEventListener("click", function () {
		clearInterval(interval);
		interval = setInterval(startTimer, 10);
	});

	stop.addEventListener("click", function () {
		clearInterval(interval);
	});

	reset.addEventListener("click", function () {
		clearInterval(interval);
		seconds = "00";
		tens = "00";
		appendTens.innerHTML = tens;
		appendSeconds.innerHTML = seconds;
	});

	function startTimer() {
		tens++;

		if (tens < 9) {
			appendTens.innerHTML = "0" + tens;
		}

		if (tens > 9) {
			appendTens.innerHTML = tens;
		}

		if (tens > 99) {
			seconds++;

			appendSeconds.innerHTML = "0" + seconds;

			tens = 0;
			appendTens.innerHTML = "0" + 0;
		}

		if (seconds > 9) {
			appendSeconds.innerHTML = seconds;
		}
	}
};
