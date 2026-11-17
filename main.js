/* ==========================================================
   BookTrack Official Web Introduction — Interactive Logic
   Features: Bilingual (KO/EN) Text & Image Swap, Section Tabs,
             Store Promo (6 Cuts) & Insta Carousel (8 Cuts)
   ========================================================== */

const TRANSLATIONS = {
    ko: {
        page_title: "북트랙 (BookTrack) - 독서를 기록하고, 감상을 남기고, 습관으로 만드는 올인원 독서 앱",
        page_desc: "실물 책등으로 채워지는 감성 서재부터 몰입 타이머, AI 독서·기록 페르소나 24종 도감, 감상평 카드 스튜디오, 입체적 독서 통계와 실시간 독서 모임까지 함께하는 올인원 독서 앱 북트랙(BookTrack).",
        tagline: "ALL-IN-ONE READING COMPANION",

        // Navigation
        nav_library: "내 서재",
        nav_timer: "독서 타이머",
        nav_persona: "AI 페르소나",
        nav_records: "감상 카드",
        nav_insights: "독서 통계",
        nav_social: "독서 모임",
        nav_showcase: "쇼케이스",
        btn_download: "앱 다운로드",

        // Hero Section
        hero_badge: "북트랙",
        hero_title: "독서를 <span class=\"royal-highlight\">기록하고</span>,<br><span class=\"royal-highlight\">감상을</span> 남기고,<br><span class=\"gradient-text\">습관으로 만드는</span> 올인원 독서 앱",
        hero_desc: "실물 책등으로 채워지는 감성 서재부터 몰입 타이머, 1.5초 AI 독서·기록 페르소나 진단, 감성 문장 카드 스튜디오까지. 북트랙과 함께 나만의 독서 여정을 차곡차곡 쌓아보세요.",
        hero_tag_bookshelf: "감성 실물 서재 & 타이머",
        hero_tag_card: "독서 기록",
        hero_tag_persona: "AI 독서·기록 페르소나 24종",
        hero_callout1_t: "연속 독서 스트릭",
        hero_callout1_d: "3·7·14·30일 마일스톤",
        hero_callout2_t: "24종 부콜 페르소나",
        hero_callout2_d: "1.5초 AI 독서·기록 진단",

        // Section 1: 내 서재 & 도서 탐색
        sec1_title: "나만의 취향으로 채우는 <span class=\"royal-highlight\">감성 실물 책장</span>과 <span class=\"gradient-text\">1초 도서 등록</span>",
        sec1_lead: "\"읽고 싶은 책부터 완독한 책까지, 실제 책등이 꽂히는 2줄 원목 서가와 간편한 도서 검색으로 완성하는 나만의 서재\"",
        sec1_f1_title: "실측 책등 렌더링 책장 뷰 & 그리드 뷰",
        sec1_f1_desc: "실제 원목 책장에 꽂아둔 듯 실감 나는 2줄 책등 서가(BOOKSHELF)와 카드 그리드 뷰(GRID)를 즉시 전환할 수 있습니다. 읽는 중·완독·읽을 예정 상태별 필터링과 영구 독서 이력(ReadingHistory) 보존 아키텍처를 지원합니다.",
        sec1_f2_title: "간편 도서 검색 & 추가 위저드",
        sec1_f2_desc: "국내외 베스트셀러 탐색과 도서 검색 한 번으로 도서 메타데이터를 즉시 불러옵니다. 서재 추가 위저드를 통해 과거에 읽었던 책의 독서 기간과 누적 시간도 손쉽게 기록할 수 있습니다.",
        sec1_f3_title: "125% 확대 북 커버 & 내 독서 정보 공유",
        sec1_f3_desc: "시원하게 확대한 125% 북 커버와 상시 노출되는 [책 읽기] · [기록하기] 버튼을 제공합니다. [내 독서 정보] 탭에서 총 독서 시간, 완독률, 최근 7회 독서 흐름 차트를 확인하고 깔끔한 공유 카드로 저장하세요.",
        sec1_tab1: "실물 책등 책장 뷰",
        sec1_tab2: "그리드/리스트 뷰",
        sec1_tab3: "도서 탐색",
        sec1_tab4: "도서 상세 & 독서 정보",
        sec1_tab5: "독서 정보 공유 모달",

        // Section 2: 집중 독서 타이머
        sec2_title: "오롯이 책에 집중하는 <span class=\"royal-highlight\">스마트 독서 타이머</span>와 <span class=\"gradient-text\">목표 루틴</span>",
        sec2_lead: "\"스톱워치와 목표 카운트다운, 실시간 페이지 진도율 기록으로 매일의 독서 몰입 시간을 차곡차곡 쌓아보세요\"",
        sec2_f1_title: "스톱워치 & 목표 카운트다운 듀얼 모드",
        sec2_f1_desc: "자유롭게 독서 시간을 측정하는 스톱워치와 목표 시간을 설정해 몰입도를 높이는 카운트다운 타이머를 원터치로 전환합니다. 절전 집중 모드(화면 가리기)와 백그라운드 시간 유지 기능을 지원합니다.",
        sec2_f2_title: "실시간 페이지 & 퍼센트(%) 진도율 자동 계산",
        sec2_f2_desc: "독서 종료 시 읽은 페이지 수 또는 진행률(%) 슬라이더를 입력하면 총 누적 독서 시간과 페이지당 평균 소요 시간이 자동 계산되어 클라우드에 실시간 동기화됩니다.",
        sec2_f3_title: "월간 & 연간 독서 목표 설계",
        sec2_f3_desc: "이달의 목표 권수, 목표 독서 시간, 독서 일수 및 연간 목표 권수를 설정하고 실시간 달성률 프로그레스 바로 흔들림 없는 독서 습관을 완성합니다.",
        sec2_tab1: "몰입 독서 타이머",
        sec2_tab2: "통계 프리뷰",
        sec2_tab3: "이달의 독서 목표 설정",

        // Section 3: AI 페르소나 & 24종 도감
        sec3_title: "AI가 분석하는 <span class=\"royal-highlight\">독서 & 기록 페르소나</span>와 <span class=\"gradient-text\">24종 부콜 도감</span>",
        sec3_lead: "\"1.5초 초고속 AI 성향 진단부터, 읽고 기록할수록 해금되는 24종 부콜(BookOwl) 캐릭터 컬렉션과 맞춤 도서 추천까지\"",
        owl_1: "잡식성 올라운더",
        owl_2: "SF 탐험가",
        owl_3: "철학적 사색가",
        owl_4: "감성 아카이비스트",
        owl_5: "심야의 사색가",
        owl_6: "병렬 독서가",
        sec3_f1_title: "3대 영역 24종 부콜(BookOwl) 페르소나 도감",
        sec3_f1_desc: "홈 독서 성향(10종), 독서 기록 문체(9종), 주간 24시간 코어타임(5종)까지 총 24종의 입체적인 부콜 캐릭터 도감을 제공합니다. 오직 나의 실측 독서 데이터와 기록 습관으로만 정직하게 해금됩니다.",
        sec3_f2_title: "1.5초 초고속 AI 성향 분석 & 공유 카드",
        sec3_f2_desc: "독서 스타일과 기록 스타일을 각각 독립된 초경량 AI 엔진으로 1.5초 이내에 진단합니다. 상징 아이템을 장착한 3D 부콜 일러스트와 심층 선정 이유를 여백 없는 고화질 카드로 저장하고 공유하세요.",
        sec3_f3_title: "내 서재 기반 AI 맞춤 도서 큐레이션",
        sec3_f3_desc: "내 서재의 선호 장르 비중과 최근 완독 패턴을 정밀 분석하여, 다음에 읽을 인생 책을 높은 정확도로 추천해 드립니다.",
        sec3_tab1: "24종 페르소나 도감",
        sec3_tab2: "독서 성향 분석 모달",
        sec3_tab3: "기록 문체 분석 모달",
        sec3_tab4: "내 서재 맞춤 추천",
        sec3_tab5: "스토어 페르소나 컷",

        // Section 4: 독서 기록 & 감성 카드 스튜디오
        sec4_title: "독서의 모든 기록을 <span class=\"royal-highlight\">한눈에 차곡차곡</span>, 마음에 남은 문장은 <span class=\"gradient-text\">카드로 예쁘게</span>",
        sec4_lead: "\"마음에 남은 문장 기록부터 감성 폰트·색상 조색 다이어리, 인스타그램 맞춤 비율(1:1, 4:5, 9:16) 리뷰 카드 제작까지\"",
        sec4_f1_title: "통합 독서 기록 대시보드 & 북 넘김 뷰어",
        sec4_f1_desc: "작성한 다이어리와 감상평 개수를 한눈에 집계하고, 날짜별 독서 캘린더와 도서별 모아보기를 제공합니다. 감상평 탭에서는 실제 책장을 넘기듯(← 이전 장 | 다음 장 →) 내 서평들을 감상할 수 있습니다.",
        sec4_f2_title: "책 속 문장 기록 & 블록형 에디터",
        sec4_f2_desc: "책 속 마음에 와닿은 구절을 손쉽게 기록하고, 0.5점 단위 별점 드래그, 다중 감정 태그(영감을 주는, 생각에 잠기는 등), 구조화된 생각 블록으로 깊이 있는 서평을 남기세요.",
        sec4_f3_title: "커스텀 다이어리 & 비율 프리셋 카드 스튜디오",
        sec4_f3_desc: "12종 감성 폰트, 세부 요소 조색, 빈티지 페이퍼·모던 다크·미드나잇 블루 테마를 지원하며, 1:1(정방형), 4:5(피드), 9:16(스토리) 비율 크롭과 외곽 여백 없는 고해상도 카드 저장을 지원합니다.",
        sec4_tab1: "통합 독서 기록 피드",
        sec4_tab2: "감상 카드 테마 스튜디오",
        sec4_tab3: "감정 태그 & 문장 에디터",
        sec4_tab4: "일일 독서 다이어리",
        sec4_tab5: "비율 프리셋 이미지 자르기",

        // Section 5: 입체적 독서 통계 & 올타임 리포트
        sec5_title: "숫자와 차트로 보는 <span class=\"royal-highlight\">나만의 독서 통계</span>와 <span class=\"gradient-text\">인생 책 리포트</span>",
        sec5_lead: "\"연속 독서 챌린지부터 24시간 집중 히트맵, 월간 실물 책등 결산 리포트, 나의 인생 책 TOP 3까지 한눈에 확인하세요\"",
        sec5_view_insight: "월간 책등 리포트",
        sec5_view_calendar: "연속 독서 스트릭",
        sec5_view_heatmap: "24시간 히트맵",
        sec5_view_alltime: "인생 책 TOP 3",
        sec5_f1_title: "감성 실물 책등 서가 월간 결산 리포트",
        sec5_f1_desc: "한 달 동안 완독한 책들이 실제 책등 모양으로 서가에 나란히 꽂히는 인포그래픽 결산 리포트와 시간당 독서 페이스(p/h), 전월 대비 성장을 한눈에 비교합니다.",
        sec5_f2_title: "24시간 독서 패턴 블록 히트맵 & 연속 독서 스트릭",
        sec5_f2_desc: "00시부터 23시까지 24개 시간대 히트맵으로 내가 가장 몰입하는 황금 코어타임을 분석하고, 불꽃 스트릭 배너(3일·7일·14일·30일 마스터)로 매일의 루틴을 지킵니다.",
        sec5_f3_title: "역대 전체(All-Time) 독서 기록 & 나의 인생 책 TOP 3",
        sec5_f3_desc: "누적 완독 권수, 누적 독서 시간, 완독 페이지, 작성 기록 수를 통합 집계하고, 가장 오랜 시간 몰입한 나의 인생 책 TOP 3와 분야별 도넛 차트를 선보입니다.",

        // Section 6: 독서 모임 & 63종 업적
        sec6_title: "친구와 함께 읽는 <span class=\"royal-highlight\">실시간 독서 모임</span>과 <span class=\"gradient-text\">63종 업적 컬렉션</span>",
        sec6_lead: "\"실시간 랭킹과 서재 구경으로 함께 읽는 독서 모임부터 7개 카테고리 63종 도전 과제까지\"",
        bento_club_tag: "LIVE BOOK CLUB",
        bento_achieve_tag: "63 CHALLENGES",
        sec6_bento1_title: "👥 실시간 독서 그룹 & 동료 서재 구경",
        sec6_bento1_desc: "간편하게 독서 모임을 만들고 주간·월간·누적 독서 시간 실시간 랭킹과 채팅을 즐기세요. 그룹원의 프로필을 눌러 동료의 서재를 구경하고 내 서재에 바로 담을 수 있습니다.",
        sec6_bento1_tab1: "그룹원 독서 현황 & 서재 구경",
        sec6_bento1_tab2: "참여 중인 독서 그룹",
        sec6_bento2_title: "🏅 7개 카테고리 63종 업적 & 6대 티어 배지",
        sec6_bento2_desc: "독서량(10종), 독서 시간(9종), 독서 습관(9종), 목표 달성(6종), 기록가(9종), 탐험가(4종), 소셜·히든 이스터에그(16종)까지 총 63개 도전 과제를 달성하며 독서 성취감을 만끽하세요.",

        // Section 7: Gallery
        gallery_sec_tag: "7️⃣ OFFICIAL STORE & INSTA SHOWCASE",
        gallery_sec_title: "한눈에 감상하는 <span class=\"royal-highlight\">북트랙 스토어</span> & <span class=\"gradient-text\">스토리 쇼케이스</span>",
        gallery_sec_subtitle: "App Store와 Google Play 공식 프로모션 하이라이트와 인스타그램 스토리텔링 카드뉴스를 슬라이드로 만나보세요.",
        gallery_tab_store: "공식 스토어 하이라이트 (6컷)",
        gallery_tab_insta: "북트랙 인스타 스토리 (8컷)",

        // Section 8: Download & Footer
        cta_sec_tag: "START YOUR READING HABIT TODAY",
        cta_sec_title: "올해는 북트랙과 함께<br><span class=\"royal-highlight\">평생 가는 독서 습관</span>을 시작하세요",
        cta_sec_text: "지금 App Store와 Google Play에서 '북트랙'을 무료로 다운로드하고, 나만의 감성 원목 서재와 AI 독서 페르소나, 인생 책 TOP 3를 완성해 보세요!",
        mobile_bar_sub: "올인원 독서 기록 & AI 페르소나",
        footer_desc: "독서를 기록하고, 감상을 남기고, 습관으로 만드는 올인원 스마트 독서 비서입니다.",
        footer_legal_title: "지원 및 약관",
        footer_privacy: "개인정보 처리방침 (Privacy Policy)",
        footer_terms: "서비스 이용약관 (Terms of Service)",
        footer_contact_title: "공식 스토어 및 문의",
        footer_email: "이메일: namsu1482@gmail.com",
        footer_copyright: "© 2026 BookTrack (namsu1482). All rights reserved. BookTrack is developed independently."
    },
    en: {
        page_title: "BookTrack - Track Your Reading, Capture Your Thoughts, Build a Lifelong Habit",
        page_desc: "From a realistic wooden spine bookshelf and focus timer to 24 AI BookOwl personas, aesthetic quote cards, and reading analytics—experience BookTrack.",
        tagline: "ALL-IN-ONE READING COMPANION",

        // Navigation
        nav_library: "My Library",
        nav_timer: "Focus Timer",
        nav_persona: "AI Persona",
        nav_records: "Quote Cards",
        nav_insights: "Analytics",
        nav_social: "Book Clubs",
        nav_showcase: "Showcase",
        btn_download: "Download App",

        // Hero Section
        hero_badge: "BookTrack",
        hero_title: "<span class=\"royal-highlight\">Track</span> Your Reading,<br><span class=\"royal-highlight\">Capture</span> Your Thoughts,<br>Build a <span class=\"gradient-text\">Lifelong Habit</span>",
        hero_desc: "From a realistic spine bookshelf and focus timer to 1.5s AI reading persona diagnostics and custom quote cards—experience your complete reading journey with BookTrack.",
        hero_tag_bookshelf: "Realistic Shelf & Timer",
        hero_tag_card: "Reading Logs",
        hero_tag_persona: "24 AI Reading Personas",
        hero_callout1_t: "Daily Reading Streak",
        hero_callout1_d: "3·7·14·30-Day Milestones",
        hero_callout2_t: "24 BookOwl Personas",
        hero_callout2_d: "1.5s AI Reading & Log Analysis",

        // Section 1
        sec1_title: "Your Personal <span class=\"royal-highlight\">Realistic Bookshelf</span> & <span class=\"gradient-text\">Instant Book Search</span>",
        sec1_lead: "\"From your wish list to completed reads, admire realistic book spines on a 2-row wooden shelf and add books in seconds\"",
        sec1_f1_title: "Realistic Spine Bookshelf & Grid Views",
        sec1_f1_desc: "Switch effortlessly between a realistic 2-row wooden spine shelf (BOOKSHELF) and a clean card grid (GRID). Filter by Reading, Completed, or To Read with permanent ReadingHistory preservation.",
        sec1_f2_title: "Instant Book Search & Add Wizard",
        sec1_f2_desc: "Browse global bestsellers or search books to fetch metadata instantly. Log past reads with custom dates and reading hours via the onboarding wizard.",
        sec1_f3_title: "125% Expanded Cover & Reading Stats Share",
        sec1_f3_desc: "Enjoy a bold 125% cover header with quick [Read Now] and [Write Log] buttons. Check total hours, completion progress, and 7-session flow charts in [My Reading Info] and share as a clean card.",
        sec1_tab1: "Wooden Spine Shelf",
        sec1_tab2: "Grid & List View",
        sec1_tab3: "Book Discovery",
        sec1_tab4: "Book Detail & Stats",
        sec1_tab5: "Share Reading Stats Card",

        // Section 2
        sec2_title: "Stay Fully Immersed with the <span class=\"royal-highlight\">Smart Reading Timer</span> & <span class=\"gradient-text\">Goal Routines</span>",
        sec2_lead: "\"Build a steady daily reading habit with dual stopwatch/countdown modes and real-time page progress logging\"",
        sec2_f1_title: "Stopwatch & Target Countdown Dual Mode",
        sec2_f1_desc: "Switch between a flexible stopwatch and a goal-driven countdown timer with one tap. Includes screen-dimming focus mode and reliable background timing.",
        sec2_f2_title: "Real-Time Page & Percentage (%) Progress Sync",
        sec2_f2_desc: "Log pages read or slide your completion percentage after each session to automatically calculate reading speed and sync across devices.",
        sec2_f3_title: "Monthly & Annual Reading Goal Planner",
        sec2_f3_desc: "Set monthly book count, reading hours, active days, and annual targets with real-time progress gauges.",
        sec2_tab1: "Focus Reading Timer",
        sec2_tab2: "Statistics Preview",
        sec2_tab3: "Monthly Goal Settings",

        // Section 3
        sec3_title: "AI-Powered <span class=\"royal-highlight\">Reading & Writing Personas</span> & <span class=\"gradient-text\">24 BookOwl Collection</span>",
        sec3_lead: "\"Ultra-fast 1.5s AI habit diagnosis, 24 unlockable 3D BookOwl characters, and personalized book recommendations\"",
        owl_1: "Omnivorous All-Rounder",
        owl_2: "Sci-Fi Explorer",
        owl_3: "Philosophical Thinker",
        owl_4: "Emotional Archivist",
        owl_5: "Midnight Owl Reader",
        owl_6: "Parallel Reader",
        sec3_f1_title: "24 BookOwl Persona Catalog Across 3 Domains",
        sec3_f1_desc: "Unlock 24 3D BookOwl characters spanning Home Reading Style (10), Writing Style (9), and 24H Core-Time Habits (5)—unlocked strictly through your real reading data.",
        sec3_f2_title: "1.5-Second Ultra-Fast AI Diagnosis & Share Card",
        sec3_f2_desc: "Independent lightweight AI engines analyze your reading and writing personas in under 1.5 seconds. Save and share borderless high-res persona cards.",
        sec3_f3_title: "Library-Driven AI Book Recommendations",
        sec3_f3_desc: "Analyzes your genre distribution and recent completions to curate your next favorite book with high precision.",
        sec3_tab1: "24 Persona Catalog",
        sec3_tab2: "Reading Persona Modal",
        sec3_tab3: "Writing Style Modal",
        sec3_tab4: "AI Book Picks",
        sec3_tab5: "Store Persona Showcase",

        // Section 4
        sec4_title: "All Your Reading Logs <span class=\"royal-highlight\">in One Place</span>, Favorite Quotes <span class=\"gradient-text\">in Aesthetic Cards</span>",
        sec4_lead: "\"From capturing favorite quotes to custom mood diaries and Instagram-ready (1:1, 4:5, 9:16) review cards\"",
        sec4_f1_title: "Unified Reading Log Dashboard & Page-Flip Viewer",
        sec4_f1_desc: "View all diaries and reviews on an interactive calendar, or flip through your book reviews page by page like a real book.",
        sec4_f2_title: "Quote Capture & Block Editor",
        sec4_f2_desc: "Easily record meaningful quotes from your books. Add 0.5-step star ratings, multi-mood tags, and structured thought blocks to write insightful reviews.",
        sec4_f3_title: "Custom Diary & Aspect-Ratio Card Studio",
        sec4_f3_desc: "Customize 12 fonts, text/box colors, and Vintage Paper, Modern Dark, or Midnight Blue themes. Crop in 1:1, 4:5, or 9:16 ratios for social sharing.",
        sec4_tab1: "Unified Reading Log",
        sec4_tab2: "Shareable Card Studio",
        sec4_tab3: "Mood Tags & Quote Editor",
        sec4_tab4: "Daily Reading Diary",
        sec4_tab5: "Aspect Ratio Crop",

        // Section 5
        sec5_title: "Visualize Your Growth with <span class=\"royal-highlight\">Reading Analytics</span> & <span class=\"gradient-text\">All-Time Reports</span>",
        sec5_lead: "\"From daily reading streaks and 24-hour focus heatmaps to monthly book-spine shelves and your Top 3 life books\"",
        sec5_view_insight: "Monthly Spine Report",
        sec5_view_calendar: "Reading Streak",
        sec5_view_heatmap: "24H Focus Heatmap",
        sec5_view_alltime: "Top 3 Books",
        sec5_f1_title: "Monthly Book Spine Shelf Infographic",
        sec5_f1_desc: "Books finished each month line up as realistic spines on your wooden shelf alongside pages-per-hour (p/h) pace and month-over-month growth.",
        sec5_f2_title: "24-Hour Focus Heatmap & Reading Streaks",
        sec5_f2_desc: "Discover your golden focus hours across 00:00–23:00 and stay motivated with 3, 7, 14, and 30-day streak milestone badges.",
        sec5_f3_title: "All-Time Reading Record & Top 3 Life Books",
        sec5_f3_desc: "Track lifetime books completed, total hours, pages read, and discover your Top 3 most-immersed books with genre breakdown charts.",

        // Section 6
        sec6_title: "Read Together in <span class=\"royal-highlight\">Live Book Clubs</span> & Unlock <span class=\"gradient-text\">63 Achievements</span>",
        sec6_lead: "\"Join live reading groups with real-time rankings and shelf browsing, plus 63 challenges across 7 categories\"",
        bento_club_tag: "LIVE BOOK CLUB",
        bento_achieve_tag: "63 CHALLENGES",
        sec6_bento1_title: "👥 Live Reading Groups & Friend Library Browsing",
        sec6_bento1_desc: "Easily start a book club and enjoy real-time reading leaderboards and chat. Tap member profiles to browse their bookshelves and add favorites to your own.",
        sec6_bento1_tab1: "Member Status & Library",
        sec6_bento1_tab2: "Active Book Club",
        sec6_bento2_title: "🏅 63 Achievements Across 7 Categories & 6 Tiers",
        sec6_bento2_desc: "Unlock Bronze, Silver, Gold, Platinum, Diamond, and Legend badges across Volume, Time, Habit, Goals, Archiving, Exploration, and Hidden Easter Eggs.",

        // Section 7
        gallery_sec_tag: "7️⃣ OFFICIAL STORE & INSTA SHOWCASE",
        gallery_sec_title: "Explore the Official <span class=\"royal-highlight\">Store Promo</span> & <span class=\"gradient-text\">Story Showcase</span>",
        gallery_sec_subtitle: "Swipe through our official App Store & Google Play promotional highlights and 8-part storytelling cards.",
        gallery_tab_store: "Official Store Highlights (6 Cuts)",
        gallery_tab_insta: "BookTrack Story Carousel (8 Cuts)",

        // Section 8
        cta_sec_tag: "START YOUR READING HABIT TODAY",
        cta_sec_title: "Start Your <span class=\"royal-highlight\">Lifelong Reading Habit</span><br>with BookTrack Today",
        cta_sec_text: "Download BookTrack for free on the App Store and Google Play, and build your personal wooden bookshelf and AI reading persona today!",
        mobile_bar_sub: "All-in-One Reading Log & AI Persona",
        footer_desc: "Your all-in-one smart reading companion to track books, capture thoughts, and build a lifelong habit.",
        footer_legal_title: "Support & Legal",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_contact_title: "Official Stores & Contact",
        footer_email: "Email: namsu1482@gmail.com",
        footer_copyright: "© 2026 BookTrack (namsu1482). All rights reserved. BookTrack is developed independently."
    }
};

