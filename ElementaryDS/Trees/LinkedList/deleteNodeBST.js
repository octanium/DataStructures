const {rootbst} = require('./createBST');

const deleteItem = (node, item) => {
    if (node === null) {
        console.log('Item not found');
        return null;
    }
    if (item < node.item) {
        node.left = deleteItem(node.left, item)
    } else if (item > node.item) {
        node.right = deleteItem(node.right, item);
    } else {
        if (node.left !== null && node.right !== null) {
            let leftmax = lmax(node.left);
            node.item = leftmax;
            node.left = deleteItem(node.left, leftmax);
            return node;
        }
        else if (node.left !== null) return node.right;
        else if (node.right !== null) return node.left;
        else return null;
    }
    return node;

}

const lmax = (node) => {
    if (node.right !== null) return lmax(node.right);
    else return node.item;
}

// deleteItem(rootbst, 12) // delete node with no left and right
// deleteItem(rootbst, 1) // delete node with only right child
deleteItem(rootbst, 43) // delete node with only left child
