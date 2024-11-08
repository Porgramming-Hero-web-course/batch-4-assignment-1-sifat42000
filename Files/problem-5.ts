// Problem 5

{
    // Create a Object type
    type ObjectType = {
        name : string;
        age : number
    }

    // Create a function to get Object properity value
    const getProperty = <T, Y extends keyof T>(Obj :T, key :Y) =>{
        console.log(Obj[key])
      return Obj[key]
    }

    
    // Create a Object
    const User : ObjectType = {
        name : 'Alice',
        age : 30
    }
   
   // Call my function
   const result = getProperty(User, 'name')
}