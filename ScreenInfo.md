# BookTrack 화면 및 모달 정보 정의서 (ScreenInfo.md)

본 문서는 **BookTrack** 애플리케이션의 모든 화면(Screen)과 주요 모달/다이얼로그(Modal)를 체계적으로 식별하고 관리하기 위한 공식 화면 정의서입니다.
모든 화면과 모달에는 고유한 영구 증가형 ID가 부여되며, 신규 추가, UI 개편, 기능 수정 시 날짜별 이력을 영구적으로 기록 및 보존합니다.

---

## 1. 식별자(ID) 부여 및 관리 원칙 (사용자 확정)

1. **전체 화면 ID (`SCR-XXX`)**:
   - Voyager `Screen` 인터페이스를 상속하는 독립 페이지 네비게이션 화면에 부여합니다.
   - `SCR-001` 형식의 3자리 증가형 코드를 사용하며, 영구 결번 원칙에 따라 무조건 증가만 합니다.
2. **주요 모달/다이얼로그 ID (`MOD-XXX`)**:
   - 독립적인 비즈니스 로직과 UI 인터랙션을 수행하는 주요 모달, 다이얼로그, 바텀시트에 부여합니다.
   - `MOD-001` 형식의 3자리 증가형 코드를 사용하며, 부모 화면과 유기적으로 연계 관리됩니다.
3. **실제 디바이스 스크린샷 캡처 및 관리**:
   - 모든 화면과 모달의 스크린샷은 실제 디바이스(USB 연결된 실기기 또는 에뮬레이터) 화면을 직접 캡처하여 저장합니다.
   - 저장 위치: `BookTrack/docs/screen_captures/`
   - 파일명 명명 규칙: `{ID}_{클래스명}.png` (예: `SCR-006_HomeScreen.png`, `MOD-001_DetailReadingInfoShareDialog.png`)
   - 본 문서의 각 화면/모달 항목마다 해당 캡처 이미지 파일 링크를 1:1로 매핑하여 시각적 현황을 제공합니다.
4. **날짜별 변경 이력 관리**:
   - 화면이나 모달의 추가, UI 개편, 기능 수정 발생 시 [날짜별 변경 및 추가 이력 관리] 테이블에 일자, ID, 작업 구분, 변경 요약을 상시 동기화합니다.

---

## 2. 화면 전체 목록 요약표 (Screen Registry)

| 화면 ID       | 화면 클래스명                      | 화면명 (한글)              | 소속 도메인      | 실기기 캡처 상태 | 스크린샷 링크                                                                   |
| :---------- | :--------------------------- | :-------------------- | :---------- | :-------- | :------------------------------------------------------------------------ |
| **SCR-001** | `IntroScreen`                | 인트로 / 스플래시 화면         | 온보딩 / 인증    | 완료        | [보기](screen_captures/01_onboarding/SCR-001_IntroScreen.png)               |
| **SCR-002** | `LoginScreen`                | 소셜 로그인 화면             | 온보딩 / 인증    | 완료        | [보기](screen_captures/01_onboarding/SCR-002_LoginScreen.png)               |
| **SCR-003** | `NicknameScreen`             | 닉네임 설정 화면             | 온보딩 / 인증    | 완료        | [보기](screen_captures/01_onboarding/SCR-003_NicknameScreen.png)            |
| **SCR-004** | `AppIntroWalkthroughScreen`  | 앱 둘러보기 / 튜토리얼 화면      | 온보딩 / 인증    | 완료        | [보기](screen_captures/01_onboarding/SCR-004_AppIntroWalkthroughScreen.png) |
| **SCR-005** | `MainScreen`                 | 메인 셸 (하단 바텀 네비게이션)    | 메인 셸        | 완료        | [보기](screen_captures/02_main/SCR-005_MainScreen.png)                      |
| **SCR-006** | `HomeScreen`                 | 메인 대시보드 / 홈 화면        | 홈           | 완료        | [보기](screen_captures/03_home/SCR-006_HomeScreen.png)                      |
| **SCR-007** | `LibraryScreen`              | 내 서재 화면 (도서/감상평 탭)    | 내 서재        | 완료        | [보기](screen_captures/04_library/SCR-007_LibraryScreen.png)                |
| **SCR-008** | `SearchScreen`               | 도서 검색 및 탐색 화면         | 탐색 / 검색     | 완료        | [보기](screen_captures/05_search/SCR-008_SearchScreen.png)                  |
| **SCR-009** | `DetailScreen`               | 도서 상세 화면 (바텀시트 개편)    | 탐색 / 검색     | 완료        | [보기](screen_captures/06_detail/SCR-009_DetailScreen.png)                  |
| **SCR-010** | `TimerScreen`                | 독서 타이머 화면             | 독서 타이머      | 완료        | [보기](screen_captures/07_timer/SCR-010_TimerScreen.png)                    |
| **SCR-011** | `InsightsScreen`             | 독서 통계 및 캘린더 화면        | 독서 통계       | 완료        | [보기](screen_captures/09_insights/SCR-011_InsightsScreen.png)              |
| **SCR-012** | `GoalEditScreen`             | 독서 목표 편집 화면           | 독서 통계       | 완료        | [보기](screen_captures/09_insights/SCR-012_GoalEditScreen.png)              |
| **SCR-013** | `AllTimeReadingRecordScreen` | 역대 전체 독서 기록 화면        | 독서 통계       | 완료        | [보기](screen_captures/09_insights/SCR-013_AllTimeReadingRecordScreen.png)  |
| **SCR-014** | `ReviewScreen`               | 독서 기록 / 스크랩북 피드 화면    | 독서 기록       | 완료        | [보기](screen_captures/08_record/SCR-014_ReviewScreen.png)                  |
| **SCR-015** | `ReviewDetailScreen`         | 감상평 상세 뷰어 화면          | 독서 기록       | 완료        | [보기](screen_captures/08_record/SCR-015_ReviewDetailScreen.png)            |
| **SCR-016** | `DiaryDetailScreen`          | 독서 다이어리 상세 뷰어 화면      | 독서 기록       | 완료        | [보기](screen_captures/08_record/SCR-016_DiaryDetailScreen.png)             |
| **SCR-017** | `EditorScreen`               | 감상평 작성 및 편집 화면        | 독서 기록 / 에디터 | 완료        | [보기](screen_captures/08_record/SCR-017_EditorScreen.png)                  |
| **SCR-018** | `DiaryEditorScreen`          | 독서 다이어리 작성 및 편집 화면    | 독서 기록 / 에디터 | 완료        | [보기](screen_captures/08_record/SCR-018_DiaryEditorScreen.png)             |
| **SCR-019** | `CropScreen`                 | 이미지 크롭 및 정밀 편집 화면     | 독서 기록 / 에디터 | 완료        | [보기](screen_captures/08_record/SCR-019_CropScreen.png)                    |
| **SCR-020** | `ReviewSavePreviewScreen`    | 감상평 이미지 카드 저장 미리보기 화면 | 독서 기록       | 완료        | [보기](screen_captures/08_record/SCR-020_ReviewSavePreviewScreen.png)       |
| **SCR-021** | `SocialScreen`               | 내 정보 및 설정 화면          | 소셜 / 설정     | 완료        | [보기](screen_captures/10_social/SCR-021_SocialScreen.png)                  |
| **SCR-022** | `AchievementScreen`          | 업적 및 배지 화면            | 소셜 / 설정     | 완료        | [보기](screen_captures/10_social/SCR-022_AchievementScreen.png)             |
| **SCR-023** | `GroupScreen`                | 독서 그룹 및 랭킹 화면         | 독서 그룹       | 완료        | [보기](screen_captures/11_group/SCR-023_GroupScreen.png)                    |
| **SCR-024** | `MemberLibraryScreen`        | 그룹원 서재 구경 화면          | 독서 그룹       | 완료        | [보기](screen_captures/11_group/SCR-024_MemberLibraryScreen.png)            |
| **SCR-025** | `PersonaCatalogScreen`       | 독서 페르소나 24종 도감 화면     | 홈 / 통계      | 완료        | [보기](screen_captures/10_social/SCR-025_PersonaCatalogScreen.png)          |
| **SCR-026** | `MoreScreen`                 | 더보기 메뉴 화면             | 더보기 / 설정    | 완료        | [보기](screen_captures/12_more/SCR-026_MoreScreen.png)                      |

