function group(numbers) {
    const result = [];

    for (const num of numbers) {
        const subarray = result.find(arr => arr[0] === num);

        if (subarray) {
            subarray.push(num);
        } else {
            result.push([num]);
        }
    }

    return result;
}

// Example usage:
const result = group([3, 2, 6, 2, 1, 3]);
console.log(result);


// function group(arr) {
//     let duplcArr = [];
//     arr.sort();
//     // console.log(arr);
//     for(var i=0; i<arr.length; i++) {
//         duplcArr = [];
//         for(var j=1; j<arr.length; j++){
//             if (arr[i] === arr[j]) {
//                 duplcArr.push(arr[j]);
//             }else {
//                 duplcArr.push(arr[i]);
//             }
//         }
//         console.log(duplcArr);
//     }
// }

// let rest = [1,3,2,1];
// group(rest);