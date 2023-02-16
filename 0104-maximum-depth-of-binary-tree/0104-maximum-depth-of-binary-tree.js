/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    let maximumDepth = 0;
    const nodesToTraverse = [[root, 1]];

    while(nodesToTraverse.length) {
        const [node, depth] = nodesToTraverse.pop();

        if(!node) {
            continue;
        }

        maximumDepth = Math.max(maximumDepth, depth);
        nodesToTraverse.push([node.left, depth + 1]);
        nodesToTraverse.push([node.right, depth + 1]);
    }

    return maximumDepth;
}