"use strict"

// const set      = new Set(['A', 'B', 'C'])
// const otherSet = new Set(['B', 'C', 'E'])
// set.add('D')             // adds an element to the set.
// set.isEmpty()            // returns true if the set is empty or false if not.
// set.contains('B')        // returns true the set contains the element or false if not.
// set.remove('C')          // removes an element (if it exists) from the set.
// set.forEach(elem => console.log(elem))  // takes a callback function and passes it each element in sequence.
// set.size()               // returns the number of elements in the set.
// set.union(otherSet)      // unions the set with another set and returns the resulting set.
// set.intersect(otherSet)  // intersects the set with another set and returns the resulting set.
// set.difference(otherSet) // returns a set that contains the elements found in the set but not in otherSet.
// set.isSubset(otherSet)   // returns true if the set is a subset of otherSet or false if not.
// set.clone()              // returns a cloned set.


class dataSet {
    constructor () {
      this.content = foo;
    }
}
export default class Set {

    constructor() {
       this.values = [];
       this.numberOfValues = 0;
        // this.size = length || 0;
    }
	add() {
       if(!~this.values.indexOf(value)){
        this.values.push(value);
        this.numberOfValues++;
       }
    
    }
   remove(){
  let index = this.values.indexOf(value);
  if(~index){
    this.values.splice(index, 1);
    this.numberOfValues --;
  }
}
contains(){
  return this.values.indexOf(value)!== -1;
  this.numberOfValues--;
}
forEach(){
  set.values.forEach(() =>{
    newSet.add(value);
  })


    size(){
    	set.add(setItem);
    	set.add(setItem);
    	set.size();
    }
    union(){
        let newSet = new Set();
        set.values.forEach(()=>{
            newSet.add(value);
        })
    }
    intersect(){
        let newSet = new Set();
        this.values.forEach(() => {
            if(set.contains(value)){
                newSet.add(value);
            }
        })
    }
    difference(){
        let newSet = new Set();
        this.values.forEach(() =>{
            if(!set.contains(value)){
                newSet.add(value)
            }
        })
    }
    isSubset(){
        return set.values.every(()=>{
            return.this.contains(value);
        })
    }
}








const set      = new Set(['A', 'B', 'C']);
 const otherSet = new Set(['B', 'C', 'E'])
// set.add('red')

// > set.has('red')
// true
// > set.delete('red')
// true
// > set.has('red')
// false