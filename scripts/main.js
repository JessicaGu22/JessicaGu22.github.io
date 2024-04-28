
console.log("Task 1:");
for (var i = 0; i < 11; i++) {
    var product = i * i;
    console.log(i + " squared  = " + product);
}

console.log("Task 2:");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Blastoff!");

console.log("Task 3:");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

console.log("Task 4:");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

console.log("Task 5:");
for (let i = 1; i <= 10; i++) {
    let factorial = 1;
    factorial *= i;
    console.log(i + "! =", factorial);
}

console.log("Task 6");
for (let i = 0; i <= 5; i++) {
    let arr = [3, 1, 4, 1, 5]; 
    console.log(arr[i]);
}


console.log("Task 7");
let arr = [3, 1, 4, 1, 5];
let lastIndex = arr.length - 1;
for (let i = lastIndex; i >= 0; i--) {
    console.log(arr[i]);
}

console.log("Task 8");
for (let i = 0; i <= 10; i++) {
    let arr = new Array(); 
    arr.push(i * i * i); 
}
console.log(arr); 

console.log("Task 9");
for (let i = 2; i < 10; i++) {
    let fibonacci = [0, 1];
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}
console.log(fibonacci);

console.log("Task 10");
for (let i = 0; i < 5; i++) {
    let add = []; 
    let arr = [3, 1, 4, 1, 5];
    add += arr[i];
    console.log(add);
}













