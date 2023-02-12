/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res = []
    let ht = {}
    for (const num of nums){
        ht[num] =ht[num] +1 || 1
    }
    
     for (const num in ht){
       if (ht[num] > 1){
           res.push(num)
       }
    }
    return res
};