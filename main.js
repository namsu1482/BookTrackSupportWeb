/* ==========================================
   BookTrack Support Web - Interactive Logic
   Light Theme, 6 Core Features & Bilingual Support (KO / EN)
   ========================================== */

// 1. Multilingual Translation Dictionaries
const TRANSLATIONS = {
    ko: {
        page_title: "북트랙 (BookTrack) - 나만의 완벽한 독서 여정, 책을 기록하고 나를 알아가는 스마트 독서 관리 앱",
        page_desc: "책을 읽는 시간부터 기록하고, 나만의 독서 성향을 발견하는 순간까지. 원목 책장 뷰, 독서 타이머, 24시간 독서 페르소나, OCR 감상평 카드 커스텀, 월간 리포트까지 함께하는 스마트 독서 관리 앱 북트랙(BookTrack).",
        tagline: "SMART READING ASSISTANT",
        
        // Navigation
        nav_library: "내 서재 & 타이머",
        nav_persona: "독서 성향 & 페르소나",
        nav_records: "기록 & 캐릭터",
        nav_recommend: "맞춤 도서 추천",
        nav_cards: "다이어리 & 카드",
        nav_report: "월간 리포트",
        nav_showcase: "쇼케이스",
        btn_download: "앱 다운로드",
        
        // Hero Section
        hero_badge: "나만의 스마트 독서 비서 북트랙 BookTrack",
        hero_title: "나만의 완벽한 독서 여정,<br><span class=\"gradient-text\">책을 기록하고 나를 알아가다</span>",
        hero_desc: "책을 읽는 시간부터 기록하고, 나만의 독서 성향을 발견하는 순간까지 독서의 모든 과정을 함께합니다. 원목 책장, 정밀 타이머, 독서 페르소나, OCR 카드 조색, 월간 인포그래픽 리포트를 지금 경험해 보세요.",
        hero_tag_bookshelf: "원목 책장 뷰",
        hero_tag_timer: "몰입 독서 타이머",
        hero_tag_persona: "24시간 독서 페르소나",
        hero_tag_card: "카드 테마 스튜디오",
        hero_tag_report: "월간 결산 리포트",

        // Section 1: 내 서재 & 목표 관리, 몰입의 독서 타이머
        sec1_title: "내 서재 & 목표 관리, <span class=\"gradient-text\">몰입의 독서 타이머</span>",
        sec1_lead: "\"실제 원목 서가에 꽂아둔 듯 실감 나는 책장 감상과 집중을 극대화하는 시간 측정\"",
        sec1_f1_title: "아날로그 감성의 원목 책장 뷰 & 리스트 뷰",
        sec1_f1_desc: "실제 원목 책장에 꽂아둔 듯 실감 나는 2줄 서가 배치와 부드러운 연속 스크롤로 소장한 도서들을 감상할 수 있습니다. 읽는 중 / 완독 / 읽을 예정 상태별 필터링과 커스텀 책장(폴더) 분류를 완벽히 지원합니다.",
        sec1_f2_title: "1초 바코드(ISBN) 스캔 & 과거 완독 등록",
        sec1_f2_desc: "카메라 스캔 한 번으로 도서 정보, 고화질 표지, 장르 메타데이터를 즉시 등록합니다. 예전에 읽었던 책도 읽은 기간, 독서 시간, 평점을 입력하여 손쉽게 서재에 보관하고 통계에 반영할 수 있습니다.",
        sec1_f3_title: "스마트 스톱워치 & 목표 카운트다운 타이머",
        sec1_f3_desc: "자유로운 독서 시간 측정은 물론, 목표 시간 완독을 돕는 카운트다운 타이머를 제공합니다. 백그라운드에서도 시간 측정이 안전하게 유지되며, 세션 종료 시 읽은 페이지와 감정 태그가 함께 기록됩니다.",
        sec1_f4_title: "월간 & 연간 독서 목표 관리",
        sec1_f4_desc: "권수와 독서 시간 목표를 설정하고, 실시간 달성률 게이지를 통해 꾸준하고 흔들림 없는 독서 습관을 만듭니다.",

        // Section 2: 24시간 독서 성향 & 나만의 독서 페르소나
        sec2_title: "24시간 독서 성향 & <span class=\"gradient-text\">나만의 독서 페르소나</span>",
        sec2_lead: "\"00시부터 23시까지, 내가 가장 집중하는 황금 시간대와 독서 캐릭터를 진단하다\"",
        sec2_banner_h: "\"심야의 사색가\" & \"새벽형 탐독가\"",
        sec2_banner_p: "시간대, 속도, 완독 패턴을 정밀 분석해 나만의 고유한 독서 캐릭터를 도출합니다.",
        sec2_f1_title: "24시간 독서 패턴 블록 차트 & 골드 코어타임",
        sec2_f1_desc: "00시부터 23시까지 24개의 시간대 블록 히트맵으로 하루 중 언제 주로 책을 읽는지 한눈에 시각화합니다. 가장 집중도가 높은 시간대를 골드 하이라이트 요약 배너로 분석해 드립니다.",
        sec2_f2_title: "독서 페르소나 심층 분석",
        sec2_f2_desc: "독서 시간대, 속도, 완독 패턴을 정밀 분석하여 나만의 독서 캐릭터(새벽형 탐독가, 심야의 사색가, 주말 몰입형 여행자, 다독가, 병렬 독서가 등)와 데이터 기반의 상세한 분석 이유를 제시합니다.",
        sec2_f3_title: "연속 독서 스트릭 & 4단계 마일스톤 뱃지",
        sec2_f3_desc: "매일 책을 읽는 습관을 기를 수 있도록 연속 독서 일수를 알려주는 불꽃 스트릭 배너와 3일 달성, 7일 달성, 14일 도전, 30일 마스터 뱃지를 제공합니다.",

        // Section 3: 나만의 기록 스타일 & 캐릭터 분석
        sec3_title: "나만의 기록 스타일 & <span class=\"gradient-text\">캐릭터 분석</span>",
        sec3_lead: "\"작성하는 빈도와 글의 길이, 감정 태그에서 피어나는 나만의 독서 기록 아이덴티티\"",
        sec3_f1_title: "독서 기록 습관 및 스타일 분석",
        sec3_f1_desc: "작성 빈도, 글의 길이, 선택한 감정 태그의 분포를 종합 분석하여 나만의 독서 기록 캐릭터를 도출합니다. 깊이 있는 서평가인지, 짧고 강렬한 인용구 수집가인지 나의 기록 성향을 명확히 확인하세요.",
        sec3_f2_title: "통합 독서 기록 대시보드",
        sec3_f2_desc: "독서 캘린더와 일일/누적 기록 현황 배너, 감상평·다이어리 통합 카운트로 나의 모든 독서 기록 여정을 한곳에서 유기적으로 모아보고 관리할 수 있습니다.",

        // Section 4: 내 서재 기반 맞춤 도서 추천
        sec4_title: "내 서재 기반 <span class=\"gradient-text\">맞춤 도서 추천</span>",
        sec4_lead: "\"소장한 도서와 읽은 패턴을 정밀 분석해 발견하는 다음 인생 책\"",
        sec4_f1_title: "내 서재 기반 맞춤 추천",
        sec4_f1_desc: "내 서재에 등록된 도서 목록과 독서 통계를 바탕으로, 나의 독서 취향에 꼭 맞는 도서를 분석하여 높은 정확도로 추천해 드립니다.",
        sec4_f2_title: "서재 규모별 풍성한 맞춤 리스트",
        sec4_f2_desc: "서재에 책이 쌓여갈수록 알고리즘이 더 정교해집니다. 서재 규모에 맞추어 풍성하고 깊이 있는 맞춤 추천 큐레이션 리스트를 제공합니다.",

        // Section 5: 감각적인 독서 다이어리 & 감상평 카드 커스터마이징
        sec5_title: "감각적인 독서 다이어리 & <span class=\"gradient-text\">감상평 카드 커스터마이징</span>",
        sec5_lead: "\"카메라 On-Device OCR 문장 추출부터 12종 감성 폰트, 종이 질감 카드 조색까지\"",
        sec5_f1_title: "카메라 OCR 문장 자동 인식",
        sec5_f1_desc: "책 속 인상 깊은 구절을 카메라로 촬영하면 온디바이스 AI가 문장을 자동으로 인식하여 텍스트로 빠르게 추출해 줍니다.",
        sec5_f2_title: "일일 독서 다이어리",
        sec5_f2_desc: "책을 읽고 떠오른 생각 메모와 본문 사진 첨부, 12가지 감성 폰트와 파스텔 테마로 하루하루 데일리 독서 일기를 감각적으로 작성할 수 있습니다.",
        sec5_f3_title: "세부 요소 커스텀 카드 에디터",
        sec5_f3_desc: "배경, 카드 상자, 폰트, 감정 태그, 별점, 워터마크 등 세부 요소의 색상 조색, 8방향 선형 그라데이션, 아날로그 종이 질감 텍스처를 지원하여 소장용 및 SNS 전시용 독서 카드로 제작할 수 있습니다.",

        // Section 6: 한 달의 여정을 담은 월간 리포트
        sec6_title: "한 달의 여정을 담은 <span class=\"gradient-text\">월간 리포트</span>",
        sec6_lead: "\"한 달 동안 완독한 책들이 감성적인 실물 책등으로 꽂히는 비주얼 결산 리포트\"",
        sec6_view_insight: "인사이트 리포트 (책등 서가)",
        sec6_view_calendar: "독서 캘린더 (잔디 뷰)",
        sec6_view_alltime: "올타임 총 독서 기록",
        sec6_f1_title: "감성 실물 책등 서가 인포그래픽",
        sec6_f1_desc: "한 달 동안 완독한 책들이 실제 책등 모양으로 서가에 나란히 꽂히는 감성적인 비주얼 결산 리포트를 제공합니다. 완독의 성취를 시각적인 포스터처럼 감상하세요.",
        sec6_f2_title: "독서 페이스 & 심층 분석",
        sec6_f2_desc: "시간당 독서 페이지(p/h), 권당 평균 소요 시간, 전월 대비 성장 지표를 한눈에 비교하고, 완성된 결산 리포트 이미지를 갤러리에 간직하거나 공유할 수 있습니다.",
        sec6_f3_title: "듀얼 서브 뷰 토글 스위처",
        sec6_f3_desc: "[인사이트 리포트]와 [독서 캘린더]를 원터치로 오가며 한눈에 들어오는 결산 통계와 날짜별 잔디 출석 캘린더를 함께 확인합니다.",
        sec6_f4_title: "올타임 '총 독서 기록' 대시보드",
        sec6_f4_desc: "완독 권수, 누적 독서 시간, 완독 페이지, 작성 기록 수를 깔끔한 카드 형태로 통합 집계하여 나의 독서 인생 전체의 발자취를 보여줍니다.",

        // Gallery Showcase Section
        gallery_sec_tag: "APP SHOWCASE",
        gallery_sec_title: "직관적이고 감각적인 <span class=\"gradient-text\">북트랙 UI 쇼케이스</span>",
        gallery_sec_subtitle: "독서 몰입감을 극대화하도록 정교하게 설계된 북트랙의 주요 화면들을 슬라이드로 확인해 보세요.",

        // Download CTA Section
        cta_sec_tag: "GET STARTED TODAY",
        cta_sec_title: "지금 북트랙과 함께<br><span class=\"gradient-text\">나를 알아가는 독서 여정</span>을 시작하세요",
        cta_sec_text: "책을 기록하고 독서 페르소나를 진단하는 가장 스마트한 독서 비서 북트랙. 지금 무료로 다운로드하고 나만의 서재를 완성해 보세요.",
        qr_title: "모바일 스토어 바로가기",
        qr_desc: "스마트폰 카메라로 링크를 확인하세요",

        // Footer Section
        footer_desc: "나만의 완벽한 독서 여정. 책을 기록하고, 생각을 남기며, 나만의 독서 성향을 발견하는 올인원 스마트 독서 비서입니다.",
        footer_legal_title: "지원 및 규정",
        footer_privacy: "개인정보 처리방침",
        footer_terms: "서비스 이용약관",
        footer_contact_title: "문의 및 링크",
        footer_email: "이메일: namsu1482@gmail.com",
        footer_copyright: "&copy; 2026 BookTrack (namsu1482). All rights reserved. BookTrack is developed independently."
    },
    en: {
        page_title: "BookTrack - Your Perfect Reading Journey, Track Books & Discover Yourself",
        page_desc: "From timing your reads to discovering your unique reading persona. Wooden bookshelf view, reading timer, 24-hour reading persona, OCR review cards, and monthly infographic reports.",
        tagline: "SMART READING ASSISTANT",
        
        // Navigation
        nav_library: "Library & Timer",
        nav_persona: "Reading Persona",
        nav_records: "Logs & Style",
        nav_recommend: "Recommendations",
        nav_cards: "Diary & Cards",
        nav_report: "Monthly Report",
        nav_showcase: "Showcase",
        btn_download: "Download App",
        
        // Hero Section
        hero_badge: "Your Smart Reading Companion: BookTrack",
        hero_title: "Your Perfect Reading Journey,<br><span class=\"gradient-text\">Track Books & Discover Yourself</span>",
        hero_desc: "BookTrack journeys with you from timing your reading to discovering your unique reading persona. Experience wooden shelves, precision timers, reading personas, custom card color palettes, and monthly infographic reports today.",
        hero_tag_bookshelf: "Wood Bookshelf",
        hero_tag_timer: "Focus Timer",
        hero_tag_persona: "24H Persona",
        hero_tag_card: "Theme Studio",
        hero_tag_report: "Monthly Report",

        // Section 1: My Library & Timer
        sec1_title: "My Library & Goals, <span class=\"gradient-text\">Immersive Reading Timer</span>",
        sec1_lead: "\"Warm wooden bookshelf aesthetics paired with precision timing to maximize your deep focus\"",
        sec1_f1_title: "Warm Wooden Bookshelf & List Views",
        sec1_f1_desc: "Admire your collection in an authentic 2-row wooden bookshelf layout with smooth continuous scrolling. Supports reading status filters (Reading / Completed / To Read) and custom folder classification.",
        sec1_f2_title: "1-Second Barcode (ISBN) Scan & Past Reads",
        sec1_f2_desc: "Scan barcodes with your camera to instantly fetch book metadata, high-res covers, and genres. Effortlessly log past books with custom dates, duration, and ratings to keep your statistics complete.",
        sec1_f3_title: "Smart Stopwatch & Countdown Timer",
        sec1_f3_desc: "Measure reading sessions with a flexible stopwatch or set a target countdown timer. Background timing runs safely, and read pages with emotion tags are saved upon session completion.",
        sec1_f4_title: "Monthly & Yearly Reading Goal Tracking",
        sec1_f4_desc: "Set book count and reading time targets, and build an unbreakable reading habit with real-time achievement progress bars.",

        // Section 2: 24-Hour Pattern & Reading Persona
        sec2_title: "24-Hour Habit & <span class=\"gradient-text\">Your Reading Persona</span>",
        sec2_lead: "\"From 00:00 to 23:00, discover your golden reading hour and personalized reading character\"",
        sec2_banner_h: "\"Nighttime Thinker\" & \"Early Bird Reader\"",
        sec2_banner_p: "Analyzes hours, speed, and completion patterns to reveal your unique reading persona.",
        sec2_f1_title: "24-Hour Block Heatmap & Gold Core Time",
        sec2_f1_desc: "Visualize exactly when you read across 24 hourly block segments. Your peak focus hour is highlighted in gold with a tailored insight banner.",
        sec2_f2_title: "In-Depth Reading Persona Diagnosis",
        sec2_f2_desc: "Accurately diagnoses your unique reader persona (Early Bird, Nighttime Thinker, Weekend Immerser, Parallel Reader, etc.) with detailed data-driven insights.",
        sec2_f3_title: "Daily Reading Streaks & Milestone Badges",
        sec2_f3_desc: "Stay motivated with daily reading streak flame banners and unlock 4-tier milestone badges: 3-Day, 7-Day, 14-Day Challenge, and 30-Day Master.",

        // Section 3: Record Style & Character
        sec3_title: "Your Log Style & <span class=\"gradient-text\">Character Analysis</span>",
        sec3_lead: "\"Uncover your reading identity reflected through your logging habits, note length, and emotion tags\"",
        sec3_f1_title: "Writing Habit & Style Analytics",
        sec3_f1_desc: "Analyzes writing frequency, entry length, and emotion tag distributions to define your writing character. Discover whether you are a deep essayist or an evocative quote collector.",
        sec3_f2_title: "Unified Reading Log Dashboard",
        sec3_f2_desc: "Integrates your reading calendar, daily/cumulative summaries, and combined review/diary counters to view your entire reading journey in one place.",

        // Section 4: Personalized Recommendations
        sec4_title: "Library-Based <span class=\"gradient-text\">Book Recommendations</span>",
        sec4_lead: "\"Discover your next favorite book through precision analysis of your library and reading habits\"",
        sec4_f1_title: "Curated Library Recommendations",
        sec4_f1_desc: "Analyzes your registered books and reading statistics to recommend titles that precisely match your literary tastes.",
        sec4_f2_title: "Rich Curation Scaling With Your Library",
        sec4_f2_desc: "As your collection grows, our algorithms become even smarter, presenting diverse curated lists tailored to your library size.",

        // Section 5: Diary & Custom Review Cards
        sec5_title: "Aesthetic Diary & <span class=\"gradient-text\">Custom Review Card Studio</span>",
        sec5_lead: "\"From camera On-Device OCR quote capture to 12 aesthetic fonts and tactile paper textures\"",
        sec5_f1_title: "On-Device OCR Instant Quote Capture",
        sec5_f1_desc: "Snap a photo of an inspiring sentence, and On-Device AI instantly recognizes and extracts the text into your notes.",
        sec5_f2_title: "Daily Reading Diary",
        sec5_f2_desc: "Write daily journal entries with attached excerpt photos, 12 aesthetic fonts, and pastel themes for a personal touch.",
        sec5_f3_title: "Detailed Element Custom Card Studio",
        sec5_f3_desc: "Individually color backgrounds, card boxes, fonts, emotion tags, and star ratings. Apply 8-way linear gradients and authentic paper textures for social sharing.",

        // Section 6: Monthly Report
        sec6_title: "A Month's Journey in a <span class=\"gradient-text\">Monthly Report</span>",
        sec6_lead: "\"A visual retrospective where books finished this month are stacked as realistic book spines on your shelf\"",
        sec6_view_insight: "Insight Report (Spine Shelf)",
        sec6_view_calendar: "Reading Calendar (Grass View)",
        sec6_view_alltime: "All-Time Record",
        sec6_f1_title: "Aesthetic Book Spine Shelf Infographic",
        sec6_f1_desc: "Books completed during the month are rendered as authentic book spines lined up on a wooden shelf, creating a poster-worthy summary.",
        sec6_f2_title: "Reading Pace & Comparative Insights",
        sec6_f2_desc: "Examine pages per hour (p/h), average time per book, and month-over-month growth, and save your retrospective image directly to your gallery.",
        sec6_f3_title: "Dual Sub-View Toggle Switcher",
        sec6_f3_desc: "Seamlessly switch between the [Insight Report] and the [Reading Calendar] with one touch to review both statistics and daily grass attendance.",
        sec6_f4_title: "All-Time 'Total Reading Record' Dashboard",
        sec6_f4_desc: "Consolidates completed books, total reading hours, pages read, and logged entries into clean cards capturing your entire reading lifetime.",

        // Gallery Showcase Section
        gallery_sec_tag: "APP SHOWCASE",
        gallery_sec_title: "Intuitive & Aesthetic <span class=\"gradient-text\">BookTrack UI Showcase</span>",
        gallery_sec_subtitle: "Explore meticulously designed screens built to maximize your reading immersion.",

        // Download CTA Section
        cta_sec_tag: "GET STARTED TODAY",
        cta_sec_title: "Start Your <span class=\"gradient-text\">Reading & Self-Discovery Journey</span><br>with BookTrack Today",
        cta_sec_text: "The smartest reading companion to log books and diagnose your reading persona. Download BookTrack for free today and build your library.",
        qr_title: "Instant Mobile Store QR",
        qr_desc: "Scan with your smartphone camera to open store link",

        // Footer Section
        footer_desc: "Your perfect reading journey. An all-in-one reading companion to read, reflect, and grow with personalized insights.",
        footer_legal_title: "Support & Legal",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_contact_title: "Contact & Links",
        footer_email: "Email: namsu1482@gmail.com",
        footer_copyright: "&copy; 2026 BookTrack (namsu1482). All rights reserved. BookTrack is developed independently."
    }
};

