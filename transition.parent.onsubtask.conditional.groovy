// Using JMWE add-on
// Add Post function to transition parent issue
// Story workflow: Open <--> In Progress <--> Testing <--> Done
// Subtask workflow: Open <--> In Progress <--> Done
// Subtask-types: Development, Testing

// Transition parent to status Testing as soon as all Development tasks are finished

Collection subTasks = parentIssueObject.getSubTaskObjects()

def condition = true

subTasks.each{subtask -> 
  if (subtask.issueTypeObject.name == "Development") {
    if (subtask.statusObject.name != "Done") {
      condition = false
    }
  }
}

return condition
