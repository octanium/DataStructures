const bubble = (size, singleRun, A) => {

// Buuble Sort- Brute-Force Approach
const generator = require('random-array-generator');
const Stopwatch = require('statman-stopwatch');
let array = [];
let expectedOutput  = [];

if (singleRun) {
    const min = 0;
    const max = size*10;
    array = generator.randomArray({min, max, elements: size});
    expectedOutput  = [...array];
    expectedOutput = expectedOutput.sort((a, b) => a - b);
    require('../../overridePrototypes'); 
}
else array = [...A];

const stopwatch = new Stopwatch();

stopwatch.start();
let temp;
for (let i=0; i < size; i++) {
    for (let j=i+1; j< size; j++) {
        if (array[j] <= array[i]) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
stopwatch.stop();

// Time taken
console.log('Array size: ', size, 'Bubble Sort: Time consumed: ', stopwatch.read());
// Compare results
if (singleRun) {
if (array.equals(expectedOutput)) console.log('Bubble-Sort: Test case passed.');
else console.log('Bubble Sort: Test case failed.');
}

return stopwatch.read();

// Worst-time complexity O(n^2)
// Best-time complexity O(n^2)
// Average-time complexity O(n^2)
}

if (
    process.argv[2]
    && process.argv[3]
    && JSON.parse(process.argv[3]) === 1
    && Number.isInteger(JSON.parse(process.argv[2]))) {
    bubble(process.argv[2], true);
}

module.exports = { bubble };