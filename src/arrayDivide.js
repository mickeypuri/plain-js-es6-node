const elementsPerGroup = (inputArray, groupLength) => {
    let count = Math.floor(inputArray.length/groupLength);
    return inputArray.length % groupLength > 0 ? ++count : count;
}

const needToAddElement = (resultArray, count) => resultArray.length === 0 || resultArray[resultArray.length - 1].length === count;

const groupArrayElements = (inputArray, groupLength) => {
    const count = elementsPerGroup(inputArray, groupLength);
    const groupedArrays = inputArray.reduce((result, item) => {
        const addElement = needToAddElement(result, count);
        if (addElement) {
            return [...result, [item]];
        }
        result[result.length - 1].push(item);
        return result;
    }, []);
    if (groupedArrays.length !== groupLength) {
        groupedArrays.push([]);
    }
    return groupedArrays;
};

export default groupArrayElements;