---

## 3. 주요 모달 / 다이얼로그 전체 목록 요약표 (Modal Registry)

| 모달 ID       | 모달 컴포저블명                       | 모달명 (한글)             | 호출 부모 화면          | 실기기 캡처 상태      | 스크린샷 링크                                                                  |
| :---------- | :----------------------------- | :------------------- | :---------------- | :------------- | :----------------------------------------------------------------------- |
| **MOD-001** | `DetailReadingInfoShareDialog` | 내 독서 정보 옵션형 공유 모달    | SCR-009 (도서 상세)   | 완료             | [보기](screen_captures/13_modals/MOD-001_DetailReadingInfoShareDialog.png) |
| **MOD-002** | `AddToLibraryWizardDialog`     | 서재 도서 추가 온보딩 위저드 플로우 | SCR-008, SCR-009  | 완료             | [보기](screen_captures/13_modals/MOD-002_AddToLibraryWizardDialog.png)     |
| **MOD-003** | `ReadingPersonaDetailDialog`   | 독서 스타일 상세 및 공유 모달    | SCR-006, SCR-021  | 완료             | [보기](screen_captures/13_modals/MOD-003_ReadingPersonaDetailDialog.png)   |
| **MOD-004** | `RecordPersonaDetailDialog`    | 독서 기록 스타일 상세 및 공유 모달 | SCR-014, SCR-021  | 완료             | [보기](screen_captures/13_modals/MOD-004_RecordPersonaDetailDialog.png)    |
| **MOD-005** | `DiarySavePreviewDialog`       | 다이어리 이미지 저장 전 크롭 모달  | SCR-016 (다이어리 상세) | 완료             | [보기](screen_captures/13_modals/MOD-005_DiarySavePreviewDialog.png)       |
| **MOD-006** | `EditorPreviewDialog`          | 감상평 에디터 실시간 카드 미리보기  | SCR-017 (감상평 에디터) | UI 숨김 유지 (컨펌)  | [대기 중](screen_captures/13_modals/MOD-006_EditorPreviewDialog.png)        |
| **MOD-007** | `AllMenuBottomSheet`           | 전체 메뉴 탐색 바텀시트        | SCR-006 (홈 화면)    | UI 숨김 유지 (컨펌)  | [대기 중](screen_captures/13_modals/MOD-007_AllMenuBottomSheet.png)         |
| **MOD-008** | `ScreenGuideDialog`            | 화면별 도움말 가이드 다이얼로그    | 전역 공통             | 완료             | [보기](screen_captures/13_modals/MOD-008_ScreenGuideDialog.png)            |
| **MOD-009** | `ReviewDetailGuideDialog`      | 감상평 작성 가이드 팝업        | SCR-017 (감상평 에디터) | 완료             | [보기](screen_captures/13_modals/MOD-009_ReviewDetailGuideDialog.png)      |
| **MOD-010** | `AppRatingDialog`              | 인앱 리뷰 및 별점 평가 유도 팝업  | SCR-006, SCR-010  | 이벤트 조건 유지 (컨펌) | [대기 중](screen_captures/13_modals/MOD-010_AppRatingDialog.png)            |

