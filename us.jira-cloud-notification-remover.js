// ==UserScript==
// @name         Jira Cloud Backlog success notification remover
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
        var els = document.querySelectorAll('[data-testid="jira-issue-create.modal.create-form.success-flag"]');

        for (var i = 0; i < els.length; i++) {
            els[i].parentElement.remove();
        }

        els = document.querySelectorAll('[data-testid="issue.views.issue-base.foundation.change-issue-type.flag.success"]');

        for (i = 0; i < els.length; i++) {
            els[i].parentElement.remove();
        }

    }, 10000); // ten seconds
})();