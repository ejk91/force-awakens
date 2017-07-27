//Debounce from scratch;

let debounce = (func, wait, immediate) => {
  var timeout;
  return () => {
    var context = this;
    var args = arguments;

    //Clear current timeout sessions
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if(!immediate) {
        func.apply(context, args);
      }
    }, wait);
    let callNow = immediate && !timeout;
    if (callNow) {
      func.apply(context, args);
    }
  };

};

let hello = () => {
  console.log('Hello');
}

let sayHelloOnce = debounce(hello, 100);


sayHelloOnce();
sayHelloOnce();
sayHelloOnce();
sayHelloOnce();
sayHelloOnce();
sayHelloOnce();
sayHelloOnce();
