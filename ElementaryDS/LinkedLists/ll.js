

class Node {
    constructor(item, next) {
        this.item = item;
        this.next = next || null;
    }
}

// const reverseLL = (start) => {
//     let t1 = start, t2 = start, t3 = start;
//     while(t1.next != null) {
//         t1 = t1.next;
//         t2.next = t3;
//         t3 = t2;
//         t2 = t1;
//     }
//     t1.next = t3;
//     start.next = null;
// }

const reverseLL = (start) => {
    let prev = null;
    let current = start;
    let nextNode = current.next;
    while (current != null) {
        nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    start = prev;
}

class LL {
    constructor() {
        this.start = null;
        this.last = null;
        this.total = 0;
    }

    display () {// O(n)
        let temp = this.start;
        while(temp != null) {
            console.log(temp.item);
            temp = temp.next;
        }
    }

    insertAtStart (item) { // O(1)
        const node = new Node(item, null);
        if (this.start === null) {
            this.start = node;
            this.last = node;
        } else {
          node.next = this.start;
          this.start = node;  
        }
        this.total++;
    }

    insertAtEnd (item) { // O(1)
        const node = new Node(item, null);
        if (this.start === null) {
            this.start = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.total++;
    }

    insertAtPos (item, pos) {// O(n)
        const node = new Node(item, null);
        if (pos > this.total) return console.log('Invalid Position');
        let temp = this.start;
        let prev;
        let i=0;
        while(i !== pos-1) {
            i++;
            prev = temp;
            temp = temp.next;
        }
        prev.next = node;
        node.next = temp;
    }

    deleteAtStart () {
        if(this.start===null) return console.log('No items to delete');
        this.start = this.start.next;
    }

    deleteAtEnd () {
        let temp = this.start;
        let prev;
        while (temp.next !== null) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = null;
    }

    deleteAtPos (pos) {
        if (pos > this.total || pos < 1) return console.log('Invalid position');
        if (pos === 1) {
            return this.deleteAtStart()
        }
        let temp = this.start;
        let prev;
        let i=1;
        while(i < pos) {
            i++;
            prev = temp;
            temp = temp.next;
        }
        prev.next = temp.next;
    }

    reverse () {
        reverseLL(this.start);
        this.start = this.last;
    }
}

const list = new LL();
list.insertAtEnd(11);
list.insertAtEnd(22);
list.insertAtEnd(33);
list.insertAtEnd(44);
list.insertAtEnd(55);
list.display();
console.log('--------------');
list.reverse();
list.display();
