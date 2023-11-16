let word ="hey";
let number ;
const repeatString = function(word,number) {
    result = "";
    while(number >=1){
        result +=word;
        number--;
    }
    if (number <0){
        result = "ERROR";
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
