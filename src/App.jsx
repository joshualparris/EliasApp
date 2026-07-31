import { useEffect, useMemo, useState } from 'react';
import Layout from './components/Layout.jsx';
import HomeCard from './components/HomeCard.jsx';
import SectionPage from './components/SectionPage.jsx';
import BigButton from './components/BigButton.jsx';
import FeedbackBubble from './components/FeedbackBubble.jsx';
import MachineCard from './components/MachineCard.jsx';
import VehicleCard from './components/VehicleCard.jsx';
import ToolCard from './components/ToolCard.jsx';
import InteractiveSpinner from './components/InteractiveSpinner.jsx';
import VideoCard from './components/VideoCard.jsx';
import MiniGameShell from './components/MiniGameShell.jsx';
import GameCard from './components/GameCard.jsx';
import MediaImage from './components/MediaImage.jsx';
import ScrewdriverCard from './components/ScrewdriverCard.jsx';
import RoadBuilderGame from './components/RoadBuilderGame.jsx';
import ParentSettings from './components/ParentSettings.jsx';
import ParentResources from './components/ParentResources.jsx';
import { sections } from './data/sections.js';
import { garbageTrucks } from './data/garbageTrucks.js';
import { constructionMachines } from './data/constructionMachines.js';
import { vehicles } from './data/vehicles.js';
import { tools } from './data/tools.js';
import { screwdrivers } from './data/screwdrivers.js';
import { spinners } from './data/spinners.js';
import { videos } from './data/videos.js';
import { games, fixObjects } from './data/games.js';
import { vehicleSounds } from './data/sounds.js';
import SortingStationGame from './components/SortingStationGame.jsx';
import { sortingGameData, sortingBins } from './data/sortingGame.js';
import ParkingChallengeGame from './components/ParkingChallengeGame.jsx';
import { parkingTrucks, parkingSpots } from './data/parkingGame.js';
import BuildHouseGame from './components/BuildHouseGame.jsx';
import { houseElements } from './data/houseGame.js';
import SoundMemoryGame from './components/SoundMemoryGame.jsx';
import PaintVehiclesGame from './components/PaintVehiclesGame.jsx';
import { memoryCards, paintColors } from './data/miniGames.js';

const pageMap = Object.fromEntries(sections.map((section) => [section.id, section]));
const defaultSettings = {
  sound: false,
  reducedMotion: false,
  calmMode: false,
  showWatch: true,
  showVideos: true,
};

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

const todayActivities = [
  'Turn the big screw',
  'Collect the yellow bin',
  'Build a road',
  'Fix the truck wheel',
  'Count the wheels',
  'Spin the cement mixer',
  'Open the toolbox',
  'Park the blue car',
  'Sort the bins',
];

const recommendedApps = [
  {
    id: 'lego-duplo-world',
    title: 'LEGO DUPLO WORLD',
    description: 'Digital DUPLO building and preschool-friendly construction play.',
    url: 'https://apps.apple.com/us/app/lego-duplo-world/id1458749093',
    platform: 'App Store / Google Play',
  },
  {
    id: 'dr-panda-trucks',
    title: 'Dr. Panda Trucks',
    description: 'Drive diggers, cranes, and trucks on a playful construction site.',
    url: 'https://apps.apple.com/us/app/dr-panda-trucks/id1226883811',
    platform: 'App Store / Google Play',
  },
  {
    id: 'toca-builders',
    title: 'Toca Builders',
    description: 'A cute blocky world where kids build, paint, and shape structures.',
    url: 'https://apps.apple.com/us/app/toca-builders/id1338363869',
    platform: 'App Store / Google Play',
  },
  {
    id: 'little-builders',
    title: 'Little Builders',
    description: 'Simple crane, mixer, and digger play for toddlers.',
    url: 'https://apps.apple.com/us/app/little-builders/id1211006833',
    platform: 'App Store / Google Play',
  },
  {
    id: 'toy-theater',
    title: 'Toy Theater Build',
    description: 'Free browser building blocks for simple desktop play.',
    url: 'https://toytheater.com/build/',
    platform: 'Web',
  },
  {
    id: 'crazygames-building',
    title: 'CrazyGames Building',
    description: 'Large browser game portal. Parent-supervised only.',
    url: 'https://www.crazygames.com/t/build',
    platform: 'Web',
  },
  {
    id: 'scratchjr',
    title: 'Scratch Jr',
    description: 'Drag-and-drop block coding for creative stories and simple games.',
    url: 'https://www.scratchjr.org/',
    platform: 'Web',
  },
  {
    id: 'code-org',
    title: 'Code.org',
    description: 'Beginner-friendly visual coding with blocks and animations.',
    url: 'https://code.org/',
    platform: 'Web',
  },
];

