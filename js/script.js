document.addEventListener('DOMContentLoaded', () => {
    // Your GitHub username, now correctly written as a string
    const username = 'kfranklin93'; 

    const projectGrid = document.querySelector('#github-projects-grid');

    // Function to fetch and display GitHub projects
    async function fetchGitHubProjects() {
        try {
            // API URL to get user repositories, sorted by most recently updated
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const repos = await response.json();


            // Loop through each repository
            repos.forEach(repo => {
                // Skip forked repos if you want
                if (repo.fork) {
                    return;
                }

                // Create the HTML for the tech tags
                const techTags = repo.topics.map(topic => `<span>${topic}</span>`).join('');

                // Format the date
                const lastUpdated = new Date(repo.pushed_at).toLocaleDateString(
                    'en-US', 
                    {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }
                );
                
                // Create the HTML for the project card
                const cardHTML = `
                    <div class="project-card">
                        <h3>${repo.name}</h3>
                        <p>${repo.description || 'No description available.'}</p>
                        <div class="tech-tags">
                            ${techTags}
                        </div>
                        <p class="project-date">Last worked on: ${lastUpdated}</p>
                        <div class="project-links">
                            ${repo.homepage ? `<a href="${repo.homepage}" class="btn" target="_blank">View Live</a>` : ''}
                            <a href="${repo.html_url}" class="repo-link" target="_blank">Public Repo ↗</a>
                        </div>
                    </div>
                `;

                // Add the new card to the grid
                projectGrid.insertAdjacentHTML('beforeend', cardHTML);
            });

        } catch (error) {
            console.error('Error fetching GitHub projects:', error);
            projectGrid.innerHTML = '<p>Sorry, could not load projects at this time.</p>';
        }
    }

    // Call the function to populate the projects
    if (projectGrid) {
        fetchGitHubProjects();
    }

    // Code for expandable experience cards
    const cardHeaders = document.querySelectorAll('.card-header');

    cardHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const button = header.querySelector('.expand-btn');
            const details = header.nextElementSibling;
            
            header.classList.toggle('expanded');
            button.classList.toggle('expanded');
            details.classList.toggle('expanded');

             if (details.classList.contains('expanded')) {
                header.classList.add('has-divider');
            } else {
                header.classList.remove('has-divider');
            }
        });
    });

    // Hamburger menu toggle
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('is-active');
            navLinks.classList.toggle('is-active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('is-active')) {
                    hamburgerBtn.classList.remove('is-active');
                    navLinks.classList.remove('is-active');
                }
            });
        });
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.id = 'scrollToTopBtn';
    scrollToTopBtn.title = 'Go to top';
    document.body.appendChild(scrollToTopBtn);

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    scrollToTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});