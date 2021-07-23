const root = require("./create");

const items = [21, 1, 65, 44, 23, 43, 54, 27, 76, 12, 41];

class Node {
    constructor(item, left, right, parent) {
        this.item = item;
        this.left = left || null;
        this.right = right || null;
        this.parent = parent || null;
    }
}

let result;
const create = (items) => {
    let root  = new Node(items[0]);
    result = root;
    for (let i=1; i<items.length; i++) {
        const node  = new Node(items[i]);
        insert(root, node);
    }
    return result;
}

const insert = (root, node) => {
    // console.log(node);
    let current = root;
    let temp;
    let leftOrRight;
    while(current != null) {
        temp = current;
        if (node.item < current.item) {current = current.left; leftOrRight=0 }
        else {current = current.right; leftOrRight=1; }
    }
    if (leftOrRight === 0) temp.left = node;
    else temp.right = node;
}

const createSorted = (items, root, low, high) => { // D&C 2T(n/2) + C, O(n)
    if (low <= high) {
        let mid = Math.ceil((low+high)/2);
        let node = new Node(items[mid]);
        if(root) {
            if(node.item < root.item) root.left = node;
            else root.right = node;
        }
        if (low === high) return;
        createSorted(items, node, low, mid-1);
        createSorted(items, node, mid+1, high);
        return node;
    }
}

create(items);
let sorted = [...items].sort((a,b) => a-b)
const rootbstSorted = createSorted(sorted,null,  0, sorted.length-1);
module.exports={ rootbst: result, rootbstSorted }