const parentResources = [
  {
    id: 'lego-duplo-app-store',
    title: 'LEGO DUPLO World — App Store',
    description: 'Colourful DUPLO-style building and toddler-friendly play.',
    url: 'https://apps.apple.com/us/app/lego-duplo-world/id1458749093',
    category: 'App',
  },
  {
    id: 'lego-duplo-google-play',
    title: 'LEGO DUPLO World — Google Play',
    description: 'Android version of the same DUPLO building experience.',
    url: 'https://play.google.com/store/apps/details?id=com.storytoys.lego.duplo.world.kids.play.free.friends.animals.androidgoogleplay',
    category: 'App',
  },
  {
    id: 'dr-panda-trucks-app-store',
    title: 'Dr. Panda Trucks — App Store',
    description: 'Construction trucks, cranes, and building play.',
    url: 'https://apps.apple.com/us/app/dr-panda-trucks/id1226883811',
    category: 'App',
  },
  {
    id: 'dr-panda-trucks-google-play',
    title: 'Dr. Panda Trucks — Google Play',
    description: 'Drive diggers, cranes, and trucks on a construction site.',
    url: 'https://play.google.com/store/apps/details?id=com.drpanda.trucks',
    category: 'App',
  },
  {
    id: 'toca-builders-app-store',
    title: 'Toca Builders — App Store',
    description: 'A cute blocky world where kids build, paint, and shape structures.',
    url: 'https://apps.apple.com/us/app/toca-builders/id1338363869',
    category: 'App',
  },
  {
    id: 'toca-builders-google-play',
    title: 'Toca Builders — Google Play',
    description: 'Build, paint, and shape structures in a child-friendly world.',
    url: 'https://play.google.com/store/apps/details?id=com.tocaboca.tocabuilders',
    category: 'App',
  },
  {
    id: 'little-builders-app-store',
    title: 'Little Builders — App Store',
    description: 'Simple crane, mixer, and digger play for toddlers.',
    url: 'https://apps.apple.com/us/app/little-builders/id1211006833',
    category: 'App',
  },
  {
    id: 'little-builders-google-play',
    title: 'Little Builders — Google Play',
    description: 'Crane and digger play designed for toddlers.',
    url: 'https://play.google.com/store/apps/details?id=com.foxandsheep.littlebuilders',
    category: 'App',
  },
  {
    id: 'toy-theater-build',
    title: 'Toy Theater Build',
    description: 'Free browser block building for early stacking and arranging.',
    url: 'https://toytheater.com/build/',
    category: 'Web game',
  },
  {
    id: 'toy-theater',
    title: 'Toy Theater',
    description: 'Broader collection of early learning browser games; parent review recommended.',
    url: 'https://toytheater.com/',
    category: 'Web game',
  },
  {
    id: 'crazygames-building',
    title: 'CrazyGames Building Games',
    description: 'Portal with many building games; parent supervision required.',
    url: 'https://www.crazygames.com/t/build',
    category: 'Web game',
  },
  {
    id: 'scratchjr',
    title: 'Scratch Jr',
    description: 'Beginner-friendly drag-and-drop block coding for creative stories and simple games.',
    url: 'https://www.scratchjr.org/',
    category: 'Web game',
  },
  {
    id: 'code-org',
    title: 'Code.org',
    description: 'Beginner-friendly visual coding with blocks and animations.',
    url: 'https://code.org/',
    category: 'Web game',
  },
];

function readStorage(key, fallback) {
  if (typeof window === 'undefined') return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

function playSoftTone(muted, pitch = 420) {
  if (muted || typeof window === 'undefined') return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.value = pitch;
  gain.gain.setValueAtTime(0.001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.055, context.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.22);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.24);
}

function pickToday(seed) {
  return todayActivities
    .map((activity, index) => ({ activity, score: (index * 37 + seed * 19) % 97 }))
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map((item) => item.activity);
}

const closingRituals = [
  'Find something with wheels.',
  'Push a toy truck across the floor.',
  'Show dad a screwdriver shape.',
  'Make a quiet beep-beep sound together.',
  'Count the wheels on a real car.',
  'Open the real toolbox.',
];

