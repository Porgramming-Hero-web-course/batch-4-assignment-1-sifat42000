// Problem 6

{
    // Create a interface
    interface Profile {
        name : string;
        age : number;
        email : string;
    }
    
    // Create a function and the function return an update Object
    const UpdateProfile = (User : Profile, newUpdate: Partial<Profile>) =>{
            const result = {...User, ...newUpdate}
            console.log(result)
            return result
    }
    

    // Create a User Object
    const User : Profile = {
        name : 'Alica',
        age : 25,
        email : 'alice@example.com'
    } 
    
    // Create a Update Object
    const Update : Partial<Profile> = {
        age : 26
    };
 
    // Call My function
    const result = UpdateProfile(User, Update)
    console.log(result)


}