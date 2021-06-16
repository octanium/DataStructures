class Stack {
    constructor(size) {
        this.A = [];
        this.size = size;
        this.top = -1;
    }
    push (item) {
        if (!item) return console.log('Item is missing');
        if (this.top === this.size-1) return console.log(`Stack Overflow for item ${item}`);
        return this.A[++this.top] = item;
    }
    pop(){
        if (this.top === -1) return console.log('Stack Underflow');
        return this.top--;
    }
    display () {
        let start = this.top;
        if (start === -1) return console.log('Stack Empty');
        console.log('/-----------------------/');
        while(start >= 0) { console.log(this.A[start--]); } 
    }
}

const ob = new Stack(6);
ob.push(33);
ob.push(12);
ob.push(54);
ob.push(121);
ob.push(98);
ob.push(76);
ob.push(45);
ob.display();
ob.pop();
ob.pop();
ob.display();
ob.pop();
ob.pop();
ob.pop();
ob.display();
ob.pop();
ob.pop();




