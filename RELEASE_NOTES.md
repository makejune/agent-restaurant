# Agent Restaurant 1.0 Release Notes

This folder is the clean 1.0 snapshot of Agent Restaurant.

## What Is Inside

- the reusable open-source skill in `skills/agent-restaurant/`
- the core concept and philosophy docs in `AGENT_RESTAURANT.md` and `docs/`
- the static showcase in `showcase/`, which explains the reward rules and menu visually

## What 1.0 Means

Version 1.0 keeps the system intentionally simple:

- count real user and agent tokens together when the host can expose them
- settle once per hour
- use `1000 tokens = 1 coin`
- carry remainders forward
- if token totals are unavailable, do not issue coins

## Start Here

- install the skill: `skills/agent-restaurant/`
- understand the concept: `AGENT_RESTAURANT.md`
- review pricing: `docs/reward-pricing.md`
- run the showcase: `showcase/README.md`
