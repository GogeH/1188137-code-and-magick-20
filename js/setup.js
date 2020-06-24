'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var WIZARDS_INFO = {
  name: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  surname: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green'],
  fireBallColor: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};

var moveElements = function (elements) {
  var mixedElements = elements.slice();
  for (var i = mixedElements.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var swap = mixedElements[i];
    mixedElements[i] = mixedElements[j];
    mixedElements[j] = swap;
  }

  return mixedElements;
};

var selectRandomElement = function (elements) {
  var randomElement = Math.floor(Math.random() * elements.length);
  return elements[randomElement];
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var generateWizards = function () {
  var moveWizardName = moveElements(WIZARDS_INFO.name);
  var moveWizardSurname = moveElements(WIZARDS_INFO.surname);

  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: moveWizardName[i],
      surname: moveWizardSurname[i],
      coatColor: selectRandomElement(WIZARDS_INFO.coatColor),
      eyesColor: selectRandomElement(WIZARDS_INFO.eyesColor)
    });
  }
  return wizards;
};

var renderWizards = function () {
  var similarWizards = generateWizards();
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < similarWizards.length; i++) {
    fragment.appendChild(renderWizard(similarWizards[i]));
  }
  similarListElement.appendChild(fragment);
};

renderWizards();

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var inputMenu = setup.querySelector('#active');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireBallColor = document.querySelector('.setup-fireball-wrap');

setup.classList.add('hidden');

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

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && inputMenu !== document.activeElement) {
    userDialog.classList.add('hidden');
  }
});

wizardCoat.addEventListener('click', function () {
  var color = selectRandomElement(WIZARDS_INFO.coatColor);
  wizardCoat.style.fill = color;
  document.querySelector('#coat').value = color;
});

wizardEyes.addEventListener('click', function () {
  var color = selectRandomElement(WIZARDS_INFO.eyesColor);
  wizardEyes.style.fill = color;
  document.querySelector('#eyes').value = color;
});

fireBallColor.addEventListener('click', function () {
  var color = selectRandomElement(WIZARDS_INFO.fireBallColor);
  fireBallColor.style.backgroundColor = color;
  document.querySelector('#fireball').value = color;
});
