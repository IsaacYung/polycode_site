var Structure = (function(global, $) {
  function Structure($wrapper, resource) {
    ANIMATION_SPEED = 500;

    this.spinner = $wrapper.find(Global.SPINNER);
    this.structureContent = $wrapper.find(Global.STRUCTURE_CONTENT);
    this.resource = `/${resource}/`;

    this.restClient = new RestClient();
    this.loading = new Loading();
  }

  var fn = Structure.prototype

  fn.loadData = function() {
    var self = this;
    var requestPromise = this.restClient.get(this.resource);

    return requestPromise.done(function(data) {
      self.structureContent.animate({ opacity: 1 }, ANIMATION_SPEED);
      self.loading.stopLoading(self.spinner);

      return data;
    }).fail(function() {
      console.log("Falhou")
    });
  };

  return Structure
})(window, jQuery);
