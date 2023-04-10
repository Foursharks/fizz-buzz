// Write your solution below this line:

//If it's divisible by 5 and 3, log fizzbuzz, if it's 5, fizz, if it's 3 buzz


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 
for(i=0; i<array.length; i++){
    if(array[i] % 3 ===0 && array[i] % 5 ===0){
        console.log(`Fizzbuzz`); 
    }
    else if (array[i] % 3 ===0){
        console.log(`Fizz`); 
    }
    else if(array[i] % 5 ===0){
        console.log(`Buzz`); 
    }
    else {
        console.log(array[i]); 
    }
}