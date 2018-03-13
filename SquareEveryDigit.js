//Square Every Digit

//question1

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