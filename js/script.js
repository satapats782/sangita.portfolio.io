document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Form Submission Alert (Optional)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for reaching out! I will get back to you as soon as possible.');
        });
    }

    // Project Hover Effects (Optional for Interactive UI)
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });
        project.addEventListener('mouseleave', function() {
            this.style.transform = "scale(1)";
        });
    });
});
