import com.atlassian.jira.component.ComponentAccessor
def groupManager = ComponentAccessor.getGroupManager()

if (groupManager.isUserInGroup(issue.reporter, 'jira-viewers')) {
    return !!(issue.issueType.name == "Story")
}
else {
    return true
}
