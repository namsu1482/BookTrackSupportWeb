import os
import sys
import unicodedata
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# 1. 경로 및 상수 정의
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(BASE_DIR, "스토어용스크린샷")

# 딱딱하지 않고 부드러운 네이버 나눔스퀘어라운드 폰트 경로 지정
FONT_PATH_B = os.path.join(BASE_DIR, "fonts", "NanumSquareRoundB.ttf")  # 타이틀용 Bold
FONT_PATH_R = os.path.join(BASE_DIR, "fonts", "NanumSquareRoundR.ttf")  # 서브타이틀용 Regular

# 출력 디렉토리 생성
os.makedirs(OUTPUT_DIR, exist_ok=True)

# 2. 통합 배경 테마 색상 정의 (고급스럽고 일관된 딥 바이올렛 & 다크 미드나잇 그라데이션)
GLOBAL_GRADIENT_START = "#251D3A"  # 딥 바이올렛
GLOBAL_GRADIENT_END = "#090D16"    # 다크 미드나잇

# 3. 스크린샷 이미지와 매칭될 홍보 문구 및 원본 파일 경로 설정 정의
SCREENSHOT_CONFIGS = [
    {
        "filename": "BookTrackIos스크린샷/홈화면.png",
        "output_name": "screenshot_1_home.png",
        "title": "책과 함께하는 빛나는 오늘",
        "subtitle": "체계적인 독서 목표와 격려 메시지로\n건강한 습관을 시작해 보세요.",
        "crop_y": 0
    },
    {
        "filename": "BookTrackIos스크린샷/도서상세.png",
        "output_name": "screenshot_2_search.png",
        "title": "책의 모든 정보를 한눈에",
        "subtitle": "소장 중인 도서의 메타데이터와 구매 연동,\n나만의 독서 진척도를 확인해 보세요.",
        "crop_y": 0
    },
    {
        "filename": "BookTrackIos스크린샷/타이머.png",
        "output_name": "screenshot_3_timer.png",
        "title": "책장에 머문 시간을 가치 있게",
        "subtitle": "정밀한 독서 타이머 측정과 백분율 진척도로\n독서 집중도를 높여보세요.",
        "crop_y": 0
    },
    {
        "filename": "BookTrackIos스크린샷/통계1.png",
        "output_name": "screenshot_4_insights.png",
        "title": "캘린더와 차트로 보는 나의 발자취",
        "subtitle": "월간 도넛 차트와 일간 독서 꺾은선 그래프로\n나의 독서 유형을 한눈에 점검하세요.",
        "crop_y": 0
    },
    {
        "filename": "BookTrackIos스크린샷/감상평.png",
        "output_name": "screenshot_5_review_detail.png",
        "title": "생각 블록으로 조립하는 독서 기록",
        "subtitle": "인상 깊은 구절과 맞춤형 생각 카드로\n나만의 독서 기록장을 차곡차곡 쌓아보세요.",
        "crop_y": 0
    },
    {
        "filename": "BookTrackIos스크린샷/감상평리스트.png",
        "output_name": "screenshot_6_review_save.png",
        "title": "차곡차곡 모아보는 나만의 감상평",
        "subtitle": "작성한 생각과 느낌들을 모아서\n서재의 감상평 목록에서 한눈에 확인하세요.",
        "crop_y": 0
    },
    {
        "filename": "BookTrackIos스크린샷/AI리포트.png",
        "output_name": "screenshot_7_social.png",
        "title": "AI가 진단하는 나의 독서 성향",
        "subtitle": "독서 페르소나와 감상평 필체 분석,\n내 서재 맞춤형 도서 추천 리포트를 받아보세요.",
        "crop_y": 0
    },
    {
        "filename": "BookTrackIos스크린샷/업적.png",
        "output_name": "screenshot_8_achievement.png",
        "title": "성취감을 더해주는 나만의 도전 과제",
        "subtitle": "등급별 화려한 배지와 히든 업적을 해금하며\n독서의 흥미를 두 배로 늘려보세요.",
        "crop_y": 0
    },
    {
        "filename": "BookTrackIos스크린샷/그룹통계ios.png",
        "output_name": "screenshot_9_group.png",
        "title": "함께 읽고, 나누고, 성장하는 즐거움",
        "subtitle": "실시간 랭킹 리더보드와 그룹 채팅, 동료의 서재\n구경을 통해 독서 습관을 꾸준히 이어나가 보세요.",
        "crop_y": 0
    }
]

