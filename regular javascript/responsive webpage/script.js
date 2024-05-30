document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');

    // Dynamically add content
    const items = [
        { title: 'Item 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula eros euismod velit consectetur, at posuere ligula aliquam.' },
        { title: 'Item 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula eros euismod velit consectetur, at posuere ligula aliquam.' },
        { title: 'Item 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula eros euismod velit consectetur, at posuere ligula aliquam.' },
        { title: 'Item 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula eros euismod velit consectetur, at posuere ligula aliquam.' }
    ];

    items.forEach(item => {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.content}</p>
        `;
        container.appendChild(newItem);
    });
});
