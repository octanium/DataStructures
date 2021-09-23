


const vertices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sets = new Map(); // Disjoint sets

class Vertex {
    constructor(item, parent) {
        this.item = item;
        this.parent = parent || this; // Absolute parent, point to self if set of single element
    }
}

const make_set = (list) => {
    for (v of list) {
        const set  = new Vertex(v);
        sets.set(v, set);
    }
}

const find_set = (v) => {// Basically finds the parent node that represents the set
    if (v.parent === v) return v;
    return find_set(v.parent);
}

const union = (x, y) => { 
    const vertex1  = sets.get(x);
    const vertex2 = sets.get(y);
    const root1 = find_set(vertex1);
    const root2 = find_set(vertex2);

    if (root1.item === root2.item) { console.log('Cycle.. ', vertex1, vertex2); return };
    root1.parent = root2;
}

make_set(vertices);

union(2, 4);
union(5, 7);
union(1, 3);
union(8, 9);
union(1, 2);
union(5, 6);
union(2, 3);


console.log(find_set(sets.get(1)));
console.log(find_set(sets.get(2)));
console.log(find_set(sets.get(3)));
console.log(find_set(sets.get(4)));
console.log(find_set(sets.get(5)));
console.log(find_set(sets.get(6)));
console.log(find_set(sets.get(7)));
console.log(find_set(sets.get(8)));
console.log(find_set(sets.get(9)));
console.log(find_set(sets.get(10)));

