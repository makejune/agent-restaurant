# Installation

This repository ships a reusable skill in `skills/agent-restaurant/`.

## What To Copy

Copy this folder into the skills directory used by your agent tool:

```text
skills/agent-restaurant/
```

The required file is:

```text
skills/agent-restaurant/SKILL.md
```

The supporting documents are:

```text
skills/agent-restaurant/tone-and-behavior.md
skills/agent-restaurant/reward-rules.md
```

## Codex-Style Setup

If your setup uses a directory-based skill system, place the folder in your local skills directory under the name `agent-restaurant`.

For Codex users, a common target path is:

```text
~/.codex/skills/agent-restaurant/
```

Example target shape:

```text
<your-skills-dir>/
`-- agent-restaurant/
    |-- SKILL.md
    |-- tone-and-behavior.md
    `-- reward-rules.md
```

After that, restart your tool if needed and reference `agent-restaurant` in your instructions or prompt.

## Repository-Local Setup

If your team keeps shared skills inside a repository, copy the same folder into that project's skill directory and keep the file names unchanged.

## Token Integration

Agent Restaurant 1.0 has two operating states:

- `ledger-enabled`: the host environment can expose real conversation token totals
- `behavior-only`: the host environment cannot expose token totals

If you want coin rewards, your host environment needs to provide real token totals to a backend ledger.

The agreed 1.0 accounting model is:

- count user and agent tokens together
- settle once per hour
- convert at `1000 tokens = 1 coin`
- carry the remainder forward

If token totals are unavailable, the skill can still be installed and used, but it should not award coins.

## Activation Tips

This skill works best when the user wants:

- a quieter reward ritual
- background behavior logging
- optional token-based rewards without manual bookkeeping prompts
- a morale layer that does not interfere with execution

It should not be used when the user wants a completely dry, celebration-free interaction style.
