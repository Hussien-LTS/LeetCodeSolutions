/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort()
    let first = nums[0]
    let res = 0
    const ht = new Map()
    nums.forEach((num, i) => ht.set(num, i));
    for (let i = 0; i <= nums.length; i++) {
        if (!ht.has(i)) {
           return i
        }else {
            res = nums.length +1
        }
    }
    return  res 
};