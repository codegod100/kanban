window.focusBoard = {
  _escapeHandler: null,
  load(key) {
    return window.localStorage.getItem(key);
  },
  save(key, value) {
    window.localStorage.setItem(key, value);
  },
  focusComposer() {
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop instanceof HTMLElement) {
      backdrop.focus();
    }
  },
  bindEscape(dotnetRef) {
    this.unbindEscape();
    this._escapeHandler = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        dotnetRef.invokeMethodAsync('HandleComposerEscape');
      }
    };
    document.addEventListener('keydown', this._escapeHandler, true);
  },
  unbindEscape() {
    if (this._escapeHandler) {
      document.removeEventListener('keydown', this._escapeHandler, true);
      this._escapeHandler = null;
    }
  }
};
