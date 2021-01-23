const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Queue {
    constructor() {
        this.data = [];
        this.size = 5;
        this.rear = -1;
        this.front = -1;
        this.Enqueue = () => {
            // if (this.rear === this.size-1) {
            //     this.rear = -1;
            // }
            if ((this.rear+1) === this.front || (this.front===0 && this.rear+1===this.size)) {
                console.log('OVERFLOW');
                return this.Traverse();
            }
            rl.question('Enter Element:', (element) => {
                if (this.front === -1) ++this.front;
                ++this.rear;
                this.rear = (this.rear)%this.size;
                this.data[this.rear] = element
                return this.Traverse();
            });
        }
        this.Dequeue = () => {
            if (this.front === -1)  { console.log('UNDERFLOW'); return this.Traverse()}
            this.data[this.front] = undefined;
            if (this.front === this.rear){
                this.rear = -1;
                this.front = -1;
            } else if (this.front === this.size-1) this.front = 0;
            else ++this.front;
            return this.Traverse();
        }
        this.Traverse = () => {
            const newArr = [];
            console.log(this.front, this.rear, this.size);
            for (let i=0; i<this.size; i++) newArr[i] = this.data[i];
            console.log(newArr);
            return this.menu();
        }
        this.menu = () => {
            rl.question('Enter 1: ENQUEUE, 2: DEQUEUE, 3; EXIT', (option) => {
                if (option == 1) return this.Enqueue();
                else if (option == 2) return this.Dequeue();
                else if (option == 3) return process.exit();
                else { console.log('Wrong Input'); return this.menu(); }
            });
        }
    }
}

const Q = new Queue();
Q.menu();
