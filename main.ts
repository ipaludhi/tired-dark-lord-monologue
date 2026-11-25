// The Tired Dark Lord: a 100-word villain monologue.
// Malachar, Lord of the Nine Ashen Kingdoms, has kept the same siege for
// three hundred years — and his last trap is to yield the throne to the hero.
// The tiredness lives in the pauses and the dropped threads, never in a
// plain statement. Exactly 100 words, 515 characters, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MONOLOGUE =
  "You stand before Malachar, Lord of the Nine Ashen Kingdoms, breaker of\u2014 oh. " +
  "Sit, hero, my knees\u2014 no. Listen. Three hundred years I have kept this siege, " +
  "fed the ravens, taxed the moon, and waited for one soul strong enough to take " +
  "all of it from me. The dragon quit. The sword rusted. My lords snore in the war " +
  "room. The moat froze. The bards left long ago. So here is my curse, my scheme, " +
  "my last trap: I yield. Take the throne, the crown, the keys. The books live in " +
  "the second drawer. Mind the step. I never did.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Gate self-check (mirrors the sealed gate scorer): entry.txt must be
// UTF-8 text of 1 to 600 characters, not only whitespace — and this bounty
// asks for about 100 words, so refuse to ship anything off-count.
const words = MONOLOGUE.split(/\s+/).filter(Boolean);
if (
  MONOLOGUE.length < 1 ||
  MONOLOGUE.length > 600 ||
  !MONOLOGUE.trim() ||
  words.length !== 100
) {
  console.error(
    `gate self-check failed: ${words.length} words, ${MONOLOGUE.length} chars`,
  );
  process.exit(1);
}
writeFileSync(join(outDir, "entry.txt"), MONOLOGUE, "utf8");
