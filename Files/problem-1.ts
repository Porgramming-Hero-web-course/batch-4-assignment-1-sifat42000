// Problem 1

{
    // Create a function to sum the all array of numbers 
    function sumArray(value : number[]) {
        const sumArray = value.reduce((defaultt,main)=> defaultt + main, 0)
        console.log(sumArray)
        return sumArray
      }

      // Create a Array
      const AllNumber = [1, 2, 3, 4, 5]

       // Call my function
       sumArray(AllNumber)
}