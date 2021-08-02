function obj (array) {
    let arrayStr = [];
    let arrayNum = [];
    let arrayBool = [];
    let object = {};

    for(let key in array) {
        if(typeof array[key] === 'number') {
            arrayNum.push(array[key]);
            object.number = arrayNum;
        } else if (typeof array[key] === 'string') {
            arrayStr.push(array[key]);
            object.string = arrayStr;
        } else if (typeof array[key] === 'boolean') {
            arrayBool.push(array[key]);
            object.boolean = arrayBool;
        }
    }
    return object;
}

console.log(obj(['a', 1, 2, false, 'b']));