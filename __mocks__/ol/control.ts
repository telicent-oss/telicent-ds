// Class with no DOM access
export class MockControl {
  element: null = null;
  setMap(_: any) {}
}

// defaults returns a mock collection
const push = jest.fn();
export const defaults = jest.fn(() => ({ push }));

// Zoom/Rotate/FullScreen just return the class — no DOM at module load
export const Zoom = MockControl;
export const Rotate = MockControl;
export const FullScreen = MockControl;
