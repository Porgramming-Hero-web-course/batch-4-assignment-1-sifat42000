// Problem 3


{
    function countWordOccurrences(Asentence : string, Aword : string){
       const Mainsentance = Asentence.toLowerCase()
       const word = Aword.toLowerCase()

       const sentance = Mainsentance.split(' ');
       console.log(sentance)

       // operation to matching word in the sentance

       let num = 0
       for(let s of sentance){
        if(s === word){
            num++  // count how much word matching in the sentance words
            const result = num;
            console.log(result)
            return result
        }
       }
       
    }
    
     // Variable declear 
     const sentance : string = "I love Typescript";
     const word : string = "typescript";
    
     // Call my function
     countWordOccurrences(sentance,word)
}
 