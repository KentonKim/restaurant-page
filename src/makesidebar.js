const makeSidebar = (parentDiv) => {
    const sidebar = document.createElement('div')
    sidebar.classList.add('w-400')
    sidebar.classList.add('h-full')

    const top = document.createElement('div')
    const newTodobutton = document.createElement('button')
    newTodobutton.textContent = "New Todo"
    newTodobutton.classList.add('text-blue')
    const minMaxbutton = document.createElement('button')
    minMaxbutton.textContent = "Expand / Minimize"
    top.appendChild(newTodobutton)
    top.appendChild(minMaxbutton)

    const middle = document.createElement('div')
    // need to make a div for today
    // last 7 days
    // last 30 days
    // title the month after that 

    const bottom = document.createElement('div')
    const profilebutton = document.createElement('button')
    profilebutton.textContent = "Profile"
    bottom.appendChild(profilebutton)

    sidebar.appendChild(top)
    sidebar.appendChild(middle)
    sidebar.appendChild(bottom)
    parentDiv.appendChild(sidebar)
}
export default makeSidebar 