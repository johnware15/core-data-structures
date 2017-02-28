'use strict'
class NodeStack {
    constructor (foo) {
      this.content = foo;
    }
}
//stack.push("foo") // push an element (the string "foo") to the top of the stack.
//stack.pop()       // returns and removes the top element in the stack or null if the stack is empty.
//stack.peek()      // returns the top element in the stack or null if the stack is empty.
//stack.isEmpty()   // returns true if the stack is empty or false if not.
//stack.length()    // returns the number of elements in the stack.

export default class Stack {

    constructor(length, content) {
      let size = length || 0;
      this.size = size;
      this.content = [];
      this.content.push(new NodeStack(content));
    }

    push(item) {
      this.size += 1;
      this.content.push(new NodeStack(item));

    }

    length() {
      return this.size

    }

          }
