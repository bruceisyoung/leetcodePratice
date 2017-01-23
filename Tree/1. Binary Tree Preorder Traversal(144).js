// Binary Tree Preorder Traversal(144).js
// Medium, accept rate: 43.2%


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

var preorderTraversal = function(root) {
  var result = [];
  var next = [];
  var index = root;
  
  while (!(index === null && next.length === 0)) {
    result.push(index.val);
    if (index.left !== null && index.right !== null) {
      next.unshift(index.right);
      index = index.left;
    } else {
      if (index.left !== null) {
        index = index.left;
      } else if (index.right !== null) {
        index = index.right;
      } else {
        index = (next.length === 0) ? null : next.shift();
      }
    }
  } 
  
  return result;
};