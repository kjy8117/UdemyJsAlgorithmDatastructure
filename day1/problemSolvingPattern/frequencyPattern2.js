function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    //array1 값의 개수가 array2 값의 개수와 다르면 false 리턴
    //그렇다면 두 array의 각 값의 개수가 같다면 빈도수를 어떻게 비교해야 하나?
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //key-value 형태의 set을 선언하고,
    for (let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0 ) + 1
    }
    for (let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0 ) + 1
    }
    //array1과 array2에 있던 값들이 set에서는 key가 되고, 
    //key로 설정된 값들이 array에서 몇 개 있는지 빈도수를 표시하기 위해
    //set[key]는 해당 키에 속한 값을 리턴하는 코드이고
    //(set[key] || 0) + 1은 for-of 문을 통해 루프가 돌면, 해당 키에 값이 있으나 없으나 +1를 더해주는 코드이다.
    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true
    //fc1가 key로 루프 조회를 시작하면,
    //fc2에 key제곱된 key^2이 fc2에 없으면 false 리턴
    //그리고 key를 사용하여 fc1과 fc2의 키에 대한 값 빈도수를 비교하는 코드에서 빈도수가 다르면 false리턴
    //그 외의 경우는 모두 true로 리턴
}
//서로 다른 두 array들 내부의 값과 그 빈도수를 비교하기 위해 set을 활용하였고
//set에서 key를 활용하여 for 루프문을 내부에서 빈도수를 비교하였다.
//false가 되는 경우를 조건문으로 활용하여 소거하고 나머지 경우를 모두 true로 리턴하는 소스코드 구조.