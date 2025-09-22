//#####================Oprators
/*
1. Assignment operators
2. Comparison operators
3. Arithmetic-operators
4. Bitwise operators
5. Logical operators
6. String operators
7. Conditional (ternary) operator
8. Comma operator
9. Unary operators
10. Relational operators
*/

//===============================================================Assignment operators =
/* let x=10;
   let y;
    y=x; // return valu of right oprat
    console.log(y);
*/

//===============================================================compound oprator
// let x=10;
// let y=20;

// x=x+y;
// console.log(x)

// x+=y; // same as x=x+y;
// console.log(x)

/*     we can use 
       x += y; // x = x + y;
       x -= y; // x = x - y;
       x *= y; // x = x * y;
       x /= y; // x = x / y;
*/

// ===============================================================Arithmetic-operators
/*//     +
  //     -
  //     *
  //     /
  // //     ** use for give power
   let x=10;
   console.log(x ** 2);
   x += 1;
   x++;
   x--;
   console.log(x);
*/

//=============================================================== Logical operators
// mostly retun Boolean value
/*
    //use with boolean
    //===============================================================1. Logical AND &&
    let happy=true && true;
    console.log(happy); // true

    const isLogIn=true;
    const hasPermision=true;
    if(isLogIn && hasPermision){
        //consol.log('successfully');
    }
    
    in Brouser consol if we write
    "cat" && "dog";
    "dog"
    
    "cat" && false
    false

    if all oparants  boolean so it will return boolean and 
    if all oparants is nisot boolean so it wiil return right side value like obeov example

            'cat' && "dog"
            'dog'
            true && true
            true
            'cat' && false
            false
            true && "cat"
            'cat'
    logical operato evaluat left to right so can use tecnicts like
    short circuit techniques

    //===============================================================2. Logical OR ||
    let happy=true && false;
    console.log(happy); // true

    const isLogIn=true;
    const hasPermision=true;
    if(isLogIn || hasPermision){
        //consol.log('successfully');
    }

 in Brouser consol if we write
            'cat' || "dog"
            'cat'
            false || false
            false
            'cat' && false
            false
            false || "cat"
            'cat'
            'cat' && true
            true
            true || "cat"
            true

    //===============================================================3. Logical  NOT !

    let happy=true;
    console.log(!happy); // false

    conts animal="cat";
    console.log(!animal); //false

    const isLogIn=false;
    const hasPermision=false;
    if(!isLogIn ){
        //consol.log('redirect to log in');
    }
*/

//=============================================================== Conditional operator (ternary operator)

// const userRole = "admin";
// if (userRole === "admin") {
//   console.log("you are an Admin");
// } else {
//   console.log("you are not an Admin");
// }

// condition ? '' : '';
// userRole === "admin" ? console.log("you are an Admin") : console.log("you are not an Admin");

// ===============================================================Comparison Oprator
//return Boolean value

// Equal (==)
// Not Equal (!=)
// Strict Equal(===)
// Strict Not Equal(!===)
// Greater then (>)
// Greater then or Equal (>=)
// less then (<)
// less then or Equal (<=)

// console.log(4 == 5);
// console.log(4 != 5);
// console.log(4 ===4 );
// //coetcion
// console.log(4>5);
// console.log(4>=5);
// console.log(4<5);
// console.log(4<=5);

// console.log(4 + 10 * 2);
// console.log(4 * 10 + 2);
// console.log((4 + 10) * 2);
