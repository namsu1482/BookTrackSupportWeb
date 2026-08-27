/* ==========================================
   BookTrack Support Web - Interactive Logic
   Light Theme, Store Showcase & Bilingual Support (KO / EN)
   ========================================== */

// 1. Multilingual Translation Dictionaries
const TRANSLATIONS = {
    ko: {
        page_title: "북트랙 (BookTrack) - 나만의 완벽한 독서 여정, AI와 함께 더 스마트하게",
        page_desc: "독서 기록, 타이머 측정, 감상평 카드 제작부터 AI 맞춤 도서 추천과 소셜 독서 모임까지 제공하는 올인원 스마트 독서 관리 앱 북트랙(BookTrack).",
        tagline: "SMART READING ASSISTANT",
        nav_features: "7대 특장점",
        nav_spotlight: "심층 기능",
        nav_showcase: "스크린샷",
        nav_download: "다운로드",
        btn_download: "앱 다운로드",
        
        // Hero Section
        hero_badge: "스마트 AI 탑재 & 올인원 독서 관리 플랫폼",
        hero_title: "나만의 완벽한 독서 여정,<br><span class=\"gradient-text\">AI와 함께 더 스마트하게</span>",
        hero_desc: "BookTrack은 독서 기록, 타이머 측정, 감상평 카드 제작부터 AI 맞춤 도서 추천과 소셜 독서 모임까지 제공하는 올인원 크로스 플랫폼 독서 관리 애플리케이션입니다.",
        hero_feat_ai: "AI 맞춤 추천",
        hero_feat_ocr: "On-Device OCR",
        hero_feat_social: "실시간 소셜 모임",
        hero_feat_cross: "iOS & Android 크로스 플랫폼",
        
        // 7 Core Features Section
        feat_sec_tag: "KEY VALUE PROPOSITION",
        feat_sec_title: "스마트한 독서 여정을 위한 <span class=\"gradient-text\">7대 특장점</span>",
        feat_sec_subtitle: "단순한 책 목록 관리를 넘어, AI 맞춤 분석부터 몰입 타이머, On-Device 문장 추출과 소셜 모임까지 독서의 전 과정을 책임집니다.",
        
        feat_1_title: "AI 맞춤 추천 & 홈 큐레이션",
        feat_1_quote: "\"당신의 독서 취향을 꿰뚫어 보는 스마트 AI 도서 추천\"",
        feat_1_desc: "읽은 책 기록과 독서 페르소나를 정밀 분석하여 나만을 위한 AI 맞춤 도서를 추천합니다. 알라딘 실시간 베스트셀러 및 신간 카러셀, 글로벌 해외 도서까지 아우르는 스마트 이중화 검색 엔진을 지원합니다.",
        feat_1_b1: "알라딘 실시간 베스트셀러 & 큐레이션 신간 카러셀",
        feat_1_b2: "서재 기반 스마트 AI 맞춤 도서 추천 카드",
        feat_1_b3: "비한국어 환경/해외 도서까지 대응하는 스마트 검색",
        
        feat_2_title: "손쉬운 도서 검색 & 서재 보관",
        feat_2_quote: "\"바코드(ISBN) 및 검색으로 1초 만에 내 서재에 쏙\"",
        feat_2_desc: "카메라를 바코드에 대기만 하면 1초 만에 도서 정보를 등록합니다. 읽는 중, 완독, 읽고 싶은 책 상태별 분류와 종이책/전자책(E-Book) 구분을 지원합니다.",
        feat_2_b1: "카메라 ISBN 바코드 1초 스캔 연동",
        feat_2_b2: "읽는중 / 완독 / 읽고싶은 책 상태 분류",
        feat_2_b3: "도서 소개, 목차 및 구매 링크 지원",
        
        feat_3_title: "나만의 맞춤 책장(폴더) & 다중 편집",
        feat_3_quote: "\"카테고리별로 깔끔하게 정리하는 커스텀 서재\"",
        feat_3_desc: "원하는 테마별로 자유롭게 책장 폴더를 생성할 수 있습니다. N:M 다대다 매핑과 멀티 셀렉트 모드로 수십 권의 책도 한 번에 책장으로 이동하고 정리합니다.",
        feat_3_b1: "자유로운 커스텀 책장(폴더) 생성",
        feat_3_b2: "멀티 셀렉트로 한 번에 다중 이동/제거",
        feat_3_b3: "N:M 다대다 매핑 구조 지원",
        
        feat_4_title: "몰입 독서 타이머 & 카운트다운",
        feat_4_quote: "\"오늘 읽은 시간과 페이지를 정확하게 측정\"",
        feat_4_desc: "자유 측정 스톱워치와 목표 시간 설정 카운트다운 타이머를 모두 제공합니다. 세션 종료 시 읽은 페이지와 감정 태그를 함께 남기고, 완독일을 자동으로 예측합니다.",
        feat_4_b1: "스톱워치 & 목표 카운트다운 듀얼 모드",
        feat_4_b2: "독서 세션별 읽은 페이지 & 감정 태그 기록",
        feat_4_b3: "완독 예상일 실시간 자동 연산",
        
        feat_5_title: "카메라 OCR 문장 추출 & 감성 카드",
        feat_5_quote: "\"책 속의 명문장을 찍고 감성 카드로 소장\"",
        feat_5_desc: "On-Device AI OCR 기술로 책 속 구절을 즉시 텍스트로 추출합니다. 16색 팔레트, 12가지 감정 태그, 별점 테마를 적용해 인스타그램 1:1, 9:16 감성 카드로 소장하고 공유하세요.",
        feat_5_b1: "On-Device AI OCR 문장 자동 추출",
        feat_5_b2: "16색 팔레트 & 12가지 감정 태그 테마",
        feat_5_b3: "고해상도 이미지 저장 및 SNS 원클릭 공유",
        
        feat_6_title: "한눈에 보는 독서 통계 & 업적 뱃지",
        feat_6_quote: "\"월별/연도별 독서량 그래프와 성장하는 레벨\"",
        feat_6_desc: "월간/연간 완독 도서 권수와 총 독서 시간을 도넛 및 꺾은선 차트로 시각화합니다. 브론즈부터 플래티넘까지 4개 등급의 업적 뱃지와 히든 과제를 해금하는 즐거움을 더했습니다.",
        feat_6_b1: "월간/연간 독서량 & 시간 시각화 차트",
        feat_6_b2: "4단계(브론즈~플래티넘) 업적 뱃지 시스템",
        feat_6_b3: "출석 캘린더 & 장르별 선호도 분석",
        
        feat_7_title: "함께 읽는 즐거움, 실시간 독서 모임 & AI 리포트",
        feat_7_quote: "\"친구들과 독서 랭킹을 겨루고 AI 독서 페르소나 리포트 받기\"",
        feat_7_desc: "6자리 초대 코드로 손쉽게 독서 모임을 만들고 친구들과 실시간으로 읽는 책, 읽은 페이지, 시간을 공유합니다. 그룹 채팅과 랭킹 리더보드는 물론, 나의 독서 성향을 심층 분석해 주는 AI 독서 페르소나 리포트를 제공합니다.",
        feat_7_b1: "6자리 초대 코드로 간편 개설/참여하는 독서 모임",
        feat_7_b2: "그룹원 간 실시간 독서 활동 공유, 리더보드 & 실시간 채팅",
        feat_7_b3: "독서 패턴 및 필체 분석 기반 AI 독서 페르소나 리포트",
        
        // Deep Dive Spotlight Section
        spotlight_sec_tag: "SPOTLIGHT FEATURES",
        spotlight_sec_title: "독서의 깊이를 더하는 <span class=\"gradient-text\">북트랙 핵심 기술</span>",
        spotlight_sec_subtitle: "최신 On-Device AI와 클라우드 인텔리전스가 결합된 차세대 독서 경험을 만나보세요.",
        
        spotlight_1_tag: "AI INTELLIGENCE",
        spotlight_1_title: "나만의 독서 성향을 진단하는<br><span class=\"gradient-text\">AI 독서 페르소나 리포트</span>",
        spotlight_1_lead: "내가 남긴 생각 블록과 서재 데이터를 종합하여 AI가 독서 페르소나 키워드와 감상평 필체 분석 리포트를 발행합니다.",
        spotlight_1_p1_h: "독서 페르소나 도출",
        spotlight_1_p1_p: "단순 장르 구분을 넘어 지적 탐구형, 감성 몰입형 등 나의 독서 스타일을 정밀하게 규정합니다.",
        spotlight_1_p2_h: "맞춤 추천 & 서재 인사이트",
        spotlight_1_p2_p: "현재 서재의 통계적 빈틈을 메워주는 맞춤 도서를 높은 정확도로 제안합니다.",
        
        spotlight_2_tag: "REVIEW CARD & EXPORT",
        spotlight_2_title: "소중한 독서 기록을<br><span class=\"gradient-text\">감각적인 이미지로 소장하다</span>",
        spotlight_2_lead: "작성한 생각 블록과 인상 깊은 구절을 인스타그램 등 SNS에 최적화된 고화질 이미지 카드로 저장하고 간편하게 공유할 수 있습니다.",
        spotlight_2_p1_h: "맞춤형 템플릿 & 비율 프리셋",
        spotlight_2_p1_p: "1:1 정사각형 피드, 9:16 인스타 스토리 등 원하는 포맷으로 미세 조절하여 깔끔하게 크롭할 수 있습니다.",
        spotlight_2_p2_h: "갤러리 1초 저장 & 원클릭 공유",
        spotlight_2_p2_p: "반투명 딤드 테마와 별점, 기분 태그가 담긴 프리미엄 리뷰 카드를 갤러리에 저장하고 바로 공유하세요.",
        
        // Gallery Showcase Section
        gallery_sec_tag: "APP SHOWCASE",
        gallery_sec_title: "직관적이고 감각적인 <span class=\"gradient-text\">북트랙 UI 쇼케이스</span>",
        gallery_sec_subtitle: "독서 몰입감을 극대화하도록 정교하게 설계된 북트랙의 주요 화면들을 플랫폼별로 확인해 보세요.",
        tab_android: "Google Play Showcase",
        tab_ios: "App Store Showcase",
        
        // Download CTA Section
        cta_sec_tag: "GET STARTED TODAY",
        cta_sec_title: "지금 북트랙과 함께<br><span class=\"gradient-text\">더 깊고 풍요로운 독서</span>를 시작하세요",
        cta_sec_text: "iOS와 Android 모두에서 완벽하게 동기화되는 북트랙. 지금 바로 무료로 다운로드하고 나만의 스마트한 서재를 완성해 보세요.",
        qr_title: "모바일 스토어 바로가기",
        qr_desc: "스마트폰 카메라로 링크를 확인하세요",
        
        // Footer Section
        footer_desc: "나만의 완벽한 독서 여정. 책을 읽고, 생각을 남기고, AI와 함께 더 스마트하게 성장하는 올인원 독서 비서입니다.",
        footer_legal_title: "지원 및 규정",
        footer_privacy: "개인정보 처리방침",
        footer_terms: "서비스 이용약관",
        footer_contact_title: "문의 및 링크",
        footer_email: "이메일: namsu1482@gmail.com",
        footer_copyright: "&copy; 2026 BookTrack (namsu1482). All rights reserved. BookTrack is developed independently."
    },
    en: {
        page_title: "BookTrack - Your Perfect Reading Journey, Smarter with AI",
        page_desc: "All-in-one smart reading tracker: reading logs, timers, review card generator, AI book recommendations, and social reading clubs.",
        tagline: "SMART READING ASSISTANT",
        nav_features: "7 Core Features",
        nav_spotlight: "Spotlight",
        nav_showcase: "Showcase",
        nav_download: "Download",
        btn_download: "Get App",
        
        // Hero Section
        hero_badge: "Smart AI Powered & All-in-One Reading Companion",
        hero_title: "Your Perfect Reading Journey,<br><span class=\"gradient-text\">Smarter with AI</span>",
        hero_desc: "BookTrack is an all-in-one cross-platform reading management app offering reading logs, precision timers, review card creation, AI personalized recommendations, and real-time social reading clubs.",
        hero_feat_ai: "AI Recommendations",
        hero_feat_ocr: "On-Device OCR",
        hero_feat_social: "Social Book Clubs",
        hero_feat_cross: "iOS & Android Cross-Platform",
        
        // 7 Core Features Section
        feat_sec_tag: "KEY VALUE PROPOSITION",
        feat_sec_title: "<span class=\"gradient-text\">7 Core Features</span> for Your Smart Reading Journey",
        feat_sec_subtitle: "Beyond simple book lists: AI personalized analysis, immersive timer, on-device quote extraction, and social book clubs cover every step of your reading.",
        
        feat_1_title: "AI Recommendations & Home Curation",
        feat_1_quote: "\"Smart AI book recommendations tailored to your unique taste\"",
        feat_1_desc: "Analyzes your reading history and reader persona to recommend tailored books. Features real-time bestsellers, curated new releases, and a smart dual search engine covering international titles.",
        feat_1_b1: "Real-time bestsellers & curated new release carousel",
        feat_1_b2: "Smart AI recommendation cards based on your library",
        feat_1_b3: "Smart global search supporting international titles",
        
        feat_2_title: "Effortless Search & Library Management",
        feat_2_quote: "\"Add books to your library in 1 second via barcode scan & search\"",
        feat_2_desc: "Register books in one second simply by pointing your camera at the ISBN barcode. Easily categorize books by Reading, Completed, or To Read, with physical/e-book format support.",
        feat_2_b1: "Instant 1-second camera ISBN barcode scanner",
        feat_2_b2: "Organized by Reading / Completed / To Read status",
        feat_2_b3: "Book synopsis, table of contents & direct purchase links",
        
        feat_3_title: "Custom Bookshelves & Multi-Select Edit",
        feat_3_quote: "\"Organize your digital shelves cleanly by custom categories\"",
        feat_3_desc: "Create customized bookshelf folders for any theme. With N:M multi-mapping and batch select mode, easily organize and move dozens of books at once.",
        feat_3_b1: "Flexible custom bookshelf (folder) creation",
        feat_3_b2: "Multi-select batch move and management",
        feat_3_b3: "Full support for N:M multi-bookshelf mapping",
        
        feat_4_title: "Immersive Reading Timer & Countdown",
        feat_4_quote: "\"Accurately measure reading time and pages read today\"",
        feat_4_desc: "Offers both open stopwatch and goal-oriented countdown timers. Record pages read and mood tags after each session, with automatic completion date prediction.",
        feat_4_b1: "Dual stopwatch & target countdown timer modes",
        feat_4_b2: "Log pages read and mood tags per reading session",
        feat_4_b3: "Real-time automatic completion date projection",
        
        feat_5_title: "On-Device OCR & Aesthetic Quote Cards",
        feat_5_quote: "\"Snap memorable quotes from books and save them as aesthetic cards\"",
        feat_5_desc: "Instantly extract quotes directly from physical pages using on-device AI OCR. Customize with 16 color palettes, 12 mood tags, and star ratings for 1:1 and 9:16 social cards.",
        feat_5_b1: "On-Device AI OCR instant quote extraction",
        feat_5_b2: "16 color palettes & 12 mood tag themes",
        feat_5_b3: "High-res image export & one-click social sharing",
        
        feat_6_title: "Visual Reading Stats & Achievement Badges",
        feat_6_quote: "\"Monthly/yearly reading volume charts and leveling up\"",
        feat_6_desc: "Visualize monthly/annual completed books and total reading hours with donut and trend charts. Unlock 4 badge tiers (Bronze to Platinum) and fun hidden achievements.",
        feat_6_b1: "Visual monthly/yearly reading volume & time charts",
        feat_6_b2: "4-tier (Bronze to Platinum) achievement badge system",
        feat_6_b3: "Reading streak calendar & genre preference breakdown",
        
        feat_7_title: "Social Book Clubs & AI Reading Report",
        feat_7_quote: "\"Compete on leaderboards with friends and receive AI persona reports\"",
        feat_7_desc: "Create book clubs with a simple 6-digit invite code. Share current books, pages read, and time in real-time. Features group chat, leaderboards, and in-depth AI reading persona reports.",
        feat_7_b1: "Easy club creation & joining with 6-digit invite codes",
        feat_7_b2: "Real-time activity sharing, leaderboards & group chat",
        feat_7_b3: "AI reader persona report analyzing patterns and writing style",
        
        // Deep Dive Spotlight Section
        spotlight_sec_tag: "SPOTLIGHT FEATURES",
        spotlight_sec_title: "Core Technologies Powering <span class=\"gradient-text\">Deeper Reading</span>",
        spotlight_sec_subtitle: "Experience next-generation reading blending on-device AI with cloud intelligence.",
        
        spotlight_1_tag: "AI INTELLIGENCE",
        spotlight_1_title: "Diagnose Your Reading Persona with<br><span class=\"gradient-text\">AI Reading Reports</span>",
        spotlight_1_lead: "Combining your thought blocks and library data, AI generates custom reader persona keywords and writing analysis reports.",
        spotlight_1_p1_h: "Reader Persona Profiling",
        spotlight_1_p1_p: "Goes beyond simple genres to define your unique style—such as Intellectual Explorer or Emotional Immerser.",
        spotlight_1_p2_h: "Personalized Picks & Insights",
        spotlight_1_p2_p: "Suggests highly relevant books to expand your reading horizons based on library statistics.",
        
        spotlight_2_tag: "REVIEW CARD & EXPORT",
        spotlight_2_title: "Preserve Your Reading Memories as<br><span class=\"gradient-text\">Stylish Visual Cards</span>",
        spotlight_2_lead: "Export your reflections and favorite quotes into high-resolution cards optimized for Instagram feed and stories with one tap.",
        spotlight_2_p1_h: "Custom Templates & Aspect Presets",
        spotlight_2_p1_p: "Fine-tune and crop into 1:1 square feeds, 9:16 stories, and clean custom formats.",
        spotlight_2_p2_h: "Instant Gallery Save & Share",
        spotlight_2_p2_p: "Save premium review cards with translucent themes, star ratings, and mood tags directly to your gallery.",
        
        // Gallery Showcase Section
        gallery_sec_tag: "APP SHOWCASE",
        gallery_sec_title: "Intuitive & Aesthetic <span class=\"gradient-text\">BookTrack UI Showcase</span>",
        gallery_sec_subtitle: "Explore meticulously designed screens across platforms built to maximize your reading immersion.",
        tab_android: "Google Play Showcase",
        tab_ios: "App Store Showcase",
        
        // Download CTA Section
        cta_sec_tag: "GET STARTED TODAY",
        cta_sec_title: "Start Your <span class=\"gradient-text\">Deeper & Richer Reading</span><br>with BookTrack Today",
        cta_sec_text: "Seamlessly synced across iOS and Android. Download BookTrack for free today and build your personalized smart library.",
        qr_title: "Instant Mobile Store QR",
        qr_desc: "Scan with your smartphone camera to open store link",
        
        // Footer Section
        footer_desc: "Your perfect reading journey. An all-in-one reading companion to read, reflect, and grow smarter with AI.",
        footer_legal_title: "Support & Legal",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_contact_title: "Contact & Links",
        footer_email: "Email: namsu1482@gmail.com",
        footer_copyright: "&copy; 2026 BookTrack (namsu1482). All rights reserved. BookTrack is developed independently."
    }
};

