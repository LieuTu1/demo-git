const math = {
    add: (a, b) => a + b
};

const test = {
    add: (a, b) => a - b
};
const obj = {
    name: "Latus",
    add: function(a, b) {
        return a + b;
    }
};
console.log(math.add(1, 2)); // 3
console.log(test.add(3, 1));
console.log(obj.name);
console.log(obj.add(3, 1));