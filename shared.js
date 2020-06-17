var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal .modal__action--negative');
var selectPlanButton = document.querySelectorAll('.plan button');

var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(selectPlanButton);
for (i = 0; i < selectPlanButton.length; i++){
    selectPlanButton[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';

        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}


backdrop.addEventListener("click", function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});



function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    // mobileNav.style.display = 'none';

    if(modal){
        modal.classList.remove('open');
        backdrop.classList.remove('open');
    }
}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})