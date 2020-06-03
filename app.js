const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');



    menu.addEventListener('click', () => {
        //toggle nav bar
        nav.classList.toggle('nav-active');
    
        
        //animate the links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.2}s`;
                console.log(index / 5 + 0.2);
            }
        });
        //nav bar animation
        menu.classList.toggle('toggle');
    });


}

navSlide();