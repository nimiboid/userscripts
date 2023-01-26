// ==UserScript==
// @name         Jira Cloud Backlog wider status
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Nikola Ivanov githhub.com/nimiboid
// @match        https://*.atlassian.net/*/boards/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atlassian.net
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function() {
        //.ghx-backlog-card .ghx-grabber
        var els = document.querySelectorAll("div.ghx-backlog-card div.ghx-grabber");

        for (var i = 0; i < els.length; i++) {
            els[i].style = els[i].style.cssText + "width: 10px; !important";
        }
    }, 1000); // one second
})();