// Hero Slideshow Images (KO / EN)
const HERO_IMAGES = {
    ko: [
        'screen_captures/03_home/SCR-006_HomeScreen.png',
        'screen_captures/04_library/SCR-007_LibraryScreen.png',
        'assets/figma_images/sec1_timer.png',
        'screen_captures/10_social/SCR-025_PersonaCatalogScreen.png',
        'screen_captures/08_record/SCR-014_ReviewScreen.png',
        'screen_captures/08_record/SCR-020_ReviewSavePreviewScreen.png',
        'screen_captures/09_insights/SCR-028_InsightsFinishedBookshelfView.png',
        'screen_captures/09_insights/SCR-013_AllTimeReadingRecordScreen.png'
    ],
    en: [
        'assets/images/android/hero_home_en.jpeg',
        'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_25 (3).png',
        'assets/images/android/hero_timer_en.jpeg',
        'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_26 (7).png',
        'storeData/android/en/08_reading_log_all.png',
        'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_26 (5).png',
        'screen_captures/09_insights/SCR-028_InsightsFinishedBookshelfView.png',
        'screen_captures/09_insights/SCR-013_AllTimeReadingRecordScreen.png'
    ]
};

// Default Section Mockup Images (KO / EN)
const SECTION_DEFAULT_IMAGES = {
    'hero-rear-img': {
        ko: 'screen_captures/04_library/SCR-007_LibraryScreen.png',
        en: 'assets/images/android/hero_library_en.jpeg'
    },
    'sec1-img': {
        ko: 'screen_captures/04_library/SCR-007_LibraryScreen.png',
        en: 'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_25 (3).png'
    },
    'sec2-img': {
        ko: 'assets/figma_images/sec1_timer.png',
        en: 'assets/images/android/hero_timer_en.jpeg'
    },
    'sec3-img': {
        ko: 'screen_captures/10_social/SCR-025_PersonaCatalogScreen.png',
        en: 'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_26 (7).png'
    },
    'sec4-img': {
        ko: 'screen_captures/08_record/SCR-014_ReviewScreen.png',
        en: 'storeData/android/en/08_reading_log_all.png'
    },
    'sec5-img': {
        ko: 'screen_captures/09_insights/SCR-028_InsightsFinishedBookshelfView.png',
        en: 'screen_captures/09_insights/SCR-028_InsightsFinishedBookshelfView.png'
    },
    'bento-group-img': {
        ko: 'screen_captures/11_group/SCR-024_MemberLibraryScreen.png',
        en: 'screen_captures/11_group/SCR-024_MemberLibraryScreen.png'
    },
    'bento-achieve-img': {
        ko: 'screen_captures/10_social/SCR-022_AchievementScreen.png',
        en: 'assets/images/android/achievements.jpeg'
    },
    'outro-promo-img': {
        ko: 'storeData/insta_carousel/08_Insta_Outro_CTA.png',
        en: 'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_24 (1).png'
    }
};

