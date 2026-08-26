/* ==========================================
   BookTrack Support Web - Interactive Logic
   Deep Violet Theme & Dynamic Showcase
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Scroll Effect & Nav Highlighting
    initHeaderScroll();

    // 2. Hero Mockup Slideshow
    initHeroSlideshow();

    // 3. Showcase Gallery Carousel & Platform Tabs
    initGalleryShowcase();

    // 4. Scroll Reveal Animations
    initScrollReveal();
});

/**
 * 1. Header Sticky Effect & Active Navigation Link Spy
 */
function initHeaderScroll() {
    const header = document.getElementById('main-header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Sticky Header shadow/background toggle
        if (scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Section Scroll Spy
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * 2. Hero Smartphone Mockup Smooth Slideshow
 */
function initHeroSlideshow() {
    const slides = document.querySelectorAll('#hero-slideshow .hero-slide');
    if (slides.length <= 1) return;

    let currentIndex = 0;
    const intervalTime = 3800; // 3.8s

    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, intervalTime);
}

/**
 * 3. Showcase Data & Interactive Carousel Gallery
 */
const GALLERY_DATA = {
    android: [
        {
            img: 'assets/images/android/store/screenshot_1_home.png',
            title: '책과 함께하는 빛나는 오늘',
            desc: '체계적인 독서 목표와 격려 메시지'
        },
        {
            img: 'assets/images/android/store/screenshot_2_search.png',
            title: '책의 모든 정보를 한눈에',
            desc: '메타데이터와 구매 연동 및 진척도'
        },
        {
            img: 'assets/images/android/store/screenshot_3_timer.png',
            title: '책장에 머문 시간을 가치 있게',
            desc: '정밀한 독서 타이머와 진척도 계산'
        },
        {
            img: 'assets/images/android/store/screenshot_4_insights.png',
            title: '캘린더와 차트로 보는 발자취',
            desc: '월간 도넛 차트와 일간 꺾은선 통계'
        },
        {
            img: 'assets/images/android/store/screenshot_5_review_detail.png',
            title: '생각 블록으로 조립하는 기록',
            desc: '인상 깊은 구절과 맞춤형 생각 카드'
        },
        {
            img: 'assets/images/android/store/screenshot_6_review_save.png',
            title: '기록을 감각적인 이미지로 소장',
            desc: '고해상도 템플릿과 SNS 감성 카드'
        },
        {
            img: 'assets/images/android/store/screenshot_7_social.png',
            title: 'AI가 진단하는 나의 독서 성향',
            desc: '독서 페르소나 및 서재 맞춤형 리포트'
        },
        {
            img: 'assets/images/android/store/screenshot_8_achievement.png',
            title: '성취감을 더하는 도전 과제',
            desc: '등급별 화려한 배지와 히든 업적'
        },
        {
            img: 'assets/images/android/store/screenshot_9_group.png',
            title: '함께 읽고 나누는 즐거움',
            desc: '실시간 랭킹 리더보드와 소셜 모임'
        }
    ],
    ios: [
        {
            img: 'assets/images/ios/store/screenshot_1_home.png',
            title: '책과 함께하는 빛나는 오늘',
            desc: '체계적인 독서 목표와 격려 메시지'
        },
        {
            img: 'assets/images/ios/store/screenshot_2_search.png',
            title: '책의 모든 정보를 한눈에',
            desc: '메타데이터와 구매 연동 및 진척도'
        },
        {
            img: 'assets/images/ios/store/screenshot_3_timer.png',
            title: '책장에 머문 시간을 가치 있게',
            desc: '정밀한 독서 타이머와 진척도 계산'
        },
        {
            img: 'assets/images/ios/store/screenshot_4_insights.png',
            title: '캘린더와 차트로 보는 발자취',
            desc: '월간 도넛 차트와 일간 꺾은선 통계'
        },
        {
            img: 'assets/images/ios/store/screenshot_5_review_detail.png',
            title: '생각 블록으로 조립하는 기록',
            desc: '인상 깊은 구절과 맞춤형 생각 카드'
        },
        {
            img: 'assets/images/ios/store/screenshot_6_review_save.png',
            title: '차곡차곡 모아보는 나만의 감상평',
            desc: '서재의 감상평 목록에서 한눈에 확인'
        },
        {
            img: 'assets/images/ios/store/screenshot_7_social.png',
            title: 'AI가 진단하는 나의 독서 성향',
            desc: '독서 페르소나 및 서재 맞춤형 리포트'
        },
        {
            img: 'assets/images/ios/store/screenshot_8_achievement.png',
            title: '성취감을 더해주는 나만의 도전 과제',
            desc: '등급별 화려한 배지와 히든 업적'
        },
        {
            img: 'assets/images/ios/store/screenshot_9_group.png',
            title: '함께 읽고 나누는 즐거움',
            desc: '실시간 랭킹 리더보드와 소셜 모임'
        }
    ]
};

let currentPlatform = 'android';
let currentSlideIndex = 0;

function initGalleryShowcase() {
    const tabAndroid = document.getElementById('tab-android');
    const tabIos = document.getElementById('tab-ios');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    // Platform Tab Events
    if (tabAndroid && tabIos) {
        tabAndroid.addEventListener('click', () => switchPlatform('android'));
        tabIos.addEventListener('click', () => switchPlatform('ios'));
    }

    // Prev / Next Navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => navigateCarousel(-1));
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => navigateCarousel(1));
    }

    // Touch and Drag Gesture Handling
    initCarouselGestures();

    // Initial Render
    renderCarouselItems();
    updateCarouselPosition();

    // Responsive Resize Handler
    window.addEventListener('resize', () => {
        updateCarouselPosition();
    });
}

