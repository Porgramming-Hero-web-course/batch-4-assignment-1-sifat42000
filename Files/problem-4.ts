// Problem 4

{
    type Circle = { 
        shape: "circle";
        radius: number
    }

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number
    }
    // declear union types of Circle and Rectangle
    type myShape = Circle | Rectangle

    
    // Oparetion to Area of circle and rectangle
    function calculateShapeArea(value : myShape ){

      // Use type-guard
      if(value.shape === 'circle'){
        const Radius = value.radius
        const result = Math.PI * Radius * Radius
        console.log(result);
        return result
      }

      // Use type-guard
      else if(value.shape === 'rectangle'){
        const Width = value.width;
        const Height = value.height;
        const result = Width * Height;
        console.log(result)
        return result
      }
      
      else{
        return '0'
      }

    }

    // Create Objects of circle and rectangle 

    const circle : Circle = {
        shape : 'circle',
        radius : 5
    }

    const rectangle : Rectangle ={
        shape : 'rectangle',
        width : 4,
        height : 6
    }


   // call my function
   const Shape = calculateShapeArea(rectangle)


}