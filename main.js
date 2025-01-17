document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'rotateY(180deg)';
            card.style.backgroundColor = '#ffcccb'; // Light red on hover
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'rotateY(0deg)';
            card.style.backgroundColor = ''; // Reset to original color
        });

        card.addEventListener('click', () => {
            card.classList.toggle('clicked');
        });
    });
});
