import "./css/style.css";
import sidebarDom from "./sidebarDOM";
import * as mainDom from "./mainDOM";
import SidebarProcessor from "./sidebarProcessor";
import * as sidebarTaskDom from "./sidebarTaskDOM";
import TaskLRUCache from "./TaskLRUCache";
import * as todoText from "./getTodoTitle";
import getMessage from "./chatGPT";

// Initialize Sidebar
const sidebar = sidebarDom(document.body);
const mainDiv = mainDom.initializeMain(document.body);
mainDom.addForm(mainDiv);

const showSidebarButton = document.getElementById("show-sidebar-button");
const hideSidebarButton = document.getElementById("hide-sidebar-button");
const addTaskInputId = 'new-Task-Input';
const addTaskButtonId = 'new-Task-Button';
const addTaskButton = document.getElementById(addTaskButtonId);

const taskListContainer = document.getElementById('task-list-container');
const taskLRUCache = new TaskLRUCache()
const sidebarProcessor = new SidebarProcessor(taskLRUCache, taskListContainer, sidebarTaskDom);

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

addTaskButton.onclick = () => {
  event.preventDefault();
  if (!todoText.isEmptyText(addTaskInputId)) {
    const titleTask = todoText.getText(addTaskInputId);
    getMessage(titleTask);
    sidebarProcessor.add(titleTask, null)
    todoText.clearText(addTaskInputId)
  }
};