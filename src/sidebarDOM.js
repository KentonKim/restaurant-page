const makeSidebar = (parentDiv) => {
  const sidebar = document.createElement("div");
  sidebar.id = "sidebar-div";
  sidebar.className = "fixed top-0 left-0 z-10 overflow-x-hidden transition-width ease h-full flex flex-col";

  const top = document.createElement("div");
  top.className = "p-3 flex-none flex gap-3";

  const middle = document.createElement("div");
  middle.className = "flex-1 py-5 pl-2 pr-2 overflow-auto" ;
  middle.id = "task-list-container";

  const bottom = document.createElement("div");
  bottom.className = "flex-none flex p-3";

  const newTodobutton = document.createElement("button");
  newTodobutton.textContent = "New Todo";
  newTodobutton.className = "flex-1 text-red h-20 w-64";

  const hideSidebarButton = document.createElement("button");
  hideSidebarButton.textContent = "Min";
  hideSidebarButton.id = "hide-sidebar-button";
  hideSidebarButton.className = "w-20 h-20";

  const profilebutton = document.createElement("button");
  profilebutton.textContent = "Profile";
  profilebutton.className = "flex-1 h-20";

  // need to make a div for today
  // last 7 days
  // last 30 days
  // title the month after that

  top.appendChild(newTodobutton);
  top.appendChild(hideSidebarButton);

  bottom.appendChild(profilebutton);

  sidebar.appendChild(top);
  sidebar.appendChild(middle);
  sidebar.appendChild(bottom);

  parentDiv.appendChild(sidebar);
};
export default makeSidebar;