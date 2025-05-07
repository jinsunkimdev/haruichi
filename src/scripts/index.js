const addButton = document.querySelector(".add-button");
const inputWrapper = document.getElementById("inputWrapper");
const todoInput = document.getElementById("todoInput");
const submitButton = document.getElementById("submitTodo");
const todoContainer = document.querySelector(".todo-container");

// + 버튼 클릭 시 입력창 보이기
addButton.addEventListener("click", () => {
  inputWrapper.style.display = "flex";
  todoInput.focus();
});

// 확인 버튼 클릭 시 할 일 추가
submitButton.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text !== "") {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    const id = `todo-${Date.now()}`;
    todoItem.innerHTML = `
        <input type="checkbox" id="${id}">
        <label for="${id}">${text}</label>
      `;

    todoContainer.appendChild(todoItem);
    todoInput.value = "";
    inputWrapper.style.display = "none";
  }
});
