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
        if (!this.root.data) return;

        const isRoot = this.root.data == value;
        let targetNode = this.root;
        let parentOfTarget;
        let targetNodeIdentifier;

        if (!isRoot) {
            let currentNode = this.root;

            while (currentNode.left || currentNode.right) {
                if (currentNode.data == value) break;
                parentOfTarget = currentNode;
                if (value < currentNode.data) {
                    currentNode = currentNode.left;
                } else {
                    currentNode = currentNode.right;
                }
            }

            targetNodeIdentifier = parentOfTarget.left && parentOfTarget.left.data == value ? "left" : "right";
            targetNode = parentOfTarget[targetNodeIdentifier];
        }

        // it means the node is not yet in the tree
        if (!targetNode) return;

        // is targetNode is a leap node ??
        if (this.height(targetNode) == 1) {
            parentOfTarget[targetNodeIdentifier] = null;
            return;
        }

        // is targetNode has two children ??
        if (targetNode.left && targetNode.right) {
            let leftLeafNode;
            let currentNode = targetNode.right;
            let parentOfLeftLeafNode;

            // find the smallest value in the right side node of the target node
            while (currentNode.left) {
                parentOfLeftLeafNode = currentNode;
                currentNode = currentNode.left;
            }

            // "after the loop ended the currentNode will be the left leaf node"
            leftLeafNode = currentNode;

            // replace the value of the targetNode/root with the value of the left leaf node
            if (isRoot) {
                this.root.data = leftLeafNode.data;
            } else {
                parentOfTarget[targetNodeIdentifier].data = leftLeafNode.data;
            }

            // remove the left leap node
            if (parentOfLeftLeafNode) {
                parentOfLeftLeafNode.left = null;
            } else {
                targetNode.right = null;
            }

            return;
        }

        // is targetNode has single child ??
        if ((targetNode.left && !targetNode.right) || (!targetNode.left && targetNode.right)) {
            // locate the single child either it is the left node or the right node
            const targetNodeChildIdentifier = targetNode.left ? "left" : "right";

            // once identified, replace the parentOfTarget[targetNodeIdentifier] with the child of the target node
            if (isRoot) {
                this.root = targetNode[targetNodeChildIdentifier];
            } else {
                parentOfTarget[targetNodeIdentifier] = targetNode[targetNodeChildIdentifier];
            }
        }
    }

    find(value) {
        let currentNode = this.root;

        while (currentNode.left || currentNode.right) {
            if (currentNode.data == value) return currentNode;
            if (value < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return null;
    }

    levelOrder(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback is required.");
        }

        const queue = [this.root]; // this is ok for small array sample. if doing large data, might use linkedList instead

        while (queue.length) {
            const node = queue.shift();

            if (!node) continue;
            callback(node);
            queue.push(node.left, node.right);
        }
    }

    inOrder(callback, node = this.root) {
        if (typeof callback !== "function") {
            throw new Error("A callback is required.");
        }

        if (!node) return;

        this.inOrder(callback, node.left);
        callback(node);
        this.inOrder(callback, node.right);
    }

    postOrder(callback, node = this.root) {
        if (typeof callback !== "function") {
            throw new Error("A callback is required.");
        }

        if (!node) return;

        this.postOrder(callback, node.left);
        this.postOrder(callback, node.right);
        callback(node);
    }

    preOrder(callback, node = this.root) {
        if (typeof callback !== "function") {
            throw new Error("A callback is required.");
        }

        if (!node) return;

        callback(node);
        this.preOrder(callback, node.left);
        this.preOrder(callback, node.right);
    }

    height(node) {
        if (!node) return 0;
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }

    depth(node) {
        if (!this.root || !this.node) return 0;
        let currentNode = this.root;
        let depthCount = 1;

        while (currentNode.data != node.data) {
            if (node.data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
            depthCount++;
        }
        return depthCount;
    }

    isBalance() {
        const biggest = Math.max(this.height(this.root.left), this.height(this.root.right));
        const smallest = Math.min(this.height(this.root.left), this.height(this.root.right));
        return biggest - smallest < 2;
    }

    rebalance() {
        const newArr = [];
        this.levelOrder((node) => {
            newArr.push(node.data);
        });

        this.root = this.buildArray(newArr);
    }
}

module.exports = Tree;
