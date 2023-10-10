const makeMain = (parentDiv) => {
  const main = document.createElement("div");
  main.id = "main-div";
  const showSidebarButton = document.createElement("button");
  showSidebarButton.textContent = "Max";
  showSidebarButton.id = "show-sidebar-button";

  main.className = "ml-96 h-full";
  showSidebarButton.className =
    "w-20 h-20 hidden opacity-0 transition-opacity ease-in";

  main.appendChild(showSidebarButton);
  parentDiv.appendChild(main);
};
export default makeMain;
