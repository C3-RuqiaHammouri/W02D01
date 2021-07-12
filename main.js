console.log(arrowTitle)
/* START CODE UNDER THIS LINE */




///////////////////////////////Pulse Check///////////////////////////////////

////////////////////Q1//////////////////////

// part 1
const colors = ['black ', 'white ', 'green']
//part 2 
const negativeNumbers = [-1, -2, -3, -4, -5]
//part 3 
const food = [" pizza ", 'mansaf ', ' yalanjee ']
//part 4 
const numbers = [[1, 3, 5], [2, 4, 6, 8]]

///////////////////Q2/////////////////////// 

//part 1 
const orderedPlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
const unorderedPlanets = ["Mars", "Earth", "Mercury", "Jupiter", "Venus"];

console.log(orderedPlanets[3])
console.log(unorderedPlanets[0])


//part 2 
//const animals = ["Cat", "Dog", "Dolphin", "Squirrel", "Koala"];
//animals[animals.length-1]


//////////////Q3 /////////////////////////

//part 1 

//dont under stand it ;



//part 2
const animals = ["Cat", "Dog", "Dolphin", "Squirrel"];

animals.shift()

animals.unshift('Koala ')









//////////////////Q4 //////////////////////////
const reptiles = ["Snake", "Lizard", "Turtle"];
//part 1   
reptiles.push('Dinosaur')
//part 2 
const fish = ["Swordfish", "Clownfish", "Shark"];
fish.unshift('Goldfish')
// part 3
reptiles.shift()
// part 4 
fish.pop()


///////////////Q5///////////////////

//part 1   

const year_1 = [1, 9, 9, 3];
console.log(year_1.join(""));


//part 2 
const fullName = ["John ", "Doe  ", "The Third "];
console.log(fullName.join(""));


//part 3 
const helloWorld = ["hello", "world"];
console.log(helloWorld.join(","))

//part 4 
const number_1 = [1, 2, 3, 4];
number_1.reverse
console.log(number_1.reverse())



/////////////////////practic ////////////////////
//Q1

const addToArray = function (array, string) {
  return array = array + string

};


//Q2 
const convertToString = function (array) {
  return (array.join("  "))
};



//Q3 

const accessElement = function (array, index) {
  if (array.length > index) {
    return array[index]
  } else {
    return "No element at index 10"
  }
};



//Q4   

const isInArray = function (array, string) {
  if (array.indexOf(string)) {
    return true
  }
  else {
    return false
  }
};



//Q5 

//اول شي بعمل سبليت لكل كلمة بدخلها
//  بعدين بفحص طول الاراي اللي صارت عن
//عندي ازا طولها 1 معناها  هي كلمة وحدة ازا طولها اكتر من واحد 
// معناها هي اكتر من كلكة وبطلق عليها الشروط  
//
//
/*const reverseWords = function (string) 
{  if () 
    {return string

    } if()
        

        

};*/

//Q6

const addToLast = function (array, value) {
  return value.unshift(array)
};




//Q7

// part 1 
const getLength = function (array) {
  return (array.push())

};



// PART 2 
const getFirstVal = function (array) {
  return array.shift();


};





//Q8 
// the array values are unique, no duplicate values in the array
const updateOrCreate = function (array, value, index) {
  if ( array.indexOf(value) === -1 )
  {  
      array[index] = value ;
      return array ;
}
};



//Q9 علي
// slice => return anew array depend on the start and end value 
// حسب رقم ال index 
//تاع ال start , end 


const sliceArray = function (array, startVal, endVal) {
  if (array.indexOf(startVal))
 { return array.slice(startVal)
 }

};
sliceArray([10, 20, 30, 40, 50, 60], 10, 60); // => [10, 20, 30, 40, 50, 60]
sliceArray([10, 20, 30, 40, 50, 60], 20, 40); // => [20, 30, 40]
sliceArray([10, 20, 30, 40, 50, 60], 20, 20); // => []
sliceArray([10, 20, 30, 40, 50, 60], 50, 20); // => []
