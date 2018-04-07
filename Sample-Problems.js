function fizzBuzz() {
  for(var i = 1; i <= 100; i++) {

  if(i % 3 === 0 && i % 5 === 0) {
    console.log("fizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log("fizz");
  } else if(i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
    }
  }
}

fizzBuzz()


function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
}
// OR

function isPalindrome(string) {
  var reverse = "";

  for (var i = string.length - 1; i >= 0; i--) {
    var letter = string[i];
    reverse += letter;
  }

return string === reverse

}

// function ccProblem(array) {
//   for (var i = 0; i < array.length; i++) {
//     var stringNum = array[i];
//     var number = stringNum.parseInt();
//   }
// }
const ccProblem = (arr) =>
  arr.reduce((maxCC, current) => {
    let currentSum = sumString(current);
    let maxSum = sumString(maxCC);
    return currentSum >= maxSum ? current : maxCC;
});

const sumString = s => {
  let ccArray = s.split('');
  let removedDashArray = ccArray.filter(e => e !== '-');
  let removedArrayNums = removedDashArray.map( e => parseInt(e));
  let sum = removedArrayNums.reduce( (sum, current) => sum + current);
  return sum;
}
const test0 = ['2222-2222', '4443-4443', '3444-3444', '3333-3333'];
const test1 = ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260'];
const test2 = ['999-77-66', '888-77-66','777-66-55', '666-55-44','9-9-9-9'];
const test3 = ['999-77-66', '888-77-6622222','777-66-55', '666-55-44','9-9-9-9'];
const test4 = ['999-77-66', '888-77-66','777-66-55', '666-55-44','9-9-9-9----999999999'];
const test6 = ['4916-2600-1804-0530','67-277894-7978', '9199-2522888-3972', '42152-2788923-7978','4556-4242-9283-2260'];
const test7 = ['0000',"1",'00000','000000000000',"200","101"];
const test8 = ['1111111','9999999','8888888','7777777','6666666'];

// test0: 3444-3444
// test1: 4252-278893-7978
// test2: 999-77-66
// test3: 888-77-6622222
// test4: 9-9-9-9----999999999
// test6: 42152-2788923-7978
// test7: 101
// test8: 9999999
