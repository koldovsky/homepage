//document.addEventListener("DOMContentLoaded", gimmeLabel());

//function startTheDance() {}

function gimmeLabel(class1, class2, string) {
	var label = document.createElement("label");
	var t = document.createTextNode('yes');
	label.appendChild(t);
	label.setAttribute('class', class1 + ' ' + class2);	
	main.appendChild(label);

	var letter;
	for (var i = 0; i < string.length; i++) {
		letter = string[i];
		setTimeout(function() {label.innerHTML += letter}, 500); //в этом месте задержки нет :(
	}
}

function gimmeBr() {
	
}

function print(string) {
	for(var i = 0; i<string.length; i++) {
		
	}
}


gimmeLabel('c2', 'l4', ' you did it!');