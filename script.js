// 1. Create a program that asks the user for two numbers and prints their sum.

let a = 7
let b = 3
let sum = a+b
console.log('Sum of two numbers is = '+sum);

// 2. Implement a program that calculates the area of a rectangle using given length and width.

let length = 15
let width = 10
let area =length*width
console.log('Area of a rectangle is = '+area);

// 3. Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18).

let age = 25
if (age>=18){
    console.log('You are eligible for voting')
}

// 4. Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming the passing grade is 60 or above).

let mark = 50
if (mark>=60){
    console.log('You have Passed')
}
else {
    console.log('You have Failed')
}

// 5. Implement a program that checks if a user's entered number is positive, negative, or zero.

let number = 0
if (number<0){
    console.log('You entered number is Negative')
}
else if(number>0){
    console.log('You entered number is Positive')
}
else{
    console.log('You entered Zero')
}

// 6. Write a script that takes a user's age and checks if they are a child (0-12), teenager (13-19), adult (20-59), or senior (60 and above).

let Age =25
switch (true){
    case Age <13:
     console.log ('User is a child');
     break ;
     
    case Age <19:
     console.log ('User is a Teenager');
     break ;
     
    case Age  <59:
     console.log ('User is an Adult');
     break ;
     
    case Age <=60:
     console.log ('User is a Senior');
     break ;   
}

// 7.  find the square of each number in an array=[1,3,9,12,15,18,21] using loop

let arr = [1,3,9,12,15,18,21]
for (i=0; i<=7; i++){
    console.log(arr[i]*arr[i]);
}

// 8. Write a program to find the sum of all the odd numbers for a given limit (if you choose limit as 10 then need to find the sum of all odd numbers in between 1 and 10 )


limit=10
let j=0
sum=0
for(j=0;j<=limit;j++){
    if(j%2!=0){
        console.log("numbers are "+j);
        sum=sum+j
        console.log("Sum is " +sum);
    }
}
