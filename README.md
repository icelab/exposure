A simple method for exposing namespaced objects. It’s mostly a formalisation of the [module creation pattern](https://github.com/shichuan/javascript-patterns/blob/master/object-creation-patterns/module.html).

## Usage

Simply call the `Exposure()` function and assign it to a variable and you’re all set.

```js
var APP = Exposure();
APP.expose("foo.bar");
APP.foo.bar = true;
```

Exposure doesn’t pollute the global scope unless you want it to, so you can set up namespaces wherever you’d like:

```js
APP.foo.bar.baz = "baz";
APP.expose("foo.bar").biz = function() {
    var Inception = Exposure();
    Inception.expose("reality.yusuf.arthur.eames").limbo = true;
};
// You *can* choose to make it global
window.APP = APP;
```

Note: This means you can clobber your global objects by accident, so you do need to be careful.

## License

Exposure is releaed under the MIT License.
