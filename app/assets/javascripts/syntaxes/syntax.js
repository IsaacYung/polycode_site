(function(global, $){
  function Syntax($syntaxesWrapper) {
    this.structureData = $syntaxesWrapper.find('#structure');
  }

  var fn = Syntax.prototype

  fn.bindEvents = function () {
  };

  fn.getLanguageName = function() {
    var url = window.location.pathname
    var regex = /\/languages\/(.*$)/

    return url.match(regex)[1]
  }

  fn.getSyntax = function () {
    var self = this;
    $.getJSON("/syntaxes/" + this.getLanguageName(), function(data) {
      console.log("Spinner");
    }).then(function(data) {
      console.log(data);
      self.loadComponnet(data);
    });
  };

  fn.structureHtml = function(structure) {
    htmlRender = '<li>'
    htmlRender += "<h3>" + structure.title + "</h3>"
    htmlRender += '<div class="structure-data">'
    htmlRender += structure.content
    htmlRender += "</div>"
    htmlRender += "</li>"

    return htmlRender
  }

  fn.loadComponnet = function(data) {
    var self = this;

    $.each(data.structure.loop, function(key, value) {
      self.structureData.append(
        self.structureHtml({title: key, content: value})
      );
    });
  };

  global.onload = function() {
    syntax = new Syntax($('.syntaxes-wrapper'));
    syntax.bindEvents();
    syntax.getSyntax();
  }
})(window, jQuery)
