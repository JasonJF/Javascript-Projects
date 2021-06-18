function rangeOfNumbers(startNum, endNum) {
    var n = endNum - startNum;
    if (n < 0){
      return[];
    }
    else{
      const numArray = (rangeOfNumbers(startNum,endNum - 1));
      numArray.push(startNum + n);
    //   console.log(numArray);
      return numArray;

    }
  }
  rangeOfNumbers(1,5);
  