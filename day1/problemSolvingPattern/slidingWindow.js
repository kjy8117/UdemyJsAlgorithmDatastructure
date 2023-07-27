//

//중첩 for 루프 문으로 시간 복잡도가 n^2이 되는 문제
function maxSubarraySum(arr, sum){
    if(num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for(let i=0; i<arr.length - sum +1; i++ ){
        temp = 0;
        for(let j = 0; j < num; j++){
            temp += arr[i+j];
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;
}

//시간복잡도가 n인 소스코드
function maxSubarraySum(arr, num){
    //0으로 시작하는 두 변수
    let maxSum=0;
    let tempSum=0;
    //배열에 값이 하나도 없을 경우 그냥 null 리턴
    if(arr.length < num) return null;
    //0인덱스부터 num-1 인덱스 까지 해당하는 값들을 하나씩 더해줌
    for (let i =0; i< num; i++){
        maxSum += arr[i];
    }
    //두 변수 값을 같게 설정해줘서 최대값이 나올 때 maxSum에 업데이트
    tempSum = maxSum;
    //num이라는 동일한 간격으로 인덱스가 오른쪽으로 한 칸씩 이동하고 있는 패턴이기 때문에
    //맨 앞 인덱스에 해당하는 값을 삭제하고 새로 들어오는 맨 뒤의 하나의 값을 새로 더해주는 패턴
    //패턴이 슬라이딩하는 것같은 패턴이라고 생각하자.
    for(let i= num; i<arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

