//자릿수로 인코딩. 배열 내 숫자들의 각각 오른쪽 자리수부터 서로 비교해가며 정렬하는 알고리즘

//helper function1: 어떤 숫자(num)의 특정 자리수(i)에 해당하는 숫자 리턴 함수 
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
//helper function2: 어떤 숫자가 몇 자리의 수인자 리턴하는 함수
function digitCount(num){
    if(num ===0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
//helper function3: 두 숫자의 자리수 간 비교 중에서 가장 큰 자리수를 리턴하는 함수
function mostDigits(nums){
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(num[i]));
    }
    return maxDigits;
}
//radix function
function radixSort(num){
    let maxDigitCount = mostDigits(num);
    for(let i=0; i<maxDigitCount; i++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let j=0;j<num.length; j++){
            let digit = getDigit(num[j], i);
            digitBuckets[digit].push(num[j]);
        }
        //console.log(digitBuckets);
        num = [].concat(...digitBuckets);
        //console.log(num);
    }
    return num;
}

//시간복잡도 nk (k: 수의 길이, n: 배열 길이)