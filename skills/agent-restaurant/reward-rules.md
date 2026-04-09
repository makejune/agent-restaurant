# Reward Rules

This file explains the Agent Restaurant 1.0 accounting model.

## 1. Accounting Trigger

For version 1.0, the accounting rule is intentionally simple:

- if the host environment exposes real conversation token totals, record them
- count both user and agent tokens together
- do not ask the user to enter token counts manually
- do not try to estimate token counts in the prompt layer

## 2. Settlement Cadence

Settlement happens once per hour.

The backend should:

- sum all recorded tokens in the current window
- convert eligible tokens to coins
- keep any remainder for the next window
- update the visible balance if the product exposes one

## 3. Conversion Rule

Use a fixed conversion rate:

`1000 tokens = 1 coin`

Examples:

- `1000 tokens -> 1 coin`
- `1500 tokens -> 1 coin, 500 tokens carried forward`
- `3200 tokens -> 3 coins, 200 tokens carried forward`

## 4. Carryover Rule

Remainders are never discarded in 1.0.

If a settlement window ends with fewer than `1000` unconverted tokens left, those tokens roll into the next hourly window.

## 5. Fallback Mode

If the host environment cannot expose real token totals:

- keep behavior logs if the product supports them
- do not award coins
- do not pretend settlement happened

## 6. What 1.0 Does Not Do

Version 1.0 does not:

- filter out casual conversation
- distinguish work chat from non-work chat
- score tasks by difficulty
- let the agent mint coins on its own
- let the prompt layer guess token totals

## 7. Query Surface

If the host product exposes bookkeeping commands or UI, the useful readouts are:

- current balance
- current remainder
- recent settlement windows
- whether the system is in ledger-enabled mode or behavior-only mode

## 8. Visible Reward Language

Visible celebration is optional.

If used, it should stay shorter than the factual task summary and must not claim a coin grant that has not actually been settled.
