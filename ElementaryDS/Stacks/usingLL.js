

class Node {
    constructor(item, next) {
        this.item = item;
        this.next = next || null;
    }
}

class Stack {
    constructor () {
        this.size = 0;
        this.start = null;
        this.last = null;
    }
    push(item){
        const node = new Node(item, this.start);
        if (this.start === null) {
            this.start = node;
            this.last = node;
        } else {
            this.start = node;
        }
    };
    pop() {
        this.start = this.start.next;
    };
    display() {
        let temp = this.start;
        while(temp !== null) {
            console.log(temp.item);
            temp = temp.next;
        }
    };
}

const list = new Stack();
list.push(23);
list.push(33);
list.push(87);
list.push(78);
list.push(65);
list.pop();
list.pop();

list.display();