# 3.5. NFC/NFD 정규화 불일치 극복을 위한 안전 파일 경로 변환 헬퍼 (한글 주석 규정 준수)
def get_safe_file_path(base, rel_path):
    """
    맥OS 파일 시스템 특성에 따른 자모 결합 오작동 문제를 예방하기 위해
    NFC/NFD 호환 이름 매칭을 통해 실제 존재하는 경로를 추출해 주는 안전 헬퍼 함수입니다.
    """
    test_abs = os.path.join(base, rel_path)
    if os.path.exists(test_abs):
        return test_abs
        
    parts = rel_path.replace("\\", "/").split("/")
    current = base
    for part in parts:
        if not os.path.exists(current):
            return test_abs
        
        found = False
        norm_nfc = unicodedata.normalize('NFC', part)
        norm_nfd = unicodedata.normalize('NFD', part)
        
        for item in os.listdir(current):
            item_nfc = unicodedata.normalize('NFC', item)
            item_nfd = unicodedata.normalize('NFD', item)
            
            if item_nfc == norm_nfc or item_nfd == norm_nfd:
                current = os.path.join(current, item)
                found = True
                break
        if not found:
            return os.path.join(current, part)
            
    return current

# 4. 2D 선형 그라데이션 배경 생성 함수 (한글 주석 규정 준수)
def create_linear_gradient(width, height, start_hex, end_hex):
    # 헥사코드 색상을 RGB 튜플로 변환
    c1 = tuple(int(start_hex.lstrip('#')[i:i+2], 16) for i in (0, 2, 4))
    c2 = tuple(int(end_hex.lstrip('#')[i:i+2], 16) for i in (0, 2, 4))
    
    base = Image.new("RGBA", (width, height))
    draw = ImageDraw.Draw(base)
    
    # Y축 방향으로 그라데이션 렌더링
    for y in range(height):
        r = int(c1[0] + (c2[0] - c1[0]) * (y / height))
        g = int(c1[1] + (c2[1] - c1[1]) * (y / height))
        b = int(c1[2] + (c2[2] - c1[2]) * (y / height))
        draw.line([(0, y), (width, y)], fill=(r, g, b, 255))
        
    return base

# 5. 모서리가 둥근 마스크 이미지 생성 함수 (이미지 코너 깎기용, 한글 주석 규정 준수)
def create_rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([0, 0, size[0], size[1]], radius, fill=255)
    return mask

# 5.1. 이미지 비율 유지 크롭 함수 (왜곡 방지용, 한글 주석 규정 준수)
def crop_to_target_aspect_ratio(img, target_w, target_h, crop_y_offset=0):
    """
    원본 이미지를 대상 너비와 높이의 종횡비에 맞게 크롭합니다.
    세로가 모자란 경우 가로를 중앙 기준으로 잘라내어 왜곡을 방지합니다.
    세로가 넉넉한 경우 crop_y_offset을 적용하되, 이미지가 벗어나지 않도록 보정합니다.
    """
    orig_w, orig_h = img.size
    target_ratio = target_h / target_w
    orig_ratio = orig_h / orig_w
    
    if orig_ratio >= target_ratio:
        # 원본이 대상 비율보다 세로로 더 김 -> 세로를 잘라냄 (crop_y_offset 활용)
        new_h = int(orig_w * target_ratio)
        start_y = crop_y_offset
        if start_y + new_h > orig_h:
            start_y = max(0, orig_h - new_h)
        return img.crop((0, start_y, orig_w, start_y + new_h))
    else:
        # 원본이 대상 비율보다 세로로 짧음 -> 가로를 잘라내어 비율 맞춤
        new_w = int(orig_h / target_ratio)
        start_x = (orig_w - new_w) // 2
        return img.crop((start_x, 0, start_x + new_w, orig_h))

