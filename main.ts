// One Sentence for a Traveler from 1800 — make.fun entry.
//
// The program writes a single sentence (at most 200 characters) that
// explains the modern internet to a time traveler who has just stepped
// out of the year 1800.
//
// Craft rules, from the judge brief:
//   1. It must explain what the internet is and what it does.
//   2. It must build only from things a person of 1800 already knows —
//      the post office, the library, the road, the letter, the book —
//      and use no word coined after their time (no "internet", no
//      "computer", no "online", no "web").
//   3. What it says must be true, taken literally as a comparison:
//      light does carry the messages (fibre), letters do arrive in a
//      blink, and the books of the world do lie open from one table.
//   4. Every word earns its place; no list of features.
//   5. One image to remember: a road of light.
//
// The sentence (171 characters, one sentence):
//   "Picture every post office and library on earth joined by one road
//    of light, so your letter reaches any town in a blink and the books of
//    the world lie open upon your table."
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Picture every post office and library on earth joined by one road of light, so your letter reaches any town in a blink and the books of the world lie open upon your table.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space, and this entry is exactly one sentence.
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`sentence is ${SENTENCE.length} characters, must be 1-200`);
}
if (!SENTENCE.trim()) {
  throw new Error("sentence is only whitespace");
}
if ((SENTENCE.match(/\./g) ?? []).length !== 1 || !SENTENCE.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
console.log(`wrote /output/entry.txt (${SENTENCE.length} characters)`);
