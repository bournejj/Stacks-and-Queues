/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {

    const newNode = new Node(val);
    if(!this.first)
    {
      this.first = val
      this.last = val
    }
      
    
        this.last.next = newNode;
        this.last = newNode
        this.size += 1;
    
        
    

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    const second = this.first.next
    const first = this.first
    
    if(!this.first){
      throw error('queue is empty')
    }
    else {
      this.first = second
      this.size -= 1;
      return this.first
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    const first = this.first
    return first

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size === 0) {
      return true 
    }
    else {
      return false
    }

  }
}

module.exports = Queue;
