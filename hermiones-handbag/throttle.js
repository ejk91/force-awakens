//throttle written from scratch

let throttle = (func, time) => {
  let wait = false;
  return () => {
    if (!wait) {
      func.call();
      wait = true;
      setTimeout(() => {
        wait = false;
      }, time);
    }
  };
}

let sayHi = () => {
  console.log('hello');
}

let sayHiOnce = throttle(sayHi, 100);

sayHiOnce();