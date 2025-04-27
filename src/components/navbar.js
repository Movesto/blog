/**
 * Navbar Component Script
 * Loads the navbar and handles active page highlighting
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar placeholder element
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (!navbarPlaceholder) return;

    // Navbar HTML template
    const navbarHTML = `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#111111]/90 backdrop-blur-sm">
        <div class="container mx-auto px-5 py-4">
            <div class="flex items-center justify-between">
                <a href="index.html" class="text-xl font-bold">Mohamed</a>
                <div class="hidden md:flex space-x-10">
                    <a href="index.html" id="nav-home" class="nav-link relative group text-sm">
                        Home
                        <div class="absolute -bottom-1 left-0 w-full h-[2px] bg-[#be2ed6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </a>
                    <a href="projects.html" id="nav-projects" class="nav-link relative group text-sm">
                        Projects
                        <div class="absolute -bottom-1 left-0 w-full h-[2px] bg-[#be2ed6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </a>
                    <a href="blog.html" id="nav-blog" class="nav-link relative group text-sm">
                        Blog
                        <div class="absolute -bottom-1 left-0 w-full h-[2px] bg-[#be2ed6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </a>
                    <a href="about.html" id="nav-about" class="nav-link relative group text-sm">
                        About
                        <div class="absolute -bottom-1 left-0 w-full h-[2px] bg-[#be2ed6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </a>
                </div>
                <button id="mobile-menu-button" class="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="md:hidden hidden">
                <div class="py-3 space-y-3">
                    <a href="index.html" id="mobile-nav-home" class="block text-sm">Home</a>
                    <a href="projects.html" id="mobile-nav-projects" class="block text-sm">Projects</a>
                    <a href="blog.html" id="mobile-nav-blog" class="block text-sm">Blog</a>
                    <a href="about.html" id="mobile-nav-about" class="block text-sm">About</a>
                </div>
            </div>
        </div>
    </nav>`;
    
    // Insert the navbar HTML
    navbarPlaceholder.innerHTML = navbarHTML;
    
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
}); 