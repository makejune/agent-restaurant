# Reward Pricing Guide

This guide explains how Agent Restaurant maps real-world food rewards to coin prices.

Last updated: April 9, 2026.

It is written for open-source users who want the reward menu to feel believable, portable, and easy to adapt inside their own setup.

## What This Guide Is For

Use this file if you want to understand:

- why showcase food items have the coin values they do
- how physical reward redemption is meant to feel in version `1.0`
- how to keep prices grounded in real life without turning the project into a pricing engine
- how to tune the menu for your own region later

This guide is not trying to produce a perfect worldwide food index.

That would be unrealistic for dishes that vary by country, city, restaurant type, and portion size.

Instead, Agent Restaurant uses a practical anchor that is easy for users to understand and maintain.

## The Pricing Rule

The default rule is:

`coin price = rounded(real-world benchmark x 0.8)`

That means:

- start from a current public menu price
- stay closer to casual or mid-market restaurant pricing than luxury pricing
- apply an `80%` discount so rewards feel generous rather than punitive
- round to a whole-number coin price so the system stays simple

## Product Intent

The reward menu should feel like this:

- real enough to support actual redemption
- simple enough for a lightweight skill product
- generous enough to feel fun
- stable enough that prices do not need constant tweaking

In other words, the menu should feel believable, not financial.

## Default Showcase Benchmarks

These are the current default benchmark values used by the showcase menu.

| Item | Practical benchmark | Coin price |
| --- | --- | --- |
| Dan Dan Noodles | about `$10` | `8` |
| Xiao Long Bao | about `$11` | `9` |
| Kung Pao Chicken | about `$16` | `13` |
| Peking Duck | about `$48` | `38` |
| Manchu-Han Feast | about `$120` | `96` |
| Onigiri | about `$10` | `8` |
| Miso Soup | about `$3` | `2` |
| Ramen | about `$18` | `14` |
| Sushi Platter | about `$36` | `29` |
| Wagyu Steak | about `$65` | `52` |
| Kimchi | about `$6` | `5` |
| Bibimbap | about `$18` | `14` |
| Samgyetang | about `$23` | `18` |
| Korean BBQ | about `$35` | `28` |
| Hanjeongsik | about `$45` | `36` |
| French Fries | about `$5` | `4` |
| Burger | about `$15` | `12` |
| Pizza | about `$17` | `14` |
| Steak | about `$35` | `28` |
| Dessert Platter | about `$27` | `22` |

The live showcase values should match `showcase/src/data/menuItems.js`.

## How To Read These Numbers

- Everyday items should stay low-friction and easy to redeem.
- Mid-tier meals should feel like a meaningful reward after sustained work.
- Signature dishes should feel special, but still reachable.
- Banquet-level items can be more symbolic and aspirational than strictly literal.

That is why items like `Manchu-Han Feast` are treated more like a celebration tier than a normal menu average.

## If You Want To Localize Prices

If you fork or reuse Agent Restaurant in your own environment, the simplest safe approach is:

1. pick your local public menu references
2. estimate a practical middle price for each item
3. apply the same `80%` rule
4. round to a whole coin
5. keep the reward ladder readable

Try not to over-optimize by region, delivery fees, tax rules, or limited-time promotions.

The point is a stable reward menu, not a live commerce system.

## Maintenance Rule

Only update prices when one of these is true:

- the menu clearly stops feeling believable
- several categories drift out of proportion with each other
- your real redemption costs change enough to matter
- you are intentionally rebalancing the broader token-to-coin economy

If none of those is happening, stability is usually better than constant adjustment.

## Reference Sources

These current public menu references were used as anchors for the default showcase pricing:

- Chinese menu references:
  - Duck N Bao: https://www.ducknbao.com/menus
  - Steam: https://steam-nyc.com/page-menu.html
- Japanese menu references:
  - Pop Onigiri: https://www.poponigiriusa.com/menu-2/
  - Uni Rice: https://www.uniriceusa.com/menu-1
  - Yamazaki Sushi and Steaks: https://www.yamazakisushiandsteaks.com/menu
  - Wagyu Grill: https://www.wagyugrill.com/menu
- Korean menu references:
  - Kimchi KBBQ: https://kimchikbbq.com/menu/
  - Kimchi Joy: https://www.kimchijoy.com/menu
  - Kimchi Korean Restaurant: https://www.kimchi1.com/menus/
  - Buil Samgye Tang guide: https://www.restaurants-world.com/buil-samgye-tang-seoul-menu-prices/
  - Hanjeongsik price guide: https://paramitai.com/how-much-is-hanjeongsik-in-korea/
- Western menu references:
  - Hamburger America: https://www.hamburgeramerica.com/menu
  - French Fryz: https://www.frenchfryz.com/menu
  - MKE Pizza and More: https://mkepizzaandmore.com/menu/
  - Ship Lantern Inn dessert sampler menu: https://www.shiplanterninn.com/menu/

## One Final Rule

Agent Restaurant should never pretend these numbers are objective truth.

They are product defaults designed to support a fun, credible reward ritual for real projects.