// 2. Localized Hero and Spotlight Mockup Image Configurations
const HERO_IMAGES = {
    ko: [
        'assets/images/android/hero_home.jpeg',
        'assets/images/android/hero_library.jpeg',
        'assets/images/android/hero_timer.jpeg',
        'assets/images/android/hero_search.jpeg',
        'assets/images/android/hero_review.jpeg',
        'assets/images/android/hero_review_save.jpeg',
        'assets/images/android/hero_ai_report.jpeg'
    ],
    en: [
        'assets/images/android/hero_home_en.jpeg',
        'assets/images/android/hero_library_en.jpeg',
        'assets/images/android/hero_timer_en.jpeg',
        'assets/images/android/hero_search_en.jpeg',
        'assets/images/android/hero_review_en.jpeg',
        'assets/images/android/hero_review_save_en.jpeg',
        'assets/images/android/hero_ai_report_en.jpeg'
    ]
};

const SPOTLIGHT_IMAGES = {
    ko: {
        img1: 'assets/images/android/hero_ai_report.jpeg',
        img2: 'assets/images/android/hero_review_save.jpeg'
    },
    en: {
        img1: 'assets/images/android/hero_ai_report_en.jpeg',
        img2: 'assets/images/android/hero_review_save_en.jpeg'
    }
};

