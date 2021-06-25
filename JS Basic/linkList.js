function add(element){
    var node = new Node(element);
    var current;
    if (this.head == null){
        this.head = node;
    }
    else {
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this.size++;
    console.log(node);
}
add(10);