


const vertices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sets = new Map(); // Disjoint sets

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
    if (v.parent === v) return v;
    return v.parent = find_set(v.parent); // Path compression
}

const union = (x, y) => { 
    const vertex1  = sets.get(x);
    const vertex2 = sets.get(y);
    // console.log('vertex1', vertex1);
    // console.log('vertex2', vertex2);

    const parent1 = find_set(vertex1);
    const parent2 = find_set(vertex2);

    if (parent1.item === parent2.item) return;

    
    if (parent1.rank >= parent2.rank) {// out of x and y whichever has the highest rank becomes the parent
        parent2.parent = parent1; // make tree with higher rank as parent of other tree with lower rank
        if (parent1.rank === parent2.rank) parent1.rank++; // plus if both sets have same rank increment
    } else {
        parent1.parent = parent2;
    }
    // console.log('parent1', parent1);
    // console.log('parent2', parent2);
    // console.log('----------------------');
}

make_set(vertices);
//graph example-1, one Disjoint set
// union(1, 2);
// union(2, 3);
// union(4, 5);
// union(6, 7);
// union(5, 6);
// union(3, 7);

//graph example-2, four Disjoint set
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

// console.log(sets);

