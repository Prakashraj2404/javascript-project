var a = true;
var b = 1;

function cross() {
    a = !a;
    if (a == true) {
        document.getElementById("cross").innerHTML = "<i class='fa-solid fa-magnifying-glass'></i>";
        document.getElementById("search").style = "opacity:0; transform:translateY(30px); visibility:hidden";
    }
    else {
        document.getElementById("cross").innerHTML = "<i class='fa-solid fa-xmark'></i>";
        document.getElementById("search").style = "opacity:1; transform:translateY(-5px); visibility:visible ";
    }
};

function menu() {
    a = !a;
    if (a == true) {
        document.getElementById("menu").innerHTML = "<i class='fa-solid fa-bars-staggered'></i>";
        document.getElementById("navigation").style = ""
    }
    else {
        document.getElementById("menu").innerHTML = "<i class='fa-solid fa-xmark'></i>";
        document.getElementById("navigation").style = "left:5px; transition:all .5s;"
    }
}

const homeBack = document.getElementById("home-background");

// for (i=b; )

setInterval(function() {homeBack.style = "background-image: url(./accests/round-chair.webp); background-position:250px 200px; background-repeat: no-repeat; transition: all 0.5s;"}, 3000);  