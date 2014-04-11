// Exposure 0.0.1
// Copyright (c) 2014 Max Wheeler, Icelab
// Licensed under the MIT license
(function(root, factory) {
  root.Exposure = factory; // Browser global
}(this, function() {
  "use strict";
  var exposure, expose;
  // Create arbitrarily nested namespace objects hung off the `exposure` object.
  // Thus, `expose("foo.bar.baz")` will result in `exposure.foo.bar.baz`.
  expose = function(nameSpace) {
    var i, parts = nameSpace.split('.'), parent = exposure;
    for (i = 0; i < parts.length; i += 1) {
      // Create a property if it doesn't exist
      if (typeof parent[parts[i]] === "undefined") {
        parent[parts[i]] = {};
      }
      parent = parent[parts[i]];
    };
    return parent;
  };
  exposure = {
    expose: expose
  };
  return exposure;
}));
