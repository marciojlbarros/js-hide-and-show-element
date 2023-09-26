const books = [
    {
        id: 1,
        name: 'Book1'
    },
    {
        id: 2,
        name: 'Book2'
    },
    {
        id: 3,
        name: 'Book3'
    },
    {
        id: 4,
        name: 'Book4'
    }
]

const booksElement = document.querySelector('#books');

function render(){
    let booksHTML = '<ul class="list-group">';    
    books.forEach((book, index) => {
        booksHTML+= `
            <li id="listLi${book.id}" style="list-style:none" class="mb-2">
                <span id="name${book.id}">${book.name}</span>
                <button type="button" class="btn btn-primary" id="btn_add_to_cart" data-id="${book.id}">Add to cart</button>
                <button type="button" class="btn btn-danger" id="btn_remove_element" data-id="${index}">Remove</button>
                <button type="button" class="btn btn-success" id="btn_edit_element" data-id="${book.id}">Edit</button>
            </li>

            <li id="editLi${book.id}" style="display:none" class="mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <input class="form-control mb-2" id="input${book.id}" value="${book.name}" />
                    </div>                    
                </div>                
                <button type="button" class="btn btn-primary" id="btn_back" data-id="${book.id}">Back</button>
                <button type="button" class="btn btn-success" id="btn_save" data-id="${book.id}">Save</button>
            </li>
        `
    })    
    booksHTML+= '</ul>';
    
    booksElement.innerHTML = booksHTML;
}

render();