'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');

  setupOpen.addEventListener('click', function () {
    userDialog.classList.remove('hidden');
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      userDialog.classList.remove('hidden');
    }
  });

  setupClose.addEventListener('click', function () {
    userDialog.classList.add('hidden');
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      userDialog.classList.add('hidden');
    }
  });

})();
