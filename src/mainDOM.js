export const initializeMain = (parentDiv) => {
  const main = document.createElement("div");
  main.id = "main-div";
  main.className = "p-3 ml-96 h-full flex justify-center items-center transition-all";
  const showSidebarButton = document.createElement("button")
  showSidebarButton.textContent = "Max";
  showSidebarButton.id = "show-sidebar-button";
  showSidebarButton.className = "absolute top-3 left-3 w-20 h-20 hidden opacity-0 transition-opacity ease-in";

  main.appendChild(showSidebarButton);
  parentDiv.appendChild(main);
  return main;
};

export const addForm = (parentDiv) => {
  const newTaskForm = document.createElement('form')
  newTaskForm.id = "new-Task-Form"
  newTaskForm.className = 'flex w-200 rounded-2xl' 
  const newTaskInput = document.createElement('input')
  newTaskInput.placeholder = "Type task here..."
  newTaskInput.id = "new-Task-Input"
  newTaskInput.name = "newTaskInput"
  newTaskInput.className = 'pl-5 flex-1'
  newTaskInput.setAttribute( "autocomplete", "off" ); 
  const newTaskButton = document.createElement('button')
  newTaskButton.textContent = 'Submit'
  newTaskButton.id = 'new-Task-Button'
  newTaskButton.className = 'w-20 h-20'

  newTaskForm.appendChild(newTaskInput)
  newTaskForm.appendChild(newTaskButton)
  parentDiv.appendChild(newTaskForm)
  return newTaskForm;
};

