'use strict';

const contract = (fn, ...types) => function(...args) {
    // контроль типов параметров
    for (let i = 0; i < args.length; ++i) {
        if (typeof(args[i]) !== types[i].name.toLowerCase()) {
            throw new TypeError(`Parameter type ${types[i].name} expected`);
        }
    }

    // контроль типа результата
    const result = fn(...args);
    const resultType = types[types.length-1].name;
    if (typeof(result) !== resultType.toLowerCase()) {
        throw new TypeError(`Result type ${resultType} expected`);
    }

    return result;
};


const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res); 

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res1 = concatStrings('Hello ', 'world!');
console.dir(res1);

contract(add, Number, Number, String)(1,2);

module.exports = { contract };
