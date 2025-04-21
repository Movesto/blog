/**
 * Navbar Component Script
 * Loads the navbar and handles active page highlighting
 */

document.addEventListener('DOMContentLoaded', async function() {
    // Get the navbar placeholder element
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (!navbarPlaceholder) return;

    try {
        // Fetch the navbar HTML
        const response = await fetch('/src/components/navbar.html');
        const html = await response.text();
        
        // Insert the navbar HTML
        navbarPlaceholder.innerHTML = html;
        
        // Determine the current page
        const currentPath = window.location.pathname;
        
        // Set active page in desktop navbar
        if (currentPath === '/' || currentPath.endsWith('index.html')) {
            document.getElementById('nav-home').classList.add('text-[#be2ed6]');
            document.getElementById('nav-home').querySelector('div').classList.add('scale-x-100');
            document.getElementById('mobile-nav-home').classList.add('text-[#be2ed6]');
        } else if (currentPath.endsWith('projects.html')) {
            document.getElementById('nav-projects').classList.add('text-[#be2ed6]');
            document.getElementById('nav-projects').querySelector('div').classList.add('scale-x-100');
            document.getElementById('mobile-nav-projects').classList.add('text-[#be2ed6]');
        } else if (currentPath.endsWith('blog.html')) {
            document.getElementById('nav-blog').classList.add('text-[#be2ed6]');
            document.getElementById('nav-blog').querySelector('div').classList.add('scale-x-100');
            document.getElementById('mobile-nav-blog').classList.add('text-[#be2ed6]');
        } else if (currentPath.endsWith('about.html')) {
            document.getElementById('nav-about').classList.add('text-[#be2ed6]');
            document.getElementById('nav-about').querySelector('div').classList.add('scale-x-100');
            document.getElementById('mobile-nav-about').classList.add('text-[#be2ed6]');
        }

        // Initialize mobile menu functionality
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close mobile menu when clicking a link inside it
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (event) => {
                if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
                    mobileMenu.classList.add('hidden');
                }
            });
        }
    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}); 