// One Star, Written in Sap — u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4
// Writes a one-line 1-star review from a houseplant about its human owner.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. My human waters me like a rumor — once, dramatically, then forgets I exist until my leaves file a formal complaint.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
// Gate guard: the entry must be 1–279 characters (RULES.txt), not only whitespace.
if (LINE.length < 1 || LINE.length > 279 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate range: ${LINE.length} characters`);
}
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
