"use strict";
// const map = new Map(Object.entries({foo: "bar"}));
// map.get("foo"); // "bar"
var map = new Map();
var obj = { foo: "bar" };
Object.keys(obj).forEach(function (key) {
    map.set(key, obj[key]);
});
map.get('foo')
