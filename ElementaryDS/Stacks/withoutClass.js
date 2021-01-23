const array = [];
function stack (){
    this.data = [];
    this.top = -1;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
}

function push(element) { this.data[++this.top] = element; }
function pop () { this.data[--this.top];}
function peek () { return this.data[this.top] }

const st = new stack();
//Arrow functions can never be used as constructor functions.
// Hence, they can never be invoked with the new keyword. 
// As such, a prototype property does not exist for an arrow function.
st.push(22);
st.push(323);
st.pop();
st.push(212);
st.push(33);
st.pop();

console.log(st.data);
