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
// 내가 만든부분 
class AsideService {
    static #instance = null;
    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new AsideService();

        }
        return this.#instance;
    }
    loadAside() {
        this.loadAsidePhoto();
        this.loadAsideUser();
    }
    loadAsidePhoto() {
        const profilePhotoImg = document.querySelector(".profile-photo img")
        const profilePhoto = localStorage.getItem("infoPhoto");
        if (profilePhoto == null) {
            profilePhotoImg.src = "./image/noimage.jpg";
        } else {
            profilePhotoImg.src = profilePhoto;
        }
    }
    loadAsideUser() {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        const asideNmae = document.querySelector(".aside-username");
        asideNmae.innerHTML = `
            <h1 class="info-username">${userInfo.name}</h1>
        `;
        const asideInfo = document.querySelector(".aside-userinfo");
        asideInfo.innerHTML = `
            <li><i class="fa-solid fa-phone"></i>${userInfo.phone}</li>
            <li><i class="fa-solid fa-at"></i>${userInfo.email}</li>
            <li><i class="fa-brands fa-instagram"></i>${userInfo.instargram}</li>
        `;
    }
}
