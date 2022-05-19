const aboutMe = document.querySelector('.about')
const myEmail = document.querySelector('.contact')

function down() {
    aboutMe.classList.remove('about')
    aboutMe.classList.add('aboutMe')
    window.scroll({
        left: 0,
        top: 576, 
        behavior: 'smooth'
    })
};
function contact() {
    myEmail.classList.remove('contact')
    myEmail.classList.add('contactShow')
};