// 2. Localized Hero Images
const HERO_IMAGES = {
    ko: [
        'assets/figma_images/hero_home.png',
        'assets/figma_images/sec1_bookshelf.png',
        'assets/figma_images/sec1_timer.png',
        'assets/figma_images/sec2_persona.png',
        'assets/figma_images/sec3_record_dashboard.png',
        'assets/figma_images/sec5_diary.png',
        'assets/figma_images/sec5_card_custom.png',
        'assets/figma_images/sec6_monthly_insight.png'
    ],
    en: [
        'assets/images/android/hero_home_en.jpeg',
        'assets/images/android/hero_library_en.jpeg',
        'assets/images/android/hero_timer_en.jpeg',
        'assets/images/android/hero_ai_report_en.jpeg',
        'assets/images/android/spotlight_dashboard_en.png',
        'assets/images/android/spotlight_diary_en.png',
        'assets/images/android/spotlight_card_custom.jpeg',
        'assets/figma_images/sec6_monthly_insight.png'
    ]
};

// 3. Section Default Image Mappings (KO & EN)
const SECTION_DEFAULT_IMAGES = {
    'sec1-img': {
        ko: 'assets/figma_images/sec1_bookshelf.png',
        en: 'assets/images/android/hero_library_en.jpeg'
    },
    'sec2-img': {
        ko: 'assets/figma_images/sec2_weekly_pattern.png',
        en: 'assets/images/android/hero_ai_report_en.jpeg'
    },
    'sec3-img': {
        ko: 'assets/figma_images/sec3_record_dashboard.png',
        en: 'assets/images/android/spotlight_dashboard_en.png'
    },
    'sec4-img': {
        ko: 'assets/figma_images/sec4_recommend.png',
        en: 'assets/images/android/hero_home_en.jpeg'
    },
    'sec5-img': {
        ko: 'assets/figma_images/sec5_diary.png',
        en: 'assets/images/android/spotlight_diary_en.png'
    },
    'sec6-img': {
        ko: 'assets/figma_images/sec6_monthly_insight.png',
        en: 'assets/figma_images/sec6_monthly_insight.png'
    }
};

