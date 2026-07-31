# EliasApp Research Implementation Roadmap

Source research: `C:\dev\SylvieElias_AppDesign_Research.txt`, prepared 2026-06-04.

This roadmap translates the early-childhood app design research into a practical upgrade plan for EliasApp. Elias is 2 years old, so the strongest evidence points to brief, parent-led, cause-and-effect play that bridges quickly back to real trucks, tools, language, and movement.

## Evidence Summary

| Research Finding | EliasApp Design Implication |
|------------------|-----------------------------|
| At age 2, screen learning is limited by the video deficit effect. | Treat every session as parent co-play, not solo app time. |
| Toddlers learn through contingency: tap, response, repeat. | Every tap should produce immediate, meaningful feedback. |
| Vocabulary grows through concrete, familiar categories. | Label vehicles, tools, colors, sounds, and actions consistently. |
| Ages 2-3 need very low visual complexity. | Keep screens to roughly 3-5 active choices. |
| Recommended session window is 5-8 minutes, with 10 minutes as an upper bound. | Add parent-visible timing, soft-stop, and handoff cues. |
| Real-world transfer matters more than in-app completion. | End sessions by asking Elias to find, show, or move a real object. |

## Product Goal

Make EliasApp a short, warm, caregiver-supported vocabulary and cause-effect play tool. It should never feel like a feed, a slot-machine game, or a replacement for real truck/tool play.

## Priority 1: Co-Play and Session Boundaries

### 1. Add a Co-Play Launch Prompt

Add a brief launch card before the child dashboard:

- Parent copy: "Sit with Elias for a few minutes. Name what he taps and copy the sounds together."
- Child copy: "Show mum or dad what you find."
- CTA: "Start together."

Acceptance criteria:

- Appears once per app open or session reset.
- Can be dismissed quickly by a parent.
- Does not include a skip/feed/autoplay pattern.

### 2. Add a Session Timer

Target timing:

- Soft prompt at 8 minutes.
- Stop/handoff prompt at 10 minutes.
- Parent setting can reset or restart the timer.

Recommended prompt:

```text
Great truck play. Now park the app and find a real truck.
```

Acceptance criteria:

- Timer is visible or accessible to parents.
- Child flow ends with a warm transition, not a punitive lockout.
- Restart requires a deliberate parent action.

### 3. Add Closing Rituals

Each session should close with one physical bridge:

- "Find something with wheels."
- "Push a toy truck across the floor."
- "Show dad a screwdriver shape."
- "Make a quiet beep-beep sound together."

## Priority 2: Vocabulary and Contingent Feedback

### 4. Standardize Audio Labels

Create a shared vocabulary map for vehicles, tools, objects, sounds, and actions.

Label pattern:

```text
Object: "Excavator."
Action: "The excavator digs."
Sound: "Dig, dig, dig."
```

Acceptance criteria:

- Every tappable vehicle/tool/object has a label.
- Audio is calm and consistent.
- Sound effects are quieter than speech.
- Feedback starts within roughly 150ms of input where possible.

### 5. Replace Generic Praise With Informational Feedback

Prefer:

- "You found the wheel."
- "The yellow truck is parked."
- "The screwdriver turns."

Avoid overusing:

- "Amazing!"
- "You win!"
- rapid celebratory loops
- escalating badge language

### 6. Add Parent Talk Prompts

Add optional parent-only lines in the parent panel:

- "Say the action word: push, pull, turn, lift."
- "Ask: where are the wheels?"
- "Copy Elias's sound, then add one word."

## Priority 3: Interface and Regulation

### 7. Audit Screen Complexity

For each section, keep the default toddler screen to:

- 3-5 primary interactive elements.
- 20mm or larger tap targets.
- no fast flashing
- no dense text
- no parent content in the child path

If a section needs more choices, split it into pages or rounds.

### 8. Add Quiet Mode Improvements

Quiet mode should:

- reduce animation intensity
- reduce or mute non-speech sound
- use lower contrast backgrounds while preserving button contrast
- disable surprise effects

### 9. Review Rewards

Achievements may stay if they remain parent-local and low-pressure. Avoid:

- streaks
- countdown pressure
- variable-ratio rewards
- sad failure states
- "come back tomorrow" hooks

Prefer narrative completion:

- "The truck is home."
- "The road is fixed."
- "The toolbox is closed."

## Priority 4: Offline and Parent Trust

### 10. Strengthen Offline Safety

Because regional access can be variable, make the app useful offline:

- cache the app shell
- prefer local media
- keep fallbacks for missing images/sounds
- document which video features require internet

### 11. Parent Review Mode

Add a parent-only review screen showing:

- videos currently enabled
- activities used this session
- approximate session time
- whether sound/quiet mode was used
- suggested real-world follow-up

## Evidence-Graded Implementation Checklist

| Priority | Task | Evidence |
|----------|------|----------|
| P0 | Co-play launch prompt | A: WHO/AAP guidance and video deficit research |
| P0 | 8-minute soft prompt and 10-minute handoff | A: screen-time and attention-span guidance |
| P0 | No autoplay/random feeds | A: paediatric media guidance |
| P1 | Immediate labels on every tap | A: toddler contingency and vocabulary research |
| P1 | Physical bridge prompts | B: digital play and real-world transfer research |
| P1 | Reward language audit | B: Self-Determination Theory |
| P2 | Parent review mode | B: caregiver-mediated learning |
| P2 | Offline-first media strategy | B: regional equity and practical access |

## Release Order

1. Co-play launch prompt, session timer, and closing ritual.
2. Audio label standardization and informational feedback pass.
3. Screen complexity/tap-target audit.
4. Quiet mode and reward language refinement.
5. Parent review mode and offline/media documentation.

## Definition of Done

EliasApp is research-aligned when a typical session:

- starts with parent involvement
- lasts under 10 minutes
- gives immediate, calm, contingent feedback
- teaches concrete vocabulary
- avoids addictive reward mechanics
- ends by sending Elias back to real-world play
