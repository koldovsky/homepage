//document.addEventListener("DOMContentLoaded", gimmeLabel());

//function startTheDance() {}

function gimmeSpan(class1, class2, string) {
	var newspan = document.createElement("span");
	var t = document.createTextNode('yes');
	newspan.appendChild(t);
	newspan.setAttribute('class', class1 + ' ' + class2);	
	main.appendChild(newspan);

	$(function () {
		$(newspan).typed({
			strings: [string],
			typeSpeed: 20,
			startDelay: 1000
		});
	});
}

function gimmeBr() {
	
}

gimmeSpan('c2', 'l4', ' you did it!');