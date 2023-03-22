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
    loadProfilePhoto() {
        const profilePhotoImg = document.querySelector(".profile-photo")
        // 여기에서 어디경로로 지정해야하는지 모르겠음 
        const profilePhoto = localStorage.getItem("profilePhoto");
        if (localStorage.getItem("profilePhoto") == null) {

            profilePhotoImg.src = "./image/noimage.jpg";
        } else {
            profilePhotoImg.scr = profilePhoto;
        }
    }
    loadProfileUser() {
        this.asideinfo = JSON.parse(localStorage.getItem("aside-info"))

        if (this.asideinfo == null) {
            this.asideinfo = {};
            return;
        }
        Object.keys(this.asideinfo).forEach(key => {
            const profileInput = document.querySelectorAll(".info-list");
            profileInput.forEach(input => {
                if (input.id == key) {
                    input.value = this.userprofile[key];
                }
            })
        });
        if (typeof this.userprofile.introduce == "undefined") {
            return;
        }
        const infoList = document.querySelector(".info-list");
        infoList.value = this.asideinfo.introduce;


    }
}
class fileService {
    static #instance = null;
    static getInstnace() {
        if (this.#instance == null) {
            this.#instance = new fileService();

        }
        return this.#instance;
    }
    photoChange(){
        const photoform = document.querySelector(".photo-form");
        const formData = new FormData(photoform);
        const fileValue = formData.get("file");
        let changFlag = true;

        if(fileValue.size == 0){
            return;
        }
        this.previewShow(fileValue);

    }
    previewShow(fileValue){
        const readerFile = new ReaderFile();

        readerFile.readAsDataURL(fileValue);

        readerFile.onload = (e) => {
            const profilePhotoImg = document.querySelector(".profile-photo");
            profilePhotoImg.src = e.target.result;
            localStorage.setItem("profilePhoto", profilePhotoImg.src);
        }
    }
}
