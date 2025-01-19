// Mobile Navbar Toggle
const navbarToggle = document.querySelector('.navbar .toggle');
const navLinks = document.querySelector('.navbar .nav-links');

if (navbarToggle) {
    navbarToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth Scrolling for Internal Links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Year for Footer
const yearElement = document.querySelector('.footer-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

//Thank You Message for contact.html
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create a contact message object
    const contactMessage = {
        name,
        email,
        message,
    };
    
     // Retrieve existing messages from localStorage or initialize an empty array
     const contactMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];

     // Add the new message to the array
     contactMessages.push(contactMessage);
 
     // Save updated messages back to localStorage
     localStorage.setItem("contactMessages", JSON.stringify(contactMessages));
 
    alert('Thank you for your message! We will get back to you shortly.');
    document.getElementById('contact-form').reset();
}

// Highlight Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust for navbar height
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Lazy Loading for Images
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '0px 0px 200px 0px'
});

lazyImages.forEach(img => {
    imageObserver.observe(img);
});

// Scroll-to-Top Button
const scrollToTopButton = document.querySelector('.scroll-to-top');

if (scrollToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
