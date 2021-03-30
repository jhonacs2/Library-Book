const addBook = document.querySelector('#add');
const bookstoreDiv = document.querySelector('.bookstore');
let buttonX = document.querySelectorAll('.close');

let contador = 0;
let myLibrary  = [];


// construc function
function Book(author,title,pages,read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    const authorForm = document.querySelector('#author').value;
    const titleForm = document.querySelector('#title').value;
    const pagesForm = document.querySelector('#pages').value;
    const readNoReadForm = document.querySelector('#readNoRead').value;
    const createObject = new Book(`${authorForm}`,`${titleForm}`,`${pagesForm}`,`${readNoReadForm}`);
    myLibrary.push(createObject);
    
    showBookDom()
    
}

function showBookDom(){
    
    const div = document.createElement('div');
    const img = document.createElement('img')
    const divContainer = document.createElement('div');
    const title = document.createElement('h4');
    const pAuthor = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    const equis = document.createElement('input')
    
    
    for( let i = contador; i<myLibrary.length ; i++){
        
        div.classList.add('card-book');
              
        divContainer.classList.add('container');
        img.src = 'https://images.vexels.com/media/users/3/194604/isolated/preview/96aa09d59cda8a3f112bada160a1d383-icono-plano-de-libro-de-texto-escolar-by-vexels.png';
        img.style = 'width:100%';
        equis.type='button';
        equis.classList.add('close')
       
        equis.value='X';
        bookstoreDiv.appendChild(div);
        div.appendChild(img);
        div.appendChild(divContainer);
        divContainer.appendChild(title);
        title.textContent = myLibrary[i].title;
        div.appendChild(pAuthor);
        pAuthor.textContent = myLibrary[i].author;
        div.appendChild(pages);
        pages.textContent = `${myLibrary[i].pages} pages`;
        div.appendChild(read);
        read.textContent = myLibrary[i].read;
        div.appendChild(equis);
        buttonX = document.querySelectorAll('.close');
        // console.log(buttonX)
        
        

    }
    buttonX.forEach(element => element.addEventListener('click', deleteBook));
    contador ++;
    // console.log(myLibrary)
    

}

function deleteBook(){
    
    const hijosDelete = document.querySelectorAll('.card-book');
    // console.log(hijosDelete)
    hijosDelete.forEach((number,index)=>{
        number.addEventListener('click', () => {
            myLibrary.splice(index,1)
            console.log(number)
            bookstoreDiv.removeChild(number);
            contador--;
            
            
        })
    });
    
}



addBook.addEventListener('click', addBookToLibrary);

    
