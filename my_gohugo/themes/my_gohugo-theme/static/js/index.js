window.onload = function () {
    let main_route = (window.location.pathname.split("/")[1])
    if (main_route === "") {
        main_route = "home"
    }
    else {
        main_route = main_route[0].toUpperCase() + main_route.slice(1);
    }
    if (main_route === "Conseil-municipal") {
        main_route = "Conseil-municipals";
    }
    else if (main_route === "Upcoming-events" ||
             main_route === "Archived-events") {
            main_route = "Events";
    }
    const button = document.getElementById(main_route);
    button.className += " active";
    if (main_route !== 'home') {
        let background = document.getElementById("background");
        background.style.backgroundImage = "url('/img/bordeaux9.jpg')";
        //background.style.backgroundSize = "cover";
        background.style.backgroundSize='100% 100%';
        background.style.height='-1%';
        if (main_route === 'Events')
            gestEventRoute();
    }
}

function displayAll() {
    if (window.location.pathname === '/events/') {
        window.location.href='/events/#All';
        window.location.reload();
    }
    else {
        window.location.href='/events/#All';
    }
}

function displayArchived() {
    if (window.location.pathname === '/events/') {
        window.location.href='/events/#Archived';
        window.location.reload();
    }
    else {
        window.location.href='/events/#Archived';
    }
}

function displayUpcoming() {
    if (window.location.pathname === '/events/') {
        window.location.href='/events/#Upcoming';
        window.location.reload();
    }
    else {
        window.location.href='/events/#Upcoming';
    }
}

function gestEventRoute(){
    let location = (window.location.pathname.split("/")[1]);
    if (location === "upcoming-events") {
        document.getElementById("upcoming-button").className += " active";
        document.getElementById("all-button").className = "";
        document.getElementById("archived-button").className = "";
    }
    else if (location === "archived-events") {
        document.getElementById("archived-button").className += " active";
        document.getElementById("all-button").className = "";
        document.getElementById("upcoming-button").className = "";
    }
    else {
        document.getElementById("all-button").className += " active";
        document.getElementById("upcoming-button").className = "";
        document.getElementById("archived-button").className = "";
    }
}

function eventSearch() {
    const input = document.getElementById("event-search");
    const changedinput = input.value.toUpperCase();
    const data = document.getElementById("search-ul");
    let list = data.getElementsByTagName("li");
    let link = 0;
    let value;
    let nb_result = 0;
    let i = 0;
    for (i = 0; i < list.length; i++) {
        link = list[i].getElementsByTagName("a")[0];
        value = link.textContent;
        if (value.toUpperCase().indexOf(changedinput) > -1) {
            list[i].style.display = '';
            nb_result++;
        }
        else {
            list[i].style.display = 'none';
        }
    }
    if (nb_result > 0 && nb_result !== i)
        data.style.display = '';
    else
        data.style.display = 'none';
}

function copyClipBoard(elementId) {
  let aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  document.getElementById("phone-alert").style.display='block';
}