function ccProblem(array) {
  let highestSum = 0;
  let highestSumIndex = null;

  //iterate through the array
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    //remove dashes
    let ccNum = array[i].replace('-','');

    //split each number individiually
    let toBeSummed = ccNum.split('');

    //turn strings to numbers
    let sum = 0;
    for(let j = 0; j < toBeSummed.length; j++){
      let num = parseInt(toBeSummed[j]);
      sum += num;
    }

    if (sum >= highestSum) {
      highestSum = sum;
      highestSumIndex = i;
    }

    sum = 0;
  }
  return array[highestSumIndex]
}

//ANWSER:
function ccProblem(array){
  let highestSum = 0;
  let highestSumIndex = -1;
  for ( let i = 0; i < array.length; i++ ) {
    let sum = 0;
    let ccNum = array[i].replace('-','');
    let toBeSummed = ccNum.split('');
    for ( let j = 0; j < toBeSummed.length; j++ ) {
      let num = parseInt(toBeSummed[j]);
      sum += num;
    }
    if ( sum >= highestSum ){
      highestSum = sum;
      highestSumIndex = i;
    }
    // console.log("this is sum>>",sum);
  }
  return array[highestSumIndex];
}
