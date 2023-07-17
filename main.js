const plus = document.getElementById("addbook");
const over = document.getElementById("over");

function overlay(){
    over.style.display = "flex";
    plus.style.display = "flex";
    
    over.addEventListener("click", () => {
        plus.style.display = "none";
        over.style.display = "none";
    });
}

// main code

const main = document.getElementById("shelf");

let myLibrary = [];

function book(name, title, pages, status) {
    this.name = name;
    this.title = title;
    this.pages = pages;
    this.status = status;
}

function deleteElement() {
    console.log("delete elements");
}

//does things


function addEntry(){
    //creates html css necessary

    const aname = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;


    const e=document.createElement("div");
    e.classList.add("book");

    const title=document.createElement("h1");
    const author1=document.createElement("h1");
    const pages1=document.createElement("h1");
    const checkStat=document.createElement("input");
    const remove=document.createElement("button");

    remove.innerText="remove";
    
    checkStat.type = "checkbox";
    checkStat.id = "check-js"

    const checkDiv = document.createElement("div");
    checkDiv.classList.add("checkflex");

    const label=document.createElement("label");
    label.for = "check-js";
    label.innerText = "finished?";
    label.classList.add("done");

    title.innerHTML = aname;
    author1.innerHTML = author;
    pages1.innerHTML = pages;
    remove.classList.add("button-style");

    main.appendChild(e);
    e.appendChild(title);
    e.appendChild(author1);
    e.appendChild(pages1);
    e.appendChild(checkDiv);
    checkDiv.appendChild(checkStat);
    checkDiv.appendChild(label);
    e.appendChild(remove);


    remove.addEventListener("click",()=>{
        main.removeChild(e);
    });
}

function createEntry() {
    over.style.display = "none";
    plus.style.display = "none";

    addEntry();

/* 
    const newbook = document.createElement('div');
    newbook.style.width = "200px";
    newbook.style.height = "200px";
    newbook.style.backgroundColor = "pink";
    newbook.style.display = "block";
*/    
    
}

