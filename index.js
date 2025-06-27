/*
  Copyright (c) 2024 Zeeshan
  Portfolio Website - All rights reserved
  This code is part of a personal portfolio project
*/

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scroll for anchor links with proper offset
navLinksItems.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar active link on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjusted offset
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.bar-fill');
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            bar.style.width = bar.getAttribute('data-width');
        }
    });
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('DOMContentLoaded', animateSkillBars);

// Animate circular skills
function animateCircles() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        const span = circle.querySelector('span');
        if (circle.getBoundingClientRect().top < window.innerHeight - 50) {
            circle.style.background = `conic-gradient(#00e6ff ${percent}%, #1a2a40 ${percent}% 100%)`;
            span.textContent = percent + '%';
        }
    });
}
window.addEventListener('scroll', animateCircles);
window.addEventListener('DOMContentLoaded', animateCircles);

// Animate cards on scroll
function animateCards() {
    const cards = document.querySelectorAll('.service-card, .project-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            card.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', animateCards);
window.addEventListener('DOMContentLoaded', animateCards);

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.animated-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Get form data
        const name = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const subject = this.querySelectorAll('input[type="text"]')[1].value.trim();
        const message = this.querySelector('textarea').value.trim();
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            return;
        }
        
        // Simulate form submission (in a real app, you'd send this to a server)
        setTimeout(() => {
            // Show success message
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = 'linear-gradient(90deg, #00ff88, #00e6ff)';
            
            // Reset form after a delay
            setTimeout(() => {
                this.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                submitBtn.style.background = 'linear-gradient(90deg, #00e6ff, #7f5cff)';
            }, 2000);
        }, 1500);
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add loading animation for images
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
    });
});

// Add scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.service-card, .project-card, .skill-bar, .circle-skill');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll); 