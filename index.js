const Tree = require("./bst");
const { prettyPrint } = require("./utils");

const newTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
newTree.insert(100);
// newTree.delete(9);
// newTree.delete(3);
newTree.insert(6666);
// prettyPrint(newTree.root);
// console.log("``````````````");
// newTree.delete(67);
// prettyPrint(newTree.root);
// newTree.delete(6345);
// prettyPrint(newTree.root);
prettyPrint(newTree.root);
console.log(newTree.depth());