---

## 4. 화면별 상세 기능 명세서

### SCR-001: 인트로 / 스플래시 화면 (`IntroScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/onboarding/ui/IntroScreen.kt`
- **스크린샷**: [screen_captures/01_onboarding/SCR-001_IntroScreen.png](screen_captures/01_onboarding/SCR-001_IntroScreen.png) (완료)
- **주요 기능**:
  - 앱 기동 시 BookTrack 로고 및 브랜드 비주얼 애니메이션 표출
  - 자동 로그인 세션(Firebase Auth) 유효성 검사 및 토큰 갱신
  - 세션 유효 시 메인 화면(`MainScreen`)으로 직행, 미인증 시 로그인 화면(`LoginScreen`)으로 분기
  - 앱 최신 버전 검사 및 강제 업데이트 다이얼로그 호출 연동

### SCR-002: 소셜 로그인 화면 (`LoginScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/onboarding/ui/LoginScreen.kt`
- **스크린샷**: [screen_captures/01_onboarding/SCR-002_LoginScreen.png](screen_captures/01_onboarding/SCR-002_LoginScreen.png) (완료)
- **주요 기능**:
  - 간편 소셜 로그인 제공 (Google, Apple, Kakao SDK 연동)
  - 둘러보기(게스트 로그인) 기능 제공
  - 서비스 이용약관 및 개인정보 처리방침 동의 체크 및 열람 웹뷰 링크
  - 로그인 성공 후 신규 유저는 닉네임 설정(`NicknameScreen`), 기존 유저는 `MainScreen`으로 이동

### SCR-003: 닉네임 설정 화면 (`NicknameScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/onboarding/ui/NicknameScreen.kt`
- **스크린샷**: [screen_captures/01_onboarding/SCR-003_NicknameScreen.png](screen_captures/01_onboarding/SCR-003_NicknameScreen.png) (완료)
- **주요 기능**:
  - 신규 가입 유저의 프로필 닉네임(2~12자) 입력 및 중복 검사
  - 비속어 및 특수문자 입력 필터링
  - 프로필 생성 트랜잭션 처리 및 온보딩 둘러보기(`AppIntroWalkthroughScreen`)로 이동

### SCR-004: 앱 둘러보기 화면 (`AppIntroWalkthroughScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/onboarding/ui/AppIntroWalkthroughScreen.kt`
- **스크린샷**: [screen_captures/01_onboarding/SCR-004_AppIntroWalkthroughScreen.png](screen_captures/01_onboarding/SCR-004_AppIntroWalkthroughScreen.png) (완료)
- **주요 기능**:
  - 북트랙 핵심 4대 기능(서재 관리, 독서 타이머, 생각 카드 기록, AI 독서 리포트) 페이징 슬라이드 안내
  - 인디케이터 점 및 [시작하기] 액션 버튼 제공

### SCR-005: 메인 셸 화면 (`MainScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/main/MainScreen.kt`
- **스크린샷**: [screen_captures/02_main/SCR-005_MainScreen.png](screen_captures/02_main/SCR-005_MainScreen.png) (완료)
- **주요 기능**:
  - 전역 Scaffold 기반 하단 네비게이션 바(BottomNavigationBar) 관리
  - 6대 탭(홈, 내 서재, 독서 기록, 검색, 통계, 더보기) 전환 라우팅 제어
  - 백버튼 더블 클릭 시 앱 종료 안전 토스트 처리

### SCR-006: 홈 화면 (`HomeScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/home/ui/HomeScreen.kt`
- **스크린샷**: [screen_captures/03_home/SCR-006_HomeScreen.png](screen_captures/03_home/SCR-006_HomeScreen.png) (완료)
- **주요 기능**:
  - 독서 명언 일일 배너 (`ReadingQuoteBanner`)
  - 이번 달 독서 목표 게이지 바 및 달성률 요약 (`GoalProgressSection`)
  - AI 독서 스타일 진단 리포트 요약 카드 (`AiReadingReportSection`)
  - 지금 읽고 있는 책 가로 피드 및 타이머 즉시 실행 버튼
  - 읽을 예정인 책 가로 피드
  - 알라딘 베스트셀러 및 신간 도서 추천 피드 (4번째 슬롯 네이티브 광고 결합)
  - 뉴욕타임즈(NYT) 해외 베스트셀러 가로 피드
  - 최근 작성한 감상평 퀵 프리뷰 섹션

