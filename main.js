const btn = document.querySelector('.btn');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const obj = {
        name,
        email,
    }
    localStorage.setItem(obj.email, JSON.stringify(obj))
    showUserOnScreen(obj)
}
function showUserOnScreen(obj){
    const parentElem = document.getElementById('users');
    const childElem = document.createElement('li');
    childElem.textContent = obj.name+'-'+obj.email;
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