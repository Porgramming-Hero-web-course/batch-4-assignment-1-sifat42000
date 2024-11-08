// Problem-8
    

// Declear information type
type infomation = {
    name : string;
    age : number;
    email : string
}


// Declear function to cheak the object properity
function validateKeys<T extends object>(value : T, key : (keyof T)[]){
     const result = key.filter((k => k in value)).length === key.length;
     console.log(result)
     return result
} 



// Declear object to information type
const person : infomation = 
{ 
  name: "Alice",
  age: 25,
  email: "alice@example.com" 
}


// Call my function
validateKeys(person,["name", "age"])