### SCR-007: 내 서재 화면 (`LibraryScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/home/ui/LibraryScreen.kt`
- **스크린샷**: [screen_captures/04_library/SCR-007_LibraryScreen.png](screen_captures/04_library/SCR-007_LibraryScreen.png) (완료)
- **주요 기능**:
  - 2대 상단 탭 제공: [등록된 책] / [감상평]
  - [등록된 책] 뷰 스타일 전환: 책장뷰(`BOOKSHELF`, 한국어 기본값) vs 카드 그리드뷰(`GRID`, 영문 기본값)
  - 독서 상태 필터링 칩: 전체, 읽는 중, 읽을 예정, 완독
  - 책장 뷰 실측 책등(`sideCoverUrl`) 렌더링
  - 소장 도서 실시간 검색어 필터링
  - 도서 롱클릭 시 서재 도서 삭제 확인 다이얼로그 (영구 독서 이력은 보존)

### SCR-008: 도서 검색 및 탐색 화면 (`SearchScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/search/ui/SearchScreen.kt`
- **스크린샷**: [screen_captures/05_search/SCR-008_SearchScreen.png](screen_captures/05_search/SCR-008_SearchScreen.png) (완료)
- **주요 기능**:
  - 알라딘, 네이버, NYT API 통합 도서 검색 (제목, 저자, 출판사, ISBN)
  - 카메라 바코드(ISBN) 스캔을 통한 즉시 검색
  - 카메라 OCR 촬영을 통한 인용구 텍스트 추출
  - 상단 4대 추천 탭: 베스트셀러, 검색 결과, 해외 베스트, 맞춤 추천
  - 무한 스크롤 페이징(Paging) 및 당겨서 새로고침(Pull-to-Refresh)
  - 검색 결과 목록 내 네이티브 피드 광고 슬롯 지원

### SCR-009: 도서 상세 화면 (`DetailScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/search/ui/DetailScreen.kt`
- **스크린샷**: [screen_captures/06_detail/SCR-009_DetailScreen.png](screen_captures/06_detail/SCR-009_DetailScreen.png) (완료)
- **주요 기능**:
  - 상단 초대형 북 커버(125% 확대) 및 `[책 읽기]`, `[기록하기]` 버튼 상시 노출
  - 하향 조정된 바텀시트 구조 (초기 피크 215dp) 및 확장형 콘텐츠
  - 2대 분리 탭: [작품 정보] (도서 소개, 출판사, 줄거리, 도서 구매하기, YES24 공식 출처 표기) vs [내 독서 정보]
  - [내 독서 정보] 탭 대시보드: 총 독서 시간, 완독 진행도 게이지, 페이지당 평균 시간
  - 최근 7회 독서 흐름 막대 그래프: 하루 다회 세션 일자별 누적 합산 및 슬롯 기반 1:1 완벽 정렬
  - 날짜별 독서 기록 캘린더 그리드
  - 내 독서 정보 옵션형 이미지 저장 및 시스템 공유 모달 다이얼로그 (`MOD-001`)
  - 바텀시트 스크롤 시 상단 액션바 텍스트 겹침 방지 투명도 애니메이션

### SCR-010: 독서 타이머 화면 (`TimerScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/timer/ui/TimerScreen.kt`
- **스크린샷**: [screen_captures/07_timer/SCR-010_TimerScreen.png](screen_captures/07_timer/SCR-010_TimerScreen.png) (완료)
- **주요 기능**:
  - 2대 타이머 모드 지원: 스톱워치(자유 독서) vs 카운트다운 타이머(목표 몰입 독서)
  - 타이머 일시정지, 재개, 초기화
  - 독서 종료 시 읽은 페이지 직접 입력 또는 퍼센트(%) 입력 방식 지원
  - 카운트다운 목표 달성 축하 통계 카드 (`CountdownStatsCard`)
  - 진행률 슬라이더 실시간 게이지 및 세션 데이터 로컬 DB/Firestore 동기화 저장

### SCR-011: 독서 통계 및 캘린더 화면 (`InsightsScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/insights/ui/InsightsScreen.kt`
- **스크린샷**: [screen_captures/09_insights/SCR-011_InsightsScreen.png](screen_captures/09_insights/SCR-011_InsightsScreen.png) (완료)
- **주요 기능**:
  - 월간 독서 요약 브리핑: 총 독서 시간, 완독 권수, 읽은 페이지 수
  - 월간 네비게이션 제어 (미래 연월 이동 안전 차단)
  - 일간 독서 시간 막대 및 꺾은선 추이 인터랙티브 차트
  - 분야별 장르 통계 도넛 파이 차트
  - 독서 출석 캘린더 (출석일 하이라이트 및 날짜 터치 시 일일 세션 상세 팝업)
  - 이달의 완독 서가 책장 뷰 (완독 도서 책등 실물 렌더링)

### SCR-012: 독서 목표 편집 화면 (`GoalEditScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/insights/ui/GoalEditScreen.kt`
- **스크린샷**: [screen_captures/09_insights/SCR-012_GoalEditScreen.png](screen_captures/09_insights/SCR-012_GoalEditScreen.png) (완료)
- **주요 기능**:
  - 월간 목표 설정: 목표 권수, 목표 독서 시간(시간 단위), 목표 독서 일수
  - 연간 목표 권수 설정
  - 나의 다짐 한 줄 메모 기입 및 저장

