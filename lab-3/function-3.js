// pass one function to another

var add = function(a, b) {
    return a + b;
}

var sub = function(a, b) {
    return a - b;
}

var mult = function(a, b) {
    return a * b;
}

function bar(a, b, op) {
    console.log(op(a, b));
}

bar(1, 2, add);
bar(1, 2, sub);
bar(1, 2, mult);
