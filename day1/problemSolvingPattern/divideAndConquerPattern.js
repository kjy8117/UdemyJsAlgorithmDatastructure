//binary search!
//Log(n) 시간복잡도

function search(arr, val){
    let min = 0;
    let max = arr.length -1;

    while(min <= max){
        let middle = max.floor((min+max)/2);
        let currentEl = arr[middle];
        if(arr[middle] < val){
            min = middle + 1;
        } else if(arr[middle] > val){
            max = middle -1;
        } else {
            return middle;
        }
    } return -1;
}