// Section 7 Showcase Gallery Data (Store 6 Cuts & Insta 8 Cuts)
const GALLERY_DATA = {
    store: {
        ko: [
            {
                img: 'storeData/android/v113_screenshots/01_HomeScreen.png',
                title: '01. 올인원 독서 홈 & 감성 서재',
                desc: '독서를 기록하고, 감상을 남기고, 습관으로 만드는 앱'
            },
            {
                img: 'storeData/android/v113_screenshots/02_PersonaScreen.png',
                title: '02. AI 독서 & 기록 페르소나',
                desc: 'AI가 분석하는 나의 독서 성향과 24종 부콜 캐릭터 도감'
            },
            {
                img: 'storeData/ios/v113_screenshots/03_RecordScreen.png',
                title: '03. 한눈에 모아보는 독서 기록',
                desc: '독서 캘린더, 일일 다이어리, 책장 넘김 서평 뷰어'
            },
            {
                img: 'storeData/android/v113_screenshots/04_ReviewCardScreen.png',
                title: '04. 문장 스크랩 & 감성 생각 카드',
                desc: '마음에 남은 문장을 테마와 비율 크롭으로 예쁘게 저장'
            },
            {
                img: 'storeData/android/v113_screenshots/05_TimerScreen.png',
                title: '05. 오롯이 책에 집중하는 독서 타이머',
                desc: '스톱워치 & 카운트다운과 실시간 페이지 진도율 기록'
            },
            {
                img: 'storeData/android/v113_screenshots/06_InsightsScreen.png',
                title: '06. 숫자와 차트로 보는 독서 통계',
                desc: '연속 독서 챌린지, 주간·월간 차트, 인생 책 TOP 3'
            }
        ],
        en: [
            {
                img: 'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_24 (1).png',
                title: '01. Track Your Reading Journey',
                desc: 'Log books, write reviews, and build a reading habit'
            },
            {
                img: 'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_26 (7).png',
                title: '02. AI-Powered Reading Report',
                desc: 'Discover your reading persona, habits, and book picks'
            },
            {
                img: 'storeData/android/en/08_reading_log_all.png',
                title: '03. All Your Reading Logs at a Glance',
                desc: 'Calendar, daily diaries, and writing style analysis'
            },
            {
                img: 'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_26 (5).png',
                title: '04. Turn Reviews into Shareable Cards',
                desc: 'Choose stylish themes and crop ratios for social sharing'
            },
            {
                img: 'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_25 (2).png',
                title: '05. Reading Goals & Time at a Glance',
                desc: 'Track monthly goals, reading time, and annual progress'
            },
            {
                img: 'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_25 (3).png',
                title: '06. Keep Your Library Organized',
                desc: 'Manage your collection by Reading, To Read, and Completed'
            }
        ]
    },
    insta: {
        ko: [
            {
                img: 'storeData/insta_carousel/01_Insta_Hook_Home.png',
                title: '스토리 01. 독서 습관의 시작',
                desc: '독서를 기록하고 습관으로 만드는 북트랙 첫걸음'
            },
            {
                img: 'storeData/insta_carousel/02_Insta_Bookshelf.png',
                title: '스토리 02. 나만의 감성 원목 책장',
                desc: '실제 책등이 꽂히는 2줄 서가와 깔끔한 그리드 뷰'
            },
            {
                img: 'storeData/insta_carousel/03_Insta_Statistics.png',
                title: '스토리 03. 한눈에 보는 독서 성장',
                desc: '연속 독서 스트릭과 주간·월간 입체 차트 분석'
            },
            {
                img: 'storeData/insta_carousel/04_Insta_Timer.png',
                title: '스토리 04. 몰입을 돕는 스마트 타이머',
                desc: '스톱워치와 카운트다운으로 기록하는 독서 시간'
            },
            {
                img: 'storeData/insta_carousel/05_Insta_Custom_Editor.png',
                title: '스토리 05. 감성 다이어리 & 카드 조색',
                desc: '12종 폰트와 배경 테마로 꾸미는 나만의 독서 카드'
            },
            {
                img: 'storeData/insta_carousel/06_Insta_Reading_Record.png',
                title: '스토리 06. 차곡차곡 쌓이는 독서 아카이브',
                desc: '감동적인 문장 스크랩과 감정 태그 기록'
            },
            {
                img: 'storeData/insta_carousel/07_Insta_AI_Persona.png',
                title: '스토리 07. 24종 부콜 AI 페르소나',
                desc: '나의 독서 시간대와 문체를 분석하는 부콜 캐릭터'
            },
            {
                img: 'storeData/insta_carousel/08_Insta_Outro_CTA.png',
                title: '스토리 08. 지금 북트랙을 시작하세요',
                desc: 'App Store & Google Play 무료 다운로드'
            }
        ],
        en: [
            {
                img: 'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_24 (1).png',
                title: 'Story 01. Start Your Reading Journey',
                desc: 'All-in-one reading tracker and habit builder'
            },
            {
                img: 'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_25 (3).png',
                title: 'Story 02. Realistic Bookshelf & Grid',
                desc: 'Organize all your books by reading status'
            },
            {
                img: 'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_25 (2).png',
                title: 'Story 03. Monthly & Annual Goals',
                desc: 'Stay motivated with real-time goal progress'
            },
            {
                img: 'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_26 (6).png',
                title: 'Story 04. Instant Search & AI Picks',
                desc: 'Scan ISBN barcodes and explore tailored picks'
            },
            {
                img: 'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_25 (4).png',
                title: 'Story 05. Deep Thoughts & Quote Scrap',
                desc: 'Rate books, add mood tags, and capture key lines'
            },
            {
                img: 'storeData/android/en/09_reading_diary.png',
                title: 'Story 06. Aesthetic Reading Diary',
                desc: 'Photos, mood themes, and flexible formatting'
            },
            {
                img: 'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_26 (5).png',
                title: 'Story 07. Shareable Review Cards',
                desc: 'Vintage Paper, Modern Dark, and social crop ratios'
            },
            {
                img: 'storeData/android/en/ChatGPT Image 2026년 8월 25일 오후 05_11_26 (7).png',
                title: 'Story 08. AI Reading Persona Report',
                desc: 'Unlock 24 BookOwl personas and reading insights'
            }
        ]
    }
};

