// Binary Tree Postorder Traversal(144).js
// Hard, accept rate: 38.5%


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

 var postorderTraversal = function(root) {
  var result = [];
  var next = [];
  var index = root;
  
  while (!(index === null && next.length === 0)) {
    if (index !== null) {
      if (index.left === null && index.right === null) {
        result.push(index.val);
        index = null;
      } else {
        next.push([index, 1]);
        index = (index.left !== null) ? index.left : null;
      }
    } else {
      if (next[next.length - 1][1] === 1) {
        if (next[next.length - 1][0].right === null) {
          result.push(next.pop()[0].val);
          index = null;
        } else {
          next[next.length - 1][1] = -1;
          index = next[next.length - 1][0].right;          
        }
      } else {
        result.push(next.pop()[0].val);
        index = null;
      }
    }
  }
  
  return result;
};