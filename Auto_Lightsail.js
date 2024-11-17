// ==UserScript==
// @name         AutoLightsail
// @namespace    http://tampermonkey.net/
// @version      2024-05-12
// @description  Read Lightsail books automatically without triggering the anti-bot check!!!
// @author       Au0727
// @match        https://lightsailed.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lightsailed.com
// @grant        none
// @license      GPL
// ==/UserScript==

(function() {

    // 添加一个开关按钮到页面顶部
    var toggleButton = document.createElement('button');
    toggleButton.innerText = '0';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.left = '10px';
    toggleButton.style.zIndex = '9999'; // 确保按钮在最顶层
    document.body.appendChild(toggleButton);
    // 开关状态
    var autoReadEnabled = false;
    function clozes(){
        // 获取所有类名为 'cloze-assessment-pending' 的元素
        var elements = document.getElementsByClassName('cloze-assessment-pending');
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.opacity = '0.2';
        }
    }
    // 点击按钮功能
    function clickButton() {
        var button = document.querySelector('button.reader-button-next.btn');
        if (button && autoReadEnabled) {
            button.click();
        }
        var button1 = document.querySelector('button.reader-button-prev.btn');
        if (button1 && autoReadEnabled) {
            button1.click();
        }
    }
    function focused(){
    var closeButton = document.querySelector('button.close.pointer');
        if (closeButton){
        closeButton.click();
        }
    }
    // 设置定时器
    setInterval(clickButton, 30000);
    setInterval(clozes, 500);
    setInterval(focused, 6000);
    // 开关按钮点击事件
    toggleButton.addEventListener('click', function() {
        autoReadEnabled = !autoReadEnabled;
        toggleButton.innerText = autoReadEnabled ? '1' : '0';
    });

})();
