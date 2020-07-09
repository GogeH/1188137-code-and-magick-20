'use strict';

(function () {
  function moveElements(elements) {
    var mixedElements = elements.slice();
    for (var i = mixedElements.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var swap = mixedElements[i];
      mixedElements[i] = mixedElements[j];
      mixedElements[j] = swap;
    }

    return mixedElements;
  }

  window.util = {
    moveElements: moveElements
  };

})();
