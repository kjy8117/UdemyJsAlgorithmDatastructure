class dfs{
    //PreOrder 전위탐색
    PreOrder(){
        var data = [];  
        function traverse(node){
            data.push(node);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    //PostOrder 후위탐색 
    //가장 말단의 자식부터 탐색하기 때문에 root 노드를 마지막에 탐색한다. 
    PostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root); 
        return data;
    }
    //InOrder 정위 탐색
    InOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
            // node.left && traverse(node.left);
            // data.push(node.value);
            // node.right && traverse(node.right);
        }
        traverse(this.root); 
        return data;
    }
}