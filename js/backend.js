'use strict';

(function () {
  var LOAD_URL = 'https://javascript.pages.academy/code-and-magick/data';
  var SAVE_URL = 'https://javascript.pages.academy/code-and-magick';

  var xhrConnection = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = 10000;
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError(xhr.status);
      }
    });

    xhr.addEventListener('timeout', function () {
      window.modals.warningWindow('Превышен интервал ожидания ответа сервера');
    });

    xhr.addEventListener('error', function () {
      window.modals.warningWindow('Произвошла непредвиденная ошибка');
    });

    return xhr;
  };

  var load = function (onLoad, onError) {
    var xhr = xhrConnection(onLoad, onError);
    xhr.open('GET', LOAD_URL);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = xhrConnection(onLoad, onError);
    xhr.open('POST', SAVE_URL);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };

})();
