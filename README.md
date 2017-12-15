# Deep Matrix Clone

This project helps to make a deep clone of a matrix.


### Prerequisites
Node.js


### Installing

First, head over to nodejs.org and install Node.js.

```
$ npm install matrix_deep_clone
```

## Running the tests

First install the module matrix_deep_clone then type
```
$ cd node_modules/matrix_deep_clone/
```
After going inside the library type
```
$ npm test
```
The above command will run check.js.
check.js creates a 2D Matrix and then clones it using the library and then modifies the first row of original 2D matrix. On modifying the original copy the new copy does not changes thus successfully performing deep clone on matrix. A similary thing is done in check.js for a 3D matrix

### Breaking down into end to end tests

```
var clone = require('matrix_deep_clone');
```
```
var a = [[1,2,3],[4,5,6],[7,8,9]]
```
```
var a_copy = clone.deepCloneMatrix(a);
```

## Authors

* **Nikhil Ashodariya** -(https://github.com/NikhilAshodariya)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
