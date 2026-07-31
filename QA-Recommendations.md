# EliasApp2 QA Recommendations

This document records the QA audit findings for EliasApp2 and the recommended updates to support toddler-friendly co-play, vocabulary modelling, and safe transitions.

## Key Audit Findings
- There is no audio vocabulary modelling for object names and actions.
- Some screens contain too many interactive elements for a two-year-old.
- There is no session timer or closing ritual.
- Parent prompts are present but can be more explicit in each scene.
- There is no parent gate to prevent unsupervised category switching.

## Recommendations
1. Add audio vocabulary prompts.
   - When tapping or dragging an object, play a short label or action phrase.
   - **Acceptance**: each primary interactive element triggers a concise spoken label when audio is enabled.

2. Limit primary interactions to three per screen.
   - Emphasise depth over breadth and unlock extras sequentially.
   - **Acceptance**: no screen contains more than three primary tap or drag actions.

3. Add a session timer and closing ritual.
   - After 5–8 minutes, prompt the child to play with real toys and transition off-screen.
   - **Acceptance**: controls disable after the timer and a friendly character invites offline play.

4. Add stronger scene-level parent prompts.
   - Include visible narration cues like “Ask Dad what this tool does.”
   - **Acceptance**: each scene has a caregiver prompt displayed on screen.

5. Add a parent gate to start or switch categories.
   - Require a long press or simple confirmation before moving between major sections.
   - **Acceptance**: category changes cannot happen without a caregiver action.

## Implementation Notes
- Keep scene layouts simple and avoid overlapping touch targets.
- Persist sound settings across refreshes and avoid accidental long-press text selection.
- Support a calm/quiet mode for lower sensory input.

## Suggested Roadmap
- `P1`: audio prompts, timer, closing ritual
- `P2`: scene-level parent prompts, interaction limits
- `P3`: parent gate, persistent settings, accessibility adjustments

## Status
- [ ] Add audio vocabulary prompts
- [ ] Limit each screen to 3 primary interactions
- [ ] Add session timer and offline transition
- [ ] Add visible caregiver prompts in each scene
- [ ] Add a parent gate for category switching

## Appendix: Audit & Research Excerpts
### QA Audit for Child Apps (relevant EliasApp2 findings)
- EliasApp2 offers cause-and-effect play and invites parent co-play, though vocabulary prompts and closing rituals need reinforcement.
- Strengths: categories such as Garbage Trucks, Construction, Cars & Trucks, Tools and Screwdriver World; large buttons, warm colours, limited interactive elements; launch overlay invites adult narration.
- Missing supports: no audio narration or vocabulary modelling; some screens exceed recommended tap points for a toddler; no session timer or closing ritual; overlay recommending 10 minutes is easily dismissed; no parent gate to prevent unsupervised use.
- Developmental gap: without explicit vocabulary prompts, the app relies heavily on the parent to supply language; absence of new verbs or adjectives limits learning; scenes can become repetitive without context or real-world connection.
- Recommendation excerpt: add audio vocabulary prompts with concise Australian-accented labels; limit interactive elements per screen to three; implement a session timer and clear closing ritual; enhance parent prompts; provide a parent gate.

### SylvieElias_AppDesign_Research (relevant Elias findings)
- Screen time for a 2-year-old: WHO recommends zero screen time under 2; co-viewing is essential; individual app sessions should target 5–8 minutes and hard stop at 10 minutes.
- The Five Cs Framework: Child stage, Content quality, Calm, Crowding Out, Communication.
- Four Pillars of Learning: Active Involvement, Contingent Feedback, Meaningful Experiences, Social Interaction.
- UI/UX guidance for under-5s: minimum tap target 20mm×20mm (44pt+); max 3–5 interactive elements per screen for 2–3-year-olds; slow smooth animations; immediate audio feedback within 100ms; warm calm voice.
- Elias-specific design priorities:
  - Launch with co-play prompt: “Show mum/dad what you found!”
  - Every tap: immediate audio label + animated response (under 150ms)
  - Session timer: visible to parent, soft prompt at 8 min, hard stop at 10 min
  - Include physical bridge: “Now go find something that drives! Bring it back!”
  - Vocabulary: consistent, simple, Australian-accented labels for every object
  - No achievement streaks — use narrative completion (“the truck is home!”)

### Evidence-based guidance for EliasApp2
- Cause & Effect is the core mechanic for a 2-year-old: every interaction should have an immediate, satisfying, and varied response.
- Toddlers at 2 understand object permanence and imitation; hide-and-reveal mechanics and “watch mum/dad do it” modes support learning.
- Parallel play design should invite side-by-side co-play with a caregiver rather than joint turn-taking.
- Avoid startling sound design; celebratory sounds should be warm, not jarring.
