var Structure = (function(global, $) {
  function Structure($wrapper, resource, language) {
    ANIMATION_SPEED = 500;
    this.wrapper = $wrapper.find(".structure-content");
    this.spinner = $wrapper.find(Global.SPINNER);
    this.structureContent = $wrapper.find(Global.STRUCTURE_CONTENT);
    this.resource = `/${resource}/`;
    this.language = language;

    this.restClient = new RestClient();
    this.loading = new Loading();
  }

  var fn = Structure.prototype

  fn.loadData = function() {
    var self = this;
    var requestPromise = this.restClient.get(this.resource, this.language);

    return requestPromise.done(function(data) {
      self.structureContent.animate({ opacity: 1 }, ANIMATION_SPEED);
      self.loading.stopLoading(self.spinner);

      return data;
    }).fail(function() {
      self.loading.stopLoading(self.spinner);
      self.structureContent.animate({ opacity: 1 }, ANIMATION_SPEED);
      self.wrapper.html(`<div class="error-message"><strong>OPS! Houston, we have a problem! </strong><br> <span>But don't you worry, there are a few monkeys working to solve this problem.</span></div>`);
    });
  };

  return Structure
})(window, jQuery);
