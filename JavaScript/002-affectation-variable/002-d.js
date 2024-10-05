function exampleVar() {
    var a = 10;
    console.log(a); // 10

    for (var i = 0; i < 3; i++) {
        var a = i; // La variable a est redéclarée et réaffectée, elle a une portée de function
        console.log(i, a); // 0 0, 1 1, 2 2
    }

    console.log(a); // 2
}

exampleVar();