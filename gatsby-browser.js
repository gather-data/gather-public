require('prismjs');
require('./src/prism-theme.css');

exports.disableCorePrefetching = () => true;
exports.onClientEntry = () => {
  var originalPushState = window.history.pushState;

  window.history.pushState = function(a, b, c) {
    originalPushState(a, b, c);
    window.location.reload();
  };
};
