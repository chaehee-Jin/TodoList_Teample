class ModalEvent{
    static #instance = null;
    static getInstance(){
        if(this.#instance == null){
            this.#instance = new ModalEvent();
        }
        return this.#instance;
    }
    addEventCancelClick(){
        const modalCancelButton = document.querySelector(".modal-cancel-button");
        modalCancelButton.onclick = () => {
            ModalService.getInstance().closeModal();

        }


    }
    addEventOkClick(){
        const modalOkButton = document.querySelector(".modal-ok-button");
        modalOkButton.onclick = () => {
            
        }


    }
}