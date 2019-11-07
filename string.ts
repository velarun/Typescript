//String Initialization  
let str1: string = 'Hello';  
let str2: string = 'typescript';  
let str3: string = '       Tutorial      ';
//Returns value of specified var
console.log("valueOf: " +str1.valueOf());
//Returns String 
console.log("toString: " +str1.toString());
// Pre-ES6  
let templatestring1: string = str1 + " and Welcome to " + str2 + " Tutorial.";   
// Post-ES6  
let templatestring2: string = `${str1} and Welcome to ${str2} Tutorial.`;   
console.log("Before ES6: " +templatestring1);  
console.log("After ES6: " +templatestring2);  
//Multi Line String
let multi = '\nHello ' +  
    'and ' +  
    'Welcome ' +  
    'to\n' +  
    'Typescript ' +  
    'Tutorial.\n';  
console.log("Multi Line string: " +multi);  
//String Concatenation  
console.log("Combined Result: " +str1.concat(str2));  
//String charAt  
console.log("Character At 4: " +str2.charAt(4));  
//String indexOf  
console.log("Index of t: " +str2.indexOf('t'));  
//String lastIndexOf  
console.log("Last Index of t: " +str2.lastIndexOf('t')); 
//String replace  
console.log("After Replacement: " +str1.replace('Hello', 'Welcome to'));  
let re = /apples/gi; 
let str4 = "Apples are round, and apples are juicy.";
let newstr = str4.replace(re, "oranges"); 
console.log("Replace using regex: " +newstr);
//String uppercase  
console.log("UpperCase: " +str1.toUpperCase());  
//String lowercase  
console.log("LowerCase: " +str1.toLowerCase());
//String Trim  
console.log("trim: " +str3.trim());
//String Search
if (str4.search(re) == -1 ) { 
   console.log("Search String: Does not contain Apples" ); 
} else { 
   console.log("Search String: Contains Apples" ); 
} 
//String Slice
let sliced = str4.slice(3, -2); 
console.log("Slice: " +sliced);
//String Split
let splitted = str4.split(" ", 3); 
console.log("Split: " +splitted)
//String substr(start,length)
console.log("substr(-2,2): " +str4.substr(-2,2)); 
console.log("substr(1): " +str4.substr(1));
//String substring(indexA,indexB)
console.log("substring(0,10): " +str4.substring(0, 10)); 
console.log("substring(5): " +str4.substring(5));