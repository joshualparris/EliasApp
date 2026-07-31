export const houseElements = [
  { id: 'wall', name: 'Wall', emoji: '🟫', type: 'wall' },
  { id: 'roof', name: 'Roof', emoji: '🏠', type: 'roof' },
  { id: 'door', name: 'Door', emoji: '🚪', type: 'door' },
  { id: 'window', name: 'Window', emoji: '🪟', type: 'window' },
  { id: 'tree', name: 'Tree', emoji: '🌳', type: 'decoration' },
];

export const houseGridSpots = Array.from({ length: 12 }, (_, i) => ({
  id: `spot-${i}`,
  index: i,
}));
