const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSidebar(){
    sidebar.classList.toggle("close");
    toggleBtn.classList.toggle("rotate");
    closeAllSubMenus();
}

function toggleSubMenu(button){
    if(!button.nextElementSibling.classList.contains("show")){
        closeAllSubMenus();
    }
    button.nextElementSibling.classList.toggle("show");
    button.classList.toggle("rotate");

    if(sidebar.classList.contains("close")){
        sidebar.classList.toggle("close");
        toggleBtn.classList.toggle("rotate")
    }
};

function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName("show")).forEach(ul =>{
        ul.classList.remove("show");
        ul.previousElementSibling.classList.remove("rotate");
    })
};

const toggle = document.getElementById("toggle");

// Load saved theme
if (localStorage.getItem("theme") === "active") {
  document.body.classList.add("theme");
  toggle.checked = true;
}

const enableTheme = () => {
  document.body.classList.add("theme");
  localStorage.setItem("theme", "active");
};

const disableTheme = () => {
  document.body.classList.remove("theme");
  localStorage.removeItem("theme");
};

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    enableTheme();
  } else {
    disableTheme();
  }
});
