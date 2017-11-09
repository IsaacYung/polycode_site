var Orchestrator = (function(global, $){
  function Orchestrator() {
  }

  var fn = Orchestrator.prototype

  fn.bindEvents = function () {
  };

  fn.getLanguageName = function() {
    var url = window.location.pathname
    var regex = /\/languages\/(.*$)/

    return url.match(regex)[1]
  }

  fn.get = function (url) {
    var self = this;
    return $.getJSON(url + this.getLanguageName())
  };

  return Orchestrator
})(window, jQuery)
