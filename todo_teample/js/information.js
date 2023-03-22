class InformationEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new InformationEvent();
        }
        return this.#instance;
    }

    addEventPhotoChangeClick() {
        const infoPhoto = document.querySelector(".info-photo");
        infoPhoto.onclick = () => {
            const photoFile = document.querySelector(".photo-file");
            photoFile.click();
        }
    }

    addEventPhotoChange() {
        const photoFile = document.querySelector(".photo-file");
        photoFile.onchange = () => {
            FileService.getInstance().changePhoto();
        }
    }

    addEventModifyAboutMeClick() {
        const modifyAboutMeButton = document.querySelector(".m-aboutme");
        modifyAboutMeButton.onclick = () => {
            const saveAboutMeButton = document.querySelector(".s-aboutme");
            saveAboutMeButton.classList.remove("button-hidden");
            modifyAboutMeButton.classList.add("button-hidden");

            const infoInputContainers = document.querySelectorAll(".info-input-container");
            infoInputContainers.forEach(infoInputContainer => {
                infoInputContainer.querySelector(".info-input").disabled = false;

            });
        }
    }
    addEventSaveAboutMeClick() {
        const saveAboutMeButton = document.querySelector(".s-aboutme");
        saveAboutMeButton.onclick = () => {
            const modifyAboutMeButton = document.querySelector(".m-aboutme");
            saveAboutMeButton.classList.remove("button-hidden");
            modifyAboutMeButton.classList.add("button-hidden");

            const infoInputContainers = document.querySelectorAll(".info-input-container");
            const userInfo = InformationService.getInstance().userInfo;

            infoInputContainers.forEach(infoInputContainer => {
                const infoInput = infoInputContainer.querySelector(".info-input");
                userInfo[infoInput.id] = infoInput.value;
                infoInput.disabled = true;

            });
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        }
    }
    addEventModifyIntroduceClick() {
        const modifyIntroduceButton = document.querySelector(".m-introduce");
        modifyIntroduceButton.onclick = () => {

            const saveIntroduceButton = document.querySelector(".s-introduce");
            saveIntroduceButton.classList.remove("button-hidden");
            modifyIntroduceButton.classList.add("button-hidden");

            const introduceInput = document.querySelector(".introduce-input");
            introduceInput.disabled = false;

        }

    }
    addEventSaveIntroduceClick() {
        const saveIntroduceButton = document.querySelector(".s-introduce");
        saveIntroduceButton.onclick = () => {
            const modifyIntrodcueButton = document.querySelector(".m-introduce");
            saveIntroduceButton.classList.remove("button-hidden");
            modifyIntrodcueButton.classList.add("button-hidden");
            const introduceInput = document.querySelector(".introduce-input");
            introduceInput.disabled = true;


            const userInfo = InformationService.getInstance().userInfo;
            userInfo["introduce"] = introduceInput.value;


            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        }
    }
}

class InformationService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new InformationService();
        }
        return this.#instance;
    }

    userInfo = {};

    loadInfo() {
        this.loadInfoPhoto();
        this.loadInfoUser();
    }

    loadInfoPhoto() {
        const infoPhotoImg = document.querySelector(".info-photo img");
        const infoPhoto = localStorage.getItem("infoPhoto");
        if(infoPhoto == null) {
            infoPhotoImg.src = "./image/noimage.jpg";
        }else {
            infoPhotoImg.src = infoPhoto;
        }
    }

    loadInfoUser() {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));

        if(this.userInfo == null) {
            this.userInfo = {};
            return;
        }
        Object.keys(this.userInfo).forEach(key => {
            const infoInput = document.querySelectorAll(".info-input");
            infoInput.forEach(input => {
                if(input.id == key) {
                    input.value = this.userInfo[key];
                }
            })
        });

        if(typeof this.userInfo.introduce == "undefined"){
            return;
        }
        const introduceInput = document.querySelector(".introduce-input");
        introduceInput.value = this.userInfo.introduce;
    }
}

class FileService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new FileService();
        }
        return this.#instance;
    }

    changePhoto() {
        const photoForm = document.querySelector(".photo-form");
        const formData = new FormData(photoForm);
        const fileValue = formData.get("file");

        if(fileValue.size == 0) {
            return;
        }

        this.showPreview(fileValue);
    }

    showPreview(fileValue) {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(fileValue);

        fileReader.onload = (e) => {
            const photoImg = document.querySelector(".info-photo img");
            photoImg.src = e.target.result;
            localStorage.setItem("infoPhoto", photoImg.src);
        }
    }
}