let currentLanguage = 'ko';
let currentSlideIndex = 0;
let heroSlideshowTimer = null;
let currentGalleryCategory = 'store';
let currentGalleryIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initHeaderScroll();
    initHeroSlideshow();
    initScreenTabs();
    initSection5ViewSwitcher();
    initGalleryShowcase();
    initScrollReveal();
});

function initLanguage() {
    const savedLang = localStorage.getItem('booktrack_lang');
    if (savedLang === 'en' || savedLang === 'ko') {
        currentLanguage = savedLang;
    } else {
        currentLanguage = 'ko';
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
    currentLanguage = lang;
    localStorage.setItem('booktrack_lang', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.ko;
    document.documentElement.lang = lang;

    const btnKo = document.getElementById('lang-btn-ko');
    const btnEn = document.getElementById('lang-btn-en');
    if (btnKo && btnEn) {
        btnKo.classList.toggle('active', lang === 'ko');
        btnEn.classList.toggle('active', lang === 'en');
    }

    if (dict.page_title) {
        document.title = dict.page_title;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

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

    // Update Section Images
    Object.keys(SECTION_DEFAULT_IMAGES).forEach(id => {
        const imgEl = document.getElementById(id);
        if (imgEl && SECTION_DEFAULT_IMAGES[id][lang]) {
            imgEl.src = SECTION_DEFAULT_IMAGES[id][lang];
        }
    });

    // Reset active screen tabs in sections
    document.querySelectorAll('.screen-tab-pills').forEach(pills => {
        const tabs = pills.querySelectorAll('.screen-tab');
        tabs.forEach((tab, i) => {
            tab.classList.toggle('active', i === 0);
        });
    });

    renderGalleryShowcase();
}

function initHeaderScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
}

function initHeroSlideshow() {
    const slides = document.querySelectorAll('#hero-slideshow .hero-slide');
    if (slides.length <= 1) return;

    if (heroSlideshowTimer) clearInterval(heroSlideshowTimer);
    heroSlideshowTimer = setInterval(() => {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.add('active');
    }, 3600);
}

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

            targetImg.style.opacity = '0.35';
            setTimeout(() => {
                targetImg.src = newSrc;
                targetImg.style.opacity = '1';
            }, 140);
        });
    });
}

