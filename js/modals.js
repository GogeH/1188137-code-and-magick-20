'use strict';

(function () {

  var warningWindow = function (errorMessage) {
    var elem = document.createElement('div');
    elem.classList.add('error-message');
    elem.textContent = errorMessage;
    document.body.appendChild(elem);

    setTimeout(function () {
      document.body.removeChild(elem);
    }, 3000);
  };

  window.modals = {
    warningWindow: warningWindow
  };

})();
