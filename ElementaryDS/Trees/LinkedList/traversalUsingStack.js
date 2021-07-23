const  root =require('./create');


const traverse = (p) => {
    const s = [];

    do {
        while (p != null) {
            s.push(p);
            console.log(p.item) // Preorder Traversal
            p = p.left;
        }
        const q = s.pop();  
        // console.log(q.item); // Inorder traversal
        // if (p && p.right === null) console.log(p.item); // Also gives Preorder traversal
        p = q.right; 
    } while (s.length || p!=null) // Traverse until stack is empty, but stack can be empty once the root item is popped, hence we need to continue the loop until p(which is now right of popped item) holds some value
    // If we do not use p!==null in above condition, the do-while loop will exit after the root(which is the only item left in stack) is popped, and the right subtree will not be traversed
}

const postorder1 = (p) => { // using 2 stacks
    let s1 = [];
    let s2 = [];
    s1.push(p);
    while (s1.length) {
        const popped = s1.pop();
        s2.push(popped);
        if (popped.left) s1.push(popped.left);
        if (popped.right) s1.push(popped.right);
    }
    while(s2.length) {
        const popped = s2.pop();
        console.log(popped.item);
    }
}

const postorder2 = (root) => {// using 1 stack
    let current = root;
    const s = [];
    while(current !== null || s.length){
        if (current !== null) {
            s.push(current);
            current = current.left;
        } else {
            let rightOfTop = s[s.length-1].right;
            if (rightOfTop === null) {
                rightOfTop = s.pop();
                console.log(rightOfTop.item);
                while(s.length && rightOfTop === s[s.length-1].right) {
                    rightOfTop = s.pop();
                    console.log(rightOfTop.item);
                }
            }
            else current = rightOfTop;
            
        }
    }
}

const levelOrder = (root) => { // Using stack - Space complexity O(n)
    const s = [];
    s.push(root);
    let index = 0
    while(s[index]) {
        if (s[index].left !== null) s.push(s[index].left);
        if (s[index].right !== null) s.push(s[index].right);
        console.log(s[index].item);
        index++;
    }
}

const levelOrder2 = (root) => {// Using Queue Spcae Complexity O(n/2)=> O(n)
    const Q =[];
    Q.push(root); // Enqueue
    while(Q.length) {
        const node = Q.shift(); // Dequeue
        console.log(node.item);
        if (node.left) Q.push(node.left); // Enqueue
        if (node.right) Q.push(node.right); // Enqueue
    }
}


levelOrder2(root);

