var Syntax = (function(global, $) {
  function Syntax($syntaxesWrapper, language) {
    this.structureData = $syntaxesWrapper.find('#syntax-structure');
    this.spinner = $syntaxesWrapper.find('#spinner');
    this.structureContent = $syntaxesWrapper.find('.structure-content');

    this.structure = new Structure($syntaxesWrapper, 'syntaxes', language)

    this.WORDS = {
      "loop" : "Loop",
      "flowControl" : "Flow Control",
      "while" : "While",
      "for" : "For",
      "doWhile" : "Do while",
      "if" : "If",
      "case" : "Case",
      "controlflow": "Control-Flow"
    }
  }

  var fn = Syntax.prototype

  fn.htmlRenderContent = function(title, content) {
    htmlRender = `<li>
                  <h4>${this.WORDS[title]}</h4>
                  <div class="syntax-content">
                  ${content}
                  </div>
                  </li>`

    this.structureData.append(htmlRender)
  }

  fn.htmlRenderSyntaxType = function(title) {
    htmlRender = `<li>
                  <h3>${this.WORDS[title]}</h3>
                  </li>`

    this.structureData.append(htmlRender)
  }

  fn.jsonDataExtract = function() {
    var self = this;
    this.structure.loadData().done(function(data) {
      $.each(data.syntaxes, function(key, value) {
        self.htmlRenderSyntaxType(key)

        $.each(value, function(key, value) {
          self.htmlRenderContent(key, value)
        })
      })
    });
  }

  return Syntax
})(window, jQuery);
