'use strict';


(function () {
  var userDialog = document.querySelector('.setup');

  var inputMenu = userDialog.querySelector('#active');
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireBallColor = document.querySelector('.setup-fireball-wrap');
  var setupSimilar = document.querySelector('.setup-similar');

  userDialog.classList.add('hidden');
  setupSimilar.classList.remove('hidden');

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27 && inputMenu !== document.activeElement) {
      userDialog.classList.add('hidden');
    }
  });

  wizardCoat.addEventListener('click', function () {
    var color = window.setup.selectRandomElement(window.setup.WIZARDS_INFO.coatColor);
    wizardCoat.style.fill = color;
    document.querySelector('#coat').value = color;
  });

  wizardEyes.addEventListener('click', function () {
    var color = window.setup.selectRandomElement(window.setup.WIZARDS_INFO.eyesColor);
    wizardEyes.style.fill = color;
    document.querySelector('#eyes').value = color;
  });

  fireBallColor.addEventListener('click', function () {
    var color = window.setup.selectRandomElement(window.setup.WIZARDS_INFO.fireBallColor);
    fireBallColor.style.backgroundColor = color;
    document.querySelector('#fireball').value = color;
  });

})();

document.removeEventListener('click', function (evt) {
  evt.preventDefault();
});
