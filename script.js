// Add interactive effects and animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Add hover effect to main photo
    const mainPhoto = document.getElementById('mainPhoto');
    if (mainPhoto) {
        mainPhoto.addEventListener('mouseenter', function() {
            createCelebration();
        });
    }
    
    // Celebration effect
    function createCelebration() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * (window.innerHeight / 2);
                createSparkle(x, y);
            }, i * 30);
        }
    }
    
    // Create sparkles effect on mouse move
    document.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.95) {
            createSparkle(e.pageX, e.pageY);
        }
    });
    
    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.innerHTML = '✨';
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
    
    // Add CSS for sparkles
    const style = document.createElement('style');
    style.textContent = `
        .sparkle {
            position: absolute;
            pointer-events: none;
            font-size: 20px;
            animation: sparkleAnimation 1s ease-out forwards;
            z-index: 9999;
        }
        
        @keyframes sparkleAnimation {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0.5) translateY(-50px) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add click effect to hearts
    const decorativeHearts = document.querySelectorAll('.decorative-hearts span');
    decorativeHearts.forEach(heart => {
        heart.addEventListener('click', function() {
            this.style.transform = 'scale(1.5) rotate(360deg)';
            this.style.transition = 'all 0.5s ease';
            setTimeout(() => {
                this.style.transform = '';
            }, 500);
        });
    });
    
    // Handle photo upload
    const photoElement = document.getElementById('couplePhoto');
    
    // Check if photo exists, if not show upload prompt
    photoElement.addEventListener('error', function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2ZmYjZjMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNDAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjxwbGFjZSB5b3VyIHBob3RvIGhlcmU8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI2MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UmVuYW1lIHlvdXIgcGhvdG8gdG8gIm91ci1waG90by5qcGciPC90ZXh0Pjwvc3ZnPg==';
        this.style.cursor = 'pointer';
        this.title = 'Click to learn how to add your photo';
        
        this.addEventListener('click', function() {
            alert('To add your photo:\n\n1. Rename your photo to "our-photo.jpg"\n2. Place it in the same folder as this HTML file\n3. Refresh the page\n\nSupported formats: .jpg, .jpeg, .png');
        });
    });
    
    // Add gentle floating animation to the letter
    const letter = document.querySelector('.letter-paper');
    let floatDirection = 1;
    
    setInterval(() => {
        const currentTransform = letter.style.transform || 'translateY(0px)';
        const currentY = parseFloat(currentTransform.match(/-?\d+/)?.[0] || 0);
        const newY = currentY + (floatDirection * 0.5);
        
        if (Math.abs(newY) > 5) {
            floatDirection *= -1;
        }
        
        letter.style.transform = `translateY(${newY}px)`;
        letter.style.transition = 'transform 0.1s ease';
    }, 100);
    
    console.log('💕 Love Letter App Loaded Successfully! 💕');
    console.log('Made with love for a beautiful reunion! 🇰🇪 ❤️ 🇺🇸');
});
