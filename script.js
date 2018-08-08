const obj = {
    key1: 'first key',
    key2: 'second key'
};

const { key1, key2 } = obj;

const concatFn = (a, b) => `${a}, ${b}`;

const result = concatFn(key1, key2);

console.log(result);
