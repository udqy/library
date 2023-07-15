const plus = document.getElementById("addbook");
const over = document.getElementById("over");

const main = document.getElementById("container");

function overlay(){
    over.style.display = "flex";
    plus.style.display = "flex";
    
    over.addEventListener("click", () => {
        plus.style.display = "none";
        over.style.display = "none";
    });
}

