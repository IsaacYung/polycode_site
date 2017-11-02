(function(global, $){
  function Syntax($syntaxesWrapper) {

  }

  var fn = Syntax.prototype

  fn.bindEvents = function () {
    alert("Funfou")
  }

  fn.getSyntax = function () {

  }

  $( document ).ready(function() {
    syntax = new Syntax($('.syntaxes-wrapper'));
    syntax.bindEvents();
  });
})(window, jQuery)
