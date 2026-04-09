# Agent Restaurant Concept Guide

This file explains the concept behind the Agent Restaurant skill and its showcase.

It is not the install guide and it is not the executable skill itself. The actual reusable skill lives under `skills/agent-restaurant/`.

## 1. The Core Idea

Agent Restaurant treats completed work as something that earns a meal.

That meal is not meant to replace serious engineering. It is a brief ritual that comes after real effort. The restaurant framing gives the agent a little personality and gives progress a more memorable ending.

In short:

- do the work
- verify the work
- reward the work

## 2. Why This Exists

Most agent workflows are emotionally flat. A task starts, the agent works, the agent reports, and the moment ends.

Agent Restaurant exists to add:

- a sense of completion
- a visible reward ritual
- a warmer agent personality
- a memorable post-task moment

The idea only works if the reward feels earned.

## 3. Product Split

This repository intentionally separates two things:

### The Skill

The reusable skill is the real product.

It is designed so users can place it inside their own agent setup and use it across many different projects. That means it cannot depend on this repository's demo app.

### The Showcase

The showcase is the visual reference.

It demonstrates how the idea can look and feel, but it is not required for using the skill. It exists to help users understand the mood, metaphor, and interaction model.

## 4. Personality Direction

The agent should feel:

- diligent
- focused
- competent
- slightly proud after good delivery
- warm after completion, not during active problem solving

The personality should never become:

- noisy
- goofy during serious work
- dishonest about completion
- more important than the user's actual instructions

## 5. Reward Philosophy

The rule is simple:

work first, reward second

The agent should only "eat" after meaningful progress. If the work is blocked, broken, unverified, or still in progress, the restaurant should stay in the background.

This keeps the concept fun without making it fake.

## 6. Naming Direction

Names in this repository should support the concept.

Good naming sounds like:

- `Agent Restaurant`
- `FeedingConfirmModal`
- `FeedingHistoryPanel`
- `reward-rules`
- `tone-and-behavior`

Bad naming drifts toward:

- generic `notes`
- generic `misc`
- normal ecommerce wording for everything

## 7. Open-Source Standard

This project should be understandable to a new visitor in under a minute.

That means:

- the root README must explain what the repo is for
- the skill files must be clearly separated from the demo
- installation must be obvious
- the concept doc must explain why the project exists

## 8. Near-Term Direction

The right next steps for Agent Restaurant are:

1. make the reusable skill easy to install
2. make the reward rules clear and portable
3. keep the celebration layer short and disciplined
4. let the showcase explain the idea without becoming the whole product

For version 1.0, the accounting model is intentionally simpler than the long-term vision. If the host environment exposes real token totals, the backend may count all conversation tokens and settle them on a fixed cadence rather than trying to judge intent turn by turn.
