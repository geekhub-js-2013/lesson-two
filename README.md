# Javascript, #2

## Debugging

Something I didn't mention.

- `console.log`
- `console.warn`
- `console.error`

- `debugger`


## Functions

Functions are how we reuse code. So that we don't have to copy and paste. And so that we can make changes in one place.

They also allow us to have a "black box" of functionality. We don't worry about how the inside works.

    function add(a, b) {
        return a + b;
    }
    
    add(2, 2);

- function keyword
- name
- arguments
- return - functions always return something. Execution stops at return

### Scope

    function power(base, exp) {
        var result = 1, i;
        for(i = 0; i < exp; i++) {
            result *= base;
        }
        return result;
    }
    
    power(2, 10);
    
Here both the `result` and `i` variables are visible only inside the function.

These variables are new each time we call the function.

Arguments are within the scope. Arguments are copies. 

Variables outside of the function are visible.

### Inner functions

    var a = 1;
    function outer() {
        var a = 2;
        
        function inner() {
            console.log(a);
        }
    }
    
    

