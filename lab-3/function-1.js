function foo() {
    console.log("I'm function foo");
    //bar();
}

foo();

var bar = function(){
    console.log("I'm function bar");
    //foo();
}

bar();
