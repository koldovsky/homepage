//document.addEventListener("DOMContentLoaded", gimmeLabel());

//function startTheDance() {}

function gimmeSpan(class1, class2, openingTagString, closingTagString, string, breaks) {
	paragraph = document.createElement("p");
	var newspanOne = document.createElement("span");
	var newspanTwo = document.createElement("span");
	var newspanThree = document.createElement("span");
	//var t = document.createTextNode('yes');
	var tnode = document.createTextNode(closingTagString);	
	paragraph.appendChild(newspanOne);
	paragraph.appendChild(newspanTwo);
	//paragraph.appendChild(newspanThree);
	//newspan.appendChild(t);
	newspanTwo.setAttribute('class', 'c4');	
		
	main.appendChild(paragraph);	

	$(function () {
		$(newspanOne).typed({
			strings: [openingTagString+'^30'],
			typeSpeed: 50,
			startDelay: 500,			
			callback: function() {
				paragraph.setAttribute('class', class1 + ' ' + class2);
				$(".typed-cursor").remove();
				var tnode1 = document.createTextNode('1');				
				newspanThree.appendChild(tnode);
				paragraph.appendChild(newspanThree);
				
				$(function () {
					$(newspanTwo).typed({							
						strings: [string+'^100'],
						typeSpeed: 50,
						startDelay: 500,
						callback: ( function() {
							$(".typed-cursor").remove();
							//gimmeSpan('c3', 'l3', '<mail>', '</nail>', ' nomail ',0);
							return true;
						})
					});
				});
			}
		});
		
	});
}


gimmeSpan('c3', 'l3', '<gender>', '</gender>', ' male ',0);
//gimmeSpan('c3', 'l3', '<mail>', '</mail>', ' nomail ',0);