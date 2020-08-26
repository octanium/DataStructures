const { bubble } = require('./bubbleSort');
const { insertion } = require('./insertionSort');
let limit = JSON.parse(process.argv[2]);
console.log(limit);
if (
    !limit
    || !Number.isInteger(limit)
    || limit <= 1000
    ) { console.error('Please enter a valid limit');} 
    else {
        const min = 0;
    let size = 1000;
    const max = size*10;
    const generator = require('random-array-generator');
    const array = generator.randomArray({min, max, elements: size});

    while(size <= limit) {
        const t1 = bubble(size, false, array);
        const t2 =  insertion(size, false, array);
        size = size+1000;
    }
    } 