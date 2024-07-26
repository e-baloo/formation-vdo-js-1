
var varString = 'Hello, World!';
console.log(varString, typeof varString);
// > Hello, World! string

var varNumber = 123;
console.log(varNumber, typeof varNumber);
// > 123 number

var varBoolean = true;
console.log(varBoolean, typeof varBoolean);
// > true boolean

var varBigInt = 1234567890123456789012345678901234567890n;
console.log(varBigInt, typeof varBigInt);
// > 1234567890123456789012345678901234567890n bigint

var varUndefined = undefined;
console.log(varUndefined, typeof varUndefined);
// > undefined undefined

var varSymbol = Symbol('symbol');
console.log(varSymbol, typeof varSymbol);
// > Symbol(symbol) symbol

var varNull = null;
console.log(varNull, typeof varNull);
// > null object

var varArray = [];
console.log(varArray, typeof varArray);
// > [] object

var varObject = {};
console.log(varObject, typeof varObject);
// > {} object
