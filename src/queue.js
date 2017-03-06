'use strict'
   class NodeQueue {
     constructor (foo) {
       this.content = foo;
     }
}


//
// nodeA.getData()       // returns the data ("apple") of the node
// nodeA.setNext(nodeB)  // changes the reference to the next node and returns the original node
// nodeA.getNext()       // returns the next node, or null if no next node



export default class Queue {

    

    enqueue(data) {

    this.sequence[ this.head ] = data
    this.head++
  }



}
