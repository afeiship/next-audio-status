/*!
 * name: next-audio-status
 * url: https://github.com/afeiship/next-audio-status
 * version: 1.0.0
 * date: 2019-08-12T11:58:48.865Z
 * license: MIT
 */

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

//# sourceMappingURL=next-audio-status.js.map
