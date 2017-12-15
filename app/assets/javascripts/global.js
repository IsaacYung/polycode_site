var Global = (function($) {
  function Global() {
    this.SPINNER = '#spinner';
    this.STRUCTURE_CONTENT = '.structure-content';
  }

  var fn = Global.prototype

  fn.start = function(){
    syntax = new Syntax($('.syntaxes-wrapper'));
    characteristic = new Characteristic($('.characteristics-wrapper'));
    integration = new Integration($('.integrations-wrapper'));

    characteristic.jsonDataExtract();
    syntax.jsonDataExtract();
    integration.jsonDataExtract();
  }

  return new Global;
})(jQuery);

window.onload = function(){
  Global.start();
}
