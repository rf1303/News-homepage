document.addEventListener('DOMContentLoaded', function() {
    
    const buttonOpen = document.querySelector('.button__open');
    const buttonClose = document.querySelector('.button__close');
    const wrappersMenu = document.querySelector('.wrappers__menu');
    const wrappersBg = document.querySelector('.wrappers__menu--bg');

    buttonOpen.addEventListener('click', () => {
        
        wrappersMenu.classList.remove('display__none');
        wrappersBg.classList.remove('display__none');

    });

    buttonClose.addEventListener('click', () => {
        
        wrappersMenu.classList.add('display__none');
        wrappersBg.classList.add('display__none');
    });
});