### SCR-013: 역대 전체 독서 기록 화면 (`AllTimeReadingRecordScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/insights/ui/AllTimeReadingRecordScreen.kt`
- **스크린샷**: [screen_captures/09_insights/SCR-013_AllTimeReadingRecordScreen.png](screen_captures/09_insights/SCR-013_AllTimeReadingRecordScreen.png) (완료)
- **주요 기능**:
  - 평생 누적 독서 통계: 총 독서 시간, 총 완독 권수, 총 읽은 페이지 수, 최장 연속 독서일
  - 가장 많이 읽은 인생 TOP 3 도서 랭킹
  - 선호 장르 분포 및 독서 세션 히스토리
  - 연도별/월별 아코디언 스타일의 완독 서가 히스토리 뷰

### SCR-014: 독서 기록 / 스크랩북 피드 화면 (`ReviewScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/scrapbook/ui/ReviewScreen.kt`
- **스크린샷**: [screen_captures/08_record/SCR-014_ReviewScreen.png](screen_captures/08_record/SCR-014_ReviewScreen.png) (완료)
- **주요 기능**:
  - 감상평 카드 리스트 및 독서 다이어리 타임라인 뷰
  - 도서별 필터링 드롭다운 지원
  - 플로팅 액션 버튼(FAB)을 통한 [감상평 작성] 또는 [다이어리 작성] 분기
  - 감상평 카드 탭 시 상세 뷰어(`ReviewDetailScreen`), 다이어리 탭 시 `DiaryDetailScreen`으로 이동

### SCR-015: 감상평 상세 뷰어 화면 (`ReviewDetailScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/scrapbook/ui/ReviewDetailScreen.kt`
- **스크린샷**: [screen_captures/08_record/SCR-015_ReviewDetailScreen.png](screen_captures/08_record/SCR-015_ReviewDetailScreen.png) (완료)
- **주요 기능**:
  - 도서 기본 메타데이터(표지, 제목, 저자), 평점, 감정 칩, 작성 일자 노출
  - 인용구 블록 및 생각/질문 블록 단락별 서식 렌더링
  - [수정하기] 터치 시 `EditorScreen` 진입
  - [이미지 저장/공유] 터치 시 `ReviewSavePreviewScreen` 진입
  - 감상평 삭제 확인 다이얼로그

### SCR-016: 독서 다이어리 상세 뷰어 화면 (`DiaryDetailScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/scrapbook/ui/DiaryDetailScreen.kt`
- **스크린샷**: [screen_captures/08_record/SCR-016_DiaryDetailScreen.png](screen_captures/08_record/SCR-016_DiaryDetailScreen.png) (완료)
- **주요 기능**:
  - 첨부 사진, 도서명, 다이어리 본문 감성 뷰어
  - 선택한 테마 스타일(폰트, 배경, 종이 질감) 적용 렌더링
  - [이미지 저장] 다이얼로그 호출 (`MOD-005`: 사각 채움으로 둥근 모서리 외곽 여백 없는 저장)
  - 다이어리 본문 수정 및 삭제 액션

### SCR-017: 감상평 작성 및 편집 화면 (`EditorScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/editor/ui/EditorScreen.kt`
- **스크린샷**: [screen_captures/08_record/SCR-017_EditorScreen.png](screen_captures/08_record/SCR-017_EditorScreen.png) (완료)
- **주요 기능**:
  - 대상 도서 검색 및 연결
  - 인용구 작성 및 카메라 OCR 텍스트 자동 추출/붙여넣기
  - 구조화된 생각 블록 추가(나의 생각, 감상, 줄거리 요약, 질문 등)
  - 별점(0.5점 단위) 드래그 선택 및 기분(Mood) 다중 태그 선택
  - 안드로이드 키보드 엔터 입력 시 키보드 내려감 방지 및 줄바꿈 지원
  - 작성 중 상단 실시간 카드 미리보기 토글 (`MOD-006`)

### SCR-018: 독서 다이어리 작성 및 편집 화면 (`DiaryEditorScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/editor/ui/DiaryEditorScreen.kt`
- **스크린샷**: [screen_captures/08_record/SCR-018_DiaryEditorScreen.png](screen_captures/08_record/SCR-018_DiaryEditorScreen.png) (완료)
- **주요 기능**:
  - 기기 갤러리 사진 선택 및 첨부
  - 다이어리 테마 및 배경 스타일 선택
  - 본문 텍스트 작성 (줄바꿈 안전 엔터 액션 적용)
  - 작성 중 실시간 크롭 및 정밀 편집(`CropScreen`) 연동

### SCR-019: 이미지 크롭 화면 (`CropScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/editor/ui/CropScreen.kt`
- **스크린샷**: [screen_captures/08_record/SCR-019_CropScreen.png](screen_captures/08_record/SCR-019_CropScreen.png) (완료)
- **주요 기능**:
  - 자유 드래그 모서리 핸들 기반 비트맵 크롭
  - 프리셋 비율 선택: 원본(Free), 1:1 (정사각형), 4:5 (인스타그램), 9:16 (스토리)
  - 회전 및 플립 조작

### SCR-020: 감상평 이미지 카드 저장 미리보기 화면 (`ReviewSavePreviewScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/scrapbook/ui/ReviewSavePreviewScreen.kt`
- **스크린샷**: [screen_captures/08_record/SCR-020_ReviewSavePreviewScreen.png](screen_captures/08_record/SCR-020_ReviewSavePreviewScreen.png) (완료)
- **주요 기능**:
  - 감상평을 고해상도 이미지 카드로 생성하기 위한 전용 스튜디오 뷰
  - 감성 테마 템플릿 선택 (모던, 클래식, 미니멀, 폴라로이드 등)
  - 종이 질감(Paper Texture) 및 폰트 커스텀 적용
  - 저장 시 외곽 여백 노출 없는 온전한 사각 카드로 갤러리 저장 및 SNS 공유
  - 전면 광고 쿨타임(10분) 제어 연동

