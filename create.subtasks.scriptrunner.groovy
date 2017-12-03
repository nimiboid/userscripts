/**
Using Scriptrunner's built'in function to create a subtask
**/

issue.setEstimate(2 * 60 * 60L)
issue.setOriginalEstimate(2 * 60 * 60L)
/** jira works internally only with seconds, so setting 4h won't work **/
issue.setDescription('')
