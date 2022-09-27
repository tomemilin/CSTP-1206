//questioin 1
let numbers = [1,3,4,9,14,7];
let count = 0;
console.log("Array sum is " + sumOFArray(numbers));

function sumOFArray (arrayNumber)
 {
    for (let item of arrayNumber)
        count = count + item;
    return count;
}

//question 2
var Array = [1,2,4,5,6,8,9,11];
 Array.forEach(getEvenNumber); 

 function getEvenNumber(num)
 {
    if (num % 2 == 0)
       console.log(num + " is divisible by 2 \n");     
}

//question 3
let text = "Cazyoy";
    for(let i =0; i <= text.length; i++)
    {
        if (text.charAt(i) == 'y')
        {
            console.log("YES");
            break;
        }
    }
  
//question 4
let factorial = 5;
let count = 1;
if (factorial == 0)
    console.log("factorial of 0 = 1");
else
{
    for (let i = factorial; i >= 1; i--)
            count*= i;
}
console.log("factorial of %i is ", factorial, count);

//question 5   
let math = 90;
let history = 90;
let geography = 80;
let english = 70;
let percent = Average(math, history, geography, english);

function Average(math1, history1, geography1, english1)
{
     return (math1+history1+geography1+english1)/4;
}

     if(percent>=90) 
        console.log("Grade is A and Percent is " + percent + "%");
     else if(percent >=70 && percent<90)
        console.log("Grade is B and percent is " + percent + "%");
     else if (percent >=50 && percent<70)
        console.log("Grade is C and percent is " + percent + "%");
     else
        console.log("Grade is F and percent is " + percent + "%");

//question 6
let str ='*';
console.log(str);
for (let i = 0;i < 5; i++)
{
    str = str + '*';
    console.log(str);
}

//questiong 7
let str ='*';
console.log(str);
for (let i = 0;i < 5; i++)
{
    str = str + '*';
    console.log(str);
}
for (let j = 5; j > 0 ; j--)
{
    str = str.replace('*','')
    console.log(str);
}

//question 9
let str = 'friend';

function reverseString(str)
{
    let newStr = '';
    for(let i = str.length -1; i >= 0; i--)
        newStr+= str[i];
        
    
    return newStr;
}
console.log(reverseString(str));