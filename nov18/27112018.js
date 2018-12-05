/**
 * Given an array of integers, return a new array such that each element at index i of the new array 
 * is the product of all the numbers in the original array except the one at i.
 */

/**
 * 
 * @param {Array} arr 
 */
function convert(arr) {
    let totalProduct = arr.reduce((prev, current) => prev * current);
    let newArr = [];
    arr.forEach(element => {
        newArr.push(totalProduct / element);
    });
    return newArr;
}

console.log(convert([2, 6, 4, 7, 4]));