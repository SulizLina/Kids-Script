
function toggleDarkTheme() {
  var body = document.body;
  body.classList.toggle("dark-theme");

 
  var icon = document.getElementById("icon");
  if (body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }

 
  var isDarkThemeActive = body.classList.contains("dark-theme");
  localStorage.setItem("isDarkThemeActive", isDarkThemeActive.toString());
}

 
document.addEventListener("DOMContentLoaded", function () {
  var isDarkThemeActive = localStorage.getItem("isDarkThemeActive");
  var body = document.body;
  var icon = document.getElementById("icon");

  if (isDarkThemeActive === "true") {
    body.classList.add("dark-theme");
    icon.src = "images/sun.png";
  } else {
    body.classList.remove("dark-theme");
    icon.src = "images/moon.png";
  }
});

 
var icon = document.getElementById("icon");
icon.onclick = toggleDarkTheme;
