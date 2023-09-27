import getUsers from './users';

const usersElement = document.querySelector('#users');

async function render(){
    try {        
        let usersHTML = '<ul class="list-group">';
        const users = await getUsers();   
        users.forEach((user, index) => {
            usersHTML+= `
                <li id="listLi${user.id}" style="list-style:none" class="mb-2">
                    <span id="name${user.id}">${user.name}</span>
                    <button type="button" class="btn btn-primary" id="btn_add_to_cart" data-id="${user.id}">Add to cart</button>
                    <button type="button" class="btn btn-danger" id="btn_remove_element" data-id="${index}">Remove</button>
                    <button type="button" class="btn btn-success" id="btn_edit_element" data-id="${user.id}">Edit</button>
                </li>
    
                <li id="editLi${user.id}" style="display:none" class="mb-3">
                    <div class="row">
                        <div class="col-md-3">
                            <input class="form-control mb-2" id="input${user.id}" value="${user.name}" />
                        </div>                    
                    </div>                
                    <button type="button" class="btn btn-primary" id="btn_back" data-id="${user.id}">Back</button>
                    <button type="button" class="btn btn-success" id="btn_save" data-id="${user.id}">Save</button>
                </li>
            `
        })    
        usersHTML+= '</ul>';
        
        usersElement.innerHTML = usersHTML;
    } catch (error) {
        console.log(error);
    }
}

render();