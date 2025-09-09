document.addEventListener('DOMContentLoaded', () => {
    // Your GitHub username, now correctly written as a string
    const username = 'kfranklin93'; 

    // The container where projects will be displayed
    const projectGrid = document.querySelector('.project-grid');

    // Function to fetch and display GitHub projects
    async function fetchGitHubProjects() {
        try {
            // API URL to get user repositories, sorted by most recently updated
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const repos = await response.json();

            // Clear any existing content
            projectGrid.innerHTML = ''; 

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
    fetchGitHubProjects();
});

// Code for expandable experience cards
document.addEventListener('DOMContentLoaded', () => {
    // Select all the card headers
    const cardHeaders = document.querySelectorAll('.card-header');

    // Loop through each header and add a click event listener
    cardHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Find the button and the details list within that header's parent card
            const button = header.querySelector('.expand-btn');
            const details = header.nextElementSibling; // The ul.card-details is the next sibling
            
            // Toggle the 'expanded' class on both the header and the details list
            header.classList.toggle('expanded');
            button.classList.toggle('expanded');
            details.classList.toggle('expanded');
        });
    });
});