/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
  traverse(){
    let currentNode = this.head;
    while(currentNode){
        console.log(currentNode.val);
        currentNode = currentNode.next
    }
}

  /** push(val): add new value to end of list. */

  push(val) {
    const newVal = new Node(val);
    if(!this.head){
      this.head = newVal;
      this.tail = newVal;
    } else {
        this.tail.next = newVal;
        this.tail = newVal;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newVal = new Node(val);
    this.head = newVal.next;
    this.head = newVal;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    while(currentNode.next != this.tail){
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    this.length -= 1;
    return currentNode.next.val
  }

  /** shift(): return & remove first item. */

  shift() {
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1
    return currentHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    let i = 0;
    while(i != idx){
      currentNode = currentNode.next;
      ++i;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length || idx < 0){
      throw new Error("invalid index");
    }
    let currentNode = this.head;
    let i = 0;
    while (i < idx){
      currentNode = currentNode.next;
      ++i;
    }
    currentNode.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newVal = new Node(val);
    let currentNode = this.head;
    if (idx === 0){
      this.head = newVal;
      newVal.next = currentNode;
      
    }
    else if (idx === this.length){
      while(currentNode.next != this.tail){
        newVal.next = this.tail;
        currentNode.next = newVal;
      }
    }
    else {
      let i = 0;
      while(i < idx){
        currentNode = currentNode.next;
        ++i;
      }
      newVal.next = currentNode.next
      currentNode.next = newVal;
    }
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    let i = 0;
    while (i < idx-1){
      currentNode = currentNode.next;
      ++i;
    }


  }

  /** average(): return an average of all values in the list */

  average() {
    let avg = 0;
    let currentNode = this.head;
    let i = 0;
    while(i < this.length){
      avg += currentNode.val;
      currentNode = currentNode.next;
      ++i;
    }
    avg = avg / this.length;
    return avg;
  }
}

module.exports = LinkedList;
const list = new LinkedList()
list.push(2)
list.push(3)
list.push(1)
list.push(1)
list.push(7)
list.push(6)
list.push(9)




