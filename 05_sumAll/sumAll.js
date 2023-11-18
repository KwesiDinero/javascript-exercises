let val1, val2;
 const sumAll = function(val1, val2) {
     if (isNaN(val1) || isNaN(val2)) {
        return "ERROR";
    } 
    let sum = 0;
    let val;
    let arr =[];
    
  
    if (val1 < 0 || val2 < 0) {
        return "ERROR";
    }
    //check if the first value is less than second value before proceeding
   if (val1<val2){
    for(val = val1; val <= val2; val++){
        arr.push(val);
        sum +=val;
    }
   }
   else {
    for(val = val2; val <= val1; val++){
        arr.push(val);
        sum +=val;
    }
   }
   return sum;
};

// Do not edit below this line
module.exports = sumAll;