// 4. Unified Showcase Carousel Data (10 Figma Highlight Screens)
const SHOWCASE_ITEMS = {
    ko: [
        {
            img: 'assets/figma_images/sec1_bookshelf.png',
            enImg: 'assets/images/android/hero_library_en.jpeg',
            title: '아날로그 감성의 원목 책장 뷰',
            desc: '실제 서가에 꽂아둔 듯 실감 나는 2줄 서가와 소장 도서 감상'
        },
        {
            img: 'assets/figma_images/sec2_weekly_pattern.png',
            enImg: 'assets/images/android/hero_ai_report_en.jpeg',
            title: '24시간 독서 패턴 블록 차트',
            desc: '00시부터 23시까지 나의 집중 시간대와 골드 코어타임 분석'
        },
        {
            img: 'assets/figma_images/sec2_persona.png',
            enImg: 'assets/images/android/hero_ai_report_en.jpeg',
            title: '나만의 독서 페르소나 분석',
            desc: '독서 시간대와 완독 속도로 도출하는 고유한 독서 캐릭터'
        },
        {
            img: 'assets/figma_images/sec1_timer.png',
            enImg: 'assets/images/android/hero_timer_en.jpeg',
            title: '몰입을 돕는 독서 타이머',
            desc: '자유 측정 스톱워치와 목표 카운트다운 타이머 듀얼 모드'
        },
        {
            img: 'assets/figma_images/sec3_record_dashboard.png',
            enImg: 'assets/images/android/spotlight_dashboard_en.png',
            title: '통합 독서 기록 대시보드',
            desc: '캘린더, 다이어리, 감상평을 한눈에 모아보는 기록 여정'
        },
        {
            img: 'assets/figma_images/sec5_diary.png',
            enImg: 'assets/images/android/spotlight_diary_en.png',
            title: '일일 독서 다이어리',
            desc: '책을 읽고 떠오른 단상과 사진, 12가지 감성 폰트로 소장'
        },
        {
            img: 'assets/figma_images/sec5_card_custom.png',
            enImg: 'assets/images/android/spotlight_card_custom.jpeg',
            title: '세부 요소 커스텀 카드 에디터',
            desc: '12가지 세부 조색, 그라데이션, 아날로그 종이 질감 텍스처'
        },
        {
            img: 'assets/figma_images/sec6_monthly_insight.png',
            enImg: 'assets/figma_images/sec6_monthly_insight.png',
            title: '감성 실물 책등 서가 인포그래픽',
            desc: '한 달 동안 완독한 책들이 책등 모양으로 꽂히는 비주얼 리포트'
        },
        {
            img: 'assets/figma_images/sec6_monthly_calendar.png',
            enImg: 'assets/figma_images/sec6_monthly_calendar.png',
            title: '독서 캘린더 잔디 출석 뷰',
            desc: '일자별 독서 시간과 분량을 잔디 캘린더로 직관적 확인'
        },
        {
            img: 'assets/figma_images/sec1_barcode.png',
            enImg: 'assets/images/android/hero_search_en.jpeg',
            title: '1초 바코드(ISBN) 스캔',
            desc: '카메라 스캔 한 번으로 도서 정보 및 고화질 표지 즉시 등록'
        }
    ],
    en: [
        {
            img: 'assets/images/android/hero_library_en.jpeg',
            enImg: 'assets/images/android/hero_library_en.jpeg',
            title: 'Warm Wooden Bookshelf View',
            desc: 'Realistic 2-row wooden shelf displaying all your collected books'
        },
        {
            img: 'assets/images/android/hero_ai_report_en.jpeg',
            enImg: 'assets/images/android/hero_ai_report_en.jpeg',
            title: '24-Hour Reading Pattern Heatmap',
            desc: 'Identify your peak reading hours from 00:00 to 23:00'
        },
        {
            img: 'assets/images/android/hero_ai_report_en.jpeg',
            enImg: 'assets/images/android/hero_ai_report_en.jpeg',
            title: 'Reading Persona Diagnosis',
            desc: 'Discover your unique reader persona based on your reading pace'
        },
        {
            img: 'assets/images/android/hero_timer_en.jpeg',
            enImg: 'assets/images/android/hero_timer_en.jpeg',
            title: 'Focus Reading Timer',
            desc: 'Dual modes: flexible stopwatch and goal countdown timer'
        },
        {
            img: 'assets/images/android/spotlight_dashboard_en.png',
            enImg: 'assets/images/android/spotlight_dashboard_en.png',
            title: 'Unified Reading Dashboard',
            desc: 'All your reading logs, calendars, and diaries gathered in one place'
        },
        {
            img: 'assets/images/android/spotlight_diary_en.png',
            enImg: 'assets/images/android/spotlight_diary_en.png',
            title: 'Daily Reading Diary',
            desc: 'Journal your thoughts with photos and 12 curated aesthetic fonts'
        },
        {
            img: 'assets/images/android/spotlight_card_custom.jpeg',
            enImg: 'assets/images/android/spotlight_card_custom.jpeg',
            title: 'Custom Review Card Studio',
            desc: '12 detail colors, 8-way gradients, and tactile paper overlays'
        },
        {
            img: 'assets/figma_images/sec6_monthly_insight.png',
            enImg: 'assets/figma_images/sec6_monthly_insight.png',
            title: 'Book Spine Shelf Infographic',
            desc: 'Completed books lined up as authentic spines on a wooden shelf'
        },
        {
            img: 'assets/figma_images/sec6_monthly_calendar.png',
            enImg: 'assets/figma_images/sec6_monthly_calendar.png',
            title: 'Reading Calendar Grass View',
            desc: 'Track daily reading time and attendance on a visual grass grid'
        },
        {
            img: 'assets/images/android/hero_search_en.jpeg',
            enImg: 'assets/images/android/hero_search_en.jpeg',
            title: '1-Second Barcode (ISBN) Scan',
            desc: 'Instant camera recognition for metadata, covers, and details'
        }
    ]
};

