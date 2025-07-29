// You are given the heads of two sorted linked lists list1 and list2.

class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }

function arrayToList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(node) {
  console.log('listToArray', node);
  
  const arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  console.log('arr', arr);
  return arr;
}

function mergeTwoLists(list1, list2) {
    const dummy = new ListNode();
    let current = dummy;
  
    while (list1 && list2) {
      if (list1.val < list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    current.next = list1 || list2;
    return dummy.next;
  }

// Test case
const l1 = arrayToList([1, 2, 4]);
const l2 = arrayToList([1, 3, 4]);
const merged = mergeTwoLists(l1, l2);
console.log(listToArray(merged)); // Output: [1, 1, 2, 3, 4, 4]
