// Scope: Global scope, function scope, module scope and block scope.

// var, let and const
// var is function scoped while let and const are block scoped.

/*

{
    const a= 'ghutti';
    let b= "Banana"
    console.log(b);  //Banana
}

function y(){
    var x= 'Amrit'
}
y();
console.log(x); //Uncaught ReferenceError: x is not defined
console.log(a); //Uncaught ReferenceError: a is not defined

*/

//variable shadowing

function show(){
    var x='This';
    let y='Why';

    if(true){
        let x='That';
        var y='Bye';
        
        console.log(x); //That
        console.log(y); //Why
    }
}
show();

//illegal shadowing