const navbar = document.getElementById("navbar");
const section_header = document.getElementsByClassName("section-header");

for (let i = 0; i < section_header.length; i++) {

    //Add IDs to the headers.
    section_header[i].id = "header_" + i;

    //Add headers to the menu.
    let a_elementListMenu = document.createElement("a")
    a_elementListMenu.textContent = section_header[i].textContent;
    a_elementListMenu.href = "#" + section_header[i].id;
    a_elementListMenu.className = "element_menu";
    
    navbar.appendChild(a_elementListMenu);
}

//Arrow "Todos mis proyectos".
var state_arrow = false;
var javascript_buttons_childs = document.getElementById("all_javascript_buttons").children;

document.getElementById("arrow").addEventListener("click", function() {
    if (state_arrow == false) {

        for (let i = 0; i < javascript_buttons_childs.length; i++) {
            javascript_buttons_childs[i].style.opacity = "01";
        }

        document.getElementById("arrow").style.rotate = "90deg";
       
        state_arrow = true;
    }
    
    else if (state_arrow == true) {
        for (let i = 0; i < javascript_buttons_childs.length; i++) {
            javascript_buttons_childs[i].style.opacity = "0";
        }

        document.getElementById("arrow").style.rotate = "0deg";

        state_arrow = false;
    }
    
    
})

function redirect (route) {
    window.location = route;
}