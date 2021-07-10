// Implementing max priority queue;
// Operations: HEAP_MAX or Peek, MAX_HEAP_INSERT or Insert or add, HEAP_EXTRACT_MAX or Poll

const A =  [9, 31, 28, 18, 27, 21, 19, 39, 11, 49, 22, 14, 7];

const PARENT = i => Math.ceil(i/2)-1;
const LEFT_CHILD = i => 2*i + 1;
const RIGHT_CHILD = i => (2*i) + 2;
let heapSize = A.length;
const exchange = (A,x,y) => { let temp = A[x]; A[x]=A[y]; A[y]=temp; }
const display = () => { let Heap = []; for (let i=0; i<heapSize; i++) Heap.push(A[i]); console.log(Heap) }

// First step is to build a max heap;
const BUILD_MAX_HEAP = (A) => { // nlogn
    let totalNodes = A.length-1;
    for (let i=Math.ceil(totalNodes/2)-1; i>=0; i--) {
        MAX_HEAPIFY(A, i);
    }
}

const MAX_HEAPIFY = (A, i) => { // log n
    const l = LEFT_CHILD(i);
    const r = RIGHT_CHILD(i);
    let largest = i;
    // console.log('xx: ', i, A[i], A[l], A[r])
    if (A[l] > A[largest] && l<=heapSize) largest = l;
    if (A[r] > A[largest] && r<=heapSize) largest = r;
    if (largest === i) {  return; }
    // console.log(A[largest]);
    exchange(A, largest, i);
    return MAX_HEAPIFY(A, largest);
}
BUILD_MAX_HEAP(A);


// PQ operations
const HEAP_MAXIMUM = (A) => { return A[0]; }; // O(1)

const HEAP_EXTRACT_MAX = (A) => { // O(logn)
    if (heapSize < 1) return console.log('Heap Underflow');
    const max = A[0];
    A[0] = A[heapSize-1];
    heapSize--;
    MAX_HEAPIFY(A, 0);
    console.log('Max item extracted = ', max);
}

// 3rd operation Insert/Add
const HEAP_INCREASE_KEY = (A, i, key) => {
    if (key < A[i]) return console.log('New key is greater than existng key');
    A[i] = key;
    while(i>0 && PARENT(i) < A[i]) { // i>0 because if it checks for i=0 ie. root, root has no parent
        exchange(A, i, PARENT(i) );
        i = PARENT(i);
    }
}

const MAX_HEAP_INSERT = (A, key) => {//O(1) + O(logn)(for HEAP_INCREASE_KEY) => O(logn)
    heapSize++;
    A[heapSize-1] = Number.NEGATIVE_INFINITY;
    HEAP_INCREASE_KEY(A, heapSize-1, key);
}

// HEAP_EXTRACT_MAX(A);
// HEAP_EXTRACT_MAX(A);
// HEAP_EXTRACT_MAX(A);
// MAX_HEAP_INSERT(A, 50);
display();
