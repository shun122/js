//htmlから取得
const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
//ローカルストレージに保存したデータを取得
const todos = JSON.parse(localStorage.getItem("todos"));
//取得したデータが空でなければ add関数を走らせる
if (todos){
    todos.forEach(todo => {
        add(todo);
    })
}
//formに入力されてenterが押されたら add関数を走らせる
form.addEventListener("submit", function (event) {
    event.preventDefault();
    add();
});
//データを受け取ると描画
function add(todo) {
    let todotext = input.value;;
    if (todo){
        todotext = todo.text;
    }

    if(todotext){
        const li = document.createElement("li");
        li.innerText = todotext;
        li.classList.add("list-group-item");

        if (todo && todo.completed){
            li.classList.add("text-decoration-line-through")
        }

        li.addEventListener("contextmenu", function(event){
            event.preventDefault();
            li.remove();
            saveData();
        })

        li.addEventListener("click", function(){
            li.classList.toggle("text-decoration-line-through");
            saveData();
        })

        ul.appendChild(li);
        input.value = "";
        saveData();
    }
}

function saveData(){
    const lists = document.querySelectorAll("li");
    let todos = [];

    lists.forEach(list => {
        let todo = {
            text: list.innerText,
            completed: list.classList.contains("text-decoration-line-through")
        };
        todos.push(todo);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}