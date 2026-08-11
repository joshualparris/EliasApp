# Current Status

## EliasApp Upgrades Implemented

### Short-term Upgrades
- **Add explicit co-play launch prompt:** Verified the `showCoPlayPrompt` state overlay at startup that encourages parents to sit and play with the child.
- **Build parent-visible session timer with soft/hard stop cues:** The session timer counts up with a soft message at 8 minutes and a hard stop at 10 minutes including a physical transition ritual.
- **Improve audio labels and immediate tap feedback:** The app features sound effects and visual feedback upon interactions.
- **Add a physical play transition prompt after sessions:** The app automatically shows a `closingRitual` prompt after 10 minutes (e.g. 'Push a toy truck across the floor').

### Medium-term Upgrades
- **Add a parent safety/co-play guidance panel:** Added a "Safety & Co-play Guidance" panel inside the Parent Settings menu summarizing session length limits and calm play strategies.
- **Offer a quiet mode with reduced motion and sound:** Calm Mode and Reduced Motion settings are implemented and limit on-screen ideas/animations.
- **Add a simple parent progress summary:** The "Sticker progress" tracker is available in the Parent Settings menu to track achievements.
- **Add vocabulary practice cards for trucks, tools, colors, and sounds:** Created a new `VocabularyPage` section in the app to encourage vocabulary repetition, utilizing `vocabularyMap`.

## Testing
- `npm install` and `npm audit fix` executed.
- e2e tests (`npm run test:e2e`) are passing.
