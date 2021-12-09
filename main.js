var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue";
width_of_line = 2;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouseEvent = "mouseDown";
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";

}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUp";

}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.storkeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        console.log("last position of x and y" + last_position_of_x + "," + last_position_of_y);
        console.log("current position of x and y" + current_position_of_mouse_x + "," + lcurrent_position_of_mouse_y);
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}