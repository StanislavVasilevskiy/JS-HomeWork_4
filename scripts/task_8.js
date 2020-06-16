	// Задание № 8
console.log("");
console.log("Задание № 8");
console.log("");

let n8 = [12, false, "Текст", 4, 2, -5, 0];

console.log("Исходный массив: ");
console.log(n8);
console.log("");


let i8 = n8.length,
	new8 = [];

while (i8 > 0) {
	i8--;
	new8.push(n8[i8]);
}

console.log("Масив через while: ");
console.log(new8);
console.log("");

let N8 = [12, false, "Текст", 4, 2, -5, 0];

console.log("Масив через reverse: ");
console.log(N8.reverse());