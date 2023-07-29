function binarySearch(arr, num){
    let start = 0;
    let end = arr.length -1;
    let midPoint = Max.floor((start+end)/2);
    while(arr[midPoint] !== num && start <= end){
        if(num < arr[midPoint]) end = midPoint -1;
        else start = midPoint +1;
        midPoint = Max.floor((start+end)/2);
    }
    //if(arr[midPoint] === num){
    //    return midPoint;
    //} return -1;
    return arr[midPoint] === num ? midPoint: -1;

}