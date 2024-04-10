var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var submitBtn = document.getElementById('submitBtn');
var myBooks = [];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
submitBtn.addEventListener('click', getData);

function Book(title, author, pages, language, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.language = language;
    this.read = read;
}

function displayBook(myBooks){
    let i;
    var newBook = myBooks[myBooks.length - 1];
    
    var flexContainer = document.querySelector('.flex-container');
    var bookCard = document.createElement('div');
    var titles = document.createElement('p');
    var authors = document.createElement('p');
    var numPages = document.createElement('p');
    var languages = document.createElement('p');

    bookCard.classList.add('book-card');
    titles.classList.add('titles');
    authors.classList.add('authors');
    numPages.classList.add('num-pages');

    titles.innerHTML = 'Title: ' + newBook.title;
    authors.innerHTML = 'Author: ' +  newBook.author;
    numPages.innerHTML = 'Pages: ' + newBook.pages;
    languages.innerHTML = 'Language: ' + newBook.language;

    if(newBook.read == 'yes'){
        bookCard.classList.add('read');
    } else {
        bookCard.classList.add('unread');
    }

    bookCard.appendChild(titles);
    bookCard.appendChild(authors);
    bookCard.appendChild(numPages);
    bookCard.appendChild(languages);
    flexContainer.appendChild(bookCard);
    
}

function getData(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let language = document.getElementById('language').value;
    let read = document.getElementById('read').value;

    const book = new Book(title, author, pages, language, read);

    myBooks.push(book);
    
    displayBook(myBooks);
}









function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}