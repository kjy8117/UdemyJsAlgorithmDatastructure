//두 포인터가 양쪽 끝지점에서 시작하여 조건을 만족할 때까지 이동하는 패턴
//예를 들어, 두 지점에 있는 두 값의 합이 0이되는 두 값을 배열로 리턴. 0이 되는 두 값이 없으면 false로 리턴

function sumZero(arr){
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]]
        } else if(sum > 0){
            right --;
        } else{
            left ++;
        }
    }
}
//투 포인터를 이용하여 고유값 세기 
function countUniqueValues(arr){
    if(arr.length ===0) return 0;
    var i =  0;
    for (let j =1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i ++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}