function onlyDuplicates(str) {
    var arrStr = str.split('');
    var result = [];
    for (let i = 0; i < arrStr.length; i++){
        var count = 0;
        for (let j = 0; j < arrStr.length; j++){
            if( arrStr[i] == arrStr[j]){
                count++;
            }
        }
        if(count >1){
            result.push(arrStr[i]);      
        }
    }
    str =  result.join('');
    return str;
}

console.log(onlyDuplicates('ooopFFF'));


// function onlyDuplicates(str) {
//     let duplicateChars = '';
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (str.indexOf(char) !== str.lastIndexOf(char)) {
//             duplicateChars += char;
//         }
//     }
//     str =  duplicateChars;
//     return str;
// }

// console.log(onlyDuplicates('ooopFFFp'));
