/*
    Develop a function with the signature:

    function CostReduction (S, C) {

    }

    S = String of characters
    C = An Array of Costs, with one entry of Cost per character in S

    On removal of a character from S, the cost of removal of all other characters remain the same as they were originally

    This function will work out the total cost of removal of all characters so that no two adjoining characters are the same, and to do it in such a way as to 
    minimise the Cost of Removal of the characters.

    so if S = 'aabbcc' and C = [123456];
    then the return would be 'abc' and the cost would be 1+3+5 = 9, as to minimse cost of removal we take away the first

    if S = 'abbcdeee' and C = [897654321];
    then the return would be 'abcde' and Cost would be = 7+1+2 = 10, to minimise the cost of removal

*/

/*
    Algorithm:

    - Create a list of objects each with a character and its associated cost

    - Start with the first object, is the second as the same? 
        Yes: Remove the first or second depending on which has lower cost, then restart from the first object, until the first is not same as second
        No: Now start with the second object, and check the third, 
                Yes: Same, now remove either the second or the third, and keep starting from the second until the second is not the same as the third OR there is no third object
                No: Now start with the third object and check the fourth, is it the same as the third
                        Yes: Same, now remove either the third or the fourth, and keep starting with the third until the third is not the same as the fourth 

*/

function costReduction (S, C) {
    const inputArray = Array.from(S);
    let charArray = inputArray.map((s, i) => ({char: s, cost: C[i]}));
    let charIndex = 0;
    let charsLeft = true;
    let totalCost = 0;
    let comparison;

    do {
        const result = compare(charArray, charIndex, totalCost);
        charsLeft = result.charsLeft;
        charIndex = result.charIndex;
        charArray = result.charArray;
        totalCost = result.totalCost;
    } while (charsLeft);

    const resultString = charArray.reduce((acc, char) => `${acc}${char.char}`,'');
    console.log(`Result string: ${resultString}, Cost: ${totalCost}`);
}

function compare (inputArray, startIndex, totalCost) {
    let charsLeft;
    const nextIndex = startIndex +1;
    if (inputArray.length === nextIndex) {
        return {
            charsLeft: false,
            totalCost,
            charIndex: startIndex,
            charArray: inputArray
        };
    }
    const { char: startChar, cost: startCost } = inputArray[startIndex];
    const { char: nextChar, cost: nextCost } = inputArray[nextIndex];

    if (startChar === nextChar) {
        if (startCost < nextCost) {
            totalCost += startCost;
            inputArray.splice(startIndex, 1);
            charsLeft = inputArray.length > startIndex;
        } else {
            totalCost += nextCost;
            inputArray.splice(nextIndex, 1);
            charsLeft = inputArray.length > startIndex;
        }
        return {
            totalCost,
            charArray: inputArray,
            charIndex: startIndex,
            charsLeft
        };
    } 

    charsLeft = inputArray.length > nextIndex;
    return {
        totalCost,
        charArray: inputArray,
        charIndex: nextIndex,
        charsLeft
    };
};

export default costReduction;


