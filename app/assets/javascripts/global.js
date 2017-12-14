var Global = (function($) {
  function Global() {
    this.SPINNER = '#spinner';
    this.STRUCTURE_CONTENT = '.structure-content';
  }

  var fn = Global.prototype

  fn.start = function(){
    console.log("ola");
    syntax = new Syntax($('.syntaxes-wrapper'));
    characteristic = new Characteristic($('.characteristics-wrapper'));

    characteristic.jsonDataExtract();
    syntax.jsonDataExtract();
  }

  return new Global;
})(jQuery);

window.onload = function(){
  Global.start();
}