function initSection5ViewSwitcher() {
    const btnInsight = document.getElementById('btn-view-insight');
    const btnCalendar = document.getElementById('btn-view-calendar');
    const btnHeatmap = document.getElementById('btn-view-heatmap');
    const btnAlltime = document.getElementById('btn-view-alltime');
    const sec5Img = document.getElementById('sec5-img');

    if (!sec5Img) return;

    const buttons = [btnInsight, btnCalendar, btnHeatmap, btnAlltime];
    const switchView = (btn, koSrc, enSrc) => {
        buttons.forEach(b => { if (b) b.classList.remove('active'); });
        if (btn) btn.classList.add('active');

        const targetSrc = (currentLanguage === 'en' && enSrc) ? enSrc : koSrc;
        sec5Img.style.opacity = '0.35';
        setTimeout(() => {
            sec5Img.src = targetSrc;
            sec5Img.style.opacity = '1';
        }, 140);
    };

    if (btnInsight) {
        btnInsight.addEventListener('click', () =>
            switchView(btnInsight, 'screen_captures/09_insights/SCR-028_InsightsFinishedBookshelfView.png', 'screen_captures/09_insights/SCR-028_InsightsFinishedBookshelfView.png')
        );
    }
    if (btnCalendar) {
        btnCalendar.addEventListener('click', () =>
            switchView(btnCalendar, 'screen_captures/03_home/SCR-006_HomeScreen.png', 'assets/images/android/hero_home_en.jpeg')
        );
    }
    if (btnHeatmap) {
        btnHeatmap.addEventListener('click', () =>
            switchView(btnHeatmap, 'screen_captures/09_insights/SCR-027_InsightsPatternView.png', 'screen_captures/09_insights/SCR-027_InsightsPatternView.png')
        );
    }
    if (btnAlltime) {
        btnAlltime.addEventListener('click', () =>
            switchView(btnAlltime, 'screen_captures/09_insights/SCR-013_AllTimeReadingRecordScreen.png', 'screen_captures/09_insights/SCR-013_AllTimeReadingRecordScreen.png')
        );
    }
}

