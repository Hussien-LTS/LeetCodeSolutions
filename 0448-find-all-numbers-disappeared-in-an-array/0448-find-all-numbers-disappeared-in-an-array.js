/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = []
    const ht = new Map()
   nums.forEach((num, i) => ht.set(num, i));
    for(let i =1 ; i <= nums.length; i++){
        if(!ht.has(i) ){
            res.push(i)
        }
    }
   
    return res
};