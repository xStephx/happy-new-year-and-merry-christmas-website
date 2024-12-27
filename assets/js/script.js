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
    });
}, { threshold: 0.3 });

observer.observe(aboutSection);
observer.observe(giftsSection);
observer.observe(stickersSection);
observer.observe(playlistsSection);
observer.observe(gallerySection);