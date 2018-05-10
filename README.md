# for-each-break

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Small utility library implementing `forEach`, `map`, `filter`, `forEachRight`, `mapRight` and
`filterRight` functions with break and return emulation as if it was a regular `for` or `while`
loop.

To simulate break return `BREAK` or `RETURN`, to simulate `return` return `BREAK(value)` or
`RETURN(value)` both are equivalent but the one communicating the right intent should be used.

The functions assume `this` is an array like object so they should be invoked with
`.call(arrayLike, callback)`

defines:

<!-- @formatter:off -->

* `BREAK` - used to break or return from loop, using `BREAK` to break out of loop is preferred
  since it communicates clear intention
* `RETURN` - used to break or return from loop, using `RETURN` to break out of loop and return a
  value is preferred since it communicates clear intention
* `forEach` - use to loop over array like object: `forEach.call(arrayLike, callback, thisArg, defaultReturn)`
* `map` - use to map array like object, with early break or return: `map.call(arrayLike, callback, thisArg)`
* `filter` - use to filter array like object, with early break or return: `filter.call(arrayLike, callback, thisArg)`
* `forEachRight` - use to loop over array like object in reverse: `forEach.call(arrayLike, callback, thisArg, defaultReturn)`
* `mapRight` - use to map array like object in reverse, with early break or return: `map.call(arrayLike, callback, thisArg)`
* `filterRight` - use to filter array like object in reverse, with early break or return: `filter.call(arrayLike, callback, thisArg)`

<!-- @formatter:on -->

## Install

Use [npm](https://npmjs.com/) to install.

```
npm install for-each-break --save
```

## Usage

[![NPM](https://nodei.co/npm/for-each-break.png)](https://www.npmjs.com/package/for-each-break)

## License

MIT, see [LICENSE.md](http://github.com/vsch/for-each-break/blob/master/LICENSE.md) for details.