function switchPlatform(platform) {
    if (currentPlatform === platform) return;
    currentPlatform = platform;

    // Update Tab UI
    const tabAndroid = document.getElementById('tab-android');
    const tabIos = document.getElementById('tab-ios');

    if (platform === 'android') {
        tabAndroid.classList.add('active');
        tabIos.classList.remove('active');
    } else {
        tabIos.classList.add('active');
        tabAndroid.classList.remove('active');
    }

    currentSlideIndex = 0;
    renderCarouselItems();
    updateCarouselPosition();
}

function renderCarouselItems() {
    const track = document.getElementById('gallery-track');
    const dotsContainer = document.getElementById('carousel-dots');
    if (!track) return;

    const data = GALLERY_DATA[currentPlatform];

    // Render Cards
    track.innerHTML = data.map((item, idx) => `
        <div class="gallery-card ${idx === currentSlideIndex ? 'center-active' : ''}">
            <div class="gallery-mockup">
                <img src="${item.img}" alt="${item.title}" loading="lazy">
            </div>
            <h4 class="gallery-card-title">${item.title}</h4>
            <p class="gallery-card-desc">${item.desc}</p>
        </div>
    `).join('');

    // Render Dots
    if (dotsContainer) {
        dotsContainer.innerHTML = data.map((_, idx) => `
            <div class="dot ${idx === currentSlideIndex ? 'active' : ''}" data-index="${idx}"></div>
        `).join('');

        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const targetIdx = parseInt(e.target.getAttribute('data-index'), 10);
                if (!isNaN(targetIdx)) {
                    currentSlideIndex = targetIdx;
                    updateCarouselPosition();
                }
            });
        });
    }
}

function navigateCarousel(direction) {
    const data = GALLERY_DATA[currentPlatform];
    const track = document.getElementById('gallery-track');
    if (!track) return;

    const cards = track.querySelectorAll('.gallery-card');
    if (cards.length === 0) return;

    const wrapperWidth = track.parentElement.offsetWidth;
    const cardWidth = cards[0].offsetWidth + 24; // card width + gap
    const visibleCards = Math.floor(wrapperWidth / cardWidth) || 1;
    const maxIndex = Math.max(0, data.length - visibleCards);

    currentSlideIndex = Math.min(Math.max(0, currentSlideIndex + direction), maxIndex);
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const track = document.getElementById('gallery-track');
    if (!track) return;

    const cards = track.querySelectorAll('.gallery-card');
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 24; // width + gap
    const offset = currentSlideIndex * cardWidth;
    track.style.transform = `translateX(-${offset}px)`;

    // Update Active Card Highlights
    cards.forEach((card, idx) => {
        if (idx === currentSlideIndex) {
            card.classList.add('center-active');
        } else {
            card.classList.remove('center-active');
        }
    });

    // Update Dots
    const dots = document.querySelectorAll('#carousel-dots .dot');
    dots.forEach((dot, idx) => {
        if (idx === currentSlideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function initCarouselGestures() {
    const wrapper = document.getElementById('carousel-wrapper');
    if (!wrapper) return;

    let startX = 0;
    let isDragging = false;

    // Touch Events
    wrapper.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;

        if (Math.abs(diffX) > 40) {
            if (diffX > 0) {
                navigateCarousel(1);
            } else {
                navigateCarousel(-1);
            }
        }
        isDragging = false;
    });

    // Mouse Drag
    wrapper.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        isDragging = true;
    });

    window.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        const endX = e.clientX;
        const diffX = startX - endX;

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                navigateCarousel(1);
            } else {
                navigateCarousel(-1);
            }
        }
        isDragging = false;
    });
}

/**
 * 4. IntersectionObserver Scroll Reveal
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('active'));
    }
}
