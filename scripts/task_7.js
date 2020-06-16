	// Задание № 7
console.log("");
console.log("Задание № 7");
console.log("");

let userNums7,
	n7 = [];

for (let i7 = 0;; i7++) {
	let userNums7 = +prompt("Задание 7. Введите произвольные значения для массива");

	if (userNums7) {
		n7.push(userNums7);
	} else {
		break;
	}
}

console.log("Введенный масив: ");
console.log(n7);
console.log("");

let nSort7 = n7.sort(function (a7, b7) {
	return a7- b7;
})

console.log("Отсортированный масив: ");
console.log(nSort7);
