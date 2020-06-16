	// Задание № 3
console.log("");
console.log("Задание № 3");
console.log("");

	// while

let N3 = [],
	I3 = 23;

while (I3 <= 57) {
	N3.push(I3);
	I3++;
}

console.log("");
console.log("Массив через while:");
console.log(N3);

	// for

let n3 = [];

for (let i3 = 23; i3 <= 57; i3++) {
	n3.push(i3);
}

console.log("");
console.log("Массив через for:");
console.log(n3);

// Сумма элементов массива через for

let result = 0,
	r = [];

for (let j3 = 0; j3 < n3.length; j3++) {
	result += n3[j3];
}

console.log("");
console.log("Сумма элементов массива: " + result);