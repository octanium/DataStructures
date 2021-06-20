

class Queue {
    constructor() {
        this.queue = [];
        this.max = 5;
        this.front = -1;
        this.rear = -1;
    }

    insert(item) {
        if (this.front === -1 && this.rear === -1) {
            this.front++;
            this.rear++;
            this.queue[this.front] = item
        }
        else {
            if (this.rear === this.max-1) return console.log('Queue Full');
            this.rear++;
            this.queue[this.rear] = item;
        }
        // console.log(item);

    }

    remove() {
        if (this.front === this.max || this.front == -1) return console.log('Queue empty');
        this.front++;
    }

    display() {
        for (let i=this.front; i<=this.rear; i++) console.log(this.queue[i]);
    }
}

const q = new Queue();

q.remove();
q.insert(10);
q.insert(20);
q.insert(30);
q.insert(40);
q.insert(50);
q.insert(60);
q.display();
console.log('-----------');
q.remove();
q.remove();
q.display();
console.log('-----------');
q.remove();
q.remove();
q.remove();
q.remove();
q.display();
console.log('-----------');
q.insert('77');