// State Variables
let currentLanguage = 'ko';
let currentSlideIndex = 0;
let heroSlideshowTimer = null;
let currentGalleryIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Management
    initLanguage();

    // 2. Header Scroll Effect
    initHeaderScroll();

    // 3. Hero Mockup Slideshow
    initHeroSlideshow();

    // 4. Screen Switcher Tabs (In Sections)
    initScreenTabs();

    // 5. Section 6 Dual Sub-View Switcher
    initSection6ViewSwitcher();

    // 6. Unified Showcase Carousel
    initGalleryShowcase();

    // 7. Scroll Reveal Animations
    initScrollReveal();
});

/**
 * Language Management & UI Translation
 */
function initLanguage() {
    const savedLang = localStorage.getItem('booktrack_lang');
    if (savedLang === 'en' || savedLang === 'ko') {
        currentLanguage = savedLang;
    } else {
        const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        currentLanguage = browserLang.startsWith('ko') ? 'ko' : 'en';
    }

    const btnKo = document.getElementById('lang-btn-ko');
    const btnEn = document.getElementById('lang-btn-en');

    if (btnKo && btnEn) {
        btnKo.addEventListener('click', () => setLanguage('ko'));
        btnEn.addEventListener('click', () => setLanguage('en'));
    }

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

    // Update Section Images based on default config
    Object.keys(SECTION_DEFAULT_IMAGES).forEach(id => {
        const imgEl = document.getElementById(id);
        if (imgEl && SECTION_DEFAULT_IMAGES[id][lang]) {
            imgEl.src = SECTION_DEFAULT_IMAGES[id][lang];
        }
    });

    // Reset active tabs in sections
    document.querySelectorAll('.screen-tab-pills').forEach(pills => {
        const tabs = pills.querySelectorAll('.screen-tab');
        tabs.forEach((tab, i) => {
            if (i === 0) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    });

    // Re-render Unified Showcase Carousel
    renderGalleryShowcase();
}

/**
 * Header Scroll Effect
 */
function initHeaderScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

/**
 * Hero Slideshow
 */
function initHeroSlideshow() {
    const slides = document.querySelectorAll('#hero-slideshow .hero-slide');
    if (slides.length <= 1) return;

    if (heroSlideshowTimer) {
        clearInterval(heroSlideshowTimer);
    }

    heroSlideshowTimer = setInterval(() => {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.add('active');
    }, 3800);
}

/**
 * Screen Switcher Tabs in Feature Sections
 */
function initScreenTabs() {
    document.querySelectorAll('.screen-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            const parentPills = btn.closest('.screen-tab-pills');
            if (parentPills) {
                parentPills.querySelectorAll('.screen-tab').forEach(b => b.classList.remove('active'));
            }
            btn.classList.add('active');

            const targetId = btn.getAttribute('data-target');
            const targetImg = document.getElementById(targetId);
            if (!targetImg) return;

            const koSrc = btn.getAttribute('data-src');
            const enSrc = btn.getAttribute('data-en-src');
            const newSrc = (currentLanguage === 'en' && enSrc) ? enSrc : koSrc;

            targetImg.style.opacity = '0.3';
            setTimeout(() => {
                targetImg.src = newSrc;
                targetImg.style.opacity = '1';
            }, 150);
        });
    });
}