function initGalleryShowcase() {
    const tabStore = document.getElementById('tab-store-promo');
    const tabInsta = document.getElementById('tab-insta-story');

    if (tabStore && tabInsta) {
        tabStore.addEventListener('click', () => {
            currentGalleryCategory = 'store';
            tabStore.classList.add('active');
            tabInsta.classList.remove('active');
            renderGalleryShowcase();
        });
        tabInsta.addEventListener('click', () => {
            currentGalleryCategory = 'insta';
            tabInsta.classList.add('active');
            tabStore.classList.remove('active');
            renderGalleryShowcase();
        });
    }

    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    if (prevBtn) prevBtn.addEventListener('click', () => scrollGallery(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => scrollGallery(1));

    // Touch Swipe Support for Mobile
    const trackWrapper = document.querySelector('.carousel-track-wrapper');
    if (trackWrapper) {
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;

        trackWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].clientX;
            touchStartY = e.changedTouches[0].clientY;
        }, { passive: true });

        trackWrapper.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].clientX;
            touchEndY = e.changedTouches[0].clientY;
            const diffX = touchEndX - touchStartX;
            const diffY = touchEndY - touchStartY;
            // Only trigger if horizontal swipe is dominant
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
                if (diffX < 0) {
                    scrollGallery(1); // Swipe Left -> Next
                } else {
                    scrollGallery(-1); // Swipe Right -> Prev
                }
            }
        }, { passive: true });
    }

    // Responsive resize handler
    window.addEventListener('resize', () => {
        updateGalleryPosition();
    });

    renderGalleryShowcase();
}

