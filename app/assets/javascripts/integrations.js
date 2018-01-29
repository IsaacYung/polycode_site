var Integration = (function(global, $) {
  function Integration($scope, language) {
    $integrationsWrapper = $scope.find('.integrations-wrapper');

    this.structureData = $integrationsWrapper.find('#integration-structure');
    this.spinner = $integrationsWrapper.find('#spinner');
    this.structureContent = $integrationsWrapper.find('.structure-content');

    this.structure = new Structure($integrationsWrapper, 'integrations', language);
  }

  var fn = Integration.prototype

  fn.htmlRenderContent = function(contentMap) {
    htmlRender = `<li>
                    <strong>Name: </strong><span>${contentMap.name}</span><br>
                    <strong>Description: </strong><span>${contentMap.description}</span>
                  </li><hr>`

    this.structureData.append(htmlRender)
  }

  fn.jsonDataExtract = function() {
    var self = this;
    this.structure.loadData().done(function(data) {
      $.each(data.integrations, function(key, value) {
        self.htmlRenderContent(value)
      })
    });
  }

  return Integration
})(window, jQuery);
