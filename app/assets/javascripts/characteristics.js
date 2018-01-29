var Characteristic = (function(global, $) {
  function Characteristic($scope, language) {
    $characteristicsWrapper = $scope.find('.characteristics-wrapper');

    this.structureData = $characteristicsWrapper.find('#characteristic-structure');
    this.spinner = $characteristicsWrapper.find('#spinner');
    this.structureContent = $characteristicsWrapper.find('.structure-content');

    this.structure = new Structure($characteristicsWrapper, 'characteristics', language);

    this.WORDS = {
      "typing": "Typing",
      "paradigm": "Paradigm",
      "integrations": "Integrations"
    }
  }

  var fn = Characteristic.prototype

  fn.htmlRenderContent = function(title, content) {
    htmlRender = `<li>
                  <strong>${this.WORDS[title]}: </strong>
                  <span>${content}</span>
                  </li>`

    this.structureData.append(htmlRender)
  }

  fn.jsonDataExtract = function() {
    var self = this;
    this.structure.loadData().done(function(data) {
      $.each(data.characteristics, function(key, value) {
        self.htmlRenderContent(key, value)
      })
    });
  }

  return Characteristic
})(window, jQuery);
