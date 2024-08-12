function handleOnClick(event) {
    event.preventDefault();
    const clickedItem = event.target;

    if (clickedItem.classList.contains('navbar-items')) {
        switch (clickedItem.textContent.trim()) {
            case 'Docs':
                window.location.href = 'https://code.visualstudio.com/docs';
                break;
            case 'Updates':
                window.location.href = 'https://code.visualstudio.com/updates';
                break;
            case 'Blog':
                window.location.href = 'https://code.visualstudio.com/blogs/2024/06/24/extensions-are-all-you-need';
                break;
            case 'API':
                window.location.href = 'https://code.visualstudio.com/api';
                break;
            case 'Extensions':
                window.location.href = 'https://marketplace.visualstudio.com/VSCode';
                break;
            case 'FAQ':
                window.location.href = 'https://code.visualstudio.com/docs/supporting/faq';
                break;
            case 'Learn':
                window.location.href = 'https://code.visualstudio.com/learn';
                break;
            default:
                console.log('Unknown navigation item');
        }
    } else if (clickedItem.classList.contains('download-button')) {
        window.location.href = 'https://code.visualstudio.com/Download';
    }
}


//downloading also almost forgot him :)
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    navbar.addEventListener('click', handleOnClick);
});
