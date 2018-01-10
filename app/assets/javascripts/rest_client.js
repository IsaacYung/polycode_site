var RestClient = (function(global, $){
  function RestClient() {

    this.BASEPATH = 'http://471e9249.ngrok.io/languages';

  }

  var fn = RestClient.prototype

  fn.bindEvents = function () {
  };

  fn.get = function (url, language) {
    var self = this;
    return $.getJSON(this.BASEPATH + url + language);

  };

  return RestClient
})(window, jQuery)
