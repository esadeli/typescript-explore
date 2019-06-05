"use strict";
function identity(arg) {
    return arg;
}
// testing
console.log(identity('hi!')); // hi!
console.log(identity(9)); // 9
function identity2(arg) {
    console.log('typeof-----', typeof arg === 'string');
    return arg;
}
// testing
console.log(identity2('wow!')); // wow!
console.log(identity2(10)); // 10
function identity3(arg) {
    return arg;
}
// making an alias of a function 
var myIdentity = identity3;
// testing
// identity3('type T'); // type T!
console.log(myIdentity('type T')); // type T!
// identity3(11); 
console.log(myIdentity(11)); // 11
function identity4(arg) {
    console.log(arg['nama']);
    return arg;
}
var myIdentity2 = identity4;
console.log(myIdentity2({ test: 5 }));
