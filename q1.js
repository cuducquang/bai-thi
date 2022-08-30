let inputArray = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];
function allLongestStrings(inputArray){
    let x = inputArray.length;
    let max = inputArray.reduce(
        function(a, b){
            return (a.length >= b.length) ? a : b;
      });

    let newArray = [];
    for (let i  = 0; i < x; i++){
        let max_value = inputArray[i];
        if (max_value.length == max.length) {
            newArray.push(max_value);
        }
    }
    console.log(newArray);
}

allLongestStrings(inputArray);
