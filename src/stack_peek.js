
//stack.push("foo") // push an element (the string "foo") to the top of the stack.
//stack.pop()       // returns and removes the top element in the stack or null if the stack is empty.
//stack.peek()      // returns the top element in the stack or null if the stack is empty.
//stack.isEmpty()   // returns true if the stack is empty or false if not.
//stack.length()    // returns the number of elements in the stack.

// export default class Stack {
//
//     constructor(content) {
//       // let size = length || 1;
//       // this.size = size;
//       this.data = [];
//       this.content.peek(new NodeStack(content));
//     }
//     push (data) {
//       return this.data.push(data);
//     }
//
//     peek (data) {
//       //this.size -= 1;
//       //this.content.peek(new NodeStack(item));
//       if (this.data.length > 0) {
//         return this.data[this.data.length - 1];
//       }
//     }
//
//     length() {
//       return this.data
//
//     }
//
//   }
// const stuff = new Stack();
// stuff.push("hello","world","sunshine","puppydogs");
//
// stuff.peek();

'use strict'
class NodeStack {
    constructor (foo) {
      this.content = foo;
    }
}

export default class Stack {

// set data array in constructor
constructor(data, length){

this.data = [];
this.size = length || 0;
this.items = [];

}
push (data) {
  this.size++;

 this.data.push(data);
 //console.log(data);

}
peek () {
  console.log(this.size);
if (this.size > 0) {
console.log(this.data[this.data.length - 1]);
return this.data[this.data.length - 1];
}
}
}
const stuff = new Stack();
stuff.push["hello","world","sunshine","puppydogs"];

stuff.peek();
