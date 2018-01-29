var Global = (function($) {
  function Global() {
    this.SPINNER = '#spinner';
    this.STRUCTURE_CONTENT = '.structure-content';
  }

  var fn = Global.prototype

  fn.start = function(scope, language){
    syntax = new Syntax($(scope), language);
    characteristic = new Characteristic($(scope), language);
    integration = new Integration($(scope), language);

    characteristic.jsonDataExtract();
    syntax.jsonDataExtract();
    integration.jsonDataExtract();
  }

  fn.getLanguageName = function () {
    var url = window.location.pathname
    var regex = /\/languages\/(\w+)\/.*/

    return url.match(regex)[1]
  }

  fn.getOtherLanguageName = function () {
    var url = window.location.pathname
    var regex = /\/languages\/.*\/vs\/(.*$)/

    return url.match(regex)[1]
  }

  return new Global;
})(jQuery);

window.onload = function(){
  Global.start('.init', Global.getLanguageName());
  Global.start('.other', Global.getOtherLanguageName());
}
