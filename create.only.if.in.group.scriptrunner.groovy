import com.atlassian.jira.component.ComponentAccessor
def groupManager = ComponentAccessor.getGroupManager()
issue.getIssueType() == "Bug" || !groupManager.isUserInGroup(issue.reporter, 'jira-viewers')