/**
 * Section 6 Dual Sub-View Switcher
 */
function initSection6ViewSwitcher() {
    const btnInsight = document.getElementById('btn-view-insight');
    const btnCalendar = document.getElementById('btn-view-calendar');
    const btnAlltime = document.getElementById('btn-view-alltime');
    const sec6Img = document.getElementById('sec6-img');

    if (!sec6Img) return;

    const switchView = (btn, src) => {
        [btnInsight, btnCalendar, btnAlltime].forEach(b => {
            if (b) b.classList.remove('active');
        });
        if (btn) btn.classList.add('active');

        sec6Img.style.opacity = '0.3';
        setTimeout(() => {
            sec6Img.src = src;
            sec6Img.style.opacity = '1';
        }, 150);
    };

    if (btnInsight) {
        btnInsight.addEventListener('click', () => {
            switchView(btnInsight, 'assets/figma_images/sec6_monthly_insight.png');
        });
    }

    if (btnCalendar) {
        btnCalendar.addEventListener('click', () => {
            switchView(btnCalendar, 'assets/figma_images/sec6_monthly_calendar.png');
        });
    }

    if (btnAlltime) {
        btnAlltime.addEventListener('click', () => {
            switchView(btnAlltime, 'assets/figma_images/sec6_alltime_record.png');
        });
    }
}

