// 1. Write a user defined function which can accept a 10 digit number and an operation in string as an input and perform the following:-

// a)  Find the even numbers.

// b)  Find the Odd numbers.

// c)  Exchange the position of even digit by following odd digit.

// d)  Remove the odd numbers.  

// The result should be in the form of comma separated values.

//     Example:-

//     a)  Input:-  2314567298 even  
//     Output:- 2,4,6,2,8 

//     b)  Input:- 2314567298  odd  
//     Output:- 3,1,5,7,9

//     c)  Input :- 2314567298 exchange  
//     Output:-  3,3,1,5,5,7,7,3,9,9 

//     d)  Input:- 2314567298  remove  
//     Output :- 2,4,6,2,8



function check(numbers,operation){
    let arrayOfDigits = Array.from(String(numbers), Number);
    let evenString = "";
    let oddString="";
    let exchangeString="";
    let newArray=[];
    let removeString="";

    if (operation == "even")
     {
        for (let i = 0; i < arrayOfDigits.length; i++) 
        {
            if (arrayOfDigits[i] % 2 == 0 ) {
                if(i<arrayOfDigits.length)
                    evenString += arrayOfDigits[i] + ",";
            }
        }
        return evenString;
    }
    else if(operation == "odd")
    {
       for (let i = 0; i < arrayOfDigits.length; i++) 
       {
           if (arrayOfDigits[i] % 2 != 0 ) {
                if(i<arrayOfDigits.length)
                    oddString += arrayOfDigits[i] + ",";
           }
       }
       return oddString;
   }
   else if (operation == "exchange")
   {
      for (let i = 0; i < arrayOfDigits.length; i++) 
      {
          if (arrayOfDigits[i] % 2 == 0 && arrayOfDigits[i+1]%2!=0) 
          {
              for(let j=0;j<arrayOfDigits.length;j++)
              {
                if(arrayOfDigits[j]==arrayOfDigits[i])
                {
                    arrayOfDigits[j]=arrayOfDigits[i+1];
                }
              }
              if(arrayOfDigits[i]!=undefined)
                newArray.push(arrayOfDigits[i+1]);
          }
          else
          {
            if(arrayOfDigits[i]!=undefined)
              newArray.push(arrayOfDigits[i]);
          }
      }
      return newArray;
  }
  else
  {
    for (let i = 0; i < arrayOfDigits.length; i++) 
    {
        if (arrayOfDigits[i] % 2 == 0) {
            if(i<arrayOfDigits.length)
                removeString += arrayOfDigits[i] + ",";
        }
    }
    return removeString;
  }
}

// a)  Find the even numbers.
console.log(check("2314567298","even"));
// b)  Find the Odd numbers.
console.log(check("2314567298","odd"));
// c)  Exchange the position of even digit by following odd digit.
console.log(check("2314567298","exchange"));
// d)  Remove the odd numbers.  
console.log(check("2314567298","remove"));