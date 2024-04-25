<!DOCTYPE html>
<html>
<head>
</head>
<body>
    console.log("Task 1:");
    for (let i = 1; i <= 10; i++) {
      console.log(i * i);
    }


    console.log("Task 2:");
    let countdown = 5; 
    while (countdown > 0) {
      console.log(countdown);
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

    console.log("Task 5:");
    for (let i = 1; i <= 10; i++) {
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial *= j;
        }
        console.log(i + "! =", factorial);
    }

console.log(sum);
</body>
</html>

