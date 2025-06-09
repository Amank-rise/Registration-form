let Submit = document.querySelector('.submit');
let Reset = document.querySelector('.reset');
let nameField = document.querySelector('.namefield');
let underline = document.querySelector('.underline');


Reset.addEventListener('click',()=>{
    document.getElementById('registration-form').reset();
    
    
    Submit.classList.add('disable');
    Reset.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});
Submit.addEventListener('click',()=>{
    
    
    
    Submit.classList.remove('disable');
    Reset.classList.add('disable');
    underline.style.transform = 'translateX(0)';
});
