const readLine = require('readline');
const SIZE = 5;
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
const array = [];
const menu = () => {
    console.log('STACK..', array);
    if (!array.length) {
        console.log('Stack EMpty::');
        PUSH();
    } else {
        console.log('');
        rl.question('Press 1:: Push,  2:: POP, 3:: exit.', (option) => {
            if (option == 1) return PUSH();
            else if (option == 2) return POP();
            else if (option == 3) return process.exit();
            else { console.log('Wrong Input'); return menu(); }
        });
    }
}

const exit = () => { console.log('EXITING.') };

PUSH = () => {
    if (array.length === SIZE) { console.log('STACK OVERFLOW.'); return menu();}
    rl.question('Please Enter an element.', (num) => {
        array.push(num);
        return menu();
    });
};

POP = () => {
    array.pop();
    return menu();}

menu();