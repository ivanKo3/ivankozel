const btnContact = document.querySelector('.contact__anim');
const myEmail = document.querySelector('.my__email');

function showEmail() {
    myEmail.classList.add('my__email__show');
    myEmail.classList.remove('my__email');

    btnContact.addEventListener('click', hideEmail);
}

function hideEmail(){
    myEmail.classList.remove('my__email__show');
    myEmail.classList.add('my__email');

    btnContact.removeEventListener('click', hideEmail );
}



