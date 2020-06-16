	// Задание № 11
document.write("<br/>Задание № 11<br/><br/>");

function drawFig (n11) {
	for (let i11 = n11; i11 >= 0; i11--) {
		for (let k11 = 0; k11 < i11; k11++) {
			document.write("&nbsp;");
		}

		for (let j11 = n11-1; j11 >= i11; j11--) {
			document.write("&and;");
		}

		document.write("<br/>");
	}
}

let x11 = +prompt ("Введите число для задания 11: ");
drawFig(x11);