           //  union and intersection types in Typescript  //

                          (Union-Types)




 Union-Type : Union type is a very important type. Through it, our code becomes much more readable.


 Union type helps us with the following:

 * We can rewrite messy code in a cleaner and more organized way.

 * With union types, we can combine multiple objects or arrays and search them together, and the best part is that it allows us to take any one of them.

 * We can combine multiple objects or arrays into a union type at once.

 * This brings a lot of flexibility to our coding and makes the code more beautiful and structured. 




 
Some examples of union type :-

type user1 = {
    name : string;
    age : number;
    adress : string;
}

type user2 = {
    name : string;
    age : number;
    height : number;
    id : number
}

type user = user1 | user2       // I makes union type to user1 and user2


// the union type use this object 
const Person : user = {
   name : 'Alex',
   age : 20,
   height : 5.9,
   id : 2814
} 






                          (Intersection-Types)




Intersection-Type :  Union type is a very important type. Through it, our code becomes much more easy.


Intersection type helps us with the following:

* Intersection makes our code flawless.

* We can combine multiple types at once.

* With intersection, we can condense several lines of code into a single line.

* We can also merge the properties of multiple objects to create a new type.

* This helps make our code more accurate and reduces errors in the code.



Some examples of Intersection type :- 


Some examples of union type :-


type user1 = {
    name : string;
    age : number;
    adress : string;
}

type user2 = {
    name : string;
    age : number;
    height : number;
    id : number
}

type user = user1 & user2       // I makes Intersection type to user1 and user2


// the Intersection type use this object 
const Person : user = {
   name : 'Alex',
   age : 20,
   height : 5.9,
   id : 2814,
   adress : 'Mirpur2, Dhaka'
} 

    