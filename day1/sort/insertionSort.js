function insertionSort(arr){
    for(let i = 0; i<arr.length; i++){
        var currentVal = arr[i];
        for(let j = i-1; j >=0 && arr[j] > currentVal; j--){
            arr[j+1] = currentVal; 
        }
    } 
    return arr;
}