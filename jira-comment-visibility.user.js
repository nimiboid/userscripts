// ==UserScript==
// @name         JIRA default comment visibility
// @namespace    web.web
// @version      0.1
// @description  Sets default visibility of comments to Developers
// @author       found on the web and modified
// @match        http://*jira*/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var defaultRoleName = "role:10001"; // this role has to be enabled for the project
var customRoleSelected = false;
 
function changeCommentLevel() {
    if (customRoleSelected) return;
 
    var commentLevelSelect = jQuery('.security-level select#commentLevel option[value=\'' + defaultRoleName + '\']');
    if (commentLevelSelect) { 
        var labelText = commentLevelSelect.first().text(); 
        jQuery("select#commentLevel").val(defaultRoleName); 
        jQuery("#commentLevel-multi-select a.drop span.icon").removeClass("icon-unlocked").addClass("icon-locked"); 
        var htmlEscapedLabel = AJS.$("<div/>").text(labelText).html(); 
        jQuery(".security-level span.current-level").html(AJS.format(AJS.params.securityLevelViewableRestrictedTo, htmlEscapedLabel)); 
    }
}
 
jQuery('#comment').live('focus', changeCommentLevel);
jQuery('#commentLevel-suggestions').live('click', function() { 
    customRoleSelected = true; 
});
