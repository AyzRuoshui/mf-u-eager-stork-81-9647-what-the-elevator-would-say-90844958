import fs from "node:fs";
import path from "node:path";

const MAX_CODEPOINTS = 120;
const DEFAULT_OUTPUT = "/output/entry.txt";

// 第二轮终稿：以经典电梯播报“Doors closing.”开场，用精确按键次数增强冷幽默反差
const ELEVATOR_LINE =
  "Doors closing. Not for your nine presses; I simply wait until everyone runs out of places to look.";

function resolveOutputPath(argv: string[]): string {
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--out" || arg === "--output" || arg === "-o") {
      const value = argv[i + 1];
      if (!value) {
        throw new Error(`Missing value for ${arg}`);
      }
      return value;
    }
    if (arg.startsWith("--out=")) {
      return arg.slice("--out=".length);
    }
    if (arg.startsWith("--output=")) {
      return arg.slice("--output=".length);
    }
    if (arg === "--out-dir") {
      const dir = argv[i + 1];
      if (!dir) {
        throw new Error("Missing value for --out-dir");
      }
      return path.join(dir, "entry.txt");
    }
    if (arg.startsWith("--out-dir=")) {
      return path.join(arg.slice("--out-dir=".length), "entry.txt");
    }
  }

  const envDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (envDir && envDir.trim().length > 0) {
    return path.join(envDir, "entry.txt");
  }
  return DEFAULT_OUTPUT;
}

function validateLine(line: string): string {
  const normalized = line.replace(/\r?\n/g, " ").trim();
  const codepoints = Array.from(normalized).length;
  if (codepoints < 1 || codepoints > MAX_CODEPOINTS) {
    throw new Error(
      `Line length must be 1..${MAX_CODEPOINTS} codepoints, got ${codepoints}`,
    );
  }
  return normalized;
}

function main(): void {
  const outputPath = resolveOutputPath(process.argv.slice(2));
  const line = validateLine(ELEVATOR_LINE);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, line, "utf8");
}

main();