# 6. 스마트폰 디바이스 목업 및 스크린샷 합성 처리 메인 루프 (한글 주석 규정 준수)
def generate_screenshots():
    # 캔버스 크기 (가로 1320 * 세로 2868 - iPhone 6.9 디스플레이 공식 스펙 적용)
    canvas_w, canvas_h = 1320, 2868
    
    # 20% 확대 적용된 디바이스 프레임 크기 및 위치 정의 (한글 주석 규정 준수)
    device_w, device_h = 960, 2086
    device_x = (canvas_w - device_w) // 2  # 가로 중앙 정렬: X=180
    device_y = 620                         # 상단 Y 좌표를 620px로 올려 하단 마진 확보
    
    # 20% 비례 확대된 베젤 두께 (22px)
    bezel = 22
    screen_w = device_w - (bezel * 2)  # 916px
    screen_h = device_h - (bezel * 2)  # 2042px
    
    # 부드러운 나눔스퀘어라운드 폰트 로드
    try:
        title_font = ImageFont.truetype(FONT_PATH_B, size=90)
        subtitle_font = ImageFont.truetype(FONT_PATH_R, size=46)
        print("나눔스퀘어라운드 폰트가 성공적으로 로드되었습니다.")
    except IOError:
        print("나눔스퀘어라운드 폰트 로드 실패. macOS 기본 폰트를 사용합니다.")
        try:
            title_font = ImageFont.truetype("/System/Library/Fonts/AppleSDGothicNeo.ttc", size=90, index=0)
            subtitle_font = ImageFont.truetype("/System/Library/Fonts/AppleSDGothicNeo.ttc", size=46, index=0)
        except IOError:
            title_font = ImageFont.load_default()
            subtitle_font = ImageFont.load_default()

    for config in SCREENSHOT_CONFIGS:
        # 안전하게 파일 경로 조회
        screenshot_path = get_safe_file_path(BASE_DIR, config["filename"])
            
        if not os.path.exists(screenshot_path):
            print(f"오류: 스크린샷 원본 이미지를 찾을 수 없습니다: {config['filename']}")
            continue
            
        print(f"처리 중: {os.path.basename(screenshot_path)} -> {config['output_name']}")
        
        # 1. 캔버스 배경 그라데이션 생성 (글로벌 단일 테마로 통일)
        canvas = create_linear_gradient(canvas_w, canvas_h, GLOBAL_GRADIENT_START, GLOBAL_GRADIENT_END)
        
        # 2. 디바이스 부드러운 그림자(Shadow) 생성 및 렌더링
        shadow_padding = 72
        shadow_w = device_w + shadow_padding * 2
        shadow_h = device_h + shadow_padding * 2
        shadow_img = Image.new("RGBA", (shadow_w, shadow_h), (0, 0, 0, 0))
        shadow_draw = ImageDraw.Draw(shadow_img)
        # 그림자 둥글기 값도 20% 확대 적용 (145 -> 174, 한글 주석 규정 준수)
        shadow_draw.rounded_rectangle(
            [shadow_padding, shadow_padding, shadow_padding + device_w, shadow_padding + device_h],
            radius=174,
            fill=(0, 0, 0, 160)
        )
        shadow_img = shadow_img.filter(ImageFilter.GaussianBlur(36))
        canvas.alpha_composite(shadow_img, (device_x - shadow_padding, device_y - shadow_padding))
        
        # 3. 홍보 문구(텍스트) 그리기
        draw = ImageDraw.Draw(canvas)
        
        # 제목 가로 중앙 정렬 및 드로잉 (Y=180px)
        title_text = config["title"]
        title_bbox = draw.textbbox((0, 0), title_text, font=title_font)
        title_w = title_bbox[2] - title_bbox[0]
        title_x = (canvas_w - title_w) // 2
        draw.text((title_x, 180), title_text, fill="#FFFFFF", font=title_font)
        
        # 서브타이틀 줄바꿈 처리 및 가로 중앙 정렬 드로잉 (Y=310px 시작)
        subtitle_lines = config["subtitle"].split('\n')
        curr_y = 310
        for line in subtitle_lines:
            sub_bbox = draw.textbbox((0, 0), line, font=subtitle_font)
            sub_w = sub_bbox[2] - sub_bbox[0]
            sub_x = (canvas_w - sub_w) // 2
            draw.text((sub_x, curr_y), line, fill="#E2E8F0", font=subtitle_font)
            curr_y += 66  # 줄 간격 확보
            
        # 4. 디바이스 프레임(베젤 및 바디) 그리기 - 20% 비례 확대 곡률 적용 (한글 주석 규정 준수)
        device_img = Image.new("RGBA", (device_w, device_h), (0, 0, 0, 0))
        dev_draw = ImageDraw.Draw(device_img)
        
        # 4.1. 20% 스케일업된 외곽 모서리 둥글기 156px 대입 (concentric 공식 준수, 한글 주석 규정 준수)
        dev_draw.rounded_rectangle(
            [0, 0, device_w, device_h],
            radius=156,
            fill="#0F172A",
            outline="#8E9AA6",
            width=6
        )
        # 4.2. 20% 스케일업된 내부 링 둥글기 149px 설정
        dev_draw.rounded_rectangle(
            [6, 6, device_w - 6, device_h - 6],
            radius=149,
            fill="#0B0F19",
            outline="#475569",
            width=2
        )
        
        # 4.3. 20% 비례 확대된 상단 미세 수화부 스피커 슬릿 (144x4)
        speaker_w, speaker_h = 144, 4
        speaker_x = (device_w - speaker_w) // 2
        speaker_y = 8
        dev_draw.rounded_rectangle(
            [speaker_x, speaker_y, speaker_x + speaker_w, speaker_y + speaker_h],
            radius=2,
            fill="#334155"
        )
        
        # 5. 스크린샷 이미지 크롭 및 내부 영역 매핑
        src_img = Image.open(screenshot_path).convert("RGBA")
        
        # 비율 유지 크롭 함수를 호출하여 이미지 왜곡 방지 및 하단 검은 공백 방지
        cropped_img = crop_to_target_aspect_ratio(src_img, screen_w, screen_h, crop_y_offset=config["crop_y"])
        
        # 내부 스크린 해상도에 맞추어 resize
        screen_img = cropped_img.resize((screen_w, screen_h), Image.Resampling.LANCZOS)
        
        # 5.1. 20% 스케일업된 내부 스크린 곡률 134px 대입 (Concentric 공식: 156 - 22 = 134, 한글 주석 규정 준수)
        screen_mask = create_rounded_mask((screen_w, screen_h), 134)
        
        # 둥글게 깎은 스크린샷을 베젤 이미지 내부 스크린 영역에 합성
        device_img.paste(screen_img, (bezel, bezel), screen_mask)
        
        # 5.5. 20% 스케일업된 화면 하단 iOS 홈 바(Home Indicator) 드로잉 (288x8, Y마진 bezel + 36px 확보)
        home_bar_w, home_bar_h = 288, 8
        home_bar_x = (device_w - home_bar_w) // 2
        home_bar_y = device_h - bezel - 36
        dev_draw.rounded_rectangle(
            [home_bar_x, home_bar_y, home_bar_x + home_bar_w, home_bar_y + home_bar_h],
            radius=4,
            fill="#FFFFFF"
        )
        
        # 6. 20% 스케일업된 다이내믹 아일랜드 (204x53, Y축 bezel + 14px 위치, 한글 주석 규정 준수)
        island_w, island_h = 204, 53
        island_x = (device_w - island_w) // 2
        island_y = bezel + 14
        
        # 다이내믹 아일랜드 외형 글래스 (둥글기 반경 26px)
        dev_draw.rounded_rectangle(
            [island_x, island_y, island_x + island_w, island_y + island_h],
            radius=26,
            fill="#000000",
            outline="#1E293B",
            width=1
        )
        # 카메라 렌즈 및 센서 렌더링 (20% 스케일 반영)
        lens_x1 = island_x + island_w - 46
        lens_y1 = island_y + island_h // 2
        # 메인 렌즈
        dev_draw.ellipse(
            [lens_x1 - 7, lens_y1 - 7, lens_x1 + 7, lens_y1 + 7],
            fill="#111827",
            outline="#0F172A"
        )
        # 렌즈 빛 반사
        dev_draw.ellipse(
            [lens_x1 - 2.5, lens_y1 - 2.5, lens_x1 + 2.5, lens_y1 + 2.5],
            fill="#1E3A8A"
        )
        # 센서 타원
        sensor_x = island_x + 38
        sensor_y = island_y + island_h // 2
        dev_draw.ellipse(
            [sensor_x - 6, sensor_y - 6, sensor_x + 6, sensor_y + 6],
            fill="#1A1D24"
        )
        
        # 7. 완성된 디바이스 목업 이미지를 배경 캔버스 위에 얹음
        canvas.alpha_composite(device_img, (device_x, device_y))
        
        # 8. 최종 품질로 저장 (스토어용스크린샷 폴더 내 저장)
        final_output_path = os.path.join(OUTPUT_DIR, config["output_name"])
        canvas.convert("RGB").save(final_output_path, "PNG")
        print(f"저장 완료: {final_output_path}")

