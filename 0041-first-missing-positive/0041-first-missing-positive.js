/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    nums = nums.filter(val => val > 0);
    nums.sort()
    
    let first = nums[0]
    let res = 1
    if (first !== 1) return res
    const ht = new Map()
    nums.forEach((num, i) => ht.set(num, i));
    for (let i = 1; i <= nums.length; i++) {
        if (!ht.has(i)) {
           return i
        }else {
            res = nums.length +1
        }
    }
    return  res 
}