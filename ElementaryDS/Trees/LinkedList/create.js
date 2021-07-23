

// let the following numbers to be inserted by user if he would have used scanf() of C language
const items = [21, 1, 65, 44, 23, 43, 54, 27, 76, 12, 41];

class Node {
    constructor(item, left, right, parent) {
        this.item = item;
        this.left = left || null;
        this.right = right || null;
        this.parent = parent || null;
    }
}

class Create {
    constructor() {
    }

    create (arr, item, i,  n) {
        if (i<n) {
            const node = new Node(arr[i]);
            item = node;
            item.left = this.create(arr, item.left, 2*i + 1, n);
            item.right = this.create(arr, item.right, 2*i  +2, n);
        }
        return item;
    }
}

const tree = new Create();
const root = tree.create(items, null, 0, items.length);
// console.log(root);

module.exports=root;