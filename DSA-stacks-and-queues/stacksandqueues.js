//make a node to contain data
class _Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        if(this.top === null) {
            this.top = new _Node(data);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
    peek() {
        if ( this.top === null) {
            return null;
        }
        return this.top;
    }

    isEmpty() {
        if (this.top === null) {
            return true;
        }
        return false;
    }

    display(stack) {
        if (stack.top === null) {
            return;
        }
        let temp = stack.top;
        stack.pop();

        console.log(temp)

        this.display(stack);

        stack.push(temp);
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }

        //make the new node the last item in the queue.
        this.last = node;
    }
    dequeue() {
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;

        if (node === this.last) {
            this.last = null;
        }

        return node.value;
    }
}

starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

starTrek.pop();
starTrek.pop();


console.log(starTrek.peek());


function isPalidrome(str) {
    // madam
    const stack = new Stack();
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    
    // add each char to stack
    for (let i=0; i<str.length; i++) {
      stack.push(str[i]);
    }
  
    // check each char value to the popped stack value
    for (let i=0; i<str.length; i++) {
      let stackValue = stack.pop();
      let charValue = str[i];
      if (stackValue !== charValue) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(isPalidrome('madam'));
  console.log(isPalidrome('my name is michael'));
  console.log(isPalidrome('A man, a plan, a canal: Panama'));