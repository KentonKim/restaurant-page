const makeSidebar = (parentDiv) => {
    const sidebar = document.createElement('div')

    const top = document.createElement('div')
    const middle = document.createElement('div')
    const bottom = document.createElement('div')

    const newTodobutton = document.createElement('button')
    newTodobutton.textContent = "New Todo"
    const minMaxbutton = document.createElement('button')
    minMaxbutton.textContent = "Expand / Minimize"
    const profilebutton = document.createElement('button')
    profilebutton.textContent = "Profile"

    sidebar.className = 'w-96 h-full flex flex-col'

    top.className = 'flex-none flex'
    middle.className = 'flex-1'
    bottom.className = 'flex-none flex'

    newTodobutton.className = 'flex-1 text-red h-20'
    minMaxbutton.className = 'w-20 h-20'
    profilebutton.className = 'flex-1 h-20'

    // need to make a div for today
    // last 7 days
    // last 30 days
    // title the month after that 

    top.appendChild(newTodobutton)
    top.appendChild(minMaxbutton)

    bottom.appendChild(profilebutton)

    sidebar.appendChild(top)
    sidebar.appendChild(middle)
    sidebar.appendChild(bottom)

    parentDiv.appendChild(sidebar)
}
export default makeSidebar 