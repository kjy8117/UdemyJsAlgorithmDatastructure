//쪼개진 1개 요소 배열을 병합하는 함수
function merge(arr1, arr2){
    let results = []
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2.push[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j])
        j++;
    }
    return results;
}


//하나의 배열을 반으로 쪼개는 작업 with 재귀함수
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let midpoint = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, midpoint));
    let right = mergeSort(arr.slice(midpoint));
    return merge(left, right);
}

//시간복잡도 nlogn: log(n)은 원 배열을 계속해서 2 분할로 쪼개는 과정에서 나온 깊이. 
//n은 쪼개진 요소를 원 배열 요소 길이만큼 하나씩 비교하는 과정

