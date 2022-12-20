const link = "https://web.archive.org/web/" + window.location.href;
document.querySelector("#link").setAttribute('href', link);

const interval = setInterval(function() {
	let counter = document.querySelector("#counter");
	let count = counter.textContent * 1 - 1;
	counter.textContent = count;
	if (count <= 0) {
		clearInterval(interval);
		window.location.replace(link);
	}
}, 1000);
