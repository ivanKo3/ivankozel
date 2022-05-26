const aboutMe = document.querySelector('.about');
const myEmail = document.querySelector('.email');
const btnContact = document.querySelector('.contact');
const button = document.querySelector('.btn');

function down() {
    aboutMe.classList.remove('about');
    aboutMe.classList.add('aboutShow');

    button.addEventListener('click', up);
}

function up() {
    aboutMe.classList.remove('aboutShow');
    aboutMe.classList.add('about');
    window.scroll({
        left: 0,
        top: 0, 
        behavior: 'smooth'
    })

    button.removeEventListener('click', up);
}

function showEmail() {
    myEmail.classList.add('emailShow');
    myEmail.classList.remove('email');

    btnContact.addEventListener('click', hideEmail);
}

function hideEmail(){
    myEmail.classList.remove('emailShow');
    myEmail.classList.add('email');

    btnContact.removeEventListener('click', hideEmail );
}








