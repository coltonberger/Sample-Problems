function removeDash(string) {
  var noDash = '';
  for(var i = 0; i < string.length; i++) {
    var char = string[i];
    if(char !== "-"){
      noDash += char;
    }
  }
  return noDash;
}


function sumString(string) {
  var newString = removeDash(string);
  var ccArray = newString.split('');
  var sum = 0;

  for (var i = 0; i < ccArray.length; i++) {
    var strNum = ccArray[i];
    var interger = parseInt(strNum);
    sum += interger;
  }
  return sum;
}


function ccProblem(array){
  var largestSum = 0;

  for (var i = 0; i < array.length; i++) {
    var cards = array[i];
    var cardSum = sumString(cards);
    if (largestSum < cardSum) {
      largestSum = cardSum;
    }
  }

  var largestCard = largestSum;


  return largestCard;
}

const test0 = ['2222-2222', '4443-4443', '3444-3444', '3333-3333'];
// test0: 3444-3444
