// ========================
// CAMPAIGN PORTFOLIO - Interactive Elements
// ========================

document.addEventListener('DOMContentLoaded', () => {
    // GitHub Projects Integration
    const username = 'kfranklin93';
    const projectGrid = document.querySelector('#github-projects-grid');

    // Fetch and display GitHub projects
    async function fetchGitHubProjects() {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const repos = await response.json();

            repos.forEach(repo => {
                // Skip forked repos
                if (repo.fork) return;

                // Create tech tags
                const techTags = repo.topics.length > 0 
                    ? `<div class="tech-tags">${repo.topics.map(topic => `<span>${topic}</span>`).join('')}</div>`
                    : '';

                // Format date
                const lastUpdated = new Date(repo.pushed_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                
                // Create card HTML
                const cardHTML = `
                    <div class="project-card reveal">
                        <div class="work-label">OPEN SOURCE</div>
                        <h3>${repo.name.replace(/-/g, ' ').toUpperCase()}</h3>
                        <p>${repo.description || 'Personal project showcasing modern development practices.'}</p>
                        ${techTags}
                        <p class="project-date">Last updated: ${lastUpdated}</p>
                        <div class="project-links">
                            ${repo.homepage ? `<a href="${repo.homepage}" class="btn" target="_blank">VIEW LIVE →</a>` : ''}
                            <a href="${repo.html_url}" class="repo-link" target="_blank">CODE →</a>
                        </div>
                    </div>
                `;

                projectGrid.insertAdjacentHTML('beforeend', cardHTML);
            });

            // After loading projects, trigger reveal animations
            observeElements();

        } catch (error) {
            console.error('Error fetching GitHub projects:', error);
            projectGrid.innerHTML = '<p style="color: var(--gray-light);">Projects loading...</p>';
        }
    }

    // Call the function to populate projects
    if (projectGrid) {
        fetchGitHubProjects();
    }

    // ========================
    // SCROLL REVEAL ANIMATIONS
    // ========================
    function observeElements() {
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optionally unobserve after revealing
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

    // Initial observation of existing reveal elements
    observeElements();

    // ========================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========================
    // NAVBAR SCROLL EFFECT
    // ========================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove background based on scroll
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        }

        lastScroll = currentScroll;
    });

    // ========================
    // PILLAR CARDS INTERACTION
    // ========================
    const pillarCards = document.querySelectorAll('.pillar-card');
    
    pillarCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 60px rgba(255, 59, 48, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // ========================
    // PERFORMANCE: Lazy Load Images (if any added later)
    // ========================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ========================
    // CURSOR EFFECT (Optional - adds extra polish)
    // ========================
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.15;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        const distX = mouseX - cursorX;
        const distY = mouseY - cursorY;
        
        cursorX += distX * speed;
        cursorY += distY * speed;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }

    // Only enable custom cursor on larger screens
    if (window.innerWidth > 768) {
        animateCursor();
    }

    // Expand cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .pillar-card, .work-item');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.backgroundColor = 'rgba(255, 59, 48, 0.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        });
    });

    // ========================
    // CONSOLE MESSAGE (Easter Egg)
    // ========================
    console.log('%c👋 KENAN FRANKLIN ', 'background: #FF3B30; color: #fff; font-size: 20px; padding: 10px;');
    console.log('%cLike what you see? Let\'s build something together.', 'font-size: 14px; color: #999;');
    console.log('%ckfranklin93@gmail.com', 'font-size: 14px; color: #FF3B30; font-weight: bold;');
});
