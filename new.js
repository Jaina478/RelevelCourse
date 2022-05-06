'use strict'
let firstName = ' Jaina ';
//let nameClone = firstName;

//firstName = 'Pratik';
//console.log(nameClone, firstName);

function firstNameIf(firstName) {
    if (firstName.trim() !== firstName) {
        firstName = firstName.trim();
    }
    console.log(firstName);
}

firstNameIf(firstName);
console.log(firstName);


const Person = function(firstName, yearOfBirth) {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
}

let aboutMe = new Person('Jaina', 2000);

function updatedName(aboutMe, updatedName) {
    aboutMe.firstName = updatedName;
    console.log("Inside updateName function", aboutMe.firstName);
}

function tryRefrenceUpdateName(aboutMe, updatedName) {
    aboutMe = new Person(aboutMe.firstName, aboutMe.firstName);
    aboutMe.firstName = updatedName;

    console.log("inside tryRefrenceUpdateName function", aboutMe.firstName);
}

updatedName(aboutMe, 'Ram');
console.log("Outside updateName function", aboutMe.firstName);

tryRefrenceUpdateName(aboutMe, 'Bhati');
console.log("Outside tryRefrenceUpdateName function", aboutMe.firstName);




function sumOfTwoNumbers(a, b) {
    // return a + b;
    console.log(`Sum of ${a} and ${b} is ${a + b}`)
}

for (let i = 1; i < 100; i++) {
    sumOfTwoNumbers(5, 10);
    //console.log(`Sum of 5 and 10 is ${sumOfTwoNumbers(5,10)}`);
}



console.log('----------------------------------------------------------------------Selection Sort---------------------------------------------------------------------------------------------');



//-----------------Object.freeze()--------------------
const arr = [1, 2, 3, 4];
arr.push(5);

const aboutJaina = new Person('Jaina', 22);
Object.freeze(aboutJaina);

let aboutJainaClone = aboutJaina;
// aboutJaina.firstName = 'JainaRam';
// console.log(aboutJaina.firstName);

// aboutJainaClone.firstName = 'JainaRam';
// console.log(aboutJainaClone.firstName);


const country = ["India", "Australia", "China", "Russia", "Brazil", "Zappan"];


const unsortedArray = [10, 30, 20, 18, 7];
console.log(unsortedArray.sort());

console.log('----------------------------------------------------------------------Selection Sort---------------------------------------------------------------------------------------------');


//-------------------------------- Selection Sort ------------------------------
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1, 0, -1, -2, 10, 11, 12, 13, -4]));

console.log('----------------------------------------------------------------------Selection Sort--------------------------------------------------------------------------------------------');

function selectionSort1(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const minIndex = findIndexOfMinimum(arr, i);
        swap(arr, i, minIndex);
    }
    return arr;

}

function findIndexOfMinimum(arr, index) {
    //let's assume that the smallest value is in the 0th index.
    let indexOfMinValue = index;
    for (let i = index + 1; i < arr.length; i++) {
        if (arr[indexOfMinValue] > arr[i]) {
            indexOfMinValue = i;
        }
    }
    return indexOfMinValue;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(selectionSort1([5, 4, 3, 2, 1, 0, -1, -2, 10, 11, 12, 13, -4]));


console.log('----------------------------------------------------------------------Selection Sort--------------------------------------------------------------------------------------------');



function selectionSort2(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        swapMe(arr, i, findIndexOfMin(arr, i));
    }
    return arr;
}

function findIndexOfMin(arr, indexOfArray) {
    let minimumIndex = indexOfArray;
    for (let i = indexOfArray + 1; i < arr.length; i++) {
        if (arr[minimumIndex] > arr[i]) {
            minimumIndex = i;
        }
    }
    return minimumIndex;
}

function swapMe(arr, i, j) {
    let current = arr[i];
    arr[i] = arr[j];
    arr[j] = current;
}

console.log(selectionSort2([5, 4, 3, 2, 1, 0, -1, -2, 10, 11, 12, 13, -4]));



console.log('----------------------------------------------------------------------Selection Sort--------------------------------------------------------------------------------------------');