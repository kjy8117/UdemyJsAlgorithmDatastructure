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

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prev = null;
        var next;
        for(var i = 0; i< this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        } return this;
    }
}