window.addEventListener('scroll', function() {
    let items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        let rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        } else {
            item.style.opacity = 0;
            item.style.transform = "translateY(50px)";
        }
    });
});