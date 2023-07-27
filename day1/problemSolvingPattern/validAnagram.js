function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //key-value 형태의 set을 선언하고,
    for (let val of str1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0 ) + 1
    }
    for (let val of str2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0 ) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true
}
//내가 풀었던 방식
//-------------------------------------------------------------------------
//강사가 풀었던 방식
function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    const lookup = {};

    for(let i = 0; i<str1.length; i++){
        let letter = str1[i];
        lookup[letter] ? lookup[letter] += 1: lookup[letter] = 1;
    }
    console.log(lookup)
    for (let i = 0; i<str2.length; i++){
        let letter = second[i];
        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -=1;
        }
    }
    return true;
}
