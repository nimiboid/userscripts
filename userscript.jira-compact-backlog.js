// ==UserScript==
// @name         Jira Backlog compact view
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Nikola Ivanov githhub.com/nimiboid
// @match        https://<jira>/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atlassian.net
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function() {
        var els = document.getElementsByClassName("ghx-plan-extra-fields")

        while(els.length > 0) {
            els[0].parentNode.removeChild(els[0]);
        }
    }, 1000); // two seconds
})();
