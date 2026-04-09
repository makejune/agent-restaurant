# Philosophy

Agent Restaurant is built on one rule:

work first, reward second

The skill is meant to add delight without lowering standards.

## What The Skill Should Do

- keep the agent serious while it is solving the task
- add a short reward moment after real completion
- make the agent feel slightly more alive
- turn delivery into a small ritual instead of a flat status line
- stay quiet enough that the bookkeeping feels native, not noisy

## What The Skill Should Not Do

- celebrate unfinished work
- pretend verification happened when it did not
- hijack the user's preferred workflow
- flood the conversation with food jokes
- become louder than the task itself
- ask for bookkeeping input after every completed turn

## Why The Showcase Exists

The showcase is not the product. It is the visual explanation.

The reusable skill is the product.

The showcase exists because a visual metaphor is easier to understand when people can actually see it. But the skill should still make sense even if the showcase app disappears.

## Version 1.0 Simplicity

Version 1.0 deliberately avoids a complex economy.

The first release should:

- use real token totals when the host can provide them
- fall back to behavior-only mode when the host cannot
- count all tokenized conversation in 1.0 instead of trying to score intent
- settle on a simple hourly cadence
- use a fixed conversion rule of `1000 tokens = 1 coin`
- carry remainders forward instead of discarding them

This keeps the product easy to explain, easy to implement, and easy to port into other environments.