def generate_feature_graphic():
    print("구글 플레이 스토어 대표 그래픽 이미지(1024x500) 제작을 시작합니다...")
    canvas_w, canvas_h = 1024, 500
    
    # 1. 스크린샷과 통일된 딥 바이올렛 그라데이션 배경 생성
    canvas = create_linear_gradient(canvas_w, canvas_h, GLOBAL_GRADIENT_START, GLOBAL_GRADIENT_END)
    draw = ImageDraw.Draw(canvas)
    
    # 2. 3단 레이아웃에 필요한 폰트 개별 로드
    try:
        tag_font = ImageFont.truetype(FONT_PATH_R, size=14)
        title_font = ImageFont.truetype(FONT_PATH_B, size=48)
        slogan_font = ImageFont.truetype(FONT_PATH_R, size=20)
        print("나눔스퀘어라운드 폰트가 대표 그래픽에 성공적으로 로드되었습니다.")
    except IOError:
        print("특정 폰트 로드 실패. macOS 기본 고딕 폰트로 폴백합니다.")
        try:
            tag_font = ImageFont.truetype("/System/Library/Fonts/AppleSDGothicNeo.ttc", size=14, index=0)
            title_font = ImageFont.truetype("/System/Library/Fonts/AppleSDGothicNeo.ttc", size=48, index=0)
            slogan_font = ImageFont.truetype("/System/Library/Fonts/AppleSDGothicNeo.ttc", size=20, index=0)
        except IOError:
            tag_font = ImageFont.load_default()
            title_font = ImageFont.load_default()
            slogan_font = ImageFont.load_default()
            
    # 3. 좌측 3단 텍스트 구조 스타일 렌더링
    text_x = 90
    tag_y = 120
    title_y = 165
    slogan_y = 250
    
    # 1단: 카테고리 태그
    tag_text = "D I G I T A L   B O O K   L I F E"
    draw.text((text_x, tag_y), tag_text, fill="#C084FC", font=tag_font)
    
    # 2단: 메인 슬로건
    title_text = "나의 독서가 기록되는 곳"
    draw.text((text_x + 2, title_y + 2), title_text, fill=(0, 0, 0, 160), font=title_font)
    draw.text((text_x, title_y), title_text, fill="#FFFFFF", font=title_font)
    
    # 3단: 서브 설명
    slogan_text = "책을 읽고, 생각을 남기고,\n나만의 독서 여정을 만들어보세요"
    slogan_lines = slogan_text.split('\n')
    curr_y = slogan_y
    for line in slogan_lines:
        draw.text((text_x + 1, curr_y + 1), line, fill=(0, 0, 0, 140), font=slogan_font)
        draw.text((text_x, curr_y), line, fill="#CBD5E1", font=slogan_font)
        curr_y += 32
    
    # 4. 우측 목업 디바이스 렌더링 (BookTrackIos스크린샷/내서재.png 사용 및 20% 확대 적용, 한글 주석 규정 준수)
    intro_filename = "BookTrackIos스크린샷/내서재.png"
    intro_path = get_safe_file_path(BASE_DIR, intro_filename)
            
    if not os.path.exists(intro_path):
        print(f"오류: 대표 그래픽에 합성할 인트로 화면 이미지를 찾을 수 없습니다: {intro_filename}")
        return
        
    # 20% 확대 적용 (260x520 -> 312x624)
    device_w, device_h = 312, 624
    device_x = 640                         # 너비 확장에 대응해 기기 시작 X를 640px로 당김
    device_y = 30                          # 세로 확장에 대응해 기기 시작 Y를 30px로 올림
    
    # 그림자 레이어 추가
    shadow_p = 42
    shadow_w = device_w + shadow_p * 2
    shadow_h = device_h + shadow_p * 2
    shadow_img = Image.new("RGBA", (shadow_w, shadow_h), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow_img)
    # 그림자 둥글기 20% 확대 조정 (85 -> 100)
    shadow_draw.rounded_rectangle(
        [shadow_p, shadow_p, shadow_p + device_w, shadow_p + device_h],
        radius=100,
        fill=(0, 0, 0, 170)
    )
    shadow_img = shadow_img.filter(ImageFilter.GaussianBlur(18))
    canvas.alpha_composite(shadow_img, (device_x - shadow_p, device_y - shadow_p))
    
    # 디바이스 베젤 이미지 생성
    device_img = Image.new("RGBA", (device_w, device_h), (0, 0, 0, 0))
    dev_draw = ImageDraw.Draw(device_img)
    
    # 외곽 프레임 (티타늄 둥근 코너 radius=96 상향 조정, 한글 주석 규정 준수)
    dev_draw.rounded_rectangle(
        [0, 0, device_w, device_h],
        radius=96,
        fill="#0F172A",
        outline="#8E9AA6",
        width=4
    )
    # 이너 베젤 라인
    dev_draw.rounded_rectangle(
        [4, 4, device_w - 4, device_h - 4],
        radius=91,
        fill="#0B0F19",
        outline="#475569",
        width=1
    )
    
    # 상단 스피커 슬릿
    speaker_w, speaker_h = 48, 3
    speaker_x = (device_w - speaker_w) // 2
    speaker_y = 4
    dev_draw.rounded_rectangle(
        [speaker_x, speaker_y, speaker_x + speaker_w, speaker_y + speaker_h],
        radius=1,
        fill="#334155"
    )
    
    # 5. 인트로 스크린샷 크롭 및 내부 화면 매핑 (20% 스케일 적용)
    bezel = 12
    screen_w = device_w - (bezel * 2)  # 288px
    screen_h = device_h - (bezel * 2)  # 600px
    
    src_img = Image.open(intro_path).convert("RGBA")
    
    cropped_img = crop_to_target_aspect_ratio(src_img, screen_w, screen_h, crop_y_offset=0)
    screen_img = cropped_img.resize((screen_w, screen_h), Image.Resampling.LANCZOS)
    # 대표 그래픽 내부 스크린샷 마스크 곡률도 concentric 84px로 대폭 상향 (한글 주석 규정 준수)
    screen_mask = create_rounded_mask((screen_w, screen_h), 84)
    
    device_img.paste(screen_img, (bezel, bezel), screen_mask)
    
    # 5.5. 하단 홈 바
    home_bar_w, home_bar_h = 96, 4
    home_bar_x = (device_w - home_bar_w) // 2
    home_bar_y = device_h - bezel - 12
    dev_draw.rounded_rectangle(
        [home_bar_x, home_bar_y, home_bar_x + home_bar_w, home_bar_y + home_bar_h],
        radius=2,
        fill="#FFFFFF"
    )
    
    # 6. 다이내믹 아일랜드 카메라 홀 드로잉
    island_w, island_h = 72, 17
    island_x = (device_w - island_w) // 2
    island_y = bezel + 7
    dev_draw.rounded_rectangle(
        [island_x, island_y, island_x + island_w, island_y + island_h],
        radius=8,
        fill="#000000",
        outline="#1E293B",
        width=1
    )
    
    # 7. 목업 완성본 캔버스에 안착
    canvas.alpha_composite(device_img, (device_x, device_y))
    
    # 8. 최종 이미지 파일 저장
    final_output_path = os.path.join(OUTPUT_DIR, "feature_graphic.png")
    canvas.convert("RGB").save(final_output_path, "PNG")
    print(f"대표 그래픽 저장 완료: {final_output_path}")

if __name__ == "__main__":
    generate_screenshots()
    generate_feature_graphic()
    print("모든 스토어 등록용 이미지(스크린샷 8장 + 대표 그래픽 1장) 생성이 완료되었습니다!")