// 3. Multilingual Store Showcase Carousel Data
const GALLERY_DATA = {
    ko: {
        android: [
            {
                img: 'assets/images/storeData/android/ko/store_android_1.png',
                title: '책과 함께하는 빛나는 오늘',
                desc: '체계적인 독서 목표와 격려 메시지'
            },
            {
                img: 'assets/images/storeData/android/ko/store_android_2.png',
                title: '책의 모든 정보를 한눈에',
                desc: '메타데이터와 구매 연동 및 진척도'
            },
            {
                img: 'assets/images/storeData/android/ko/store_android_3.png',
                title: '책장에 머문 시간을 가치 있게',
                desc: '정밀한 독서 타이머와 진척도 계산'
            },
            {
                img: 'assets/images/storeData/android/ko/store_android_4.png',
                title: '캘린더와 차트로 보는 발자취',
                desc: '월간 도넛 차트와 일간 꺾은선 통계'
            },
            {
                img: 'assets/images/storeData/android/ko/store_android_5.png',
                title: '생각 블록으로 조립하는 기록',
                desc: '인상 깊은 구절과 맞춤형 생각 카드'
            },
            {
                img: 'assets/images/storeData/android/ko/store_android_6.png',
                title: '기록을 감각적인 이미지로 소장',
                desc: '고해상도 템플릿과 SNS 감성 카드'
            },
            {
                img: 'assets/images/storeData/android/ko/store_android_7.png',
                title: 'AI가 진단하는 나의 독서 성향',
                desc: '독서 페르소나 및 서재 맞춤형 리포트'
            },
            {
                img: 'assets/images/storeData/android/ko/store_android_8.png',
                title: '성취감을 더하는 도전 과제',
                desc: '등급별 화려한 배지와 히든 업적'
            }
        ],
        ios: [
            {
                img: 'assets/images/storeData/ios/ko/store_ios_1.png',
                title: '책과 함께하는 빛나는 오늘',
                desc: '체계적인 독서 목표와 격려 메시지'
            },
            {
                img: 'assets/images/storeData/ios/ko/store_ios_2.png',
                title: '책의 모든 정보를 한눈에',
                desc: '메타데이터와 구매 연동 및 진척도'
            },
            {
                img: 'assets/images/storeData/ios/ko/store_ios_3.png',
                title: '책장에 머문 시간을 가치 있게',
                desc: '정밀한 독서 타이머와 진척도 계산'
            },
            {
                img: 'assets/images/storeData/ios/ko/store_ios_4.png',
                title: '캘린더와 차트로 보는 발자취',
                desc: '월간 도넛 차트와 일간 꺾은선 통계'
            },
            {
                img: 'assets/images/storeData/ios/ko/store_ios_5.png',
                title: '생각 블록으로 조립하는 기록',
                desc: '인상 깊은 구절과 맞춤형 생각 카드'
            },
            {
                img: 'assets/images/storeData/ios/ko/store_ios_6.png',
                title: '차곡차곡 모아보는 나만의 감상평',
                desc: '서재의 감상평 목록에서 한눈에 확인'
            },
            {
                img: 'assets/images/storeData/ios/ko/store_ios_7.png',
                title: 'AI가 진단하는 나의 독서 성향',
                desc: '독서 페르소나 및 서재 맞춤형 리포트'
            }
        ]
    },
    en: {
        android: [
            {
                img: 'assets/images/storeData/android/en/store_android_1.png',
                title: 'Track Your Reading Journey',
                desc: 'Log books, write reviews, and build a lasting habit'
            },
            {
                img: 'assets/images/storeData/android/en/store_android_2.png',
                title: 'See Goals at a Glance',
                desc: 'Visual progress tracking and motivating daily quotes'
            },
            {
                img: 'assets/images/storeData/android/en/store_android_3.png',
                title: 'Organized Digital Bookshelf',
                desc: 'Manage books by status: Reading, To Read, & Completed'
            },
            {
                img: 'assets/images/storeData/android/en/store_android_4.png',
                title: 'Capture Thoughts in Depth',
                desc: 'Rate books, add mood tags, and save memorable quotes'
            },
            {
                img: 'assets/images/storeData/android/en/store_android_5.png',
                title: 'Shareable Review Cards',
                desc: 'Turn your thoughts and quotes into stylish visual cards'
            },
            {
                img: 'assets/images/storeData/android/en/store_android_6.png',
                title: 'Find Your Next Book Faster',
                desc: 'Search by title, author, or barcode with AI recommendations'
            },
            {
                img: 'assets/images/storeData/android/en/store_android_7.png',
                title: 'AI-Powered Reading Report',
                desc: 'Discover your unique reading persona and smart insights'
            },
            {
                img: 'assets/images/storeData/android/en/store_android_8.png',
                title: 'Stay Motivated Every Day',
                desc: 'Build consistency with detailed stats and reading logs'
            }
        ],
        ios: [
            {
                img: 'assets/images/storeData/ios/en/store_ios_1.png',
                title: 'Build a Reading Habit',
                desc: 'Track goals, reading time, and active books effortlessly'
            },
            {
                img: 'assets/images/storeData/ios/en/store_ios_2.png',
                title: 'Build Your Own Library',
                desc: 'Organize reading status and keep reviews in one place'
            },
            {
                img: 'assets/images/storeData/ios/en/store_ios_3.png',
                title: 'Find Your Next Read',
                desc: 'Explore bestsellers, AI picks, and quick ISBN search'
            },
            {
                img: 'assets/images/storeData/ios/en/store_ios_4.png',
                title: 'Capture Every Thought',
                desc: 'Save quotes, reflections, mood tags, and beautiful cards'
            },
            {
                img: 'assets/images/storeData/ios/en/store_ios_5.png',
                title: 'See Your Reading Insights',
                desc: 'Explore reading statistics and tailored AI persona reports'
            }
        ]
    }
};

