class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueque(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      //if a last node exists
      this.last.next = node; //make the last node point to the new node
    }
    this.last = node; //make the new node the last item on the queue
  }

  dequeue() {
    if (this.first === null) {
      return; //if the queue is empty, there is nothing to return
    }
    const node = this.first;
    this.first = this.first.next; //set the value of the first node as the next one.
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  display() {
    let current = this.first;
    if (!current) {
      return;
    } else {
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
}

const q = new Queue();
q.enqueque('kirk');
q.enqueque('spock');
q.enqueque('uhura');
q.enqueque('sulu');
q.enqueque('checkov');
q.dequeue();
q.display();
