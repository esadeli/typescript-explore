function identity(arg: any): any {
    return arg;
}

// testing
console.log(identity('hi!')); // hi!
console.log(identity(9)); // 9

function identity2<A>(arg: A): A {
    console.log('typeof-----',typeof arg === 'string');
    return arg
}

// testing
console.log(identity2('wow!')); // wow!
console.log(identity2(10)); // 10


function identity3<T>(arg: T): T {
    return arg;
}

// making an alias of a function 
let myIdentity: <B>(arg: B) => B = identity3;

// testing
// identity3('type T'); // type T!
console.log(myIdentity('type T')); // type T!

// identity3(11); 
console.log(myIdentity(11)); // 11

// using object
interface GenericObject {
   <T>(arg: T): T;
}

function identity4<T>(arg: T): T {
    console.log(arg['nama'])
    return arg;
}

let myIdentity2: GenericObject = identity4;
console.log(myIdentity2({test: 5}));