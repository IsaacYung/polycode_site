// (function(global, $) {
//   function Description($descriptionsWrapper) {
//     this.structureData = $descriptionsWrapper.find('#description-structure');
//     this.spinner = $descriptionsWrapper.find('#spinner');
//     this.structureContent = $descriptionsWrapper.find('.structure-content');
//
//     this.structure = new Structure($descriptionsWrapper, 'descriptions')
//
//     this.WORDS = {
//       "loop" : "Loop",
//       "flowControl" : "Flow Control",
//       "while" : "While",
//       "for" : "For",
//       "doWhile" : "Do while",
//       "if" : "If",
//       "case" : "Case"
//     }
//   }
//
//   var fn = Description.prototype
//
//   fn.htmlRenderContent = function(title, content) {
//     htmlRender = `<li>
//                   <div class="description-title">
//                   <h4">${this.WORDS[title]}</h4>
//                   <div class="structure-data">
//                   ${content}
//                   </div>
//                   </div>
//                   </li>`
//
//     this.structureData.append(htmlRender)
//   }
//
//   fn.htmlRenderTitle = function(title) {
//     htmlRender = `<li>
//                   <div class="description-title">
//                   <h3>${this.WORDS[title]}</h3>
//                   </div>
//                   </li>`
//
//     this.structureData.append(htmlRender)
//   }
//
//   fn.jsonDataExtract = function() {
//     var self = this;
//
//     this.structure.loadData().done(function(data) {
//       $.each(data.descriptions, function(key, value) {
//         self.htmlRenderTitle(key)
//
//         $.each(value, function(key, value) {
//           self.htmlRenderContent(key, value)
//         })
//       })
//     });
//   }
//
//   global.onload = function() {
//     description = new Description($('.descriptions-wrapper'));
//     description.jsonDataExtract();
//   }
// })(window, jQuery);
