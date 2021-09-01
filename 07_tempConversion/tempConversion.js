const ftoc = function(fahrenheit) {
  var celsiusOut = (5/9 * (fahrenheit - 32));
  var celsiusRounded = (Math.round(celsiusOut * 10) / 10).toFixed(1)
  return parseFloat(celsiusRounded);
  //return celsiusOut;
};

const ctof = function(celsius) {
  var fahrenheitOut = ((celsius * 1.8) + 32);
  var fahrenheitRounded = (Math.round(fahrenheitOut * 10) / 10).toFixed(1)
  return parseFloat(fahrenheitRounded);
};

module.exports = {
  ftoc,
  ctof
};

//var celsiusRounded = Math.round(celsiusOut + 10) / 10

