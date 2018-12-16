// without interface
function printLabelOld(labelledObj: { label: string }) {
    return labelledObj.label;
}

let myObj = { size: 8, label: 'This is 8'};

// test case
console.log(printLabelOld(myObj));

// with interface
// a representation of object
interface labelledValue {
    label?: string;
};

function printLabel(labelledObj: labelledValue): string{
    if(labelledObj.label === 'this is 9') {
        return labelledObj.label;
    }
    return 'black';
}

let myObj2 = { }; //
let myObj3 = { label: 'this is 9'};
let myObj4 = { name: 'hi'};

// test case
console.log(printLabel(myObj2)); // black
console.log(printLabel(myObj3)); // this is 9
// console.log(printLabel(myObj4)); 
// would give compile error because object parameter is not defined in the interface

// with interface
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100, message: 'Test yes'};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

// test case
console.log(createSquare({color: 'purple'}));
console.log(createSquare({color: 'brown', width: 7}));