export default function App() {
  const [page, setPage] = useState('home');
  const [settings, setSettings] = useState(() => readStorage('eliasapp-settings', defaultSettings));
  const [achievements, setAchievements] = useState(() => readStorage('eliasapp-achievements', []));
  const [sessionActive, setSessionActive] = useState(false);
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [sessionMessage, setSessionMessage] = useState('Invite a grown-up to play together. Keep sessions short and calm.');
  const [showCoPlayPrompt, setShowCoPlayPrompt] = useState(() => readStorage('eliasapp-seen-coplays', 0) === 0);
  const [sessionEnded, setSessionEnded] = useState(false);
  const [closingRitual, setClosingRitual] = useState('');
  const activeSection = pageMap[page];
  const pageTitle = page === 'resources' ? 'Parent resources' : activeSection?.title || 'EliasApp';
  const muted = !settings.sound || settings.calmMode;
  const playTone = (pitch) => playSoftTone(muted, pitch);
  const visibleSections = sections.filter((section) => settings.showWatch || section.id !== 'watch');

  useEffect(() => {
    if (!sessionActive) return undefined;
    const interval = window.setInterval(() => setSessionSeconds((seconds) => seconds + 1), 1000);
    return () => window.clearInterval(interval);
  }, [sessionActive]);

  useEffect(() => {
    if (!sessionActive) return;
    if (sessionSeconds === 480) {
      setSessionMessage('8 minutes in — wrap up gently and get ready to end the play.');
    }
    if (sessionSeconds === 600) {
      setSessionMessage('10 minutes — time to finish and share your favourite part with a grown-up.');
      const ritual = closingRituals[Math.floor(Math.random() * closingRituals.length)];
      setClosingRitual(ritual);
    }
  }, [sessionActive, sessionSeconds]);

  function startSession() {
    setSessionActive(true);
    setSessionSeconds(0);
    setSessionMessage('Sit with Elias and name what he taps. Enjoy playing together!');
    setSessionEnded(false);
    setClosingRitual('');
  }

  function stopSession() {
    setSessionActive(false);
    setSessionSeconds(0);
    setSessionMessage('Invite a grown-up to join the play. Keep sessions short and calm.');
    setSessionEnded(true);
    setTimeout(() => setSessionEnded(false), 8000);
  }

  function handleOpen(sectionId) {
    setPage(sectionId);
    startSession();
  }

  function handleBack() {
    setPage('home');
    stopSession();
  }

  function updateSetting(key, value) {
    const next = { ...settings, [key]: value };
    setSettings(next);
    writeStorage('eliasapp-settings', next);
  }

  function addAchievement(name) {
    setAchievements((current) => {
      if (current.includes(name)) return current;
      const next = [...current, name];
      writeStorage('eliasapp-achievements', next);
      return next;
    });
  }

  function resetAchievements() {
    setAchievements([]);
    writeStorage('eliasapp-achievements', []);
  }

  return (
    <>
      {showCoPlayPrompt && (
        <div className="co-play-prompt" style={{ background: 'rgba(15, 27, 45, 0.95)', padding: '20px', borderRadius: '12px', margin: '16px', textAlign: 'center', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ margin: '0 0 12px', fontSize: '1.4rem', color: '#f4ead7' }}>👋 Start Playing Together</h2>
          <p style={{ margin: '0 0 12px', color: '#aab5c6', lineHeight: '1.6' }}>Sit with Elias for a few minutes. Name what he taps and copy the sounds together.</p>
          <p style={{ margin: '0 0 16px', color: '#f3c75f', fontWeight: '700' }}>This keeps his brain learning and screen time calm.</p>
          <button onClick={() => { setShowCoPlayPrompt(false); writeStorage('eliasapp-seen-coplays', 1); }} style={{ background: 'linear-gradient(180deg, #f0cc73, #dfae37)', color: '#1b1300', border: 'none', borderRadius: '999px', padding: '12px 24px', fontWeight: '700', cursor: 'pointer', fontSize: '1rem' }}>Start together</button>
        </div>
      )}
      <Layout
        page={page}
        title={pageTitle}
        muted={muted}
        sessionNote={sessionActive ? `Session ${formatTime(sessionSeconds)} — ${sessionMessage}` : undefined}
        className={`${settings.calmMode ? 'calm-mode' : ''} ${settings.reducedMotion ? 'reduce-motion' : ''}`}
        onToggleMute={() => updateSetting('sound', !settings.sound)}
        onBack={handleBack}
        onHome={() => setPage('home')}
      >
        {sessionEnded && closingRitual && (
          <div style={{ background: 'rgba(60, 120, 100, 0.15)', border: '2px solid rgba(100, 200, 160, 0.3)', borderRadius: '12px', padding: '16px', marginBottom: '16px', textAlign: 'center' }}>
            <p style={{ margin: '0', color: '#f4ead7', fontSize: '1.1rem' }}>🎯 <strong>Now try:</strong> {closingRitual}</p>
          </div>
        )}
        {page === 'home' && <HomePage onOpen={handleOpen} sections={visibleSections} achievements={achievements} settings={settings} />}
      {page === 'garbage' && <GarbagePage playTone={playTone} addAchievement={addAchievement} />}
      {page === 'construction' && <ConstructionPage playTone={playTone} addAchievement={addAchievement} />}
      {page === 'cars' && <CarsPage muted={muted} playTone={playTone} addAchievement={addAchievement} />}
      {page === 'tools' && <ToolsPage addAchievement={addAchievement} />}
      {page === 'screwdriver' && <ScrewdriverPage playTone={playTone} addAchievement={addAchievement} />}
      {page === 'spin' && <SpinPage />}
      {page === 'build' && <BuildFixPage playTone={playTone} addAchievement={addAchievement} />}
      {page === 'sounds' && <SoundboardPage playTone={playTone} />}
      {page === 'watch' && <WatchPage showVideos={settings.showVideos} />}
      {page === 'play' && <PlayPage playTone={playTone} addAchievement={addAchievement} />}
      {page === 'sorting' && <SortingStationPage playTone={playTone} addAchievement={addAchievement} />}
      {page === 'parking' && <ParkingChallengePage playTone={playTone} addAchievement={addAchievement} />}
      {page === 'house' && <BuildHousePage playTone={playTone} addAchievement={addAchievement} />}
      {page === 'memory' && <MemoryGamePage playTone={playTone} addAchievement={addAchievement} />}
      {page === 'paint' && <PaintGamePage playTone={playTone} addAchievement={addAchievement} />}
      {page === 'resources' && <ParentResources links={parentResources} onBack={handleBack} />}
      <ParentSettings
        settings={settings}
        achievements={achievements}
        onSettingChange={updateSetting}
        onResetAchievements={resetAchievements}
        onOpenResources={() => setPage('resources')}
      />
    </Layout>
    </>
  );
}

