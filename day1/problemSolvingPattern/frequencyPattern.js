//자바스크립트 객체를 사용하여 다양한 값과 빈도를 수집하고 다른 객체의 형태와 비교한다.
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i=0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] **2)
        //indexOf 기능: 전체 배열을 반복하거나 중첩된 루프인 전체 배열을 잠재적으로 반복하는 것
        //즉, 빅오 표기법 O(n)을 갖는다.
        if(correctIndex === -1){
            return false;
        } arr2.splice(correctIndex,1);
    }
    return true;
}

//for문 내부에 indexOf()가 실행되고 있기 때문에 n^2 빅오표기법을 갖는다. 