// State Variables
let currentLanguage = 'ko';
let currentPlatform = 'android';
let currentSlideIndex = 0;
let heroSlideshowTimer = null;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Language from LocalStorage or Browser
    initLanguage();

    // 2. Header Scroll Effect & Nav Highlighting
    initHeaderScroll();

    // 3. Hero Mockup Slideshow
    initHeroSlideshow();

    // 4. Showcase Gallery Carousel & Platform Tabs
    initGalleryShowcase();

    // 5. Scroll Reveal Animations
    initScrollReveal();
});

/**
 * 0. Language Management & UI Translation
 */
function initLanguage() {
    const savedLang = localStorage.getItem('booktrack_lang');
    if (savedLang === 'en' || savedLang === 'ko') {
        currentLanguage = savedLang;
    } else {
        const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        currentLanguage = browserLang.startsWith('ko') ? 'ko' : 'en';
    }

    // Set up toggle buttons
    const btnKo = document.getElementById('lang-btn-ko');
    const btnEn = document.getElementById('lang-btn-en');

    if (btnKo && btnEn) {
        btnKo.addEventListener('click', () => setLanguage('ko'));
        btnEn.addEventListener('click', () => setLanguage('en'));
    }

    // Apply language initially
    applyLanguage(currentLanguage);
}

