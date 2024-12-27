const aboutSection = document.getElementById('aboutSection');
const aboutText = document.getElementById('aboutText');
const aboutImage = document.getElementById('aboutImage');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.target === aboutSection && entry.isIntersecting) {
            aboutText.classList.add('animate__animated', 'animate__fadeInLeft');
            aboutImage.classList.add('animate__animated', 'animate__fadeInRight');
        }
    });
}, { threshold: 0.3 });

observer.observe(aboutSection);
