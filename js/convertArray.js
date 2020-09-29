// 2. Consider that we have two arrays Arr1 and Arr2

// arr1= ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];  

// arr2 = ["th","st","nd","rd"]  
// Write a JavaScript program which can read the first array and convert that color into a statement with the help of second array.

// Example:-

//     "1st choice is Blue.”    

//     "2nd choice is Green."  

//      "3rd choice is Red."  

var arr1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var arr2 = ["th", "nd", "st", "rd"];

for (var i = 0; i <= arr1.length - 1; i++) {
    if (i == 0) {
        console.log(i + 1 + "" + arr2[2] + " choice is " + arr1[i]);
    } else if (i == 1) {
        console.log(i + 1 + "" + arr2[1] + " choice is " + arr1[i]);
    } else if (i == 2) {
        console.log(i + 1 + "" + arr2[3] + " choice is " + arr1[i]);
    } else {
        console.log(i + 1 + "" + arr2[0] + " choice is " + arr1[i]);
    }
}


