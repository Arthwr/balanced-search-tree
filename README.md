# balanced-search-tree
Implementation of Binary Search Tree in Node.js

## Available methods: 

* **Constructor**
  * `new BinaryTree(elements)`
     Initializes a new instance of the BinaryTree class with the specified elements, which are automatically sorted and balanced.
    
* **Insertion**
  * `insert(element)`
     Adds a new element to the tree while maintaining its balance.
    
* **Deletion**
  * `delete(element)`
     Removes an existing element from the tree and rebalances the tree if necessary.
    
* **Searching**
  * `find(element)`
     Searches for an element in the tree and returns its node if found.
    
* **Traversal**
  * `levelOrder()`
     Returns an array representing the level order traversal of the tree.
  * `preOrder()`
     Returns an array representing the pre-order traversal of the tree.
  * `inOrder()`
     Returns an array representing the in-order traversal of the tree.
  * `postOrder()`
     Returns an array representing the post-order traversal of the tree.
    
* **Balance Checking**
  * `isBalanced()`
     Determines whether the tree is balanced according to the criteria.
    
* **Rebalancing**
  * `rebalance()`
     Rebalances the tree if it becomes unbalanced after insertions or deletions.
