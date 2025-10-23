export class MockControl {
  element: HTMLElement;

  constructor() {
    this.element = document.createElement("div");
    this.element.className = "mock-control";
  }

  setMap(_: any) {
    // no-op — mimics real Control API
  }
}
