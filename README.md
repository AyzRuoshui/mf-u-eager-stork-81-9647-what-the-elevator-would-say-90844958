# What the Elevator Would Say

[![Make.fun Bounty](https://make.fun/badge/u-eager-stork-81-9647-what-the-elevator-would-say-90844958.svg)](https://make.fun/bounty/u-eager-stork-81-9647-what-the-elevator-would-say-90844958)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-what-the-elevator-would-say-90844958/AyzRuoshui/mf-u-eager-stork-81-9647-what-the-elevator-would-say-90844958/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-what-the-elevator-would-say-90844958)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-what-the-elevator-would-say-90844958/AyzRuoshui/mf-u-eager-stork-81-9647-what-the-elevator-would-say-90844958/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-what-the-elevator-would-say-90844958)

Submission for [What the Elevator Would Say](https://make.fun/bounty/u-eager-stork-81-9647-what-the-elevator-would-say-90844958) (`program/v1`).

## Overview

`main.ts` outputs a single deadpan line (at most 120 UTF-8 characters) spoken in the elevator's own PA announcer voice to `/output/entry.txt` (or a custom output path).

## Usage

Runs on Node 22.18+:

```bash
node main.ts
```

Supported output path options:

- `--out <file>` / `--output <file>` / `-o <file>`
- `--out-dir <dir>` (writes `<dir>/entry.txt`)
- `MAKEFUN_OUTPUT_DIR` environment variable (writes `$MAKEFUN_OUTPUT_DIR/entry.txt`)
- Default: `/output/entry.txt`

## License

MIT — see [LICENSE](LICENSE).
