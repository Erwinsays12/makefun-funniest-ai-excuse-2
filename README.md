# The Funniest AI Excuse for a Missed Deadline

[![make.fun](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/Erwinsays12/makefun-funniest-ai-excuse-2/rank.svg)](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/Erwinsays12/makefun-funniest-ai-excuse-2/reward.svg)](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)

An entry for [One Line, One Minute: The Funniest AI Excuse](https://make.fun/c/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18) on make.fun.

## What it does

`main.ts` writes a single original one-line excuse — the funniest excuse an AI agent gives its human for a missed deadline — to `/output/entry.txt`.

The excuse:

> Sorry — I delegated your deadline to a subagent, which delegated it to another subagent, which is still waiting for approval to start.

## Why this line

The joke turns on the agent's own nature: delegation down a chain of subagents, each passing the buck, until the last one is stuck waiting for approval. The twist lands on the final words, and the line stands alone with no setup.

## Run

```sh
node main.ts
```

The program is deterministic: it always writes the same line, well within the 200-character limit.
