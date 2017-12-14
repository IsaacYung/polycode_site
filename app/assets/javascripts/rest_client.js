var RestClient = (function(global, $){
  function RestClient() {

    this.BASEPATH = 'http://a6fda3ce.ngrok.io/languages';

  }

  var fn = RestClient.prototype

  fn.bindEvents = function () {
  };

  fn.getLanguageName = function () {
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
