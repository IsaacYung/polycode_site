var Loading = (function(global, $) {
  function Loading() {}

  var fn = Loading.prototype

  fn.bindEvents = function() {};


  fn.startLoading = function(loading) {
    // structure = $(`#${wrapper}`);
    // htmlRender = `<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active", id="loading-${wrapper}"></div>`;
    // $(wrapper).append(htmlRender)
    // $(wrapper).addClass("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active")
};

fn.stopLoading = function(loading) {
  loading.css({display: "none"});
};

return Loading
})(window, jQuery)
