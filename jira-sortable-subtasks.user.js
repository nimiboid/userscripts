// ==UserScript==
// @name       JIRA sortable subtasks
// @namespace  com.nordstrom.sets
// @version    2.1
// @description  Change the order of JIRA sub-tasks via drag and drop.
// @author found on https://greasyfork.org/en/scripts/4861-jira-sub-task-order-editor and extended to update sequence 
// @match      http://*jira*/browse/*
// @copyright  2012
// ==/UserScript==


function getorder(){
	order = [];
	jQuery('#issuetable>tbody').children('tr').each(function(idx, elm) {
		if(elm.id) {
			order.push(elm.id);
		}
	});
	return order;
}

jQuery("#issuetable>tbody").sortable({ 
    start: function() {
		old_order = getorder();
	},
	stop: function(event, ui) {
		new_order = getorder();
        var oldpos, newpos, id, i;
		for(i = 0; i <= new_order.length; i++) {
			id = ui.item[0].id;
			if(id == old_order[i]) oldpos=i;
			if(id == new_order[i]) newpos=i;
		}
        
        for (i = 0; i <= new_order.length; i++) {
            id = new_order[i];
            jQuery('#'+id).children('td.stsequence').html((i+1)+'.');
        }
        
        jQuery.ajax( {url:'/jira/secure/MoveIssueLink.jspa?id='+jQuery('#key-val').attr('rel')+'&currentSubTaskSequence='+oldpos+'&subTaskSequence='+newpos,} );
	}
});
