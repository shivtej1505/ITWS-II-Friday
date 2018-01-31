var a = 1; // global variable

foo(); // Hoisting

function foo() {
    //console.log(a); // undefined
    var a = 3; // local variable
    console.log(a); // 3
}

console.log(a); // 1
