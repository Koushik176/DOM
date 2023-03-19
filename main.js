const btn = document.querySelector('.btn');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const myUser = document.getElementById('users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const obj = {
        name,
        email,
    }
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserOnScreen(obj);
}

function showUserOnScreen(obj){
    const parentElem = document.getElementById('users');
    const childElem = document.createElement('li');
    childElem.textContent = obj.name+'-'+obj.email;
    const deleteButton = document.createElement('input');
    deleteButton.className = 'btn delete';
    deleteButton.type = 'button';
    deleteButton.value = 'delete';
    deleteButton.onclick = () => {
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem);
    }
    childElem.appendChild(deleteButton);
    const editButton = document.createElement('input');
    editButton.className = 'btn edit';
    editButton.type = 'button';
    editButton.value = 'edit';
    editButton.onclick = () => {
        document.querySelector('#name').value = obj.name;
        document.querySelector('#email').value = obj.email;
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem);
    }
    childElem.appendChild(editButton);
    parentElem.appendChild(childElem);
}

btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#name').style.background = 'black';
    document.querySelector('#email').style.background = 'black';
});

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#name').style.background = 'white';
    document.querySelector('#email').style.background = 'white';
});