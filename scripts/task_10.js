	// Задание № 10
console.log("");
console.log("Задание № 10");
console.log("");

let n10 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2],
	sum10 = 0,
	firstZero10 = n10.indexOf(0),
	secondZero10 = n10.lastIndexOf(0);

for (let i10 = firstZero10; i10 < secondZero10; i10++) {
	sum10 += n10[i10];
}

console.log("Исходный массив: ");
console.log(n10);
console.log("");
console.log("Сумма чисел в массиве между нолями: " + sum10);