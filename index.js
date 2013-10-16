/**
 * Here we look at how we can use functions
 */
debugger;
(function() {

//A simple Pure Function
function add(a, b) {
    return a + b;
}

console.log('Add');
console.log(add(2, 2));

//Another Pure Function
function power(base, exp) {
    //These variables are only visible inside of this function.
    var result = 1,
        i;
    for(i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

console.log('Power');
console.log(power(2, 10));
//This will throw an error!
//console.log(result);

//Using outside variables;
var count = 1;
function inc() {
    return count++;
}

console.log('Inc');
console.log(inc());
console.log(inc());
console.log(inc());

//We can override outside variables
function brokenInc() {
    var count;
    return count++;
}

console.log('Broken Inc');
console.log(brokenInc());
console.log(brokenInc());
console.log(brokenInc());

//We always see the "closest" variable
//WebStorm makes this variable as unused
var farAway = 1;
function outer() {
    console.log(farAway);

    var farAway = 2;

    function inner() {
        console.log(farAway);
    }

    inner();
}
console.log('farAway');
outer();

//Functions can also be arguments
function use(fn) {
    return fn(2, 2);
}

console.log('Use');
console.log(use(add)); //We only pass the name of the function.

//Named functions are always in scope
console.log('The future');
console.log(theFuture());

function theFuture() {
    return "Hello!";
}

//This is an anonymous function
var dec = function(a) {
    return a - 1;
};

console.log('Dec');
console.log(dec(5));
console.log(use(dec));//We also see here that argument count is optional

//Anonymous functions are not in ready until we set them
console.log('The Future?');
//This will throw an error!
//console.log(future2());

var future2 = function() {
    return "Anonymous future";
};

//The magic arguments variable
function checkArgs() {
    return arguments.length;
}

console.log('arguments');
console.log(checkArgs(1, 2, 3));
console.log(checkArgs(4, 5));
console.log(use(checkArgs));

function defaultArgs(a) {
    a = a || 10;
    return a * 10;
}

console.log('default args');
console.log(defaultArgs(5));
console.log(defaultArgs(10));

function funky(a, b) {
    arguments[0] = 2;
    return a;
}

console.log('funky');
console.log(funky(4));

//Call and Apply

//Scope comes with us
function getAdder() {
    var i = 0;
    return function() {
        return i++;
    }
}

console.log('Adder');
var adder = getAdder();
console.log(adder());
console.log(adder());

console.log('Another Adder');
var anotherAdder = getAdder();
console.log(anotherAdder());
console.log(anotherAdder());

//We can use our function inside of itself
//This is called recursion
function power2(base, exp) {
    if(exp == 0) {
        return 1;
    }
    return base * power2(base, exp - 1);
}

console.log('Power again');
console.log(power2(2, 10));

var power3 = function p(base, exp) {
    if(exp == 0) {
        return 1;
    }
    return base * p(base, exp - 1);
}

console.log('Power again again');
console.log(power3(2, 10));
//This causes an error!
//console.log(p(2, 10));

//Sometimes recursion isn't obvious!
function chicken() {
    return egg();
}

function egg() {
    return chicken();
}

console.log('Chicken or egg?');
//This causes an error!
//console.log(chicken());

})();