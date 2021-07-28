


const vertices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sets = new Map();

class Vertex {
    constructor(item, rank, parent) {
        this.item = item;
        this.rank = rank || 0;
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
    return find_set(sets.get(v)).item;
}

const union = (x, y) => { 
    const vertex1  = sets.get(x);
    const vertex2 = sets.get(y);
    const parent1 = find_set(vertex1);
    const parent2 = find_set(vertex2);
    if (parent1.item === parent2.item) return;
    
    if (parent1.rank >= parent2.rank) {// out of x and y whichever has the highest rank becomes the parent
        if (parent1.rank === parent2.rank) parent1.rank++; // if both sets have same rank increment
        parent2.parent = parent1;
    } else {
        parent1.parent = parent2; // Path compression
    }
}

make_set(vertices);
union(1, 2);
union(2, 3);
union(4, 5);
union(6, 7);
union(5, 6);
union(3, 7);

