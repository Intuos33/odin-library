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

    for(i = 0; i <= myBooks.length; i++){
        console.log(myBooks[i].title);
    }
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