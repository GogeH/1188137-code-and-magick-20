'use strict';

(function () {
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

  function selectRandomElement(elements) {
    var randomElement = Math.floor(Math.random() * elements.length);
    return elements[randomElement];
  }

  function askPropertiesWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  function generateWizards() {
    var moveWizardName = window.util.moveElements(WIZARDS_INFO.name);
    var moveWizardSurname = window.util.moveElements(WIZARDS_INFO.surname);

    var wizards = [];
    for (var i = 0; i < moveWizardName.length && i < 4; i++) {
      wizards.push({
        name: moveWizardName[i],
        surname: moveWizardSurname[i],
        coatColor: selectRandomElement(WIZARDS_INFO.coatColor),
        eyesColor: selectRandomElement(WIZARDS_INFO.eyesColor)
      });
    }
    return wizards;
  }

  function renderWizards(similarWizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < similarWizards.length; i++) {
      fragment.appendChild(askPropertiesWizard(similarWizards[i]));
    }
    similarListElement.appendChild(fragment);
  }

  function createWizard(data) {
    return {
      name: data.name,
      surname: selectRandomElement(WIZARDS_INFO.surname),
      coatColor: data.colorCoat,
      eyesColor: data.colorEyes,
      fireBallColor: selectRandomElement(WIZARDS_INFO.fireBallColor),
    };
  }

  function getRandomNumber(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
  }

  function generate(arr, number) {
    var result = [];
    var indexes = [];

    while (result.length < number && result.length !== arr.length) {
      var randomNumber = getRandomNumber(0, arr.length - 1);

      if (indexes.includes(randomNumber) === false) {
        result.push(arr[randomNumber]);
        indexes.push(randomNumber);
      }
    }

    return result;
  }

  function onLoadWizards(similarWizards) {
    var randomElements = generate(similarWizards, 4);
    var elements = [];

    for (var i = 0; i < randomElements.length; i++) {
      var createdWizard = createWizard(randomElements[i]);
      elements.push(createdWizard);
    }

    renderWizards(elements);
  }

  function onError(error) {
    window.modals.warningWindow('Отправить данные не удалось. Код ошибки: ' + error);
  }


  window.backend.load(onLoadWizards, onError);

  window.setup = {
    WIZARDS_INFO: WIZARDS_INFO,

    selectRandomElement: selectRandomElement,
    askPropertiesWizard: askPropertiesWizard,
    generateWizards: generateWizards,
    renderWizards: renderWizards
  };

})();


