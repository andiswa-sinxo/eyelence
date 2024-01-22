const delay = 5000;



function showModel(){
    const modelBox = document.getElementById("modelBox")
    modelBox.style.display = "block";
}

function closeModel(){
    const modelBox = document.getElementById("modelBox")
    modelBox.style.display = "none"
}
setTimeout(showModel, delay)