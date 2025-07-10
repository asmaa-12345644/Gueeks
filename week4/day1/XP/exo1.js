function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
funcOne()
//1.1 - run in the console:  =>inside the funcOne function 3
//1.2  What will happen if the variable is declared with 
//     const instead of let ? 
//     =>Uncaught TypeError: Assignment to constant variable.
//     car  const interdit toute réaffectation après l'initialisation.



//#2

let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}
    alert(`inside the funcThree function ${a}`);


funcThree()  //=> inside the funcThree function 0
funcTwo()     // a=5
funcThree()   //=>inside the funcThree function 5

// 2.2 
// Uncaught TypeError: Assignment to constant variable.On ne peut pas faire a = 5;


function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}


funcFour()
funcFive()

// #3.1 - run in the console:
//=> inside the funcFive function hello

let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

funcSix()
// #4.1 - run in the console: =>inside the funcSix function test"

// #4.2 - What if a is declared with const? 
//=>inside the funcSix function test car  const fonctionne aussi localement tant qu’on ne tente pas de réaffecter a.



//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run in the console:
//in the if block 5
//outside of the if block 2

// #5.2 - What if declared with const instead of let?
// Résultat identique