
// log函数
var log = function() {
    console.log.apply(console, arguments)
}

var todoLists = []

var bindEventAdd = function() {
    var addButton = document.querySelector('#id-button-addtodo')
    addButton.addEventListener('click', function (){
        var todoInput = document.querySelector('#id-input-todo')
        var task = todoInput.value
        var todo = {
            'task': task,
            'time': currentTime(),
            'done': 0,
        }
        todoLists.push(todo)
        saveTodos()
        // 添加到 container 中
        insertTodo(todo)
    })
}

// 插入添加的事件
var insertTodo = function (todo) {
    var todoContainer = document.querySelector('#id-div-container')
    var t = templateTodo(todo)
    todoContainer.insertAdjacentHTML('beforeend', t);
}

// 添加事件列表
var templateTodo = function(todo) {
    if (todo.done == 0) {
        var t = `
            <div class='todo-cell'>
                <button class='todo-done '>完成</button>
                <button class='todo-delete'>删除</button>
                <button class='todo-edit'>编辑</button>
                <span contenteditable='false' class='todo-mission' >${todo.task}</span>
                <span class='todo-time'>  ${todo.time}</span>
            </div>
        `
        return t
    }else {
        var t = `
            <div class='todo-cell todo-content-line'>
                <button class='todo-done '>完成</button>
                <button class='todo-delete'>删除</button>
                <button class='todo-edit'>编辑</button>
                <span contenteditable='false' class='todo-mission'>${todo.task}</span>
                <span class='todo-time'> ${todo.time}</span>
            </div>
        `
        return t
    }
}

// 回车事件保存
var bindEventEnter = function () {
    var todoContainer = document.querySelector('#id-div-container')
    todoContainer.addEventListener('keydown', function (event) {
        var target = event.target
        // log('container-keydown： ', event, target)
        if (event.key ==='Enter') {
            log('按了回车')
            event.preventDefault()
            target.blur()
            var todoDiv = target.parentElement
            var index = indexOfElement(todoDiv)
            todoLists[index].task = target.innerHTML
            saveTodos()
            var todoMission = todoDiv.querySelector('.todo-mission')
            todoMission.setAttribute('contenteditable', false)
        }
    })
}

// 点击事件
var bindEventButton = function() {
    var todoContainer = document.querySelector('#id-div-container')
    todoContainer.addEventListener('click', function (event) {
        var target = event.target
        if (target.classList.contains('todo-done')) {
            log('target.classList: ', target.classList)

            var todoDiv = target.parentElement
            var index = indexOfElement(todoDiv)
            todoLists[index].done = toggleClass(todoDiv, 'todo-content-line')
            saveTodos()
        } else if (target.classList.contains('todo-delete')) {
            log('target.classList: ', target.classList)

            var todoDiv = target.parentElement
            var index = indexOfElement(todoDiv)
            todoDiv.remove()
            todoLists.splice(index, 1)
            saveTodos()
        } else if (target.classList.contains('todo-edit')) {
            var todoDiv = target.parentElement
            var todoMission = todoDiv.querySelector('.todo-mission')
            todoMission.setAttribute('contenteditable', true)
            todoMission.focus()
        }
    })
}

// 失去焦点事件保存
var bindEventBlur = function () {
    var todoContainer = document.querySelector('#id-div-container')
    todoContainer.addEventListener('blur', function (event) {
        var target = event.target
        log('target: ', target)
        log('target.classList: ', target.classList)
        if (target.classList.contains('todo-mission')) {
            target.setAttribute('contenteditable', 'false')
            var index = indexOfElement(target.parentElement)
            todoLists[index].task = target.innerHTML
            saveTodos()
            log(index)
        }
    }, true)
}

var bindEvents = function () {
    bindEventAdd()
    bindEventEnter()
    bindEventButton()
    bindEventBlur()

}


// 返回自己在父元素中的下标
var indexOfElement = function (element) {
    var parent = element.parentElement
    for (var i = 0; i < parent.children.length; i++) {
        var e = parent.children[i]
        if (e === element) {
            return i
        }
    }
}

// 存储todo
var saveTodos = function () {
    var s = JSON.stringify(todoLists)
    localStorage.todoLists = s
}

// 读取todo
var loadTodos = function () {
    var s = localStorage.todoLists
    return JSON.parse(s)
}

// 添加和删除指定元素的 class
var toggleClass = function(element, className) {
    var stadus = 0
    if (element.classList.contains(className)) {
        element.classList.remove(className)
        return stadus
    } else {
        element.classList.add(className)
        stadus = 1
        return stadus
    }
}

// 时间函数
var currentTime = function() {
    var d = new Date()
    var month = d.getMonth() + 1
    var date = d.getDate()
    var hours = d.getHours()
    var minutes = d.getMinutes()
    var seconds = d.getSeconds()
    var timeString = `${month}月${date}日--${hours}:${minutes}`
    return timeString
}


var initTodos = function () {
    todoLists = loadTodos()
    for (var i = 0; i < todoLists.length; i++) {
        var todo = todoLists[i]
        insertTodo(todo)
        }
}

var __main = function () {
    // 绑定事件
    bindEvents()

    initTodos()
}

__main()
