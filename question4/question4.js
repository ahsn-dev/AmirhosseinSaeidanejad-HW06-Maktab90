// function showNotification(obj) {
//   const top = prompt("enter your top position: ");
//   const right = prompt("enter your right position: ");
//   const message = prompt("enter your message: ");
//   obj.top = top;
//   obj.right = right;
//   obj.message = message;
// }

// showNotification({
//   top: "10px",
//   right: "10px",
//   message: "Hello World",
// });

function dbox(msg) {
  if (msg != undefined) {
    document.getElementById("boxTxt").innerHTML = msg;
    document.getElementById("boxBack").classList.add("show");
  } else {
    document.getElementById("boxBack").classList.remove("show");
  }
}
