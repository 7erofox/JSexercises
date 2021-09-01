
const sumAll = function(firstParam, secondParam) {
  if (!Number.isInteger(firstParam) || !Number.isInteger(secondParam)) return "ERROR";
  if (firstParam < 0 || secondParam < 0) return "ERROR";

    var sum = 0
    if (firstParam > secondParam) {
      for (var i = secondParam; i <= firstParam; i++) {
        sum += i;
      }
      return sum; 
    }else{
      for (var i = firstParam; i <= secondParam; i++) {
        sum += i;
      }
      return sum; 
    }
};

module.exports = sumAll;

