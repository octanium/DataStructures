

class Node {
    constructor(item, next) {
        this.item = item;
        this.next = next || null;
    }
}

class Queue {
    constructor() {
        this.max = 10;
        this.start = null;
        this.last = null;
    }

    insert(item) {
        console.log(item);
    }

    dequeue() {

    }

    display() {}
}

const q = new Queue();
q.insert(11);
q.insert(22);