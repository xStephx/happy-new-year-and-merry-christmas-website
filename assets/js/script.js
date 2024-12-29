const aboutSection = document.getElementById('aboutSection');
const aboutText = document.getElementById('aboutText');
const aboutImage = document.getElementById('aboutImage');
const giftsSection = document.getElementById('giftsSection');
const giftFirst = document.getElementById('giftFirst');
const giftSecond = document.getElementById('giftSecond');
const giftThird = document.getElementById('giftThird');
const stickersSection = document.getElementById('stickersSection');
const stickerFirstHalf = document.getElementById('stickerFirstHalf');
const stickerSecondHalf = document.getElementById('stickerSecondHalf');
const playlistsSection = document.getElementById('playlistsSection');
const youtubePlaylist = document.getElementById('youtubePlaylist');
const spotifyPlaylist = document.getElementById('spotifyPlaylist');
const gallerySection = document.getElementById('gallerySection');
const gallery = document.getElementById('gallery');
const contactSection = document.getElementById('contactSection');
const contactForm = document.getElementById('contactForm');
const contactImg = document.getElementById('contactImg');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.target === aboutSection && entry.isIntersecting) {
            aboutText.classList.add('animate__animated', 'animate__fadeInLeft');
            aboutImage.classList.add('animate__animated', 'animate__fadeInRight');
        }

        if (entry.target === giftsSection && entry.isIntersecting){
            giftFirst.classList.add('animate__animated', 'animate__fadeInLeft');
            giftSecond.classList.add('animate__animated', 'animate__fadeInDown');
            giftThird.classList.add('animate__animated', 'animate__fadeInRight');
        }

        if(entry.target === stickersSection && entry.isIntersecting){
            stickerFirstHalf.classList.add('animate__animated', 'animate__fadeInLeft');
            stickerSecondHalf.classList.add('animate__animated', 'animate__fadeInRight');
        }

        if(entry.target === playlistsSection && entry.isIntersecting){
            youtubePlaylist.classList.add('animate__animated', 'animate__fadeInLeft');
            spotifyPlaylist.classList.add('animate__animated', 'animate__fadeInRight');
        }

        if(entry.target === gallerySection && entry.isIntersecting){
            gallery.classList.add('animate__animated', 'animate__fadeInLeft');
        }

        if(entry.target === contactSection && entry.isIntersecting){
            contactForm.classList.add('animate__animated', 'animate__fadeInLeft');
            contactImg.classList.add('animate__animated', 'animate__fadeInRight');
        }
    });
}, { threshold: 0.3 });

observer.observe(aboutSection);
observer.observe(giftsSection);
observer.observe(stickersSection);
observer.observe(playlistsSection);
observer.observe(gallerySection);
observer.observe(contactSection);

function createSnowflakes() {
    const snowflakeCount = 50;
    const snowflakeChars = ['❄', '❆', '❅'];

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const existingSnowflakes = document.querySelectorAll('.snowflake');
    existingSnowflakes.forEach(snowflake => snowflake.remove());

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
        snowflake.classList.add('fixed', 'snowflake', 'text-white', 'opacity-80', 'pointer-events-none');

        const startPosX = Math.random() * windowWidth;
        const size = Math.random() * 10 + 10;
        const speed = Math.random() * 3 + 2;
        const animationDelay = Math.random() * 5;

        snowflake.style.left = `${startPosX}px`;
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.top = `-20px`;
        snowflake.style.animation = `falling ${speed}s linear infinite`;
        snowflake.style.animationDelay = `${animationDelay}s`;

        document.body.appendChild(snowflake);
    }
}

createSnowflakes();

const style = document.createElement('style');
style.innerHTML = `
    @keyframes falling {
        0% { transform: translateY(0); opacity: 0.8; }
        100% { transform: translateY(calc(100vh + 10px)); opacity: 0; }
    }
`;
document.head.appendChild(style);

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(createSnowflakes, 200);
});
