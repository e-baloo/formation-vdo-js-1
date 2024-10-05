function exampleVar() {
    console.log(a); // undefined à cause du hoisting
    var a = 10;
    console.log(a); // 10
}

exampleVar();