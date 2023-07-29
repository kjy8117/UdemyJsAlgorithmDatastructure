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
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    insert(idx, val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === this.length) {
            this.push(val);
            return true;}
        if(idx === 0) return !!this.unshift(val);
        var newNode = new Node(val);
        var prev = this.get(idx-1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
    }
}