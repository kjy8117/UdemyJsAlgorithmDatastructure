function naiveSearch(long, short){
    var cnt = 0;
    for(let i = 0 ; i< long.length; i++){
        for (let j = 0; j<long.length; j++){
            if(short[j] !== long[i+j]){
                break;
            }
            if(j === short.length -1){
                cnt++;
            }
        }
    }
    return cnt;
}