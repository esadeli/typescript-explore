function greeter(person: string):number {
    return 9;
    // return "Hello, " + person;
}


function test(num1: number) {
    return num1*2;
}

function getPassword(clearTextPassword: boolean):string {
    console.log('test----', clearTextPassword);
    console.log('typeof', typeof clearTextPassword);
    if(clearTextPassword){
        return 'Password';
    }
    return '********';
}

// testing
console.log(greeter('Test String'));
console.log(test(2));
console.log(getPassword(true));