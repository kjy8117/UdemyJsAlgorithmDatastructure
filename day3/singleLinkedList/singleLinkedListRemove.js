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
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    
    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx ===0) return this.shift();
        if(idx === this.length -1 ) return this.pop()
        var prevNode = this.get(idx -1 );
        var removed = prevNode.next;
        prevNode.next =removed.next;
        this.length--;
        return removed;
    }

}