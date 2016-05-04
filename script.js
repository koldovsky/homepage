//document.addEventListener("DOMContentLoaded", gimmeLabel());

//function startTheDance() {}

function gimmeSpan(class1, class2, openingTagString, closingTagString, string, breaks, before) {
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
		
	//main.appendChild(paragraph);
	
	$(paragraph).insertBefore(before);

	$(function () {
		$(newspanOne).typed({
			strings: [openingTagString+'^30'],
			typeSpeed: 20,
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
						typeSpeed: 20,
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

function gimmeParagraph(class1, class2, id, openingTagString, closingTagString, before) {
	paragraphOne = document.createElement("p");
	paragraphTwo = document.createElement("p");	
	var tnode = document.createTextNode(closingTagString);	
	/*if(before=='') {
		main.appendChild(paragraphOne);
	} else {
		$(paragraphOne).insertBefore(before);
	}*/
	$(paragraphOne).insertBefore(before);

	$(function () {
		$(paragraphOne).typed({
			strings: [openingTagString+'^30'],
			typeSpeed: 50,
			startDelay: 500,			
			callback: function() {
				paragraphOne.setAttribute('class', class1 + ' ' + class2);
				$(".typed-cursor").remove();							
				paragraphTwo.appendChild(tnode);
				//main.appendChild(paragraphTwo);
				$(paragraphTwo).insertBefore(before);
				paragraphTwo.setAttribute('class', class1 + ' ' + class2);
				paragraphTwo.setAttribute('id', id);
			}
		});		
	});
}

function beginning() {
	paragraphOne = document.createElement("p");
	paragraphTwo = document.createElement("p");	
	var tnode = document.createTextNode("</MoryaAnton>");
	main.appendChild(paragraphOne);

	$(function () {
		$(paragraphOne).typed({
			strings: ["<MoryaAnton>"+'^30'],
			typeSpeed: 50,
			startDelay: 500,			
			callback: function() {
				paragraphOne.setAttribute('class', 'c1 l1');
				$(".typed-cursor").remove();							
				paragraphTwo.appendChild(tnode);
				main.appendChild(paragraphTwo);
				paragraphTwo.setAttribute('class', 'c1 l1');
				paragraphTwo.setAttribute('id', "manton");
			}
		});		
	});
}

fb();


function fb() {
	beginning();
	setTimeout(f0, 2000);
}

function f0() {
	gimmeParagraph('c2', 'l2', 'binfo', '<basicInfo>', '</basicInfo>', '#manton');
	setTimeout(f1, 2000);
}

function f1() {
	gimmeSpan('c3', 'l3', '<gender>', '</gender>', ' male ', 0, '#binfo');
	setTimeout(f2, 3000);
}

function f2() {	
	gimmeSpan('c3', 'l3', '<birthDate>', '</birthDate>', ' 11.04.1986 ',0, '#binfo');
	setTimeout(f3, 3000);
}

function f3() {
	gimmeSpan('c3', 'l3', '<mail>', '</mail>', ' nomail ',0, '#binfo');
	setTimeout(f4, 3000);
}

function f4() {
	gimmeParagraph('c2', 'l2', 'edu', '<education>', '</education>', '#manton');
	setTimeout(f5, 2000);
}

function f5() {
	gimmeSpan('c3', 'l3', '<univercity>', '</univercity>', ' Krivoy Rog Technical University ',0, '#edu');
	setTimeout(f6, 5500);
}

function f6() {
	gimmeSpan('c3', 'l3', '<specs>', '</specs>', ' ELECTROTECHNICAL power supply system ',0, '#edu');
	setTimeout(f5_1, 4500);
}

function f5_1() {
	gimmeSpan('c3', 'l3', '<courses>', '</courses>', ' HTML5 Introduction to the course by SoftServe ',0, '#edu');
	setTimeout(f7, 5500);
}

function f7() {
	gimmeParagraph('c2', 'l2', 'skills', '<skills>', '</skills>', '#manton');
	setTimeout(f8, 2000);
}

function f8() {
	gimmeSpan('c3', 'l3', '<it-based>', '</it-based>', ' HTML5, CSS, JavaScript, Java basics ',0, '#skills');
	setTimeout(f9, 5000);
}

function f9() {
	gimmeParagraph('c2', 'l2', 'job', '<job>', '</job>', '#manton');
	setTimeout(f10, 2000);
}

function f10() {
	gimmeSpan('c3', 'l3', '<organization>', '</organization>', ' se Evtushenko (Providing services in the field of monitoring of vehicles) ',0, '#job');
	setTimeout(f11, 6000);
}

function f11() {
	gimmeSpan('c3', 'l3', '<position>', '</position>', ' Tech support specialist ',0, '#job');
	//setTimeout(f10, 3000);
}