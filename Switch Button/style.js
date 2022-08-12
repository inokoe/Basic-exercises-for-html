function Switch(type) {
    var container = document.querySelector('.container');
    var circle = document.querySelector('.circle');
    var text = document.querySelector('.text');
    if (!type) {
        container.style = "background-color: #ccc;"
        // 使用style的写法
        // circle.style = "left: 40px;background-color: #888;box-shadow: 0 0 10px #888;";
        // text.style = "right: 30px;color: #888;";
        // 添加类的写法，为了使第二个类得到使用，CSS需标记!important
        circle.classList.add("circle-on");
        text.classList.add("text-on");
        text.innerText = "OFF";
    } else {
        container.style = "";
        circle.classList.remove("circle-on");
        text.classList.remove("text-on");
        text.innerText = "ON";
    }
    container.setAttribute("onclick", "Switch(" + !type + ")"); // 修改状态
}