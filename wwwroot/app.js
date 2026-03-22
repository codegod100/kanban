window.focusBoard = {
  load(key) {
    return window.localStorage.getItem(key);
  },
  save(key, value) {
    window.localStorage.setItem(key, value);
  }
};
