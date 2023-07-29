//세트 간격으로 이동하면서 한 번에 하나의 항목을 확인하는 패턴으로 모든 항목을 확인
function linearSearch(arr, num){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === num){return i;} 
    }return -1
}