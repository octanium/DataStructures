

// let infix = '(a+b*c)-(c/d)';
// Assumption: The string is correct and balanced
let infix = 'a*b+c*d';

let s = []; // Final result
let op = []; // operatoror stack

// Function to check if operand op1 has higher precedence than op2
const operators = ['+', '-', '*', '/', '^', '('];
const precedence = (op1, op2) => operators.indexOf(op1) >= operators.indexOf(op2);


const postfix = (A) => {
    // step-1: Enclose the string in ()
    A = '(' + A + ')';
    // step-2 Iterate over the string
    for (let i=0; i<A.length; i++) {
        const char = A[i];
        console.log(A[i], op, s);
        if (operators.includes(char)) {
            // Push all operators in op to s that has higher or equal precedence than current operator
            let top = op.length-1;
            while (op[top] !== '(' && top >= 0) {
                if(precedence(op[top], char)) s.push(op.pop());
                top--;
            }
            // Why are we popping any higher operators from op?
            // Finally push the current operator onto op stack
            op.push(A[i]);
        }
        else if (char === ')') {
            // If a ) is encountered 
            let top = op.length-1;
            while (op[top] !== '(' && top >= 0) {
                s.push(op.pop());
                top--;
            }
            op.pop();
        }
        else {
            s.push(A[i]);
        }
    }
}

postfix(infix);
console.log('Postfix: ', s.join(''));


//The Postfix notation is used to represent algebraic expressions. The expressions written in postfix form are evaluated faster compared to infix notation as parenthesis are not required in postfix
