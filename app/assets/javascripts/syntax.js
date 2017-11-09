(function(global, $){
  function Syntax($syntaxesWrapper, orchestrator) {
    this.structureData = $syntaxesWrapper.find('#structure');
    this.orchestrator = orchestrator;
  }

  var fn = Syntax.prototype

  fn.bindEvents = function () {
  };

  fn.structureRender = function(title, content) {
    htmlRender = "<li><h3>" + title + "</h3>"
    htmlRender += '<div class="structure-data">'
    htmlRender += content
    htmlRender += "</div></li>"

    this.structureData.append(htmlRender)
  }

  fn.loadComponent = function() {
    var self = this;
    var syntaxPromise = this.orchestrator.get('/syntaxes/');

    syntaxPromise.done(function(data){
      $.each(data.structure.loop, function(key, value) {
        self.structureRender(key, value)
      });
    }).fail(console.log("Falhou"));
  };

  global.onload = function() {
    syntax = new Syntax($('.syntaxes-wrapper'), new Orchestrator());
    syntax.bindEvents();
    syntax.loadComponent();
  }
})(window, jQuery);
