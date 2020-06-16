	// Задание № 9
console.log("");
console.log("Задание № 9");
console.log("");

let n9 = [5, 9, 21, , , 9, 78, , , , 6],
	j9 = 0;

for (let i9 = 0; i9 <= n9.length-1; i9++) {
	if (n9[i9] == undefined) {
		j9++;
	}
}

	//Можно так
// for (let i9 of n9) {
// 	if (i9 == undefined) {
// 		j9++;
// 	}
// }

console.log("Заданный массив: ");
console.log(n9);
console.log("");
console.log("Количество пустых элементов в заданном массиве: " + j9);