function setLanguage(lang) {
    if (lang !== 'ko' && lang !== 'en') return;
    if (currentLanguage === lang) return;

    currentLanguage = lang;
    localStorage.setItem('booktrack_lang', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.ko;

    // Update <html> lang attribute
    document.documentElement.lang = lang;

    // Update Language Buttons Active State
    const btnKo = document.getElementById('lang-btn-ko');
    const btnEn = document.getElementById('lang-btn-en');
    if (btnKo && btnEn) {
        if (lang === 'ko') {
            btnKo.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnKo.classList.remove('active');
        }
    }

    // Update Title and Meta Tags
    if (dict.page_title) {
        document.title = dict.page_title;
        const ogTitle = document.getElementById('og-title');
        const twTitle = document.getElementById('tw-title');
        if (ogTitle) ogTitle.setAttribute('content', dict.page_title);
        if (twTitle) twTitle.setAttribute('content', dict.page_title);
    }
    if (dict.page_desc) {
        const metaDesc = document.getElementById('meta-desc');
        const ogDesc = document.getElementById('og-desc');
        const twDesc = document.getElementById('tw-desc');
        if (metaDesc) metaDesc.setAttribute('content', dict.page_desc);
        if (ogDesc) ogDesc.setAttribute('content', dict.page_desc);
        if (twDesc) twDesc.setAttribute('content', dict.page_desc);
    }

    // Update All Elements with [data-i18n] (Text)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    // Update All Elements with [data-i18n-html] (HTML)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    // Update Hero Slideshow Images
    const heroSlides = document.querySelectorAll('#hero-slideshow .hero-slide');
    const heroImageUrls = HERO_IMAGES[lang] || HERO_IMAGES.ko;
    heroSlides.forEach((slide, idx) => {
        if (heroImageUrls[idx]) {
            slide.src = heroImageUrls[idx];
        }
    });

    // Update Spotlight Deepdive Mockup Images
    const spotlightImg1 = document.getElementById('spotlight-img-1');
    const spotlightImg2 = document.getElementById('spotlight-img-2');
    const spotlightConfig = SPOTLIGHT_IMAGES[lang] || SPOTLIGHT_IMAGES.ko;
    if (spotlightImg1 && spotlightConfig.img1) {
        spotlightImg1.src = spotlightConfig.img1;
    }
    if (spotlightImg2 && spotlightConfig.img2) {
        spotlightImg2.src = spotlightConfig.img2;
    }

    // Re-render Showcase Gallery
    currentSlideIndex = 0;
    renderCarouselItems();
    updateCarouselPosition();
}

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
    const slideshow = document.getElementById('hero-slideshow');
    if (!slideshow) return;

    const slides = slideshow.querySelectorAll('.hero-slide');
    if (slides.length <= 1) return;

    let currentIndex = 0;
    const intervalTime = 3800; // 3.8s

    if (heroSlideshowTimer) {
        clearInterval(heroSlideshowTimer);
    }

    heroSlideshowTimer = setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, intervalTime);
}

/**
 * 3. Showcase Gallery Carousel & Platform Tabs
 */
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
        if (tabAndroid) tabAndroid.classList.add('active');
        if (tabIos) tabIos.classList.remove('active');
    } else {
        if (tabIos) tabIos.classList.add('active');
        if (tabAndroid) tabAndroid.classList.remove('active');
    }

    currentSlideIndex = 0;
    renderCarouselItems();
    updateCarouselPosition();
}

function renderCarouselItems() {
    const track = document.getElementById('gallery-track');
    const dotsContainer = document.getElementById('carousel-dots');
    if (!track) return;

    const langData = GALLERY_DATA[currentLanguage] || GALLERY_DATA.ko;
    const data = langData[currentPlatform] || [];

    // Render Cards with Localized storeData Showcase Mockups
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
    const langData = GALLERY_DATA[currentLanguage] || GALLERY_DATA.ko;
    const data = langData[currentPlatform] || [];
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
