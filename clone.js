var deepClone =
  function() {
    function deepCloneMatrix(data) {

      function isPrimitive(test) {
        return (test !== Object(test));
      };

      function inner_deepCloneMatrix(data, to_store) {
        if (isPrimitive(data[0])) {
          to_store = data.slice();
          return to_store;
        } else {
          for (i in data) {
            // console.log('in loop fo for');
            // console.log(`i = ${i}`);
            to_store[i] = []
            to_store[i] = inner_deepCloneMatrix(data[i], to_store[i]);
          }
          return to_store;
        }
      }
      var newdata = []

      if (isPrimitive(data)) {
        var a = data;
        return a;
      } else {
        return inner_deepCloneMatrix(data, newdata);
      }
    }


    return {
      deepCloneMatrix: deepCloneMatrix
    }
  }
module.exports = deepClone();
