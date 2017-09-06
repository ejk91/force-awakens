const kthToLast = (list, k) => {
  let p1 = list;
  let p2 = list;

  // Move first pointer k elements down the list
  for (let i = 0; i < k; i++) {
    p1 = p1.next;
  }

  // Now move both pointers at the same time until p1 hits the end of the list
  while (p1 != null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
}