import { useState } from 'react';
import BigButton from './BigButton.jsx';
import { parentPrompts } from '../data/vocabulary.js';

export default function ParentSettings({ settings, achievements, onSettingChange, onResetAchievements, onOpenResources }) {
  const [promptIndex, setPromptIndex] = useState(0);
  const stickerGoal = 8;
  const stickerProgress = Math.min(achievements.length, stickerGoal);

  return (
    <section className="parent-settings" aria-label="Parent settings">
      <details>
        <summary>Parent settings</summary>
        <div className="settings-grid">
          <label>
            <input type="checkbox" checked={settings.sound} onChange={(event) => onSettingChange('sound', event.target.checked)} />
            Sound on
          </label>
          <label>
            <input type="checkbox" checked={settings.reducedMotion} onChange={(event) => onSettingChange('reducedMotion', event.target.checked)} />
            Reduced motion
          </label>
          <label>
            <input type="checkbox" checked={settings.calmMode} onChange={(event) => onSettingChange('calmMode', event.target.checked)} />
            Calm mode
          </label>
          <label>
            <input type="checkbox" checked={settings.showWatch} onChange={(event) => onSettingChange('showWatch', event.target.checked)} />
            Show Watch & Learn
          </label>
          <label>
            <input type="checkbox" checked={settings.showVideos} onChange={(event) => onSettingChange('showVideos', event.target.checked)} />
            Show video cards
          </label>
        </div>
        <div className="achievement-row">
          <strong>Sticker progress:</strong> {stickerProgress} of {stickerGoal}
          <progress max={stickerGoal} value={stickerProgress} aria-label={`${stickerProgress} of ${stickerGoal} stickers earned`} />
          <span>{achievements.length ? achievements.join(', ') : 'Try an activity together to earn the first sticker.'}</span>
        </div>
        <div className="parent-prompts">
          <strong>💡 Today's co-play prompt:</strong>
          <p className="prompt-text">{parentPrompts[promptIndex % parentPrompts.length]}</p>
          <BigButton onClick={() => setPromptIndex((i) => i + 1)}>Next prompt</BigButton>
        </div>
        <div className="settings-actions">
          <BigButton onClick={onOpenResources}>Open parent resources</BigButton>
          <BigButton onClick={onResetAchievements}>Reset achievements</BigButton>
        </div>
      </details>
    </section>
  );
}