function renderGalleryShowcase() {
    const track = document.getElementById('gallery-track');
    const dotsContainer = document.getElementById('carousel-dots');
    if (!track) return;

    const categoryGroup = GALLERY_DATA[currentGalleryCategory] || GALLERY_DATA.store;
    const items = categoryGroup[currentLanguage] || categoryGroup.ko;

    track.innerHTML = '';
    if (dotsContainer) dotsContainer.innerHTML = '';

    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <div class="gallery-mockup">
                <img src="${item.img}" alt="${item.title}" class="gallery-img" loading="lazy">
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
            dot.addEventListener('click', () => {
                currentGalleryIndex = index;
                updateGalleryPosition();
            });
            dotsContainer.appendChild(dot);
        }
    });

    currentGalleryIndex = 0;
    updateGalleryPosition();
}

function scrollGallery(direction) {
    const categoryGroup = GALLERY_DATA[currentGalleryCategory] || GALLERY_DATA.store;
    const items = categoryGroup[currentLanguage] || categoryGroup.ko;
    currentGalleryIndex += direction;
    if (currentGalleryIndex < 0) currentGalleryIndex = items.length - 1;
    if (currentGalleryIndex >= items.length) currentGalleryIndex = 0;
    updateGalleryPosition();
}

function updateGalleryPosition() {
    const track = document.getElementById('gallery-track');
    if (!track) return;
    const card = track.querySelector('.gallery-card');
    let cardWidth = 324;
    if (card) {
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 16;
        cardWidth = card.offsetWidth + gap;
    }
    track.style.transform = `translateX(-${currentGalleryIndex * cardWidth}px)`;

    const dots = document.querySelectorAll('#carousel-dots .dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentGalleryIndex);
    });
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
}
