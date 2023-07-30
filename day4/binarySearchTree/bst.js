class Node{
    constructor(value){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    //insert method?
    insert(value){
        var newNode = new Node(value);
        if(this.root ===null){
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left  === null){
                        current.left = newNode;
                        return this;
                    } else{
                        current = current.left;
                    }
                } else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else{
                        current = current.right;
                    }
                }
            }
        }
    }  
    // find method?
    find(value){
        if(this.root === null) return false;
        var current =this.root;
        var found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        } 
        if(!found) return undefined;
        return current;
    }
    //true, false 반환하는 유사 find 메소드드
    contains(value){
        if(this.root === null) return false;
        var current =this.root;
        var found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        } 
        return false;
    }
}
