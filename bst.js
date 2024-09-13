const Node = require("./node");

class Tree {
    constructor(arr) {
        this.arr = arr;
        // this.root = this.buildArray(arr);
    }

    buildArray(arr) {
        /**
         * remove duplicates then sort the given array
         *
         * find the middle part of the array 2
         *     middleIndex = Math.floor(arr.length / 2)
         * call the build array again but with left half [1]
         * call the build array again and pass the right half [3]
         *
         * if (!arr || !arr.length) null;
         *
         * midlle = arr[middleIndex];
         * leftHalf = arr.slice(0, middleIndex);
         * rightHalf = arr.slice(middleIndex);
         *
         * const node = new Node(middlePart);
         * node.left = this.buildArray(leftHalf)
         * node.right = this.buildArray(rightHalf)
         *
         * return node
         */

        if (!arr || !arr.length) return null;
        if (arr.length < 2) return new Node(arr[0]);

        // this is not like the mergeSort that the middle part is included either from the left/right side.
        // the middle part here should not be part of either the side.
        const middleIndex = Math.floor(arr.length / 2);
        const middle = arr[middleIndex];
        const leftHalf = arr.slice(0, middleIndex);
        const rightHalf = arr.slice(middleIndex + 1);

        const node = new Node(middle);
        node.left = this.buildArray(leftHalf);
        node.right = this.buildArray(rightHalf);

        return node;
    }

    insert(value) {
        /**
         *  inserting a new value will also be a leap node
         *
         * traverse the tree starting at the root node and stop when leap node is reach
         *      if value is < value of the current node
         *          move to the left side of current node
         *      else
         *          move to the right of the current node
         *
         *
         *  if current node is a left node
         *      if value is < currentnode.value
         *          currentNode.left = new Node(value)
         *      else
         *          currentNode.right = new Node(value)
         *
         */
    }

    delete(value) {
        /**
         * traverse the tree starting at the root node and stop when leap node is reach
         *      if currentNode.left.value != value || currentNode.right.value
         *          if value is < value of the current node
         *               move to the left side of current node
         *          else
         *              move to the right of the current node
         *
         *      "after the loop or traversal"
         *      currentNode here will be the "parent" of the target value to delete
         *
         *      const parentNode = currentNode;
         *      const targetNodeIdentifier = parentNode.left.value == value ? "left" : "right";
         *      const targetNode = parentNode[targetNodeIdentifier];
         *
         *
         *      if (targetNode is a leaf node) // might use the depth method here
         *          parentNode[targetNodeIdentifier] = null
         *
         *      else if (targetNode has a single child) depth == 1
         *            // locate the single child either it is the left node or the right node
         *            const targetNodeChildIdentifier = targetNode.left.value ? "left" : "right";
         *            // once identified, replace the parentNode[targetNodeIdentifier] with the child of the target node
         *            parentNode[targetNodeIdentifier] = targetNode[targetNodeChildIdentifier];
         *
         *      else if (targetNode has two child. both the left and right)
         *          // find the smallest value in the right side node of the target node
         *
         *          currentNode = targetNode.right
         *          parentOfLeftLeafNode = currentNode
         *
         *          // traverse the tree until you find the left leaf node
         *          while (currentNode.left)
         *              parentOfLeftLeafNode = currentNode
         *              currentNode = currentNode.left
         *
         *          "after the loop ended the currentNode will be the left leaf node"
         *          leftLeafNode = currentNode
         *
         *          // replace the targetNode with the left leaf node
         *          parentOfTarget[targetNodeIdentifier] = leftLeafNode
         *
         *          // remove the left leap node
         *          parentOfLeftLeafNode.left = leftLeafNode.right
         */
    }

    find(value) {
        // function that returns the node with the given value.
        /**
         * traverse the tree starting at the root node and stop when leap node is reach
         *      if currentNode.value != value
         *          if value is < value of the current node
         *               move to the left side of current node
         *          else
         *              move to the right of the current node
         */
    }

    levelOrder(callback) {
        // throw error when no callback is given
        // levelOrder should traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument,
        /**
         * const queue = [this.root];
         *
         * traverse the tree starting at the node
         *
         *  while (queue.length)
         *      node = queue.unshift()
         *      callback(node) // this shouldn't be any type of async func
         *      queue.push(node.left, node.right)
         *
         */
    }

    height(node) {
        // function that returns the given node’s height.
        // Height is defined as the number of edges in the longest path from a given node to a leaf node.
        /**
         * traverse the starting from the given node.
         * calculate the left side of the given node
         * calculate the right side of the given node
         *
         * then return which ever the height. if both is null then return just 1
         *
         * if (!node) return 0
         * return Math.max(this.height(node.left), this.height(node.right)) + 1
         */
    }

    depth(node) {
        // function that returns the given node’s depth.
        //Depth is defined as the number of edges in the path from a given node to the tree’s root node.
        /**
         * starting from the root. (this.root)
         * count the level until you reach the target node.
         */
    }

    isBalances() {
        // A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1
        /**
         * const biggest = Math.max(this.height(this.root.left), this.heigh(this.root.right));
         * const smallest = Math.min(this.height(this.root.left), this.heigh(this.root.right));
         *
         * return biggest - smallest < 2;
         */
    }

    rebalance() {
        // function that rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
        /**
         * get all the value and insert it in an array.
         *
         * then call the buildTree method.
         */
    }
}

module.exports = Tree;
