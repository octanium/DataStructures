class Stack {
    constructor() {
        this.data = [];
        this.top = -1;
        this.maxSize=5;
        this.push = (element) => {
                    if (this.data.length === this.maxSize) return console.log('STACK OVERFLOW');
                 this.data[++this.top] = element;
                }
    }
    // push = (element) => {
    //         if (this.data.length === this.maxSize) return console.log('STACK OVERFLOW');
    //      this.data[++this.top] = element;
    //     }
    // ARrow function above throws Error, since it isn't valid syntax. That's a field declaration, which isn't supported by JS for class yet
    // Use transform-class-properties plugin in .babelrc
    pop (){
        if (this.data.length === this.maxSize) return console.log('STACK OVERFLOW');
        --this.top;
    }
    traverse (){
        const newArr = [];
        for (let i=0;i <=this.top; i++) newArr[i] = this.data[i];
        return newArr;
    }
}

const st = new Stack();
st.push(22);
st.push(323);
st.pop();
st.push(212);
st.push(33);
st.pop();
console.log(st.traverse());
