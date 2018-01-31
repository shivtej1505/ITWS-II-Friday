// nested functions

function doValidation() {
    function init() {
        console.log("starting validation...");
    }
    init();
    function testOne() {
        console.log("running test 1...");
    }

    function testTwo() {
        console.log("running test 2...");
        function subTestTwo() {
            console.log("running subtest 2...");
        }
    }

    doValidation.testOne = testOne;
}

doValidation();
doValidation.testOne();

