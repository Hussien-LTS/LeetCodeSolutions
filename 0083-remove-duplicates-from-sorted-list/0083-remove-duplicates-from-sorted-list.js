/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var curr = head
    while(curr && curr.next){
        if( curr.val === curr.next.val){
            curr.next = curr.next.next
        }else{
            curr = curr.next
        }
        
    }
    return head;
};

//   let current = head;

//   while (current && current.next) {
//     if (current.val === current.next.val) {
//       current.next = current.next.next; // Skip the duplicate node
//     } else {
//       current = current.next; // Move to the next node
//     }
//   }

//   return head;