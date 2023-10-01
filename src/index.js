const component = () => {
    const element = document.createElement('div');
    element.innerHTML = "Whats up";
    return element;
};

document.body.appendChild(component());