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

'use strict'

export default class Set {

    constructor() {
        this.dataSet = [];
        this.size = length || 0;
    }



    add(setItem) {
        this.size += 1;
        this.dataSet.add();
    }
    emptyOrNot(){
    	dataSet.isEmpty();
    	}
    isItInHere(){
    	dataSet.contains(setItem);
    }
    getItOut(){
    	if(dataSet.contains(setItem)){
    		dataSet.remove(setItem);
    	} else {
    		console.log("nobody but us chickens");
    	}
    }
    doItToAllOfThem(){
    	dataSet.forEach(dataItem => console.log(dataItem));
    }

}




const set = new Set();
set.add('red')

> set.has('red')
true
> set.delete('red')
true
> set.has('red')
false