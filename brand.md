# Brand: Zarah Gathoni Portfolio

_Status: active_

Chosen in-session (2026-09-20) rather than via `/brand-design`, because the direction
was decided directly with the user. Re-run `/brand-design` only to change it.

## Positioning

Freelance blockchain engineer. The site sells availability and credibility, not
personality overload. Near-white, generous whitespace, futuristic type, motion used
to hold attention, never to decorate for its own sake.

## Palette

| Token | Hex | Use |
|---|---|---|
| `paper` | `#FAFAFA` | page background |
| `surface` | `#FFFFFF` | cards, raised panels |
| `ink` | `#0A0A0B` | headings, primary text |
| `ink-muted` | `#5A5A66` | body secondary text (6.5:1 on paper) |
| `ink-soft` | `#8A8A96` | large/decorative text only (3.2:1, never body) |
| `line` | `#E8E8EC` | 1px borders, dividers |
| `violet` | `#6D28D9` | **the** accent: links, buttons, active states (8:1 on paper) |
| `violet-soft` | `#F3EEFF` | accent wash, tag backgrounds |
| `lime` | `#C6F432` | highlight **behind** ink text, dots, markers |

**Accent discipline:** violet is the single accent. Lime never carries meaning and is
never text-on-white. It only sits *behind* ink text as a marker highlight, or as a
small dot/rule. This keeps the "one accent color" rule intact while giving the palette
the electric edge the user asked for.

## Typography

- **Display**: Space Grotesk (600/700). Headlines, wordmark, project titles. Tight tracking.
- **Body**: Inter (400/500). Paragraphs, UI.
- **Mono**: JetBrains Mono (500). Eyebrow labels, tags, stat numbers, metadata.

Fluid display sizing: `text-4xl md:text-6xl lg:text-7xl`. Body stays fixed.

## Photography

Photos run at `grayscale(0.68)` via the `.photo-muted` utility, so brand colour still
reads (the Stellar blue, the bitcoin++ orange, lanyards) while the page stays calm.
Full colour on hover or keyboard focus. The hero portrait is the exception and stays
fully black and white.

## Motion

Rich but disciplined. Scroll-reveal per section (never mid-read text), animated gradient
mesh in the hero, orbiting tech icons, dual-direction logo marquee, magnetic hover on
primary actions, counters that run once. Durations follow the 100/150/250/400ms tiers,
`ease-out` on enter. Everything collapses to static under `prefers-reduced-motion: reduce`.

## Voice

Direct, concrete, first person. Name the thing built and who it serves. No "passionate
about leveraging cutting-edge solutions."

## Theme

Light only, by design. The brief is "mostly white"; a dark variant would dilute it.
`color-scheme: light` is set explicitly so form controls and scrollbars match.
