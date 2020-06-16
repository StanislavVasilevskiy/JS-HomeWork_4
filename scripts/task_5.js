	// Задание № 5
document.write("Задание № 5<br/><br/>");

let n5 = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

for (let i5 = 0; i5 < n5.length; i5++) {
	if (n5[i5] == "СБ" || n5[i5] == "ВС") {
		document.write("<strong>" + n5[i5] + "</strong>" + "<br/>");
	} else {
		document.write(n5[i5] + "<br/>");
	}
}