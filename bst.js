const Node = require("./node");
const mergeSort = require("./mergeSort");
const { removeDuplicates } = require("./utils");

class Tree {
    constructor(arr) {
        this.arr = arr;
        this.root = this.buildArray(arr);
    }

    buildArray(arr) {
        if (!arr || !arr.length) return null;
        if (arr.length < 2) return new Node(arr[0]);
        const filteredArr = removeDuplicates(arr);
        const sortedArr = mergeSort(filteredArr);

        const middleIndex = Math.floor(sortedArr.length / 2);
        const middle = sortedArr[middleIndex];
        const leftHalf = sortedArr.slice(0, middleIndex);
        const rightHalf = sortedArr.slice(middleIndex + 1);

        const node = new Node(middle);
        node.left = this.buildArray(leftHalf);
        node.right = this.buildArray(rightHalf);

        return node;
    }

    insert(value) {
        if (!value) return console.log("Please provide a value when using insert()");
        /**
         *  inserting a new value will always be a leap node
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
        const newNode = new Node(value);
        let currentNode = this.root;

        while (currentNode.left || currentNode.right) {
            if (value < currentNode.data) {
                if (!currentNode.left) break;
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) break;
                currentNode = currentNode.right;
            }
        }

        if (value == currentNode.data) return;
        if (value < currentNode.data) currentNode.left = newNode;
        else currentNode.right = newNode;
    }

    delete(value) {
        if (!value) return console.log("Please provide a value when using delete()");

        // if (value == this.root.data && this.depth() == 0) {
        //      this.root = null
        //     return
        // }

        let currentNode = this.root;

        while (!!currentNode.left && currentNode.left.data != value && !!currentNode.right && currentNode.right.data != value) {
            if (value < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        const parentNode = currentNode;
        const targetNodeIdentifier = parentNode.left.data == value ? "left" : "right";
        const targetNode = parentNode[targetNodeIdentifier];

        // it means the node is not yet in the tree
        if (!targetNode) return;

        // is targetNode is a leap node ??
        if (this.height(targetNode) == 1) {
            parentNode[targetNodeIdentifier] = null;
        }

        // is targetNode has single child ??
        if ((targetNode.left && !targetNode.right) || (!targetNode.left && targetNode.right)) {
            // locate the single child either it is the left node or the right node
            const targetNodeChildIdentifier = targetNode.left ? "left" : "right";
            // once identified, replace the parentNode[targetNodeIdentifier] with the child of the target node
            parentNode[targetNodeIdentifier] = targetNode[targetNodeChildIdentifier];
        }

        /**
         * traverse the tree starting at the root node and stop when leap node is reach
         *      while currentNode.left.value != value || currentNode.right.value
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

        if (!node) return 0;
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
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
