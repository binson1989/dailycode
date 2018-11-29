/**
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 */

 /**
  * 
  * @param {Array} list 
  * @param {number} k 
  */
function verifyCondition(list, k) {
    let result = false;
    for (const element of list) {
        if (list.includes(k - element)) {
            result = true;
            break;
        }
    }
    return result;
};

console.log(verifyCondition([10, 15, 3, 7], 17));