// ==UserScript==
// @name         AutoLightsail
// @namespace    http://tampermonkey.net/
// @version      2024-11-24
// @description  Read Lightsail books automatically without triggering the anti-bot check!!!
// @author       Au0727
// @match        https://lightsailed.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lightsailed.com
// @grant        none
// @license      GPL
// @downloadURL https://update.greasyfork.org/scripts/493891/AutoLightsail.user.js
// @updateURL https://update.greasyfork.org/scripts/493891/AutoLightsail.meta.js
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

    // 添加一个开关按钮到页面顶部
    var toggleButton1 = document.createElement('button');
    toggleButton1.innerText = '<<0';
    toggleButton1.style.position = 'fixed';
    toggleButton1.style.top = '10px';
    toggleButton1.style.left = '40px';
    toggleButton1.style.zIndex = '9999'; // 确保按钮在最顶层
    document.body.appendChild(toggleButton1);
    // 开关状态
    var pullBackEnabled = false;

    var toggleButton2 = document.createElement('button');
    toggleButton2.innerText = '>>0';
    toggleButton2.style.position = 'fixed';
    toggleButton2.style.top = '10px';
    toggleButton2.style.left = '80px';
    toggleButton2.style.zIndex = '9999'; // 确保按钮在最顶层
    document.body.appendChild(toggleButton2);
    // 开关状态
    var pullForwardEnabled = false;

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

    function pullBack(){
        var button1 = document.querySelector('button.reader-button-prev.btn');
        var button2 = document.querySelector('button.reader-button-next.btn');
        if (button1 && pullBackEnabled) {
            button1.click();
        }
        if (!button1 && autoReadEnabled){
            pullBackEnabled = false
            toggleButton1.innerText = pullBackEnabled ? '<<1' : '<<0';
        }
        if (!button2 && autoReadEnabled){
            pullBackEnabled = true
            toggleButton1.innerText = pullBackEnabled ? '<<1' : '<<0';
            pullForwardEnabled = false
            toggleButton2.innerText = pullForwardEnabled ? '>>1' : '>>0';
        }
    }

    function pullForward(){
        var button2 = document.querySelector('button.reader-button-next.btn');
        if (button2 && pullForwardEnabled) {
            button2.click();
        }
    }
    // 设置定时器
    setInterval(clickButton, 30000);
    setInterval(clozes, 500);
    setInterval(focused, 6000);
    setInterval(pullBack, 50);
    setInterval(pullForward, 50);
    // 开关按钮点击事件
    toggleButton.addEventListener('click', function() {
        autoReadEnabled = !autoReadEnabled;
        toggleButton.innerText = autoReadEnabled ? '1' : '0';
    });
    toggleButton1.addEventListener('click', function() {
        pullBackEnabled = !pullBackEnabled;
        toggleButton1.innerText = pullBackEnabled ? '<<1' : '<<0';
    });
    toggleButton2.addEventListener('click', function() {
        pullForwardEnabled = !pullForwardEnabled;
        toggleButton2.innerText = pullForwardEnabled ? '>>1' : '>>0';
    });

})();
