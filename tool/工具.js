// log函数
var log = function() {
    console.log.apply(console, arguments)
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


// 把 html 作为子元素插入到 element 指定位置，
// location 分别为: 'beforebegin', 'beforeend', 'afterbegin', 'afterend'
var appendHtml = function(element, html, location) {
    var ele = document.querySelector(element)
    ele.insertAdjacentHTML(location, html)
}

//
// 给指定的标签绑定指定的事件和函数
// 特别注意： 此处 callback 指代其他函数时，也无需加括号
var bindEvent = function(element, eventName, callback) {
    var ele = document.querySelector(element)
    ele.addEventListener(eventName, callback)
}


// 在 element 上绑定一个事件委托只会响应拥有 responseClass 类的元素
// 注意此处 responseClass 只能为 class 且不用加 . 号
var bindEventDelegate = function(element, eventName, responseClass, callback) {
    var ele = document.querySelector(element)
    ele.addEventListener(eventName, function () {
        var bool = event.target.classList.contains(responseClass)
        if (bool) {
            callback()
            }
    })
}



// 把 html 作为子元素插入到 selector 选中的所有元素的末尾
var append = function(selector, html, location) {
    var allElement = document.querySelectorAll(selector)
    for (var i = 0; i < allElement.length; i++) {
        allElement[i].insertAdjacentHTML(location, html)
    }
}

// 给 selector 选中的所有元素绑定 eventName 事件;
// 当 responseClass 给出的时候, callback 只会响应拥有 responseClass 类的元素;
// 当 responseClass 没有给的时候, callback 直接响应

var bindAll = function(selector, eventName, callback, responseClass) {
    var allElement = document.querySelectorAll(selector)
    if (responseClass == null) {
        for (var i = 0; i < allElement.length; i++) {
            allElement[i].addEventListener(eventName, callback)
        }
    }else {
        for (var i = 0; i < allElement.length; i++) {
            allElement[i].addEventListener(eventName, function () {
                var x = event.target.classList.contains(responseClass)
                if (x) {
                    callback()
                }else {
                    null
                }
            })
        }
    }
}


// 访问 AJAX ， GET 方法
var ajaxGet = function(url, callback) {
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open('GET', url, true)
    // 注册响应函数
    r.onreadystatechange = function () {
        callback(r.response)
    }
    // 发送请求
    r.send()
}

// eg : ajaxGet('/index', callback)
// 访问 AJAX
var ajax = function(request) {
    var r = new XMLHttpRequest()
    // 判断请求方法
    if (request.method == 'POST') {
        // 确定请求地址
        r.open('POST', request.url, true)
        // 设置发送的数据的格式
        r.setRequestHeader('Content-Type', request.ContentType)
        // 注册响应函数
        r.onreadystatechange = function () {
            request.callback(r.response)
        }
        // 发送请求
        r.send(request.data)
    }else {
        // 确定请求地址
        r.open('GET', request.url, true)
        // 注册响应函数
        r.onreadystatechange = function () {
            console.log('state change', r)
            request.callback(r.response)
        }
        // 发送请求
        r.send()
    }
}
/*
var rsssssssss = {
    method: 'POST',
    url: '/login',
    ContentType: 'application/json',
    data: '{"username":"yangqiliang","password":"a125992105"}',
    callback: function(response) {
        console.log('响应', response)
    }
}

ajax(rsssssssss)
*/