function HomePage({ onOpen, sections: visibleSections, achievements, settings }) {
  const [ideaSeed, setIdeaSeed] = useState(() => new Date().getDate());
  let ideas = useMemo(() => pickToday(ideaSeed), [ideaSeed]);
  if (settings?.calmMode) ideas = ideas.slice(0, 2);

  return (
    <div className="home-page">
      <section className="home-hero phase-three-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <span className="hero-badge">Start Playing</span>
          <h1 id="home-title">EliasApp</h1>
          <h2>Trucks, tools, cars and building fun</h2>
          <p>
            A safe little vehicle and tool play world with bins to collect, roads to build,
            wheels to count, and screwdrivers to turn.
          </p>
          <div className="hero-note">Invite a grown-up to start the play and keep sessions calm, short, and parent-led. After ten minutes, pause and bring the play into the real world with a toy truck or block activity.</div>
        </div>
        <div className="hero-yard" aria-hidden="true">
          <div className="sun" />
          <div className="cloud cloud-one" />
          <div className="cloud cloud-two" />
          <div className="hero-crane">{'\u{1F3D7}\uFE0F'}</div>
          <div className="hero-truck">{'\u{1F69B}'}</div>
          <div className="hero-car">{'\u{1F697}'}</div>
          <div className="floating-tool tool-a">{'\u{1FA9B}'}</div>
          <div className="floating-tool tool-b">{'\u{1F527}'}</div>
          <div className="road-line" />
        </div>
      </section>

      <section className="todays-play" aria-labelledby="todays-play-title">
        <div>
          <span className="hero-badge">Today's Play</span>
          <h2 id="todays-play-title">Three ideas for Elias</h2>
        </div>
        <div className="today-ideas">
          {ideas.map((idea) => <span key={idea}>{idea}</span>)}
        </div>
        <BigButton onClick={() => setIdeaSeed((value) => value + 1)}>New ideas</BigButton>
      </section>

      {achievements.length > 0 && (
        <section className="achievement-strip" aria-label="Achievements earned">
          {achievements.map((name) => <span key={name}>{name}</span>)}
        </section>
      )}

      <section className="home-card-grid" aria-label="Play sections">
        {(settings?.calmMode ? visibleSections.slice(0, 5) : visibleSections).map((section) => (
          <HomeCard key={section.id} section={section} onOpen={onOpen} />
        ))}
      </section>
    </div>
  );
}

