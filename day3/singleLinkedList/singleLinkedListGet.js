class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SingledLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        var cnt = 0;
        var current = this.head;
        while(cnt != idx ){
            current = current.next;
            cnt++;
        } return current;
    }
}


//주어진 숫자(인자값)만큼 노드시작점부터 따라가 해당 위치의 노드를 반환
