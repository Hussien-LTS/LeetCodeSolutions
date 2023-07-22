/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    let arr = []
    let res = []
    curr = head
    while (curr){
        arr.push(curr.val)
        curr = curr.next
    }
    
    for (let i = 0 ; i < arr.length; i++){
         let max = 0
        for (let j = i+1 ; j < arr.length; j++){
            if(arr[j]> arr[i] && arr[j] > max){
                 max = arr[j]
                break;
            }
            
        }
        res.push(max)
    }

    return res
};