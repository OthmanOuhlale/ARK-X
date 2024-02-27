function digitalRoot(n) {
    if(n<10 || n===0){
        return n
    }else {
        let sum = 0;
        while (n > 0){
            let lastNum = n % 10;
            sum += lastNum;
            n = (n / 10 | 0);
        }
        console.log(sum);
        return digitalRoot(sum);
}
}
console.log(digitalRoot(999999999999));