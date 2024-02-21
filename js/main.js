document.getElementById("defaultOpen").click();

function openTab(event, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += " active";
}


const mobile_menu = document.getElementById('menu-icon');
const mobile_nav_bar = document.querySelector('.mobile-nav-bar');

mobile_menu.addEventListener('click', () => {
    mobile_nav_bar.classList.toggle('active');
});