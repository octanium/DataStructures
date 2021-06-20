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


//Alternative Syntax: Stack below is still a Class
// function Stack(capacity) {
//     if (capacity === undefined) { capacity = 1000; }
//     this.top = -1;
//     this.data = new Array(capacity);
// }

// Stack.prototype.size = function() {
//     return (this.top + 1);
// };

// Stack.prototype.isEmpty = function() {
//     return (this.top === -1);
// };

// Stack.prototype.push = function(value) {
//     this.top++;
//     this.data[this.top] = value;
// };

// Stack.prototype.top = function() {
//     if (this.isEmpty()) {
//         throw new Error("StackEmptyException");
//     }
//     return this.data[this.top];
// };

// Stack.prototype.pop = function() {
//     if (this.isEmpty()) {
//         throw new Error("StackEmptyException");
//     }
//     var topVal = this.data[this.top];
//     this.top--;
//     return topVal;
// };

// Stack.prototype.print = function() {
//     for (var i = this.top; i >= 0; i--) {
//         console.log(this.data[i]);
//     }
// };

// var s = new Stack();
// s.push(1);
// s.push(2);
// s.push(3);
// s.print();
// console.info(s.pop());
// console.info(s.pop());




