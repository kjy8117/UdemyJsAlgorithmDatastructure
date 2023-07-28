function sumRange(num){
    if(num===1) return 1;
    return num + sumRange(num-1);
}
function factorials(num){
    if(num===1) return 1;
    return num * factorials(num-1);
}

function collectOddNums(arr){
    let newArr = [];
    if(arr.length ==0){
        return newArr;
    }
    if(arr[0] % 2 != 0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddNums(arr.splice(1)))//0번 인덱스에 있는 값 하나를 도려내기
    return newArr;
}