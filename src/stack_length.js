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

//let softer = new myStack();
// const stack = new Stack();
// const stack = new Stack()
// stack.push("foo") // push an element (the string "foo") to the top of the stack.
export default class Stack{
constructor(){
this.items = [];
}
// push(element){
// this.items.push(element);
// }
// clear()  {
//   this.items = [];
// }
length(){
return Stack.items.length;
console.log(length())
// if(this.items != []){
//
// return true;
// }
// else{
// return false;
// }
}

}
