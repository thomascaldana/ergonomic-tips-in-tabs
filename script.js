function setupTabs () {
    document.querySelectorAll("tabs__button").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`)




            console.log(sideBar)
            console.log(tabsContainer)
            console.log(tabNumber)
            console.log(tabToActivate)
         
          
        } )
    })
}

    document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
});