
// --- Part 1 ---
//1.Take an array of numbers and return the sum.
function sumOfArray(numberArray){
    let sum = 0;
    numberArray.forEach(arrValues => { sum += arrValues}); // loop through the arr values to add it and stored values in sum variable.
    return sum //returned sum inside the function
}

//2.Take an array of numbers and return the average.
function averageOfArray(numberArray){
    let average = sumOfArray(numberArray)/numberArray.length // called the sumOfArray and divided by array length to get average.
    return average
}

//3.Take an array of strings and return the longest string.
const longestString = (stringArray) =>{ // tried with arrow function
let len = 0;
let longString = "";
for(let i=0; i<stringArray.length; i++){ 
    if(stringArray[i].length > len){ // if stringArray[i].length >length(initially set to 0), add the stringArray[i].length to the length variable.
        len += stringArray[i].length
        longString = stringArray[i] //setting the final result to longString variable
    }
    return longString
}
}

// 4.Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function stringsLongerThanGivenNumber(stringArray , number){
    //loop through the string and find longest string than number
    let longerStrings = [];
    for(let i=0;i<stringArray.length;i++){
        if(stringArray[i].length > number){
            longerStrings.push(stringArray[i])
        }
    }
    return longerStrings
}

//5.Take a number, n, and print every number between 1 and n without using loops. Use recursion.
//Recursion in JavaScript is a programming technique where a function calls itself within its definition.
function printNumber(number, count=1){
   
 if(number >= count){
    console.log(count)
    count++
    printNumber(number,count)
 }
 return
}

let numArray = [3,5,6,8,9]
let stringArray1 = ["Rosebelle","Liliora","Daislinn","Tulivie","Orchessa"]
let stringArray2 = ['say', 'hello', 'in', 'the', 'morning'];
let num = 3;

console.log("--- Part 1: Thinking Functionally  ---")
console.log(`1. Sum of Array is: ${sumOfArray(numArray)}`)
console.log(`2. Average of Array is: ${averageOfArray(numArray)}`)
console.log(`3. Long string of Array is: ${longestString(stringArray1)}`)
console.log(`4. Strings longer than length ${num} is: ${stringsLongerThanGivenNumber(stringArray2 , num)}`)
console.log(`5. Printing numbers until given number is:`)
printNumber(5)


// console.log("");
// console.log("Part 2: Thinking Methodically")
//1.Sort the array by age.
function ageComparator(obj1, obj2){
return Number(obj1.age) - Number(obj2.age) 
}
 
//2.Filter the array to remove entries with an age greater than 50.
function isAgeLessThanOrEqualTo50(obj){
return Number(obj.age) <= 50
}

//3.Map the array to change the “occupation” key to “job” and increment every age by 1.
function replaceOccupationWithJob(obj){
obj.job = obj.occupation
delete obj.occupation
obj.age = Number(obj.age) + 1
return obj
}

//4.Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.
function sumOfAge(sum,currentObj){
    return sum + Number(currentObj.age)
}

let objArray = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
console.log("")
console.log("Part 2: Thinking Methodically")
console.log(`1. Sorted by age:`) 
console.log(objArray.sort(ageComparator)) 
console.log(`2. Filtered array by age less than 50:`) 
console.log(objArray.filter(isAgeLessThanOrEqualTo50)) 
console.log(`3. Replaced Occupation with Job:`) 
console.log(objArray.map(replaceOccupationWithJob))
let totalAge = objArray.reduce(sumOfAge,0)
console.log(`4. Sum Of age: ${totalAge}`) 
console.log("5. Average of age")
console.log(totalAge/objArray.length)


console.log("");
console.log("Part 3: Thinking Critically")
function incrementAgeByRef(obj){
    obj.age = obj.age ? Number(obj.age)+1 : 0
obj.updated_at = new Date()
}
function incrementAgeCopy(obj){
    let objCopy = {...obj}
    objCopy.age = objCopy.age ? Number(objCopy.age)+1 : 0
    objCopy.update_at = new Date()
    return objCopy
}
obj1 = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
console.log(incrementAgeCopy(obj1))
    