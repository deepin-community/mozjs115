// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Bidi_Control`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00061C
  ],
  ranges: [
    [0x00200E, 0x00200F],
    [0x00202A, 0x00202E],
    [0x002066, 0x002069]
  ]
});
testPropertyEscapes(
  /^\p{Bidi_Control}+$/u,
  matchSymbols,
  "\\p{Bidi_Control}"
);
testPropertyEscapes(
  /^\p{Bidi_C}+$/u,
  matchSymbols,
  "\\p{Bidi_C}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00061B],
    [0x00061D, 0x00200D],
    [0x002010, 0x002029],
    [0x00202F, 0x002065],
    [0x00206A, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Bidi_Control}+$/u,
  nonMatchSymbols,
  "\\P{Bidi_Control}"
);
testPropertyEscapes(
  /^\P{Bidi_C}+$/u,
  nonMatchSymbols,
  "\\P{Bidi_C}"
);

reportCompare(0, 0);