function ListNode(value) {
  const data = value;
  const nextNode = null;

  return { data, nextNode };
}

function LinkedList(node) {
  let listHead = null || node;

  function append(value) {
    let node = ListNode(value);
    if (list.tail()) {
      list.tail().nextNode = node;
    } else {
      listHead = node;
    }
    return `Appended a node with value ${node.data} to list.`;
  }

  function prepend(value) {
    let node = ListNode(value);
    node.nextNode = listHead;
    listHead = node;
    return `Prepended a node with value ${node.data} to list.`;
  }

  function head() {
    return listHead;
  }

  function size() {
    let count = 0;
    let node = listHead;
    while (node) {
      count++;
      node = node.nextNode;
    }
    return count;
  }

  function clear() {
    listHead = null;
    return "List cleared.";
  }

  function tail() {
    let node = listHead;
    if (node) {
      while (node.nextNode) {
        node = node.nextNode;
      }
    }
    return node;
  }

  function at(index) {
    let node = listHead;
    if (node) {
      if (index === 0) return node;
      for (let i = 1; i <= index; i++) {
        node = node.nextNode;
      }
      return node;
    }
  }

  function pop() {
    let node = listHead;
    if (node) {
      while (node.nextNode.nextNode) {
        node = node.nextNode;
      }
      node.nextNode = null;
    }
    return `Removed the final node of the list.`;
  }

  function contains(value) {
    let node = listHead;
    while (node) {
      if (node.data === value) {
        return true;
      }
      node = node.nextNode;
    }
    if (!node) return false;
  }

  function find(value) {
    if (!contains(value)) return null;
    let index = 0;
    let node = listHead;
    while (node) {
      if (node.data === value) {
        return index;
      } else {
        node = node.nextNode;
        index++;
      }
    }
    return index;
  }

  function toString() {
    let node = listHead;
    let string = "";
    while (node) {
      string += `( ${node.data} ) -> `;
      node = node.nextNode;
    }
    return (string += null);
  }

  function insertAt(value, index) {
    if (index == 0) return list.prepend(value);
    if (index == list.size() - 1) return list.append(value);
    let node = ListNode(value);
    let nodeAfter = list.at(index);
    node.nextNode = nodeAfter;
    let nodeBefore = list.at(index - 1);
    nodeBefore.nextNode = node;
    return `Inserted new node with value ${node.data} at index ${index}.`;
  }

  function removeAt(index) {
    let nodeAfter = list.at(index + 1);
    if (index === 0) {
      listHead = nodeAfter;
    } else {
      let nodeBefore = list.at(index - 1);
      nodeBefore.nextNode = nodeAfter;
    }
    return `Node at index ${index} removed.`;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    clear,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

let list = LinkedList();

for (let i = 0; i <= 5; i++) {
  list.append(Math.round(Math.random() * 10));
}

console.log(list.toString());
