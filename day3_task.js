// Looping Statements
// 1. Print Numbers
// Print numbers from 1 to 20 using a for loop.

for(let i=1; i<=20; i++){
    console.log(i);
}   

// 2. Odd Numbers
// Print all odd numbers from 1 to 50.

for(let i=1; i<=50; i++){
    if(i%2 != 0){
        console.log(i);
    }
}

// 3. Multiplication Table
// Print the multiplication table of 7.

for(let i=1; i<=10; i++){
    console.log("7 * " + i + " = " + (7*i));
}   

// 4. Reverse Counting
// Using while loop, print numbers from 20 to 1.
let j = 20;
while(j >= 1){
    console.log(j);
    j--;
}

// 5. Sum of Numbers
// Find the total sum of numbers from 1 to 100.

let sum = 0;
for(let i=1; i<=100; i++){
    sum += i;
}
console.log(sum);

// 6. Array Loop

let fruits = ["apple","banana","orange","grapes"];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}   

// 7. Count Even Numbers

let countEven = 0;
for(let i=1; i<=50; i++){
    if(i%2 == 0){  
        countEven++;
    }   
}
console.log(countEven);

// 8. Star Pattern

for(let i=1; i<=5; i++){
    let pattern = "";
    for(let j=1; j<=i; j++){
        pattern += "*";
    }   
    console.log(pattern);
}


// 9. Simple Function
// Welcome to JavaScript

function welcome(){
    console.log("Welcome to JavaScript");
}   
welcome();
    
// 10. Function with Parameter
// Hello Naveen

function printHello(name){
    console.log("Hello " + name);
}
printHello("Naveen");

// 11. Add Two Numbers

function add(a, b){
    return a + b;
}
console.log(add(10, 20));

// 12. Salary Bonus

function calculateSalary(salary, bonus){
    return salary + bonus;
}   
console.log(calculateSalary(50000, 5000));


// 13. Object Loop
// Print all keys and values using for in.

let student = {
    name : "Rahul",
    course : "JavaScript",
    marks : 95
}       
for(let key in student){
    console.log(key + ": " + student[key]);
}

// 14. Find Largest Number

function largest(a, b){ 
    if(a > b){
        return a;
    }   
    else{
        return b;
    }
}
console.log(largest(10, 50)); 

// 15. Mini Employee Task

let employee = {
    name: "John Doe",
    department: "IT",
    salary: 60000
}
function calculateSalaryWithBonus(employee, bonus){
    return employee.salary + bonus;
}       
console.log("Employee Name: " + employee.name);
console.log("Department: " + employee.department);
console.log("Salary: " + employee.salary);  
console.log("Salary after bonus: " + calculateSalaryWithBonus(employee, 5000));


