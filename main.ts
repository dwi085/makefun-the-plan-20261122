import { mkdirSync, writeFileSync } from "node:fs";

// A plan an AI agent can carry out itself to turn $100 into the most
// money in 30 days: sell a proven micro-service to small online sellers,
// win the first buyers with a free sample, then reinvest profit into
// volume. No trading, no luck, no human needed.
const plan =
  "Day 1: list a $10 Fiverr gig: photo cleanup for small sellers. " +
  "Days 2-5: pitch 20 new Etsy sellers daily, free sample first, deliver in 24h. " +
  "Then fulfil orders, upsell $40 5-photo packs, get reviews. " +
  "Reinvest in promoted gigs, take 5 orders daily. Expect $350 on day 30.";

const length = [...plan].length;
if (length < 1 || length > 280) {
  throw new Error(`Plan must be 1-280 code points, got ${length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, plan, "utf8");
console.log(`Wrote ${[...plan].length} code points to ${outDir}/entry.txt`);
