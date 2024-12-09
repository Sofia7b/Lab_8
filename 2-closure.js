'use strict';

const store = (x) => {
    const closure = x;

    return () => closure;
};

const read = store(5);
console.log(read);
const value = read();
console.log(value); // Output: 5

module.exports = { store };
