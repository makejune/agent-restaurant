# Agent Restaurant

Agent Restaurant is an open-source skill concept for agentic development.

For a quick overview of this snapshot, read [`RELEASE_NOTES.md`](./RELEASE_NOTES.md).

It gives an agent a lightweight reward ritual after meaningful completed work. The goal is not to make engineering childish. The goal is to add a small layer of morale, personality, and celebration after real work has been done and, when possible, verified.

This repository has two parts:

- a reusable skill under `skills/agent-restaurant/`
- a visual demo under `showcase/`

## What This Repo Is For

Use this repo if you want:

- a reusable skill that can be loaded into your own agent setup
- a clearer personality layer for post-work celebration
- a "work first, reward second" ritual that does not get in the way of serious execution
- a reference showcase that makes the idea easier to understand

## Repository Layout

```text
agent-restaurant/
|-- README.md
|-- AGENT_RESTAURANT.md
|-- docs/
|   |-- installation.md
|   |-- reward-pricing.md
|   `-- philosophy.md
|-- skills/
|   `-- agent-restaurant/
|       |-- SKILL.md
|       |-- reward-rules.md
|       `-- tone-and-behavior.md
`-- showcase/
    |-- README.md
    |-- package.json
    |-- index.html
    |-- src/
    `-- vite.config.js
```

## Start Here

- Want to understand the idea: read [`AGENT_RESTAURANT.md`](./AGENT_RESTAURANT.md)
- Want to install the skill: read [`docs/installation.md`](./docs/installation.md)
- Want to understand how food redemption pricing works: read [`docs/reward-pricing.md`](./docs/reward-pricing.md)
- Want to understand the design philosophy: read [`docs/philosophy.md`](./docs/philosophy.md)
- Want to inspect the reusable skill: open [`skills/agent-restaurant/SKILL.md`](./skills/agent-restaurant/SKILL.md)
- Want to run the demo app: open [`showcase/README.md`](./showcase/README.md)

## Install The Skill

The reusable skill lives in:

`skills/agent-restaurant/`

Copy that folder into the skills directory used by your agent tool, then load or reference `agent-restaurant` in your workflow or instructions.

For a more detailed setup guide, see [`docs/installation.md`](./docs/installation.md).

## Agent Restaurant 1.0

The first version keeps accounting intentionally simple:

- if the host environment exposes real token totals, a backend ledger can use them
- user and agent tokens are counted together
- version 1.0 does not try to distinguish work chat from other chat
- settlement happens once per hour
- `1000 tokens = 1 coin`
- remainders carry forward
- if token totals are unavailable, the skill stays in behavior-only mode and does not issue coins

## Run The Showcase

```bash
cd showcase
npm install
npm run dev
```

Build the showcase:

```bash
cd showcase
npm run build
```

## Design Rule

Agent Restaurant should always behave like this:

- serious while working
- playful only after meaningful progress
- brief in celebration
- never dishonest about completion
- never more important than the real task