### SCR-021: 내 정보 및 설정 화면 (`SocialScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/social/ui/SocialScreen.kt`
- **스크린샷**: [screen_captures/10_social/SCR-021_SocialScreen.png](screen_captures/10_social/SCR-021_SocialScreen.png) (완료)
- **주요 기능**:
  - 사용자 프로필 (소셜 로그인 연동 심볼, 닉네임 수정)
  - 업적 달성 요약 배너 및 `AchievementScreen` 이동 숏컷
  - AI 독서 리포트 카드 (독서 성향 진단, 독서 패턴, 장르 선호도, 맞춤 추천 도서)
  - 보상형 광고 시청 후 AI 독서 리포트 온디맨드 갱신
  - 독서 페르소나 24종 도감 바로가기 (`PersonaCatalogScreen`)
  - 클라우드 데이터 백업 및 차분 동기화 상태 관리
  - 공지사항, 버그 신고, 오픈소스 라이선스, 로그아웃 및 회원 탈퇴

### SCR-022: 업적 화면 (`AchievementScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/social/ui/AchievementScreen.kt`
- **스크린샷**: [screen_captures/10_social/SCR-022_AchievementScreen.png](screen_captures/10_social/SCR-022_AchievementScreen.png) (완료)
- **주요 기능**:
  - 7개 카테고리별 업적 목록 조회 (독서량, 독서 시간, 습관, 목표, 기록가, 탐험가, 히든)
  - 6대 티어 배지 시스템 (브론즈, 실버, 골드, 플래티넘, 다이아, 레전드)
  - 히든 업적 블라인드 마스킹 및 해금 조건 확인
  - 전체 업적 달성률(%) 프로그레스 바

### SCR-023: 독서 그룹 및 랭킹 화면 (`GroupScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/group/ui/GroupScreen.kt`
- **스크린샷**: [screen_captures/11_group/SCR-023_GroupScreen.png](screen_captures/11_group/SCR-023_GroupScreen.png) (완료)
- **주요 기능**:
  - 내가 참여 중인 독서 그룹 목록 및 신규 그룹 생성
  - 6자리 고유 초대 코드(`BK-XXXX`) 입력을 통한 그룹 참여
  - 그룹별 주간/월간/누적 독서 시간 실시간 랭킹 리더보드
  - Firebase RTDB 기반의 실시간 그룹 채팅 피드 및 푸시 알림
  - 그룹원 목록 및 프로필 탭 시 `MemberLibraryScreen` 진입

### SCR-024: 그룹원 서재 구경 화면 (`MemberLibraryScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/group/ui/MemberLibraryScreen.kt`
- **스크린샷**: [screen_captures/11_group/SCR-024_MemberLibraryScreen.png](screen_captures/11_group/SCR-024_MemberLibraryScreen.png) (완료)
- **주요 기능**:
  - 그룹 멤버의 프로필 및 독서 시간/완독 권수 열람
  - 동료 멤버의 소장 서재 목록 탐색
  - 마음에 드는 책을 원클릭으로 [내 서재에 담기] 연동

### SCR-025: 독서 페르소나 도감 화면 (`PersonaCatalogScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/home/ui/PersonaCatalogScreen.kt`
- **스크린샷**: [screen_captures/10_social/SCR-025_PersonaCatalogScreen.png](screen_captures/10_social/SCR-025_PersonaCatalogScreen.png) (완료)
- **주요 기능**:
  - 24종 독서 페르소나 캐릭터 도감 그리드 뷰
  - 내가 획득/달성한 페르소나 하이라이트 및 미달성 페르소나 실루엣 처리
  - 페르소나 캐릭터 터치 시 상세 분석 팝업 호출

### SCR-026: 더보기 메뉴 화면 (`MoreScreen.kt`)
- **소스 경로**: `composeApp/src/commonMain/kotlin/com/cns/booktrack/feature/more/ui/MoreScreen.kt`
- **스크린샷**: [screen_captures/12_more/SCR-026_MoreScreen.png](screen_captures/12_more/SCR-026_MoreScreen.png) (완료)
- **주요 기능**:
  - 앱 전반의 부가 기능 및 환경설정 네비게이션 허브
  - 앱 버전 정보(`v1.1.3`) 표시 및 스토어 업데이트 링크 연동
  - 테마 설정 (시스템, 라이트, 다크 모드)
  - 데이터 백업/복원 및 사용자 지원 링크

---

## 5. 모달 / 다이얼로그별 상세 기능 명세서

### MOD-001: 내 독서 정보 옵션형 공유 모달 (`DetailReadingInfoShareDialog`)
- **소스 위치**: `feature/search/ui/DetailScreen.kt` 내부
- **스크린샷**: [screen_captures/13_modals/MOD-001_DetailReadingInfoShareDialog.png](screen_captures/13_modals/MOD-001_DetailReadingInfoShareDialog.png) (완료)
- **주요 기능**:
  - 도서 상세 화면에서 [독서 정보 공유] 터치 시 노출
  - 고정 지표(총 독서 시간, 완독률, 페이지 프로그레스 바) 표시
  - 선택 옵션 칩: 1회 평균 독서시간, 페이지당 평균 소요시간 On/Off 토글
  - [이미지로 저장]: PNG 알파 투명도를 보존하여 모서리 바깥 여백 없는 온전한 카드 이미지 갤러리 저장 및 토스트 알림
  - [공유하기]: 시스템 공유 시트 연동

