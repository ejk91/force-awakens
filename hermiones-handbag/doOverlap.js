const doOverlap = (l1, r1, l2, r2) => {
  // If one rectange is on the left side of the other
  if (l1.x > r2.x || l2.x > r1.x) {
    return false
  }

  // If one rectangle is above the other
  if (l1.y < r2.y || l2.y < r1.y) {
    return false
  }

  return true
}