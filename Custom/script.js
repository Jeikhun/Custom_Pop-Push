
const arr = [5, 7, 9, 1, 4];


const popFunc = function (arr, index) {
    const NewArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            i++;
        }
        NewArr.push(arr[i]);
    }
    if(index>arr.length-1){
        console.log("Uygun element yoxdur");
    }
    if(index===arr.length-1){
        NewArr.pop();
    }
    return NewArr;
}
const result = popFunc(arr, 5);

console.log(result);




const arr1 = [6, 1, 2, 6, 4];


const pushFunc = function (arr, index, value) {
    const NewArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            NewArr.push(value)
        }
        NewArr.push(arr[i]);
    }
    if (index > arr.length-1) {

        NewArr.push(value)
    }
    return NewArr;
}
const result1 = pushFunc(arr1, 7, `Salam`);

console.log(result1);
