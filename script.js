let myLibrary = [
    { author: "JK Rowling", title: "Harry Potta", pages: 1170, read: "Yes" },
    { author: "JK Rowling", title: "Harry Potta the Second One", pages: 5649, read: "No" },
];

function Book(author,title,pages,read) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let author = prompt("What is the author's name?");
    let title = prompt("What is the book's title?");
    let pages = prompt("How many pages are in the book?");
    let read = prompt("Have you read the book?");

    const book = new Book(author,title,pages,read);
    myLibrary.push(book);
    displayLibrary();
}

function displayLibrary() {
    let table = document.querySelector("table");
    table.innerHTML = "";
    let data = Object.keys(myLibrary[0]);
    generateTable(table, myLibrary);
    generateTableHead(table,data);
}


function generateTableHead(table,data) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {

        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    let index = 0;
    for (let element of data) {
      let row = table.insertRow();

      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }

        var readBtn = document.createElement("input");
        readBtn.setAttribute("type", "button");
        readBtn.setAttribute("id", index);
        readBtn.setAttribute("value", "Mark as Read");
        readBtn.addEventListener("click", markAsRead);
        row.insertCell().appendChild(readBtn);

        var removeBtn = document.createElement("input");
        removeBtn.setAttribute("type", "button");
        removeBtn.setAttribute("id", index);
        removeBtn.setAttribute("value", "Remove from Library");
        removeBtn.addEventListener("click", removeFromLibrary);
        row.insertCell().appendChild(removeBtn);

        index++;
    }
}

function markAsRead(){
    myLibrary[this.getAttribute("id")].read = "Yeeeee";
    displayLibrary();
}

function removeFromLibrary(){
    myLibrary.splice(this.getAttribute("id"), 1);
    displayLibrary();
}