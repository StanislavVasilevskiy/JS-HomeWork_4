	// Задание № 6
console.log("");
console.log("Задание № 6");
console.log("");

let userNums6,
	n6 = [];

for (let i6 = 0;; i6++) {
	let userNums6 = +prompt("Задание 6. Введите произвольные значения для массива");

	if (userNums6) {
		n6.push(userNums6);
	} else {
		break;
	}
}

let userNum6 = +prompt("Задание 6. Введите произвольное последнее значение для массива");

n6.push(userNum6);

console.log("Введенный масив: ");
console.log(n6);
console.log("");
console.log("Последнее число массива: ");
console.log(n6[n6.length-1]);