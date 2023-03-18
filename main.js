const btn = document.querySelector('.btn');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

myForm.addEventListener('submit',onSubmit);


function onSubmit(e){
    e.preventDefault();
    let myObj = {
        name: nameInput.value,
        email: emailInput.value,
    }
    let myObj_serialized = JSON.stringify(myObj);
    localStorage.setItem('myObj',myObj_serialized);
    console.log(myObj_serialized);
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