/**
 * Unified Showcase Carousel
 */
function initGalleryShowcase() {
    renderGalleryShowcase();

    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => scrollGallery(-1));
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => scrollGallery(1));
    }
}

function renderGalleryShowcase() {
    const track = document.getElementById('gallery-track');
    const dotsContainer = document.getElementById('carousel-dots');
    if (!track) return;

    const items = SHOWCASE_ITEMS[currentLanguage] || SHOWCASE_ITEMS.ko;
    track.innerHTML = '';
    if (dotsContainer) dotsContainer.innerHTML = '';

    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';

        const imgSrc = (currentLanguage === 'en' && item.enImg) ? item.enImg : item.img;

        card.innerHTML = `
            <div class="gallery-mockup">
                <img src="${imgSrc}" alt="${item.title}" class="gallery-img" loading="lazy">
            </div>
            <div class="gallery-meta">
                <h4 class="gallery-card-title">${item.title}</h4>
                <p class="gallery-card-desc">${item.desc}</p>
            </div>
        `;
        track.appendChild(card);

        if (dotsContainer) {
            const dot = document.createElement('div');
            dot.className = index === 0 ? 'dot active' : 'dot';
            dot.addEventListener('click', () => scrollToGalleryIndex(index));
            dotsContainer.appendChild(dot);
        }
    });

    currentGalleryIndex = 0;
    updateGalleryPosition();
}

function scrollGallery(direction) {
    const items = SHOWCASE_ITEMS[currentLanguage] || SHOWCASE_ITEMS.ko;
    currentGalleryIndex += direction;
    if (currentGalleryIndex < 0) currentGalleryIndex = items.length - 1;
    if (currentGalleryIndex >= items.length) currentGalleryIndex = 0;

    updateGalleryPosition();
}

function scrollToGalleryIndex(index) {
    currentGalleryIndex = index;
    updateGalleryPosition();
}

function updateGalleryPosition() {
    const track = document.getElementById('gallery-track');
    if (!track) return;

    const cardWidth = 304; // 280px + 24px gap
    track.style.transform = `translateX(-${currentGalleryIndex * cardWidth}px)`;

    const dots = document.querySelectorAll('#carousel-dots .dot');
    dots.forEach((dot, idx) => {
        if (idx === currentGalleryIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

/**
 * Scroll Reveal Animations
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}
