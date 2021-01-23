const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Node { 
    constructor(element) 
    { 
        this.item = element; 
        this.next = null;
    } 
} 

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
        this.menu = () => {
            console.log('Enter 1 to insert a node.');
            console.log('Enter 2 to delete a node.');
            console.log('Enter 3 to traverse.');
            console.log('Enter 4 to Reverse the linked list.');
            rl.question('Enter 5 to exit', (option) => {
                if (option == 1) return this.insert();
                else if (option == 2) return this.delete();
                else if (option == 3) return this.traverse();
                else if (option == 4) return this.reverse();
                else if (option == 5) return process.exit();
                else { console.log('Wrong Input'); return this.menu(); }
            });
        }
    }
    insert() {
        rl.question('Enter Item', (item) => {
            const node = new Node(item);
            let current;
            if (this.head === null) this.head = node;
            else {
                current = this.head;
                while (current.next) { 
                    current = current.next; 
                } 
                current.next = node; 
            }
            this.count++;
            return this.menu();
        });
    }
    traverse() {
        if (this.head === null) console.log('Linked List is empty');
        else {
            let current = this.head;
            while(current) { console.log(current.item); current = current.next; }
        }
        return this.menu();
    }

    delete() {
        if (this.head===null) { console.log('Linked List empty'); return this.menu()}
        else {
            console.log('Enter head to delete from head');
            console.log('Enter ende to delete from end');
            return rl.question('Enter number to delete ', (option) => {
                if (option==='head'){
                    this.head = this.head.next;
                } else if (option === 'end') {
                    let current = this.head;
                    let temp;
                    while(current.next) { temp = current; current = current.next;}
                    temp.next = null;
                }else {
                    let temp = null;
                    let current = this.head;
                    while(current) {

                        if (current.item === option) {
                            temp.next = current.next;
                            break;
                        } 
                        temp = current;
                        current = current.next;
                    }
                }
                return this.menu();
            });
        }

    }

    reverse() {
        let prev = null; 
        let current = this.head; 
        let next = null; 
        while(current) {    
            next = current.next; 
            current.next = prev; 
            prev = current; 
            current = next; 
        }
        this.head = prev
        return this.menu();
    }
}

const ll = new LinkedList();
ll.menu();