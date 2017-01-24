// Binary Tree Inorder Traversal(144).js
// Medium, accept rate: 44.0%


// It's easy to use recursion to solve the problem, try to use iteration method

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
  var result = [];
  var next = [];
  var index = root;

  while (!(index === null && next.length === 0)) {
    if (index !== null) {
      if (index.left === null && index.right === null) {
        result.push(index.val);
        index = null;
      } else {
        next.push(index);
        index = (index.left !== null) ? index.left : null;
      }
    } else {
      index = next.pop();
      result.push(index.val);
      index = (index.right !== null) ? index.right : null;
    }
  }
  
  return result;
};