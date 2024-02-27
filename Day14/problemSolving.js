function narcissistic(value) {
    // Code me to return true or false
    let narcissistic = 0;
    const number = value;
    popo 
    const digits = String(number).split('').map(Number);
    
    if(value < 0 && typeof(value) !== 'string') {
        console.log('invalid value');
    }else {
        for(let i = 0; i < digits.length; i++) {
            narcissistic += digits[i]**digits.length;
        }
    }

    if (narcissistic === value) {
        return true;
    }else {
        return false;
    }
}

console.log(narcissistic(151));

// let result = value.toString();
// console.log(result.length);