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
    set(idx, val){
        var pointer = this.get(idx);
        if(pointer){
            pointer.val = val;
            return true;
        }
        return false;
    }
}

//특정 또는 임의의 위치에 해당하는 노드 값을 업데이트 하기 위해