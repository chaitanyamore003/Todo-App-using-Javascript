let todoList = [
    {
        item:'buy Milk' ,
        dueDate:'16/09/2025'
    },
    {
        item:'dance' ,
        dueDate:'16/09/2025'
    } ];
displayItems();

function addTodo(){
    let inputElement = document.querySelector('#input');
    let dateElement = document.querySelector('#date');
    let todoitem = inputElement.value;
    let tododate = dateElement.value;
    todoList.push({item: todoitem, dueDate: tododate});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newhtml = '';
    for(let i = 0; i < todoList.length; i++){
        let {item, dueDate} = todoList[i];
        newhtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button onclick="todoList.splice(${i},1); displayItems()" class = "delete-btn">Delete</button>
            `;
    }
    containerElement.innerHTML = newhtml;
}