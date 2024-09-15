const Tree = require("./bst");
const { prettyPrint } = require("./utils");

const newTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
newTree.insert(100);
prettyPrint(newTree.root);