function GarbagePage({ playTone, addAchievement }) {
  const [action, setAction] = useState('parked');
  const [sorted, setSorted] = useState({});
  const items = [
    { id: 'banana peel', bin: 'green waste' },
    { id: 'cardboard box', bin: 'recycling' },
    { id: 'bottle or can', bin: 'recycling' },
  ];

  function trigger(nextAction) {
    setAction(nextAction);
    playTone(nextAction === 'sort' ? 520 : 420);
    if (nextAction === 'lift' || nextAction === 'drive') addAchievement('Bin Helper');
  }

  function sortItem(item, bin) {
    setSorted((current) => ({ ...current, [item.id]: bin === item.bin }));
    trigger('sort');
  }

  const correctCount = Object.values(sorted).filter(Boolean).length;

  return (
    <SectionPage
      eyebrow="Garbage Truck World"
      title="Clean street helpers"
      intro="Collect bins, lift them up, sort recycling, and drive to the next house."
      theme="theme-green"
    >
      <div className="play-stage garbage-stage">
        <div className={`garbage-scene ${action}`}>
          <div className="street" />
          <div className="house-row" />
          <div className="scene-truck">{'\u{1F69B}'}</div>
          <div className="scene-bin bin-red" />
          <div className="scene-bin bin-yellow" />
          <div className="scene-bin bin-green" />
          <div className="recycle-sparkle">{'\u267B\uFE0F'}</div>
          <div className="rubbish-dots" />
        </div>
        <FeedbackBubble>
          {action === 'parked' && 'Ready to collect the bins.'}
          {action === 'collect' && 'The bins are lined up.'}
          {action === 'lift' && 'Up goes the bin!'}
          {action === 'tip' && 'Tip, tip, all tidy.'}
          {action === 'sort' && `Sorted ${correctCount}/3 items.`}
          {action === 'drive' && 'Clean street. Next house!'}
        </FeedbackBubble>
      </div>

      <div className="action-row">
        <BigButton onClick={() => trigger('collect')}>Collect bin</BigButton>
        <BigButton onClick={() => trigger('lift')}>Lift bin</BigButton>
        <BigButton onClick={() => trigger('tip')}>Tip bin</BigButton>
        <BigButton onClick={() => trigger('drive')}>Drive to next house</BigButton>
      </div>

      <MiniGameShell title="Sort the Bins" emoji={'\u267B\uFE0F'}>
        <div className="sort-bins-grid">
          {items.map((item) => (
            <div className="sort-item-card" key={item.id}>
              <strong>{item.id}</strong>
              <div className="action-row compact">
                {['rubbish', 'recycling', 'green waste'].map((bin) => (
                  <BigButton key={bin} onClick={() => sortItem(item, bin)}>{bin}</BigButton>
                ))}
              </div>
              {item.id in sorted && <FeedbackBubble>{sorted[item.id] ? 'Nice sorting!' : 'Try another bin.'}</FeedbackBubble>}
            </div>
          ))}
        </div>
        <FeedbackBubble>{correctCount === items.length ? 'All bins sorted. Clean street!' : `Sorted ${correctCount}/3 items.`}</FeedbackBubble>
      </MiniGameShell>

      <div className="feature-grid">
        {garbageTrucks.map((truck) => (
          <article className="feature-card" key={truck.id}>
            <MediaImage src={truck.image} alt={truck.title} emoji={truck.emoji} />
            <h3>{truck.title}</h3>
            <p>{truck.fact}</p>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}

function ConstructionPage({ playTone, addAchievement }) {
  const [active, setActive] = useState('excavator');
  const [blockLifted, setBlockLifted] = useState(false);
  const [dirtTipped, setDirtTipped] = useState(false);
  const [mixerSpinning, setMixerSpinning] = useState(false);

  return (
    <SectionPage
      eyebrow="Construction World"
      title="Build the road"
      intro="Place road pieces, add cones, flatten the road, and drive a little car across."
      theme="theme-yellow"
    >
      <RoadBuilderGame onComplete={() => addAchievement('Road Builder')} />
      <div className="construction-mini-scene">
        <button className={`crane-block ${blockLifted ? 'lifted' : ''}`} onClick={() => setBlockLifted((value) => !value)}>Crane lifts block</button>
        <button className={`dump-dirt ${dirtTipped ? 'tipped' : ''}`} onClick={() => setDirtTipped((value) => !value)}>Dump truck tips dirt</button>
        <button className={`mixer-drum ${mixerSpinning ? 'spinning' : ''}`} onClick={() => setMixerSpinning((value) => !value)}>Cement mixer spins</button>
      </div>
      <div className="feature-grid machine-grid">
        {constructionMachines.map((machine) => (
          <MachineCard
            key={machine.id}
            machine={machine}
            active={active === machine.id}
            onActivate={() => {
              setActive(machine.id);
              playTone(360 + machine.title.length * 12);
            }}
          />
        ))}
      </div>
    </SectionPage>
  );
}

function CarsPage({ muted, playTone, addAchievement }) {
  const [wheelGuess, setWheelGuess] = useState('');
  const [washed, setWashed] = useState(false);
  const [parked, setParked] = useState(false);
  const countVehicle = vehicles.find((vehicle) => vehicle.id === 'fire-truck');

  function guess(count) {
    setWheelGuess(String(count));
    if (count === 6) addAchievement('Wheel Counter');
  }

  return (
    <SectionPage
      eyebrow="Cars & Trucks"
      title="Garage play"
      intro="Wash a car, park it in the garage, beep the horn, and count wheels."
      theme="theme-blue"
    >
      <div className="garage-scene">
        <div className={`garage-car ${washed ? 'washed' : ''} ${parked ? 'parked' : ''}`}>{'\u{1F697}'}</div>
        <div className="garage-bubbles" />
        <div className="parking-bay">P</div>
      </div>
      <div className="action-row">
        <BigButton onClick={() => setWashed(true)}>Wash car</BigButton>
        <BigButton onClick={() => setParked(true)}>Park car</BigButton>
        <BigButton onClick={() => playTone(430)}>Beep horn</BigButton>
      </div>
      <div className="count-panel">
        <div>
          <span className="panel-emoji" aria-hidden="true">{countVehicle.emoji}</span>
          <h3>Count the wheels</h3>
          <p>How many wheels are on the fire truck?</p>
        </div>
        <div className="action-row compact">
          {[4, 6, 8].map((count) => (
            <BigButton key={count} onClick={() => guess(count)}>{count}</BigButton>
          ))}
        </div>
        {wheelGuess && <FeedbackBubble>{wheelGuess === '6' ? 'Yes, six wheels!' : 'Try counting again.'}</FeedbackBubble>}
      </div>
      <div className="feature-grid vehicle-grid">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} muted={muted} playTone={playTone} />
        ))}
      </div>
    </SectionPage>
  );
}

