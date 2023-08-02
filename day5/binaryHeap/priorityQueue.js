class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, prty){
        let newNode = new Node(val, prty);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length -1 ;
        //요소의 값 자체를 저장하는 변수를 만들자면,
        const element = this.values[idx];
        while(idx > 0){
            //어떤 자식노드의 부모노드 인덱스를 알기 위해
            let parentIdx = Math.floor((idx-1 )/2);
            let parent = this.values[parentIdx];
            // if(element > parent){
                // this.values[parentIdx] = element;
                // this.values[idx] = parent;
                // idx = parentIdx;
            // }
            if(element.prty <= parent.prty) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    //최대 이진 힙을 예로 들어, 최상단의 최대값 노드를 제거하고 가장 말단에 있는 노드를 최상단 노드 위치로 옮긴다.
    dequeue(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2*idx + 1;
            let rightChildIdx = 2*idx +2;
            let leftChild, rightChild;
            let swap = null;
            
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.prty > element.prty){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.prty > element.prty) || 
                    (swap !== null && rightChild.prty > leftChild.prty)
                ){
                    swap = leftChildIdx;
                }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;

        }
    }
}
class Node{
    constructor(val, prty){
        this.val = val;
        this.prty = prty;
    }
}
