// ==UserScript==
// @name         AutoLightsail
// @namespace    http://tampermonkey.net/
// @version      2024-05-01.1
// @description  Read Lightsail books automatically without triggering the anti-bot check!!!
// @author       Au0727
// @match        https://lightsailed.com/*
// @icon         https://lightsailed.com/school/literacy/assets/images-school/logo.svg
// @grant        none
// ==/UserScript==

(function() {
    window.onblur = function() {};
    function clickButton() {
  var button = document.querySelector('button.reader-button-next.btn');
  if (button) {
    button.click();
  var button1 = document.querySelector('button.reader-button-prev.btn');
  if (button1) {
      button1.click();
  }
  }
}


setInterval(clickButton, 30000);

})();
