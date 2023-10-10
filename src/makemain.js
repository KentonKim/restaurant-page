const makeMain = (parentDiv) => {
    const main = document.createElement('div')
    main.id = 'main-div'
    const showSidebarButton = document.createElement('button')
    showSidebarButton.textContent = 'Max' 
    showSidebarButton.id = 'show-sidebar-button'

    main.className = 'ml-96'
    showSidebarButton.className = 'w-20 h-20 hidden'

    main.appendChild(showSidebarButton)
    parentDiv.appendChild(main)
}
export default makeMain