### MOD-002: 서재 도서 추가 온보딩 위저드 (`AddToLibraryWizardDialog.kt`)
- **소스 위치**: `feature/search/ui/wizard/AddToLibraryWizardDialog.kt`
- **스크린샷**: [screen_captures/13_modals/MOD-002_AddToLibraryWizardDialog.png](screen_captures/13_modals/MOD-002_AddToLibraryWizardDialog.png) (완료)
- **주요 기능**:
  - 미등록 도서를 내 서재에 추가할 때 상태/기간/패턴/시간대를 설정하는 단계별 위저드 모달
  - 독서 상태 선택(읽을 예정, 읽는 중, 완독)에 따른 동적 스텝 분기
  - 날짜 피커 연동 및 날짜를 모르는 경우를 위한 총 독서 시간 수동 입력 지원

### MOD-003: 독서 스타일 페르소나 리포트 상세 모달 (`ReadingPersonaDetailDialog.kt`)
- **소스 위치**: `feature/home/ui/components/ReadingPersonaDetailDialog.kt`
- **스크린샷**: [screen_captures/13_modals/MOD-003_ReadingPersonaDetailDialog.png](screen_captures/13_modals/MOD-003_ReadingPersonaDetailDialog.png) (완료)
- **주요 기능**:
  - 나의 AI 독서 스타일 진단 결과 카드 터치 시 확장되는 상세 리포트 모달
  - 1번 위치: 보상형 광고 보고 독서 스타일 갱신하기 버튼
  - 2번 위치: 이미지 저장 및 공유하기 2분할 버튼 (사각 surface 배경으로 투명 여백 없는 저장)
  - 3번 위치: 닫기 버튼

### MOD-004: 독서 기록 스타일 페르소나 상세 모달 (`RecordPersonaDetailDialog.kt`)
- **소스 위치**: `feature/scrapbook/ui/RecordPersonaDetailDialog.kt`
- **스크린샷**: [screen_captures/13_modals/MOD-004_RecordPersonaDetailDialog.png](screen_captures/13_modals/MOD-004_RecordPersonaDetailDialog.png) (완료)
- **주요 기능**:
  - 나의 감상평 작성 패턴을 기반으로 도출된 기록 스타일 상세 리포트
  - 이미지 저장, SNS 공유, 광고 기반 갱신 지원

### MOD-005: 다이어리 이미지 저장 크롭 모달 (`DiarySavePreviewDialog`)
- **소스 위치**: `feature/scrapbook/ui/DiaryDetailScreen.kt` 내부
- **스크린샷**: [screen_captures/13_modals/MOD-005_DiarySavePreviewDialog.png](screen_captures/13_modals/MOD-005_DiarySavePreviewDialog.png) (완료)
- **주요 기능**:
  - 다이어리 상세에서 이미지 저장 터치 시 노출
  - 다이어리 제목을 제외하고 본문+사진만 감성적으로 카드화
  - 크롭 비율 선택(원본, 1:1, 4:5, 9:16) 및 `RectangleShape` 적용으로 외곽 여백 없는 저장

### MOD-006: 감상평 에디터 실시간 카드 미리보기 모달 (`EditorPreviewDialog.kt`)
- **소스 위치**: `feature/editor/ui/EditorPreviewDialog.kt`
- **스크린샷**: `screen_captures/13_modals/MOD-006_EditorPreviewDialog.png` (UI 숨김 상태 / 대기 중)
- **주요 기능**:
  - 감상평 작성 도중 우상단 눈 모양 아이콘 터치 시 호출
  - 실제 완성될 생각 카드의 시각적 렌더링을 팝업으로 즉각 확인

### MOD-007: 전체 메뉴 탐색 바텀시트 (`AllMenuBottomSheet.kt`)
- **소스 위치**: `core/ui/components/AllMenuBottomSheet.kt`
- **스크린샷**: `screen_captures/13_modals/MOD-007_AllMenuBottomSheet.png` (UI 숨김 상태 / 대기 중)
- **주요 기능**:
  - 홈 화면 상단 메뉴 아이콘 터치 시 노출되는 전역 기능 내비게이션 바텀시트
  - 앱 내 모든 주요 기능(서재, 검색, 통계, 업적, 그룹, 페르소나 도감 등)으로 다이렉트 딥링크 이동

### MOD-008: 화면별 도움말 가이드 다이얼로그 (`ScreenGuideDialog.kt`)
- **소스 위치**: `core/ui/components/ScreenGuideDialog.kt`
- **스크린샷**: [screen_captures/13_modals/MOD-008_ScreenGuideDialog.png](screen_captures/13_modals/MOD-008_ScreenGuideDialog.png) (완료)
- **주요 기능**:
  - 화면 상단 물음표(`?`) 아이콘 터치 시 각 화면의 핵심 기능과 사용 팁을 안내하는 공통 다이얼로그

