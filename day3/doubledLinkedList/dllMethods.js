class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubledLinkedList{
    constructor(){
        this.head = head;
        this.tail = tail;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length --;
        return poppedNode;
    }
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length --;
        return oldHead;
    } 
    unshift(val){
        var unshftNode = new Node(val);
        if(this.length ===0){
            this.head = unshftNode;
            this.tail = unshftNode;
        } else {
            this.head.prev = unshftNode;
            unshftNode.next = this.head;
            this.head = unshftNode;
        }
        this.length++;
        return this;
    }
    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        var cnt, current;
        if(idx <= this.length/2){
            cnt = 0;
            current = this.head;
            while(cnt !== idx){
                current = current.next;
                cnt++;
            }
        } else{
            cnt = this.length -1;
            current = this.tail;
            while(cnt !== idx){
                current = current.prev;
                cnt--;
            } 
        }
        return current;
    }
    set(idx, val){
        var foundNode = this.get(idx);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        } return false;
    }
    insert(idx, val){
        if(idx < 0 || idx >= this.length) return false;
        if(idx === 0) return this.unshift(val)
        if(idx === this.length) return this.push(val);

        var newNode = new Node(val);
        var prevNode = this.get(idx-1);
        var afterNode = prevNode.next;
        
        prevNode.next =newNode, newNode.prev = prevNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx ===0) return this.shift();
        if(idx === this.length -1 ) return this.pop();

        var rvdNode = this.get(idx);
        
        var beforeNode = rvdNode.prev;
        var afterNode = rvdNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        // rvdNode.prev.next = rvdNode.next, rvdNode.next.prev = rvdNode.prev;
        rvdNode.next = null, rvdNode.prev = null;
        this.length--;
        return rvdNode;

    }
}

