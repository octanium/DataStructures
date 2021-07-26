

const E = 7;// Edges
const V = 10;// vertices-a,b,c,d,e,f,g,h,i,j=> 1, 2, 3, 4, 5,6,7,8, 9, 10

const parent = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]; // Array containing index of parents for a child index.eg say parent[2] = 4; parent of 2 = 4

const map = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10
}
const edgeList = [
    [map.b, map.d],
    [map.e, map.g],
    [map.a, map.c],
    [map.h, map.i],
    [map.a, map.b],
    [map.e, map.f],
    [map.b, map.c] // cycle
]; // Array of [x,y], edge from x to y

const find = (vertex) => { // Find Parent
    // if (vertex === 1) console.log('Parent::', parent[vertex])
    if (parent[vertex] === -1) return vertex;
    else return find(parent[vertex]);
}
const union = (x, y) => {
    const from = find(x);
    const to = find(y);
    parent[from] = to;
}

const isCycle = (list) => {
    for (edge of list) {
        const from  = find(edge[0]); // Find set of x
        const to = find(edge[1]); // Find set of y
        if (from !== -1 && to !== -1 &&  from === to) return true;
        union(from, to);
        // 
    }
    return false;
}

isCycle(edgeList) ? console.log('Cycle detected') : console.log('No cycle');