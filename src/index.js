import "./style.css";
import makeSidebar from "./makesidebar";
import makeMain from "./makemain";
import TodoTask from "./TodoTask";
import DoublyLinkedList from "./DoublyLinkedList";
import Node from "./ListNode";

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

const node = new Node('value in tree node')
const treenode = new DoublyLinkedList(node)
const todo = new TodoTask('go to gym', treenode)
setTimeout(() => {
    const todo2 = new TodoTask('eat a pig', treenode)
    console.log(todo2.date.getTime())
}, 10000);
console.log(todo.date.getTime())