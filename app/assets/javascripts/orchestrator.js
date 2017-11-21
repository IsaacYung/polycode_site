var Orchestrator = (function(global, $){
  function Orchestrator() {

    this.loading = new Loading();

  }

  var fn = Orchestrator.prototype

  fn.bindEvents = function () {
  };

  fn.getLanguageName = function() {
    var url = window.location.pathname
    var regex = /\/languages\/(.*$)/

    return url.match(regex)[1]
  }

  fn.get = function (url, loading) {
    var self = this;
    return $.getJSON(url + this.getLanguageName(), function(){
      // self.loading.startLoading(loading)
    }).done(function(){
      self.loading.stopLoading(loading)
    })
  };

  return Orchestrator
})(window, jQuery)
