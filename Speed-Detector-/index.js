// first checks if the speed is less than or equal to the speed limit of 70

function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    // used an if statement to check if it is less than or equal to 70
    if (speed <= speedLimit) {
      console.log("Ok");
      return;
    }
    
    // used Math.floor to round down the number to the nearest integer after getting  a speed greater than the speed limit  
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    
    // then if the demerit points is greater than 12, it prints "License suspended" 
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log("Points: " + demeritPoints);
    }
  }

  calculateDemeritPoints(70)
  calculateDemeritPoints(80)
  calculateDemeritPoints(200)


