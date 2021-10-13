const testArray = [1,2,3,4,5];
const reverse = (input) => {
  return input.reduce((result, item) => {
    result.unshift(item);
    return result;
  }, []);
};

const reverse2 = input => {
  const reversed = [];
  input.forEach(element => reversed.unshift(element));
  return reversed;
}

const reverse3 = input => {
  let lastIndex = input.length - 1;
  for(let i = lastIndex; i >= 0; i--) {
    input.push(input[i]);
  }
  return input.slice(lastIndex + 1);
};
console.log(reverse3(testArray));

const swopElements = (firstIndex, lastIndex, firstValue, lastValue, array) => {
  array[firstIndex] = lastValue;
  array[lastIndex] = firstValue;
};

const reverseInline = (input) => {
  let lastIndex = input.length - 1;
  let firstIndex = 0;

  while (lastIndex > firstIndex) {
    swopElements(
      firstIndex,
      lastIndex,
      input[firstIndex],
      input[lastIndex],
      input
    );
    lastIndex = --lastIndex;
    firstIndex = ++firstIndex;
  }
};

//console.log(reverse(testArray));
//console.log(reverseInline(testArray));
//console.log(testArray);

const numbers = [...Array(10).keys()];
//console.log(numbers);

//console.log(reverse2(testArray));

