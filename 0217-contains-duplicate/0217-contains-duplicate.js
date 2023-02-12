/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const ht = {}
    for(const num of nums){
        ht[num] = ht[num] +1 || 1 
    }
    console.log(ht)
    for(const num in ht){
        if( ht[num] > 1) return true
    }
    return false
};