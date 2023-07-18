const plus = document.getElementById("addbook");
const over = document.getElementById("over");
const main = document.getElementById("shelf");

function closePopup(){
    plus.style.display = "none";
    over.style.display = "none";
}

function openPopup(){
    over.style.display = "flex";
    plus.style.display = "flex";
}

// called on clicking add book

function overlay(){
    openPopup();

    over.addEventListener("click", () => {
        closePopup();
    });
}

// main code, adds books to array objects

let myLibrary = [];

function book(name, title, pages, status) {
    this.name = name;
    this.title = title;
    this.pages = pages;
    this.status = status;
}

// dom manipulation

function addEntry(){
    //creates necessary html css and appends element to the shelf
    closePopup();

    const aname = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const bookCard=document.createElement("div");
    bookCard.classList.add("book");

    const title=document.createElement("h1");
    const author1=document.createElement("h1");
    const pages1=document.createElement("h1");
    const checkStat=document.createElement("input");
    const remove=document.createElement("button");

    remove.innerText="remove";
    
    checkStat.type = "checkbox";
    checkStat.id = "check-js"
    checkStat.classList.add("check");
    checkStat.checked=read;

    const checkDiv = document.createElement("div");
    checkDiv.classList.add("checkflex");

    const label=document.createElement("label");
    label.for = "check-js";
    label.innerText = "finished?";
    label.style.fontWeight = "1000";
    label.classList.add("done");

    title.innerText = "\"" + aname + "\"";
    author1.innerText = author;
    pages1.innerText = pages + " pages";
    remove.classList.add("button-style");

    main.appendChild(bookCard);
    bookCard.appendChild(title);
    bookCard.appendChild(author1);
    bookCard.appendChild(pages1);
    bookCard.appendChild(checkDiv);
    checkDiv.appendChild(checkStat);
    checkDiv.appendChild(label);
    bookCard.appendChild(remove);

    //adds to array

    const abc = new book(aname,author,pages,read);
    myLibrary.push(abc);
    const abcIndex = myLibrary.indexOf(abc);

    //changes background if book is finished
    if(read==true){
        bookCard.style.backgroundColor = "#FAD2E1"; 
    }

    //removes element when remove is clicked
    remove.addEventListener("click",()=>{
        main.removeChild(bookCard);
        myLibrary.splice(abcIndex,1);
    });
}