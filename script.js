// JavaScript to handle accordion functionality

// Get all the accordion items and headers
const accordionItems = document.querySelectorAll('.accordion-item');
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Add click event listeners to each accordion header
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Toggle the 'active' class on the clicked header's content
        const content = header.nextElementSibling;
        content.classList.toggle('active');
        
        // Close other accordion items if open
        accordionItems.forEach(item => {
            if (item !== header.parentElement) {
                item.querySelector('.accordion-content').classList.remove('active');
            }
        });
    });
});
