// Standardized vocabulary for EliasApp
// Every action follows a consistent pattern: Label, Action, Sound, Feedback

export const vocabularyMap = {
  // Vehicles
  'red-car': {
    label: 'Red car',
    action: 'drive',
    actionSound: 'beep, beep',
    feedback: 'The red car drives.',
  },
  'blue-car': {
    label: 'Blue car',
    action: 'drive',
    actionSound: 'toot, toot',
    feedback: 'The blue car drives.',
  },
  'race-car': {
    label: 'Race car',
    action: 'drive',
    actionSound: 'vroom, vroom',
    feedback: 'The race car zooms fast.',
  },
  'fire-truck': {
    label: 'Fire truck',
    action: 'drive',
    actionSound: 'nee naw, nee naw',
    feedback: 'The fire truck helps people.',
  },
  'garbage-truck': {
    label: 'Garbage truck',
    action: 'collect',
    actionSound: 'beep, beep',
    feedback: 'The garbage truck collects bins.',
  },
  'school-bus': {
    label: 'School bus',
    action: 'drive',
    actionSound: 'honk, honk',
    feedback: 'The school bus drives children to school.',
  },

  // Construction Machines
  'excavator': {
    label: 'Excavator',
    action: 'dig',
    actionSound: 'dig, dig, dig',
    feedback: 'The excavator digs deep.',
  },
  'bulldozer': {
    label: 'Bulldozer',
    action: 'push',
    actionSound: 'push, push',
    feedback: 'The bulldozer pushes the pile.',
  },
  'crane': {
    label: 'Crane',
    action: 'lift',
    actionSound: 'lift, lift',
    feedback: 'The crane lifts the block high.',
  },
  'dump-truck': {
    label: 'Dump truck',
    action: 'tip',
    actionSound: 'tip, tip',
    feedback: 'The dump truck tips the dirt.',
  },
  'concrete-mixer': {
    label: 'Concrete mixer',
    action: 'spin',
    actionSound: 'spin, spin, spin',
    feedback: 'The mixer spins round and round.',
  },

  // Tools
  'screwdriver': {
    label: 'Screwdriver',
    action: 'turn',
    actionSound: 'turn, turn',
    feedback: 'The screwdriver turns the screw.',
  },
  'hammer': {
    label: 'Hammer',
    action: 'tap',
    actionSound: 'tap, tap',
    feedback: 'The hammer taps the nail.',
  },
  'spanner': {
    label: 'Spanner',
    action: 'turn',
    actionSound: 'turn, turn',
    feedback: 'The spanner turns the bolt.',
  },
  'drill': {
    label: 'Drill',
    action: 'spin',
    actionSound: 'spin, spin, spin',
    feedback: 'The drill spins round and round.',
  },
  'tape-measure': {
    label: 'Tape measure',
    action: 'measure',
    actionSound: 'slide, slide',
    feedback: 'The tape measure shows how long.',
  },

  // General actions
  'wheel': {
    label: 'wheel',
    action: 'count',
    actionSound: 'one, two, three',
    feedback: 'You found a wheel.',
  },
  'color': {
    label: 'color',
    action: 'find',
    actionSound: 'color',
    feedback: 'You found the color.',
  },
};

export const parentPrompts = [
  'Say the action word: push, pull, turn, lift.',
  'Ask: where are the wheels?',
  'Copy Elias\'s sound, then add one word.',
  'Point and name: "That is a truck."',
  'Ask him to find a real truck after playing.',
  'Count the wheels together on a real car.',
  'Name the colors he taps: "You found red."',
];

export function getVocab(id) {
  return vocabularyMap[id] || {
    label: 'Thing',
    action: 'tap',
    actionSound: 'tap',
    feedback: 'You found something.',
  };
}

export function getRandomParentPrompt() {
  return parentPrompts[Math.floor(Math.random() * parentPrompts.length)];
}
