/*
Accessing Array Elements 0000000000000000000000000000000000000000000000000000000000000000000

(a)Bracket Notation Method


(b).at(); Method
Used to access last element using -(ve) notation




ADDING AND REMOVING ELEMENTS IN AN ARRAY0000000000000000000000000000000000000000000000000000

(a) .push();
Adds one  or more elements to the end of an array


(b) .pop();
Removes the last element from an array





.shift(); 
Removes the first element of an array

.unshift();
Adds one or more elemrnts to the beggining ofan array


let num=[1,2,3,5];
num.shift();
console.log(num);//2,3,5

num.unshift(5,4);
console.log(num);//5,4,2,3,5
*/

let grade=[30,70,58,67,53,45];
for(let index=0;index<grade.length;index++){
if(grade[index]<40){
console.log(`Student at ${index} failed with ascore of ${grade[index]}`);
continue;
}


}


//FOR OF LOOP

let grades=[75,45,70,30,33,47];
for(let grade of grades){
    if(grade<40)
        console.log(`You have failed with ascore of ${grade}`);
}


//ARRAYS FUNCTIONS
//(a) .map();

let numbers=[2,3,4,5,6];
const square=numbers.map(n=>n*n);
console.log(square);

//(b) .filter();
const scores=[70,35,45,40,20,17];
const brightStuds=scores.filter(s=>s>40);
console.log(brightStuds);

//.reduce();
const num=[7,10,15,20];
const sum=num.reduce((sum,num)=>sum+num,0);
console.log(sum);


