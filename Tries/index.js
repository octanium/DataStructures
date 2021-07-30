
const words = [
    'abc',
    'aaa',
    'abcd',
    'cde',
    'caa',
    'ca',
    'c',
    'dab',
    'daa',
    'daac',
    'dacb'
]


class Node {
    constructor(item) {
        this.item = item || null;
        this.end_word = 0;
        this.starts_with = 0;
        this.next = Array(26);
    }
}
const absoluteRoot = new Node('-');


const create = (word, root) => {// same as insert
    word = word.split('');
    for (let i=0; i<word.length; i++) {
        const ascii = word[i].charCodeAt(0) - 97;
        if (!root.next[ascii]) {
            const node = new Node(word[i]);
            root.next[ascii] = node;
            root = root.next[ascii];
        }
        else root = root.next[ascii];
        root.starts_with++;
    }
    root.end_word++;
}

const find = (word, root) => {
    word = word.split('');
    for (let i=0; i<word.length; i++) {
        const ascii = word[i].charCodeAt(0) - 97;
        if (root.next[ascii]) root = root.next[ascii];
        else {
            return false;
        }
    }
    if (root.end_word > 0) return true;
}

for (let i=0; i<words.length; i++) create(words[i], absoluteRoot);
//complexity = (number of words)*(length of longest word)

// console.log(absoluteRoot);
console.log(!!find('abc', absoluteRoot));