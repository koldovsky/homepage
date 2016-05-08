var ROWS = 2;

function gimmeSpan(class1, class2, openingTagString, closingTagString, string, breaks, before) {
	var paragraph = document.createElement("p");
	var newspanOne = document.createElement("span");
	var newspanTwo = document.createElement("span");
	var newspanThree = document.createElement("span");
	var tnode = document.createTextNode(closingTagString);
	paragraph.appendChild(newspanOne);
	paragraph.appendChild(newspanTwo);
	newspanTwo.setAttribute('class', 'c4');
	
	$(paragraph).insertBefore(before);
	newRow();

	$(function () {
		$(newspanOne).typed({
			strings: [openingTagString+'^30'],
			typeSpeed: 1,
			startDelay: 10,
			callback: function() {
				paragraph.setAttribute('class', class1 + ' ' + class2);
				$(".typed-cursor").remove();
				var tnode1 = document.createTextNode('1');				
				newspanThree.appendChild(tnode);
				paragraph.appendChild(newspanThree);
				
				$(function () {
					$(newspanTwo).typed({
						strings: [string+'^100'],
						typeSpeed: 1,
						startDelay: 10,
						callback: ( function() {
						$(".typed-cursor").remove();
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
	$(paragraphOne).insertBefore(before);
	newRow();

	$(function () {
		newRow();
		$(paragraphOne).typed({
			strings: [openingTagString+'^30'],
			typeSpeed: 1,
			startDelay: 10,
			callback: function() {
				paragraphOne.setAttribute('class', class1 + ' ' + class2);
				$(".typed-cursor").remove();
				paragraphTwo.appendChild(tnode);
				$(paragraphTwo).insertBefore(before);
				paragraphTwo.setAttribute('class', class1 + ' ' + class2);
				paragraphTwo.setAttribute('id', id);
				addNav(openingTagString, 'navL2', 'navC2');
			}
		});
	});
}

function newRow() {
	var row = document.createElement("p");
	var rowNum = document.createTextNode(ROWS);
	row.appendChild(rowNum);
	stringNumber.appendChild(row);
	ROWS++;
}

function beginning() {
	paragraphOne = document.createElement("p");
	paragraphTwo = document.createElement("p");
	var tnode = document.createTextNode("</MoryaAnton>");
	main.appendChild(paragraphOne);
	newRow();

	$(function () {
		$(paragraphOne).typed({
			strings: ['<MoryaAnton>' + '^30'],
			typeSpeed: 1,
			startDelay: 10,
			callback: function() {
				paragraphOne.setAttribute('class', 'c1 l1');
				$(".typed-cursor").remove();							
				paragraphTwo.appendChild(tnode);
				main.appendChild(paragraphTwo);				
				paragraphTwo.setAttribute('class', 'c1 l1');
				paragraphTwo.setAttribute('id', "manton");
				addNav('<MoryaAnton>', 'navL1', 'navC1');
			}
		});		
	});
}

function addNav(string, style1, style2) {
	var paragraph = document.createElement("p");
	var tnode = document.createTextNode(string);
	paragraph.appendChild(tnode);
	navside.appendChild(paragraph);
	paragraph.setAttribute('class', style1+' '+style2);
}


// Болк запуска скриптов "печати" текста
fb();
function fb() {
	beginning();	
	setTimeout(f0, 1000);	
}

function f0() {	
	gimmeParagraph('c2', 'l2', 'binfo', '<basicInfo>', '</basicInfo>', '#manton');
	setTimeout(f1, 1000);
}

function f1() {
	gimmeSpan('c3', 'l3', '<gender>', '</gender>', ' male ', 0, '#binfo');
	setTimeout(f2, 1000);
}

function f2() {	
	gimmeSpan('c3', 'l3', '<birthDate>', '</birthDate>', ' 11.04.1986 ',0, '#binfo');
	setTimeout(f3, 1300);
}

function f3() {	
	gimmeSpan('c3', 'l3', '<mail>', '</mail>', ' antonmorya@gmail.com ',0, '#binfo');
	setTimeout(f4, 1300);
}

function f4() {
	gimmeParagraph('c2', 'l2', 'edu', '<education>', '</education>', '#manton');
	setTimeout(f5, 1000);
}

function f5() {
	gimmeSpan('c3', 'l3', '<univercity>', '</univercity>', ' Krivoy Rog Technical University ',0, '#edu');
	setTimeout(f6, 2200);
}

function f6() {
	gimmeSpan('c3', 'l3', '<specs>', '</specs>', ' ELECTROTECHNICAL power supply system ',0, '#edu');
	setTimeout(f5_1, 2400);
}

function f5_1() {
	gimmeSpan('c3', 'l3', '<full-timeCourses>', '</full-timeCourses>', ' HTML5, CSS, JS Essentials  by SoftServe ',0, '#edu');
	setTimeout(f5_2, 2500);
}

function f5_2() {
	gimmeSpan('c3', 'l3', '<remoteCourses>', '</remoteCourses>', ' Codecademy, Lynda.com, MDN, W3C courses/lessons ',0, '#edu');
	setTimeout(f7, 2900);
}

function f7() {
	gimmeParagraph('c2', 'l2', 'skills', '<skills>', '</skills>', '#manton');
	setTimeout(f8, 700);
}

function f8() {
	gimmeSpan('c3', 'l3', '<it-based>', '</it-based>', ' HTML5, CSS, JavaScript, Java basics ',0, '#skills');
	setTimeout(f9, 2400);
}

function f9() {
	gimmeParagraph('c2', 'l2', 'job', '<job>', '</job>', '#manton');
	setTimeout(f10, 700);
}

function f10() {
	gimmeSpan('c3', 'l3', '<organization>', '</organization>', ' SE Evtushenko ',0, '#job');
	setTimeout(f11, 1300);
}

function f11() {
	gimmeSpan('c3', 'l3', '<position>', '</position>', ' Tech support specialist ',0, '#job');
	//setTimeout(f10, 3000);
}

//отправка сообщения на почту
$(function() {
    $('#sendBtn').click(function() {
        $.ajax({
            url: "https://formspree.io/anton.morya@gmail.com", 
            method: "POST",
            data: {message: message.value},
			//data: $('#formToSend').serialize(),
            dataType: "json"
        })
        .done(function () {
            alert('Sent');
        })
        .fail(function (jqXHR, textStatus) {
            alert('<h1>Error!</h1><br>'+textStatus);
        });
    })
})