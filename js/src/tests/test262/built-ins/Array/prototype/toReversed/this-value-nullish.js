// |reftest| shell-option(--enable-change-array-by-copy) skip-if(!Array.prototype.with||!xulRuntime.shell) -- change-array-by-copy is not enabled unconditionally, requires shell-options
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toReversed
description: >
  Array.prototype.toReversed throws if the receiver is null or undefined
info: |
  Array.prototype.toReversed ( )

  1. Let O be ? ToObject(this value).
  ...
features: [change-array-by-copy]
---*/

assert.throws(TypeError, () => {
  Array.prototype.toReversed.call(null);
}, '`Array.prototype.toReversed.call(null)` throws TypeError');

assert.throws(TypeError, () => {
  Array.prototype.toReversed.call(undefined);
}, '`Array.prototype.toReversed.call(undefined)` throws TypeError');

reportCompare(0, 0);