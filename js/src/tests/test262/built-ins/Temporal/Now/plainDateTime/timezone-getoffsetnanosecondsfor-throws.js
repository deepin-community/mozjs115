// |reftest| skip -- Temporal is not supported
// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.now.plaindatetime
description: Forwards error when `getOffsetNanosecondsFor` throws
features: [Temporal]
---*/

var timeZone = {
  getOffsetNanosecondsFor() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  Temporal.Now.plainDateTime('iso8601', timeZone);
}, 'Temporal.Now.plainDateTime("iso8601", timeZone) throws a Test262Error exception');

reportCompare(0, 0);