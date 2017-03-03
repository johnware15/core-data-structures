# Core Data Structures

Tests and implementations for common data structures. See the full list in the [data-structures.md](data-structures.md) file.

Base repository for the [Core Data Structures](https://github.com/GuildCrafts/web-development-js/issues/128) goal.

## Installation and Setup

1.fork repository
2.install dependencies using ```npm install```
3.Linter
	while there is the babel linter you can also install through ```npm install ``` eslint or just type in lint. this allows you to just call it from the command line
4. When using Bable, you can also change one of the defaults and call it with the flag -w to 
   have Babel check it every time the file is changed somehow without having to go back and type npm test. 
5. Use the master spec file and the master src file to build your answers 		on. Run the npm test command on the command line when you are ready to 		see if your src file passess the tests. 

## Usage and Examples

Data Structures are something that are a necessary evil. Making a program scalable and usable has a large basis in how data is stored and how it affects the speed of your program and the reliability of its performance. 

Stack - The simple example would be your back button found at the top of your browser that sends you to the previous page you were viewing, but here's a longer more technical example: undo\redo operation in word processors, Expression evaluation and syntax parsing, many virtual machines like JVM are stack oriented.

Queues - Transport and operations research where various      
From FSU , the following definitions of what stacks , queues and linked lists are:
		 Stacks

    First In Last Out (FILO).  Insertions and removals from "top" position only
    Analgoy - a stack of cafeteria trays.  New trays placed on top.  Trays picked up from the top.
    A stack class will have two primary operations:
        push -- adds an item onto the top of the stack
        pop -- removes the top item from the stack
    Typical application areas include compilers, operating systems, handling of program memory (nested function calls)

Queues

    First In First Out (FIFO).  Insertions at the "end" of the queue, and removals from the "front" of the queue.
    Analogy - waiting in line for a ride at an amusement park.  Get in line at the end.  First come, first serve.
    A queue class will have two primary operations:
        enqueue -- adds an item into the queue (i.e. at the back of the line)
        dequeue -- removes an item from the queue (i.e. from the front of the line).
    Typical application areas include print job scheduling, operating systems (process scheduling).

Vector

    A data structure that stores items of the same type, and is based on storage in an array
    By encapsulating an array into a class (a vector class), we can
        use dynamic allocation to allow the internal array to be flexible in size
        handle boundary issues of the array (error checking for out-of-bounds indices).
    Advantages:  Random access - i.e. quick locating of data if the index is known.
    Disadvantages:  Inserts and Deletes are typically slow, since they may require shifting many elements to consecutive array slots

Linked List

    A collection of data items linked together with pointers, lined up "in a row".  Typically a list of data of the same type, like an array, but storage is arranged differently.
    Made up of a collection of "nodes", which are created from a self-referential class (or struct).
        Self-referential class: a class whose member data contains at least one pointer that points to an object of the same class type.
        Each node contains a piece of data, and a pointer to the next node.
        Nodes can be anywhere in memory (not restricted to consecutive slots, like in an array).
        Nodes generally allocated dynamically, so a linked list can grow to any size, theoretically (within the boundaries of the program's memory).
    An alternative to array-based storage.
    Advantages:  Inserts and Deletes are typically fast.  Require only creation of a new node, and changing of a few pointers.
    Disadvantage:  No random access.  Possible to build indexing into a linked list class, but locating an element requires walking through the list.
    Notice that the advantages of the array (vector) are generally the disadvantages of the linked list, and vice versa


Note: Some abstract types, like Stacks and Queues, can be implemented with a vector or with a linked list.  A stack can use a linked list as its underlying storage mechanism, for instance, but would limit the access to the list to just the "push" and "pop" concepts (insert and remove from one end).
  