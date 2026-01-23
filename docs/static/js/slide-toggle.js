(function() {
    const toggleBtn = document.getElementById('toggle-slides');
    if (!toggleBtn) return; // Exit if button doesn't exist on page

    let slideMode = false;

    toggleBtn.addEventListener('click', function() {
        slideMode = !slideMode;
        const slides = document.querySelectorAll('.slide');

        slides.forEach(slide => {
            if (slideMode) {
                slide.classList.add('slide-mode');
            } else {
                slide.classList.remove('slide-mode');
            }
        });

        console.log('Slide mode:', slideMode, 'Slides found:', slides.length);
    });
})();
