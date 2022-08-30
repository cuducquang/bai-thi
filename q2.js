let inputArray = [1280, 343, 54, 66, 70, 60, 70, 43, 9];
function alternatingSums(inputArray) {
    let x = inputArray.length;
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < x; i++) {
        if (i % 2 == 0) {
            sumEven += inputArray[i];
        } else {
            sumOdd += inputArray[i];
        }
    }
    let newArray = [sumEven, sumOdd];
    console.log(newArray);
}

alternatingSums(inputArray);
