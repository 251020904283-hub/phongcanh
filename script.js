function showInfo(preview){

    console.log("Image Selected");

    let display=document.getElementById("image");

    display.innerHTML=preview.alt;

    display.style.backgroundImage="url('" + preview.src + "')";

    display.style.backgroundSize="cover";

    display.style.backgroundPosition="center";

    display.style.color="white";

}

function resetInfo(){

    console.log("Image Removed");

    let display=document.getElementById("image");

    display.innerHTML="Hover over or focus on an image to learn more.";

    display.style.backgroundImage="none";

    display.style.backgroundColor="white";

    display.style.color="black";

}

function addTabFocus(){

    console.log("Page Loaded");

    let images=document.querySelectorAll(".gallery img");

    for(let i=0;i<images.length;i++){

        images[i].setAttribute("tabindex","0");

    }

}
