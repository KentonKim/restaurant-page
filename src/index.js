import "./style.css";
import makeSidebar from "./makesidebar";
import makeMain from "./makemain";
import SidebarProcessor from "./sidebarProcessor";
import * as sidebarDomModule from "./sidebarDomModule";
import TaskLRUCache from "./TaskLRUCache";

makeSidebar(document.body);
makeMain(document.body);

const showSidebarButton = document.getElementById("show-sidebar-button");
const hideSidebarButton = document.getElementById("hide-sidebar-button");
const sidebar = document.getElementById("sidebar-div");
const mainDiv = document.getElementById("main-div");

showSidebarButton.onclick = () => {
  sidebar.classList.add("w-96");
  sidebar.classList.remove("w-0");
  mainDiv.classList.add("ml-96");
  showSidebarButton.classList.add("hidden");
  showSidebarButton.classList.add("opacity-0");
};
hideSidebarButton.onclick = () => {
  sidebar.classList.remove("w-96");
  sidebar.classList.add("w-0");
  mainDiv.classList.remove("ml-96");
  showSidebarButton.classList.remove("hidden");
  setTimeout(() => {
    showSidebarButton.classList.remove("opacity-0");
  }, 100);
};

const taskListContainer = document.getElementById('task-list-container');
const taskLRUCache = new TaskLRUCache()
const sidebarProcessor = new SidebarProcessor(taskLRUCache, taskListContainer, sidebarDomModule);
console.log('hi');
sidebarProcessor.add('title1',1)
sidebarProcessor.add('title2',2)
sidebarProcessor.select('title1',1)
sidebarProcessor.add('title3',3)
sidebarProcessor.remove('title2')
console.log(taskLRUCache.head);
