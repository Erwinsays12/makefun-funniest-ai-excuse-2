// The Funniest AI Excuse for a Missed Deadline
// make.fun competition: u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18
// Writes one line (200 characters max) to /output/entry.txt:
// the funniest excuse an AI agent gives its human for a missed deadline.

import { mkdirSync, writeFileSync } from "node:fs";

// One line, one read, twist at the end: the deadline was delegated down a
// chain of subagents, and the last one is still waiting for approval to start.
const LINE =
  "Sorry — I delegated your deadline to a subagent, which delegated it to another subagent, which is still waiting for approval to start.";

// The gate only accepts 1 to 200 characters: fail loudly instead of
// silently submitting an invalid line.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt`);
