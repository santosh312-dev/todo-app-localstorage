# ✅ Todo App with LocalStorage (JavaScript)

A simple and efficient **Todo App** built using **HTML, CSS, and JavaScript**.  
This version focuses on **persistent task storage using LocalStorage**, so your tasks remain saved even after refreshing the browser.

---

## 🚀 Features

- Add new tasks easily
- Mark tasks as completed
- Delete tasks
- Data saved in browser using LocalStorage
- Tasks persist after page reload
- Clean and responsive UI
- Beginner-friendly JavaScript project

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- LocalStorage API

---

## 📁 Project Structure

```

todo-app-localstorage/
│── index.html
│── style.css
│── script.js
│── images/
│   ├── screenshot1.png
│   ├── screenshot2.png
│── README.md

````id="localstructure01"

---

## 🖼️ Screenshots

### Todo App Interface
![Todo App](images/screenshot1.png)

### Task Completed View
![Completed Tasks](images/screenshot2.png)

---

## ▶️ Live Project / GitHub

🔗 Repository: https://github.com/santosh312-dev/todo-app-localstorage

---

## 💡 How It Works

- User enters a task
- Task is stored in an array
- Array is saved to `localStorage`
- On page load, tasks are fetched from storage
- UI updates dynamically based on stored data

Example logic:

```javascript id="localstorage01"
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function addTask(task) {
    todos.push({
        text: task,
        completed: false
    });

    localStorage.setItem("todos", JSON.stringify(todos));
    renderTasks();
}

function deleteTask(index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTasks();
}

function toggleTask(index) {
    todos[index].completed = !todos[index].completed;
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTasks();
}
```

---

## 🎯 Future Improvements

- Edit task feature
- Due date reminder
- Task filtering (All / Completed / Pending)
- Drag and drop sorting
- Dark mode support

---

## 👨‍💻 Author

Built with ❤️ using HTML, CSS, and JavaScript.

GitHub: https://github.com/santosh312-dev

---

## 📜 License

This project is open-source and free to use.
