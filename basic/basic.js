function greeter(person) {
    return 9;
    // return "Hello, " + person;
}
function test(num1) {
    return num1 * 2;
}
function getPassword(clearTextPassword) {
    console.log('test----', clearTextPassword);
    console.log('typeof', typeof clearTextPassword);
    if (clearTextPassword) {
        return 'Password';
    }
    return '********';
}
// testing
console.log(greeter('Test String'));
console.log(test(2));
console.log(getPassword(true));