function ToolsPage({ addAchievement }) {
  const [toolboxOpen, setToolboxOpen] = useState(false);
  const [match, setMatch] = useState('');
  const [benchAction, setBenchAction] = useState('ready');

  function explore(action) {
    setBenchAction(action);
    addAchievement('Tool Explorer');
  }

  return (
    <SectionPage
      eyebrow="Toolbench"
      title="Tools"
      intro="Pretend play only. Real tools need grown-up help."
      theme="theme-orange"
    >
      <div className={`toolbench-scene ${benchAction}`}>
        <span className="bench-screw">⊕</span>
        <span className="bench-bolt">⬡</span>
        <span className="bench-toy-car">{'\u{1F697}'}</span>
        <span className="bench-truck">{'\u{1F69A}'}</span>
      </div>
      <div className="action-row">
        <BigButton onClick={() => explore('screwdriver-turn')}>Turn screwdriver</BigButton>
        <BigButton onClick={() => explore('spanner-turn')}>Turn spanner</BigButton>
        <BigButton onClick={() => explore('tape-extend')}>Extend tape</BigButton>
        <BigButton onClick={() => explore('drill-spin')}>Spin drill</BigButton>
        <BigButton onClick={() => explore('hammer-tap')}>Gentle tap</BigButton>
      </div>
      <div className={`toolbox-panel ${toolboxOpen ? 'open' : ''}`}>
        <button onClick={() => setToolboxOpen((value) => !value)} aria-label="Open or close toolbox">
          <span aria-hidden="true">{'\u{1F9F0}'}</span>
          {toolboxOpen ? 'Toolbox open' : 'Open toolbox'}
        </button>
        <div className="toolbox-tools" aria-hidden={!toolboxOpen}>
          {tools.map((tool) => <span key={tool.id}>{tool.emoji}</span>)}
        </div>
      </div>
      <div className="count-panel">
        <h3>Match tool to job</h3>
        <p>Which tool turns the pretend screw?</p>
        <div className="action-row compact">
          {tools.slice(0, 4).map((tool) => (
            <BigButton key={tool.id} onClick={() => setMatch(tool.id)}>{tool.emoji} {tool.title}</BigButton>
          ))}
        </div>
        {match && <FeedbackBubble>{match === 'screwdriver' ? 'The screwdriver turns it!' : 'That tool has another job.'}</FeedbackBubble>}
      </div>
      <div className="feature-grid tool-grid">
        {tools.map((tool) => <ToolCard key={tool.id} tool={tool} />)}
      </div>
    </SectionPage>
  );
}

function ScrewdriverPage({ playTone, addAchievement }) {
  const [selected, setSelected] = useState(screwdrivers[0]);
  const [turns, setTurns] = useState(0);
  const [fitAnswer, setFitAnswer] = useState('');
  const [wheelFixed, setWheelFixed] = useState(false);
  const [toolboxOpen, setToolboxOpen] = useState(false);
  const surprise = screwdrivers[(turns + selected.id.length) % screwdrivers.length];
  const fixed = Math.abs(turns) >= 6;

  function turn(direction) {
    setTurns((value) => {
      const next = value + direction;
      playTone(470 + Math.abs(next) * 8);
      if (Math.abs(next) >= 6) addAchievement('Screwdriver Star');
      return next;
    });
  }

  function chooseFit(id) {
    setFitAnswer(id);
    if (id === 'phillips') addAchievement('Screwdriver Star');
  }

  return (
    <SectionPage
      eyebrow="Screwdriver World"
      title="Turn, match, and fix"
      intro="A special screwdriver play area with photos, fallbacks, and safe pretend fixing."
      theme="theme-screw"
    >
      <div className="feature-grid screwdriver-gallery">
        {screwdrivers.map((item) => (
          <ScrewdriverCard
            key={item.id}
            screwdriver={item}
            selected={selected.id === item.id}
            onSelect={setSelected}
          />
        ))}
      </div>

      <MiniGameShell title="Turn the Big Screw" emoji={'\u{1FA9B}'}>
        <div className="big-screw-game">
          <div className={`big-screw ${fixed ? 'fixed' : ''}`} style={{ transform: `rotate(${turns * 35}deg)` }}>⊕</div>
          <progress max="6" value={Math.min(Math.abs(turns), 6)} aria-label="Fixing progress" />
          <FeedbackBubble>{fixed ? 'Great fixing, Elias!' : 'Fixing...'}</FeedbackBubble>
        </div>
        <div className="action-row">
          <BigButton onClick={() => turn(-1)}>Turn left</BigButton>
          <BigButton onClick={() => turn(1)}>Turn right</BigButton>
        </div>
      </MiniGameShell>

      <MiniGameShell title="Which Screwdriver Fits?" emoji={'\u2753'}>
        <div className="screw-target">Cross screw</div>
        <div className="choice-grid">
          {screwdrivers.slice(0, 3).map((item) => (
            <button key={item.id} className="choice-card" onClick={() => chooseFit(item.id)}>
              <span>{item.emoji}</span>
              {item.name}
            </button>
          ))}
        </div>
        {fitAnswer && <FeedbackBubble>{fitAnswer === 'phillips' ? 'Yes, that one fits!' : 'Try another one.'}</FeedbackBubble>}
      </MiniGameShell>

      <MiniGameShell title="Fix the Truck Wheel" emoji={'\u{1F69A}'}>
        <div className={`truck-wheel-game ${wheelFixed ? 'fixed' : ''}`}>
          <span className="toy-truck">{'\u{1F69A}'}</span>
          <span className="wobbly-wheel" />
          <span className="chosen-driver">{selected.emoji}</span>
        </div>
        <BigButton onClick={() => {
          setWheelFixed(true);
          addAchievement('First Fix');
        }}>
          Fix it
        </BigButton>
        {wheelFixed && <FeedbackBubble>The truck is ready!</FeedbackBubble>}
      </MiniGameShell>

      <MiniGameShell title="Toolbox Surprise" emoji={'\u{1F9F0}'}>
        <button className={`surprise-toolbox ${toolboxOpen ? 'open' : ''}`} onClick={() => setToolboxOpen((value) => !value)}>
          {toolboxOpen ? surprise.name : 'Open the toolbox'}
        </button>
        {toolboxOpen && <FeedbackBubble>{surprise.funFact}</FeedbackBubble>}
      </MiniGameShell>
    </SectionPage>
  );
}

