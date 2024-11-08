// Problem 2

{
   // Create a function to remove duplicate numbers
    function removeDuplicates(value : number[]){
      const result = [...new Set(value)]; 
        console.log(result)
        return result
    } 
    
    // Create a Array
    const numbers = [1, 2, 2, 3, 4, 4, 5];

    // Call my function
    removeDuplicates(numbers)
}
