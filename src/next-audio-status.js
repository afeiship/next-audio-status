(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.audioStatus = {
    error: -1,
    init: 0,
    play: 1,
    pause: 2,
    loaded: 3,
    ended: 4,
    canplay: 5
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.audioStatus;
  }
})();
