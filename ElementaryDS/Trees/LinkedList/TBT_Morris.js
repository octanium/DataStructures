const  root =require('./create'); // Unthreaded Binary Tree

let result = [];

const morrisInorder = (node) => {
    let current = node;

    while(current !== null) {
        if (current.left === null){ result.push(current.item); current = current.right; }
        else {
            let inorderPredecessor = getPredecessor(current);
            if (inorderPredecessor.right === null) {// Create Thread
                inorderPredecessor.right = current;
                // result.push(current.item); // For preorder traversal
                current = current.left;
            } else { // Means thread is already there, break the thread
                inorderPredecessor.right = null;
                result.push(current.item);
                current = current.right;
            }
        }
    }
}

const getPredecessor = (current) => {// is the rightmost node of current->left
    let node = current.left;
    while(node.right !== null && node.right !== current) node=node.right;
    // console.log('Inorder predecessor of ', current.item, 'is------------', node.item);
    return node;
}

morrisInorder(root);
console.log('Result::', result);