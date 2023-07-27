function numberCompare(num1, num2){
    return num1 - num2 //오름차순. 반대로 num2-num1이면, 내림차순
}
//배열.sort(numberCompare);
//문자열 길이 순으로 비교?
function comparebyLen(str1, str2){
    return str1.length - str2.length;
}
//배열.sort(comparebyLen);

//스왑
function swap(arr, num1, num2){
    var temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;
}

function bubbleSort(arr){
    var noSwap;
    for(var i = arr.length; i > 0 ; i--){
        noSwap = true;
        for(var j=0; j<i-1; j++){
            //console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}