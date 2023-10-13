const makeMain = (parentDiv) => {
  const main = document.createElement("div");
  main.id = "main-div";
  main.className = "ml-96 h-full flex justify-center items-center transition-all";
  const newTaskForm = document.createElement('form')
  newTaskForm.id = "new-Task-Form"
  newTaskForm.className = 'flex w-200' 
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
  const showSidebarButton = document.createElement("button")
  showSidebarButton.textContent = "Max";
  showSidebarButton.id = "show-sidebar-button";
  showSidebarButton.className = "absolute top-0 left-0 w-20 h-20 hidden opacity-0 transition-opacity ease-in";

  newTaskForm.appendChild(newTaskInput)
  newTaskForm.appendChild(newTaskButton)
  main.appendChild(showSidebarButton);
  main.appendChild(newTaskForm)
  parentDiv.appendChild(main);
};

export default makeMain;
