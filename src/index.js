import './style.css';
import makeSidebar from "./makesidebar.js";


const component = () => {
    const element = document.createElement('div');
    element.innerHTML = "Whats up";
    element.classList.add('bg-red-900');
    element.classList.add('text-white');
    return element;
};

document.body.appendChild(component());


makeSidebar(document.body)