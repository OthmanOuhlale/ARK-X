function setReducer(input) {
    let newArr = [];
    let count = 1;
    do{
        newArr = [];
        for (let i = 0; i < input.length; i++) {
            if(input[i] === input[i+1]){
                count += 1;
            }
            else {
                newArr.push(count);
                count = 1;
            }
        }
        input = newArr;
    } while (input.length > 1);
    return input[0];
}

let rest = [1,1,3,1,4,5];
console.log( setReducer(rest));

// for(let j = 0; j < result.length ; j++){ 
//     for( let i = j+1; i < result.length-1 ; i++){
//         if(result[i] === result[j]){
//             count += 1;
//         }else {
//             input.push(count);
//         }
//     };
// };
// count = 1;
// return input;