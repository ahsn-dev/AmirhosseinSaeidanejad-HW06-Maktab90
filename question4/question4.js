const makeObject = () => {
  let top = prompt("Please Enter Top:");
  let left = prompt("Please Enter Left:");
  let html = prompt("Please Enter Html:");
  let className = prompt("Please Enter ClassName:");
  html != ""
    ? showNotification({ top, left, html, className })
    : alert("not valid html");
};

const showNotification = (obj) => {
  const notificationBody = document.createElement("div");
  obj.className != "" ? notificationBody.classList.add(obj.className) : null;
  const notificationMessage = document.createTextNode(obj.html);
  notificationBody.appendChild(notificationMessage);
  const mainBody = document.getElementById("main");
  mainBody.appendChild(notificationBody);
  notificationBody.style.position = "absolute";
  notificationBody.style.left = obj.left + "px";
  notificationBody.style.top = obj.top + "px";
  notificationBody.style.border = "2px solid red";
  notificationBody.style.padding = "20px";
};

makeObject();
