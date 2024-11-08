 // Problem 7
   
   // Class declear
   class Car {
       make : string;
       model : string;
       year : number;

    // Constructor declear 
    constructor(make : string, model : string, year : number){
       this.make = make,
       this.model = model,
       this.year = year
 }
    // Method declear to get CarAge
    getCarAge(){
      const TodayAge = new Date().getFullYear()
      const carYear = this.year;
      const TodayCarAge = TodayAge - carYear;
      console.log(TodayCarAge);
      return TodayCarAge
    }
    
}

    // Declear my Car properity name 
    const car = new Car('honda','civis',2018);


    // Call my function
    car.getCarAge()
