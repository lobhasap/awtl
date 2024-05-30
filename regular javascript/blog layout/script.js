document.addEventListener('DOMContentLoaded', function() {
    // Highlight the current navigation link
    const navLinks = document.querySelectorAll('nav a');
    const currentLocation = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    // Example of dynamically loading more posts
    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'Load More Posts';
    loadMoreButton.style.display = 'block';
    loadMoreButton.style.margin = '20px auto';
    loadMoreButton.style.padding = '10px 20px';
    loadMoreButton.style.backgroundColor = '#4CAF50';
    loadMoreButton.style.color = 'white';
    loadMoreButton.style.border = 'none';
    loadMoreButton.style.borderRadius = '5px';
    loadMoreButton.style.cursor = 'pointer';

    document.querySelector('.container').appendChild(loadMoreButton);

    loadMoreButton.addEventListener('click', function() {
        // Simulate loading more posts
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = `
            <h2>New Blog Post</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        `;
        document.querySelector('.container').appendChild(newPost);
    });
});
