function isIsogram(str){
    let strc = str.toLowerCase();
    for(let i = 0; i <= strc.length; i++) {
        for(let j=i+1; j < strc.length; j++) {
            if(strc[i] === strc[j]){
                return false;
            }
        }
    }    
    return  true;
  }
console.log(isIsogram("othmanO"));