### MOD-009: 감상평 작성 가이드 팝업 (`ReviewDetailGuideDialog.kt`)
- **소스 위치**: `feature/scrapbook/ui/ReviewDetailGuideDialog.kt`
- **스크린샷**: [screen_captures/13_modals/MOD-009_ReviewDetailGuideDialog.png](screen_captures/13_modals/MOD-009_ReviewDetailGuideDialog.png) (완료)
- **주요 기능**:
  - 생각 블록 작성법, 감상평 예시, 단락 구성 팁을 시각적 카드 형태로 제공하는 안내 팝업

### MOD-010: 인앱 리뷰 및 별점 평가 유도 팝업 (`AppRatingDialog.kt`)
- **소스 위치**: `core/ui/components/AppRatingDialog.kt`
- **스크린샷**: `screen_captures/13_modals/MOD-010_AppRatingDialog.png` (이벤트 조건 트리거 / 대기 중)
- **주요 기능**:
  - 일정 독서 횟수나 완독을 달성한 사용자에게 감사의 의미와 함께 스토어 리뷰 작성을 유도하는 친근한 팝업

---

## 6. 날짜별 화면/모달 변경 및 추가 이력 관리

앞으로 화면/모달이 신규 추가되거나 UI/기능 개편이 발생할 경우 본 섹션에 누적 기록합니다.

| 일자 | 대상 ID | 작업 구분 | 주요 변경 내역 요약 |
| :--- | :--- | :--- | :--- |
| **2026-11-12** | **스토어 이미지** | 프로모션 에셋 | Android(941x1672) 6종, iOS(1320x2868) 6종 스토어 프로모션 이미지 자동 생성 및 피그마 캔버스 업로드 완료 (store_image_gen.md) |
| **2026-11-12** | **SCR-001 ~ SCR-026** | 전수 캡처 완료 | 전체 화면 26종 실기기 adb 자동 캡처 100% 완료 및 모달 7종 캡처 완료 (비활성 3종 상태 확정) |
| **2026-11-12** | **전체** | 실기기 캡처 | 방안 2(에이전트 adb 자동 탐색) 및 대분류 디렉토리 체계로 실기기 스크린샷 총 29개(화면 22종, 모달 7종) 캡처 및 1:1 링크 반영 |
| **2026-11-12** | **MOD-001** | 버그 수정 | 갤러리 이미지 저장 시 투명 채널 보존하여 둥근 모서리 바깥 사각형 흰색 여백 제거 및 불투명 서피스 컬러 적용 |
| **2026-11-12** | **SCR-009** | 기능/UI 수정 | 도서 상세 최근 7회 세션 막대차트 하루 다회 세션 누적 합산 및 슬롯 기반 X축 1:1 완벽 정렬 |
| **2026-11-12** | **SCR-009** | 기능/UI 수정 | 도서 상세 바텀시트 하향 및 북 커버 125% 확대, [작품 정보]/[내 독서 정보] 탭 분리, 상단 액션바 텍스트 겹침 방지 |
| **2026-11-12** | **MOD-001 ~ MOD-010** | 신규 등록 | 주요 모달/다이얼로그 10종에 대한 `MOD-XXX` 별도 식별자 체계 신설 및 기능 정의 완료 |
| **2026-11-12** | **SCR-001 ~ SCR-026** | 신규 등록 | BookTrack 전 화면 전수 조사 완료 및 증가형 화면 ID 26종 최초 부여 및 기능 명세서 등록 |

---

## 7. 추가 확인 및 질문 사항 (Question & Confirmation)

### 컨펌 완료 내역 (2026-11-12 사용자 확정 반영)
1. **스크린샷 캡처 방식**: **방안 2 (에이전트 adb 자동 탐색)** 선택 확정.
2. **저장 폴더 위치**: **대분류 코드별 디렉토리 생성 및 하위 저장** 확정.
   - `docs/screen_captures/{01_onboarding, 02_main, 03_home, 04_library, 05_search, 06_detail, 07_timer, 08_record, 09_insights, 10_social, 11_group, 12_more, 13_modals}/`
3. **온보딩 화면 3종 (`SCR-002`, `SCR-003`, `SCR-004`)**:
   - **선택지 A 확정**: 로그아웃 및 둘러보기/온보딩 플로우를 통해 `SCR-002`(로그인), `SCR-003`(닉네임 설정), `SCR-004`(앱 둘러보기) 실기기 캡처 100% 완료.
4. **이미지 크롭 화면 (`SCR-019`)**:
   - **선택지 A 확정**: 실기기 샘플 이미지 push 및 갤러리 피커 자동 연동을 통해 `SCR-019`(이미지 크롭 화면) 실기기 캡처 100% 완료.
5. **UI 숨김 및 이벤트성 모달 3종 (`MOD-006`, `MOD-007`, `MOD-010`)**:
   - **선택지 A 확정**: 코드상 컴포저블을 유지하되 UI 숨김 / 이벤트 조건부 상태로 명세서에 기록 및 대기 유지 확정.

---

### 최종 실기기 캡처 및 화면 정의서 완료 보고
- **전체 화면 (`SCR-001 ~ SCR-026`)**: **26개 중 26개 100% 실기기 캡처 완료**
- **주요 모달 (`MOD-001 ~ MOD-010`)**: **7개 캡처 완료**, 3개(MOD-006, MOD-007, MOD-010) 정책 확정
- **총 실기기 캡처 파일 수**: **33개 스크린샷 파일 확보 및 대분류별 정리 완료**
- **옵시디언 볼트 동기화**: `docs/ScreenInfo.md` 및 `docs/screen_captures/` 실시간 양방향 동기화 완료
