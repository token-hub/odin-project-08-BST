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

// newTree.delete(6666);
newTree.delete(9);
newTree.delete(23);
newTree.delete(324);
// prettyPrint(newTree.root);
newTree.delete(100);
newTree.delete(6345);
newTree.delete(6666);
// console.log(newTree.find(7));
// prettyPrint(newTree.find(8));
console.log(newTree.isBalance());
newTree.rebalance();
newTree.postOrder((node) => {
    console.log(node.data);
});
prettyPrint(newTree.root);
