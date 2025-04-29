 // Wait for the DOM to be fully loaded
 document.addEventListener('DOMContentLoaded', () => {
    // Select all scrollable sections
    const scrollableSections = [
        '.services-examples',
        '.services-details',
        '.cards-group'
    ];

    scrollableSections.forEach(sectionSelector => {
        // Find all instances of the section (e.g., multiple .services-details)
        document.querySelectorAll(sectionSelector).forEach(content => {
            // Find the parent .scroll-btn container
            const scrollBtnContainer = content.closest('.scroll-btn');
            if (!scrollBtnContainer) return; // Skip if no .scroll-btn parent

            // Find left and right buttons within the container
            const leftBtn = scrollBtnContainer.querySelector('.left-btn');
            const rightBtn = scrollBtnContainer.querySelector('.right-btn');

            // Add event listeners if buttons exist
            if (leftBtn) {
                leftBtn.addEventListener('click', () => {
                    content.scrollBy({ left: -500, behavior: 'smooth' });
                });
            }

            if (rightBtn) {
                rightBtn.addEventListener('click', () => {
                    content.scrollBy({ left: 500, behavior: 'smooth' });
                });
            }
        });
    });
});