var RestClient = (function(global, $){
  function RestClient() {

    this.BASEPATH = 'http://59f126d2a118a000126fbde3.mockapi.io';

  }

  var fn = RestClient.prototype

  fn.bindEvents = function () {
  };

  fn.getLanguageName = function() {
    var url = window.location.pathname
    var regex = /\/languages\/(.*$)/

    return url.match(regex)[1]
  }

  fn.get = function (url) {
    var self = this;
    return $.getJSON(this.BASEPATH + url + this.getLanguageName());
  };

  return RestClient
})(window, jQuery)
