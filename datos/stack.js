class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.botton = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.botton = newNode;
    } else {
      const holdingPointer = this.rop;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;

    return this;
  }
}
