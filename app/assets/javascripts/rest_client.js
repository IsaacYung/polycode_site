var RestClient = (function(global, $){
  function RestClient() {

    this.BASEPATH = 'http://db9a5ecd.ngrok.io/languages';

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
