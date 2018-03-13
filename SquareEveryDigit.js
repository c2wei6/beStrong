//Square Every Digit

//question
/*
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

//answer standard
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join('')); 
}

//answer myself
function squareDigits(num){
  var str = num.toString();
  var arr = str.split('');
  var ret = '*';
  for (var i = 0; i < arr.length; i ++) {
    var temp = arr[i]*arr[i];
    ret += temp.toString();
  }
  return ret.slice(1);
}