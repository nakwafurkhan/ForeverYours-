document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts
    createHearts();
    
    // Setup love letters carousel
    setupLoveLetters();
    
    // Setup music player
    setupMusicPlayer();
});

// Function to create floating hearts in the background
function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    const numberOfHearts = 30;
    
    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Randomly make some hearts blue
        if (Math.random() > 0.7) {
            heart.classList.add('blue-heart');
        }
        
        // Random position
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        heart.style.left = `${left}%`;
        heart.style.top = `${top}%`;
        
        // Random size
        const size = Math.random() * 15 + 10;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        
        // Random animation duration
        const duration = Math.random() * 10 + 10;
        heart.style.animationDuration = `${duration}s`;
        
        // Random animation delay
        const delay = Math.random() * 10;
        heart.style.animationDelay = `${delay}s`;
        
        heartsContainer.appendChild(heart);
    }
}

// Function to set up love letters carousel
function setupLoveLetters() {
const loveLetters = [
    {
        "content": "My dearest Riya, from the very first moment on February 25, my heart recognized a spark in you. Your smile and gentle presence promised the start of something truly magical. I’m so excited for every step of our journey.",
        "date": "February 25, 2025"
    },
    {
        "content": "Riya, on February 26, I found myself discovering a new facet of your charm in every word you spoke. Every glance felt like a silent promise, and I’m grateful for the joy you bring into my life.",
        "date": "February 26, 2025"
    },
    {
        "content": "Today, February 27, every shared moment with you deepens my wonder. Your laughter and kind eyes have filled my day with warmth, making my heart beat faster in anticipation of our next meeting.",
        "date": "February 27, 2025"
    },
    {
        "content": "On February 28, the magic of our connection glows brighter than ever. Your presence transforms the simplest day into a canvas of love and beauty—I cherish every second we spend together.",
        "date": "February 28, 2025"
    },
    {
        "content": "My dearest Riya, I never thought I could feel this way after just two weeks. You've awakened something in me that I didn't know existed. The way your eyes light up when you talk about things you love makes my heart skip a beat. I treasure every moment we spend together.",
        "date": "March 1, 2025"
    },
    {
        "content": "Riya, waking up on March 3 feels like a new dawn filled with hope and affection. Every moment away from you makes me long for your sweet voice and tender smile, which light up my entire day.",
        "date": "March 3, 2025"
    },
    {
        "content": "On March 4, I marvel at how effortlessly you fill my life with color. Your gentle touch and kind words make even ordinary moments extraordinary. I feel blessed to share my days with you.",
        "date": "March 4, 2025"
    },
    {
        "content": "RiRi, last night, just hearing your voice on the phone made me smile so much. I can’t believe how lucky I am to have found someone who makes me feel so understood and appreciated. Every day with you is a gift I never want to take for granted.",
        "date": "March 5, 2025"
    },
    {
        "content": "On March 6, every second with you feels like a cherished secret between our hearts. Your laughter, your warmth, and your tender presence wrap me in a love that grows deeper with each passing moment.",
        "date": "March 6, 2025"
    },
    {
        "content": "My love, I find myself thinking about you at random moments throughout the day. When I see something beautiful, I wish you were there to share it with me. When I hear a song that reminds me of you, I can’t help but smile. You’ve become such an important part of my life in such a short time.",
        "date": "March 10, 2025"
    },
    {
        "content": "Riya, on March 11, every tender touch felt like poetry in motion. Our closeness and the passion we shared last night affirmed the depth of my love for you—every caress and whispered promise has left me breathless and more in love than ever.",
        "date": "March 11, 2025"
    },
    {
        "content": "Today, March 12, our intimacy continues to kindle a fire that burns brighter with every heartbeat. The warmth of your embrace and the depth of our connection remind me that with you, love is both a sanctuary and a celebration.",
        "date": "March 12, 2025"
    }
]


// Assume these elements exist in your HTML
const carousel = document.querySelector('.carousel');
const indicators = document.querySelector('.carousel-indicators');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Clear existing content
carousel.innerHTML = '';
indicators.innerHTML = '';

// Create a wrapper inside the carousel for proper sliding
const carouselTrack = document.createElement('div');
carouselTrack.classList.add('carousel-track');
carousel.appendChild(carouselTrack);

// Create letter cards
loveLetters.forEach((letter, index) => {
    // Create letter card container
    const letterCard = document.createElement('div');
    letterCard.classList.add('letter-card');
    
    // Create letter content
    const letterContent = document.createElement('p');
    letterContent.classList.add('letter-content');
    letterContent.textContent = letter.content;
    
    // Create letter date
    const letterDate = document.createElement('p');
    letterDate.classList.add('letter-date');
    letterDate.textContent = letter.date;
    
    // Append elements
    letterCard.appendChild(letterContent);
    letterCard.appendChild(letterDate);
    carouselTrack.appendChild(letterCard);
    
    // Create indicator
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (index === 0) {
        indicator.classList.add('active');
    }
    indicator.setAttribute('data-index', index);
    indicator.addEventListener('click', function() {
        goToSlide(parseInt(this.getAttribute('data-index')));
    });
    indicators.appendChild(indicator);
});

let currentIndex = 0;
const totalSlides = loveLetters.length;

// Function to go to a specific slide
function goToSlide(index) {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    
    const slidePercentage = -(index * 100);
    carouselTrack.style.transform = `translateX(${slidePercentage}%)`;
    
    // Update indicators
    document.querySelectorAll('.indicator').forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
    
    currentIndex = index;
}

// Navigation button events
prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(currentIndex);
});

nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(currentIndex);
    } else if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    }
});

// Initialize to first slide
goToSlide(0);
}

// Function to set up music player
function setupMusicPlayer() {
    const playBtn = document.getElementById('playBtn');
    const progressBar = document.getElementById('progress-bar');
    // Using a placeholder audio or just simulate the functionality
    // since the actual audio file might not be accessible
    const audio = new Audio();
    audio.src = "./tune-jo-na-kaha.mp3"; // Replace with actual audio file
    
    let isPlaying = false;
    
    // Play/pause button functionality
    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playBtn.textContent = '▶';
        } else {
            audio.play().catch(err => {
                console.log('Audio playback failed:', err);
                // Fallback for browsers that require user interaction
                alert('Please click again to play the music!');
            });
            playBtn.textContent = '❚❚';
        }
        
        isPlaying = !isPlaying;
    });
    
    // Update progress bar
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100 || 0;
        progressBar.style.width = `${progress}%`;
    });
    
    // Click on progress bar to seek
    document.querySelector('.progress-container').addEventListener('click', (e) => {
        const width = e.currentTarget.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        
        if (duration) {
            audio.currentTime = (clickX / width) * duration;
        }
    });
    
    // Reset when song ends
    audio.addEventListener('ended', () => {
        progressBar.style.width = '0%';
        playBtn.textContent = '▶';
        isPlaying = false;
        audio.currentTime = 0;
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});