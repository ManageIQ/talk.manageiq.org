const link = "https://web.archive.org/web/" + window.location.href;
document.querySelector("#link").setAttribute('href', link);

setInterval(function() {
	let counter = document.querySelector("#counter");
	let count = counter.textContent * 1 - 1;
	counter.textContent = count;
	if (count <= 0) {
		window.location.replace(link);
	}
}, 1000);
