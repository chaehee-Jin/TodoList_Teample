class TodoEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new TodoEvent();
        }
        return this.#instance;
    }

    addEventAddTodoClick() {
        const addTodoButton = document.querySelector(".todo-add-button");
        addTodoButton.onclick = () => {
            TodoService.getInstance().addTodo();
            const todoInput = document.querySelector(".todo-input");
            todoInput.value = "";
        }
    }

    addEventAddTodoKeyUp() {
        const todoInput = document.querySelector(".todo-input");
        todoInput.onkeyup = () => {
            if(window.event.keyCode == 13) {
                const addTodoButton = document.querySelector(".todo-add-button");
                addTodoButton.click();
            }
        }
    }
    
    addEventRemoveTodoClick() {
        const removeButtons = document.querySelectorAll(".todoList-buttons .todo-remove-button");
        removeButtons.forEach((removeButton, index) => {
            removeButton.onclick = () => {
                ModalService.getInstance().showRemoveModal(index);
            }
        });
    }

    addEventModifyTodoClick() {
        const modifyButtons = document.querySelectorAll(".todo-modify-button");
        modifyButtons.forEach((modifyButton, index) => {
            modifyButton.onclick = () => {
                ModalService.getInstance().showModifyModal(index);
            }
        });
    }


}

class TodoService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new TodoService();
        }
        return this.#instance;
    }
    
    todoList = null;

    constructor() {
        if(localStorage.getItem("todoList") == null) {
            this.todoList = new Array();
        }else {
            this.todoList = JSON.parse(localStorage.getItem("todoList"));
        }
        this.loadTodoList();
    }

    updateLocalStorage() {
        localStorage.setItem("todoList", JSON.stringify(this.todoList));
        this.loadTodoList();
    }

    addTodo() {
        const todoInput = document.querySelector(".todo-input");

        const todoObj = {
            todoContent: todoInput.value
        }

        this.todoList.push(todoObj);
        this.updateLocalStorage();
    }

    loadTodoList() {
        const todoContentList = document.querySelector(".todo-content-list");
        todoContentList.innerHTML = ``;

        this.todoList.forEach((todoObj, index) => {
            todoContentList.innerHTML += `
                <li>
                    <div class="input-label">
                        <input type="checkbox" id="todoList-check${index}">
                        <label for="todoList-check${index}"></label>
                        <span class="todoList-content">${todoObj.todoContent}</span>
                    </div>
                    <div class="todoList-buttons">
                        <button class="todo-modify-button"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button class="todo-remove-button"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </li>
            `;
        });

        TodoEvent.getInstance().addEventRemoveTodoClick();
        TodoEvent.getInstance().addEventModifyTodoClick();
    }
}