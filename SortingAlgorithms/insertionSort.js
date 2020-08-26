const insertion = (size, singleRun, A) => {

    // Insertion Sort
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
    for (let i=1; i < size; i++) {
        let key = array[i];
        let j = i-1;
        while(j>=0 && array[j] >= key){
            // interchange array[j] , array[j-1]
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
            j--;
        }
        array[j+1] = key
        }
    stopwatch.stop();
    
    // Time taken
    console.log('Array size: ', size, 'Insertion Sort: Time consumed: ', stopwatch.read());
    // Compare results
    if (singleRun) {
    if (array.equals(expectedOutput)) console.log('Insertion-Sort: Test case passed.');
    else console.log('Insertion Sort: Test case failed.');
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
        insertion(process.argv[2], true);
    }
    
    module.exports = { insertion };