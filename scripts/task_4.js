	// Задание № 4
console.log("");
console.log("Задание № 4");
console.log("");

let n4 = ["10", "20", "30", "50", "235", "3000"];

for (let i4 = 0; i4 < n4.length; i4++) {
	if (n4[i4][0] == "1" || n4[i4][0] == "2" || n4[i4][0] == "5") {
		console.log(n4[i4]);
	} else {
		continue;
	}
}