(function(global, $) {
  function Syntax($syntaxesWrapper, orchestrator) {
    this.structureData = $syntaxesWrapper.find('#syntax-structure');
    this.orchestrator = orchestrator;
    this.spinner = $syntaxesWrapper.find('#spinner');
    this.structureContent = $syntaxesWrapper.find('.structure-content');

    this.loading = new Loading();
  }

  var fn = Syntax.prototype

  fn.bindEvents = function() {};

  fn.structureRender = function(title, content) {
    htmlRender = `<li>
                  <h3>${title}</h3>
                  <div class="structure-data">
                  ${content}</div>
                  </li>`

    this.structureData.append(htmlRender)
  }

  fn.loadComponent = function() {
    var self = this;
    var syntaxPromise = this.orchestrator.get('/syntax/');

    syntaxPromise.done(function(data) {
      $.each(data.structure.loop, function(key, value) {
        self.structureRender(key, value)
      });
      self.structureContent.animate({
        opacity: 1
      }, 500);

      self.loading.stopLoading(self.spinner);
    }).fail(function() {
      console.log("Falhou")
    });
  };

  global.onload = function() {
    syntax = new Syntax($('.syntaxes-wrapper'), new Orchestrator());
    syntax.bindEvents();
    syntax.loadComponent();
  }
})(window, jQuery);
