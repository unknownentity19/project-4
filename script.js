// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Trigger counter animation if it's a counter element
            if (entry.target.querySelector('.counter')) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    animateCounter(counter);
                });
            }
        }
    });
}, observerOptions);

// Observe all elements with fade-in-on-scroll class
document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
    observer.observe(el);
});

// Counter animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Form submission
const demoForm = document.querySelector('.demo-form');
if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(demoForm);
        const data = Object.fromEntries(formData);
        
        // Show success message
        const button = demoForm.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = 'Request Sent! ✓';
        button.style.background = 'linear-gradient(135deg, #00ff66 0%, #00cc52 100%)';
        
        // Reset after 3 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            demoForm.reset();
        }, 3000);
        
        console.log('Demo request submitted:', data);
    });
}

// Video placeholder click
const videoPlaceholder = document.querySelector('.video-placeholder');
if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        // In a real implementation, this would load and play a video
        const overlay = videoPlaceholder.querySelector('.video-overlay');
        overlay.innerHTML = '<p>Video would play here</p><span>In production, integrate your video player</span>';
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// Animate floating cards with mouse movement
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.floating-card');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    cards.forEach((card, index) => {
        const speed = (index + 1) * 10;
        const moveX = (x - 0.5) * speed;
        const moveY = (y - 0.5) * speed;
        
        card.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Dynamic button hover effects
document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Add cursor trail effect
let cursorTrail = [];
const maxTrailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    // Remove old trail points
    cursorTrail = cursorTrail.filter(point => Date.now() - point.time < 500);
});

// Typing animation for hero question
const heroQuestion = document.querySelector('.hero-question p');
if (heroQuestion) {
    const text = heroQuestion.textContent;
    heroQuestion.textContent = '';
    let charIndex = 0;
    
    setTimeout(() => {
        const typeInterval = setInterval(() => {
            if (charIndex < text.length) {
                heroQuestion.textContent += text[charIndex];
                charIndex++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    }, 1000);
}

// Add subtle animation to stats on hover
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const number = this.querySelector('.stat-number');
        number.style.transform = 'scale(1.1)';
        number.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        const number = this.querySelector('.stat-number');
        number.style.transform = 'scale(1)';
    });
});

// Workflow item animations
const workflowItems = document.querySelectorAll('.workflow-item');
workflowItems.forEach((item, index) => {
    setTimeout(() => {
        item.style.animation = 'slideIn 0.5s ease-out forwards';
    }, index * 200);
});

// Add hover effect to use case cards
document.querySelectorAll('.use-case-card, .technical-card, .benefit-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--glow-x', `${x}px`);
        this.style.setProperty('--glow-y', `${y}px`);
    });
});

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body for initial animations
    document.body.classList.add('loaded');
    
    // Animate nodes in connection visual
    const nodes = document.querySelectorAll('.node');
    nodes.forEach((node, index) => {
        setTimeout(() => {
            node.style.opacity = '1';
            node.style.animation = 'pulse 2s infinite';
        }, index * 300);
    });
});

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = 'var(--primary-color)';
            } else {
                navLink.style.color = 'var(--text-secondary)';
            }
        }
    });
});

// Preload images and assets
window.addEventListener('load', () => {
    console.log('Ontora website loaded successfully');
});

// Add ripple effect to buttons
document.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Lazy load images (if you add real images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to expensive scroll handlers
window.addEventListener('scroll', throttle(() => {
    // Expensive scroll operations here
}, 100));

console.log('Ontora AI Platform - Ready');
