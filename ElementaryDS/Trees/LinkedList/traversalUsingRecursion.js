const  root =require('./create');
const { rootbst, rootbstSorted } = require('./createBST');

const inorder = (node) => {
    if (node !== null) {
        if (node.left) inorder(node.left);
        console.log(node.item); 
        if (node.right) inorder(node.right);
    }
}

const preorder = (node) => {
    if (node !== null) {
        console.log(node.item);
        preorder(node.left); 
        preorder(node.right);
    }
}

const postorder = (node) => {
    if (node !== null) {
        postorder(node.left); 
        postorder(node.right);
        console.log(node.item);
    }
}

inorder(rootbstSorted);
module.exports={ inorder, preorder, postorder }