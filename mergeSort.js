function mergeSort(arr) {
    if (!arr || arr.length < 2) return arr;

    const middleIndex = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middleIndex);
    const rightHalf = arr.slice(middleIndex);

    const leftHalfSorted = mergeSort(leftHalf);
    const rightHalfSorted = mergeSort(rightHalf);

    let leftCounter = 0;
    let rightCounter = 0;
    const sortedArray = [];

    while (leftHalfSorted[leftCounter] && rightHalfSorted[rightCounter]) {
        if (leftHalfSorted[leftCounter] < rightHalfSorted[rightCounter]) {
            sortedArray.push(leftHalfSorted[leftCounter]);
            leftCounter++;
        } else {
            sortedArray.push(rightHalfSorted[rightCounter]);
            rightCounter++;
        }
    }

    sortedArray.push(...leftHalfSorted.slice(leftCounter), ...rightHalfSorted.slice(rightCounter));

    return sortedArray;
}

module.exports = mergeSort;