function SpinPage() {
  return (
    <SectionPage eyebrow="Round and round" title="Things That Spin" intro="Tap once to spin. Tap again to stop." theme="theme-purple">
      <div className="feature-grid spinner-grid">
        {spinners.map((spinner) => <InteractiveSpinner key={spinner.id} item={spinner} />)}
      </div>
    </SectionPage>
  );
}

function BuildFixPage({ playTone, addAchievement }) {
  const [object, setObject] = useState(fixObjects[0].id);
  const [tool, setTool] = useState('screwdriver');
  const [fixed, setFixed] = useState(false);
  const selectedObject = fixObjects.find((item) => item.id === object);
  const selectedTool = tools.find((item) => item.id === tool);

  function fixIt() {
    setFixed(true);
    playTone(540);
    addAchievement('First Fix');
  }

  return (
    <SectionPage eyebrow="Build & Fix" title="Fix-it mini game" intro="Pick something broken, choose a friendly pretend tool, then press Fix it." theme="theme-red">
      <MiniGameShell title="Elias' workshop" emoji={'\u{1F6E0}\uFE0F'}>
        <div className={`fix-stage ${fixed ? 'is-fixed' : ''}`}>
          <div className="fix-object-art">{selectedObject.emoji}</div>
          <div className="fix-tool-art">{selectedTool.emoji}</div>
          <FeedbackBubble>{fixed ? `${selectedObject.done} Great work, Elias!` : `${selectedObject.title} needs a little fix.`}</FeedbackBubble>
        </div>
        <div className="chooser-columns">
          <div>
            <h3>Pick something</h3>
            <div className="choice-grid">
              {fixObjects.map((item) => (
                <button key={item.id} className={`choice-card ${object === item.id ? 'selected' : ''}`} onClick={() => { setObject(item.id); setFixed(false); }}>
                  <span>{item.emoji}</span>{item.title}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3>Pick a tool</h3>
            <div className="choice-grid">
              {tools.slice(0, 3).map((item) => (
                <button key={item.id} className={`choice-card ${tool === item.id ? 'selected' : ''}`} onClick={() => { setTool(item.id); setFixed(false); }}>
                  <span>{item.emoji}</span>{item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <BigButton onClick={fixIt}>Fix it</BigButton>
      </MiniGameShell>
    </SectionPage>
  );
}

function SoundboardPage({ playTone }) {
  return (
    <SectionPage
      eyebrow="Interactive Sounds"
      title="Vehicle Soundboard"
      intro="Tap the machines to hear their loud noises. Each one has a different sound!"
      theme="theme-pink"
    >
      <div className="feature-grid soundboard-grid">
        {vehicleSounds.map((item) => (
          <button
            key={item.id}
            className="sound-card"
            onClick={() => playTone(item.pitch)}
            aria-label={`Play ${item.title} sound`}
          >
            <div className="sound-card-emoji">{item.emoji}</div>
            <div className="sound-card-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="sound-card-icon">{'\u{1F50A}'}</div>
          </button>
        ))}
      </div>
    </SectionPage>
  );
}

function WatchPage({ showVideos }) {
  return (
    <SectionPage eyebrow="Parent controlled" title="Watch & Learn" intro="No autoplay, no random feeds, and no child-facing external links." theme="theme-teal">
      <div className="parent-note">Only add videos you have watched and approved.</div>
      {showVideos ? (
        <div className="feature-grid video-grid">
          {videos.map((video) => <VideoCard key={video.id} video={video} />)}
        </div>
      ) : (
        <FeedbackBubble>Video cards are hidden in parent settings.</FeedbackBubble>
      )}
      <section className="recommended-apps" aria-labelledby="recommended-apps-title">
        <div className="section-header">
          <h2 id="recommended-apps-title">Recommended builder apps</h2>
              <p>Parent-only ideas for tool play, construction, and building blocks. Links stay in docs/todo.md, not in the child UI.</p>
        </div>
        <div className="app-grid">
          {recommendedApps.map((app) => (
            <article className="app-card" key={app.id}>
                  <h3>{app.title}</h3>
                  <p>{app.description}</p>
                  <small>{app.platform}</small>
                </article>
          ))}
        </div>
      </section>
    </SectionPage>
  );
}

function PlayPage({ playTone, addAchievement }) {
  const [answers, setAnswers] = useState({});
  const [recycling, setRecycling] = useState([]);
  const answerGame = (id, answer, correct) => {
    const right = answer === correct;
    setAnswers((current) => ({ ...current, [id]: right }));
    playTone(right ? 520 : 330);
    if (id === 'count-wheels' && right) addAchievement('Wheel Counter');
  };

  return (
    <SectionPage eyebrow="Play Zone" title="Tap games" intro="Simple games for matching, counting, sorting, finding, and building." theme="theme-pink">
      <div className="feature-grid game-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game}>
            {game.id === 'build-road' && <RoadBuilderGame onComplete={() => addAchievement('Road Builder')} />}
            {game.id === 'sort-recycling' && (
              <div className="choice-grid">
                {['paper', 'plastic', 'glass'].map((item) => (
                  <button key={item} className={`choice-card ${recycling.includes(item) ? 'selected' : ''}`} onClick={() => setRecycling((current) => (current.includes(item) ? current : [...current, item]))}>
                    {item}
                  </button>
                ))}
                <FeedbackBubble>{recycling.length === 3 ? 'All sorted!' : 'Tap each recycling item.'}</FeedbackBubble>
              </div>
            )}
            {!['build-road', 'sort-recycling'].includes(game.id) && (
              <>
                <div className="choice-grid">
                  {game.choices.map((choice) => (
                    <button key={choice} className="choice-card" onClick={() => answerGame(game.id, choice, game.answer)}>
                      {choice}
                    </button>
                  ))}
                </div>
                {game.id in answers && <FeedbackBubble>{answers[game.id] ? 'You found it!' : 'Try again.'}</FeedbackBubble>}
              </>
            )}
          </GameCard>
        ))}
      </div>
    </SectionPage>
  );
}

function SortingStationPage({ playTone, addAchievement }) {
  return (
    <SectionPage
      eyebrow="Sorting Station"
      title="Sort items"
      intro="Put each item in the correct bin. Tap the bin to sort it!"
      theme="theme-teal"
    >
      <SortingStationGame items={sortingGameData} bins={sortingBins} playTone={playTone} />
      <div className="feature-grid">
        {sortingGameData.map((item) => (
          <article className="feature-card" key={item.id}>
            <div className="emoji-large">{item.emoji}</div>
            <h3>{item.name}</h3>
            <p>{item.category}</p>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}

function BuildHousePage({ playTone, addAchievement }) {
  return (
    <SectionPage
      eyebrow="Build a House"
      title="Create your home"
      intro="Pick walls, roofs, doors, and windows to build your dream house!"
      theme="theme-orange"
    >
      <BuildHouseGame elements={houseElements} playTone={playTone} />
      <div className="feature-grid">
        {houseElements.map((elem) => (
          <article className="feature-card" key={elem.id}>
            <div className="emoji-large">{elem.emoji}</div>
            <h3>{elem.name}</h3>
            <p>{elem.type}</p>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}

function MemoryGamePage({ playTone, addAchievement }) {
  return (
    <SectionPage
      eyebrow="Memory Game"
      title="Match the sounds"
      intro="Flip cards to find matching sound pairs. Listen carefully!"
      theme="theme-purple"
    >
      <SoundMemoryGame cards={memoryCards} playTone={playTone} />
      <div className="feature-grid">
        {memoryCards.slice(0, 3).map((card, i) => (
          <article className="feature-card" key={i}>
            <div className="emoji-large">{card.sound}</div>
            <h3>{card.name}</h3>
            <p>{card.category}</p>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}

function PaintGamePage({ playTone, addAchievement }) {
  return (
    <SectionPage
      eyebrow="Paint Shop"
      title="Paint the vehicles"
      intro="Choose a color and paint the car. Try all the colors!"
      theme="theme-red"
    >
      <PaintVehiclesGame colors={paintColors} playTone={playTone} />
      <div className="feature-grid">
        {paintColors.map((color) => (
          <article className="feature-card" key={color.id}>
            <div className="emoji-large" style={{ color: color.hex }}>■</div>
            <h3>{color.name}</h3>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}

function ParkingChallengePage({ playTone, addAchievement }) {
  return (
    <SectionPage
      eyebrow="Parking Challenge"
      title="Park the trucks"
      intro="Match each truck to its colored parking spot!"
      theme="theme-blue"
    >
      <ParkingChallengeGame trucks={parkingTrucks} spots={parkingSpots} playTone={playTone} />
      <div className="feature-grid">
        {parkingTrucks.map((truck) => (
          <article className="feature-card" key={truck.id}>
            <div className="emoji-large">{truck.emoji}</div>
            <h3>{truck.name}</h3>
            <p style={{ color: truck.color }}>Spot: {truck.color}</p>
          </article>
        ))}
      </div>
    </SectionPage>
  );
}
