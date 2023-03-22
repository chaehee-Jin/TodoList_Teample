class AsideEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new AsideEvent();
        }
        return this.#instance;
    }

    addEventShowAsideButton() {
        const asideButton = document.querySelector(".aside-button");
        asideButton.onclick = () => {
            const menuAside = document.querySelector(".menu-aside");
            if(menuAside.classList.contains("hidden-menu")) {
                menuAside.classList.remove("hidden-menu");
            }
        }
        const backButton = document.querySelector(".back-button");
        backButton.onclick = () => {
            const menuAside = document.querySelector(".menu-aside");
            if(!menuAside.classList.contains("hidden-menu")) {
                menuAside.classList.add("hidden-menu");
            }
        }
    }

    addEventMainChange() {
        const menuItems = document.querySelectorAll(".menu-items");
        menuItems.forEach((menuItem, index) => {
            menuItem.onclick = () => {
                const mainContainers = document.querySelectorAll(".main-container");
                const menuAside = document.querySelector(".menu-aside");
                mainContainers.forEach(mainContainer => {
                    mainContainer.classList.add("main-hidden");
                });
                mainContainers[index].classList.remove("main-hidden");
                menuAside.classList.add("hidden-menu");

            }
        })
    }
}