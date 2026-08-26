import os
import unicodedata
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# 1. 경로 및 상수 정의
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
EN_SCREENSHOT_DIR = os.path.join(BASE_DIR, "enScreenShot")
OUTPUT_DIR = os.path.join(EN_SCREENSHOT_DIR, "스토어용스크린샷")

# 폰트 경로 (나눔스퀘어라운드 및 macOS 시스템 영문 폰트 폴백 지원)
FONT_DIR = os.path.join(BASE_DIR, "fonts")
FONT_PATH_B = os.path.join(FONT_DIR, "NanumSquareRoundB.ttf")  # 타이틀용 Bold
FONT_PATH_R = os.path.join(FONT_DIR, "NanumSquareRoundR.ttf")  # 서브타이틀용 Regular

# 출력 디렉토리 생성
os.makedirs(OUTPUT_DIR, exist_ok=True)

# 2. 통합 배경 테마 색상 (고급스럽고 일관된 딥 바이올렛 & 다크 미드나잇 그라데이션)
GLOBAL_GRADIENT_START = "#251D3A"  # 딥 바이올렛
GLOBAL_GRADIENT_END = "#090D16"    # 다크 미드나잇

# 3. 영문 스크린샷 이미지 매칭 및 세련된 영문 홍보 문구 정의
SCREENSHOT_CONFIGS_EN = [
    {
        "filename": "myLibrary.png",
        "output_name": "screenshot_1_library.png",
        "title": "Build Your Digital Bookshelf",
        "subtitle": "Organize reading status, manage books,\nand track your reading progress effortlessly.",
        "crop_y": 0
    },
    {
        "filename": "bookSeacrh.png",
        "output_name": "screenshot_2_search.png",
        "title": "Discover & Explore Books",
        "subtitle": "Search global book metadata and add titles\nto your personal library with a single tap.",
        "crop_y": 0
    },
    {
        "filename": "Screenshot_20260819_213048.png",
        "output_name": "screenshot_3_timer.png",
        "title": "Focus with Precise Timers",
        "subtitle": "Track your reading time using stopwatches\nand countdown timers with goal progress.",
        "crop_y": 0
    },
    {
        "filename": "stats.png",
        "output_name": "screenshot_4_stats.png",
        "title": "Visualize Your Reading Habits",
        "subtitle": "Review monthly charts, reading calendars,\nand daily reading time analytics.",
        "crop_y": 0
    },
    {
        "filename": "aiReport.png",
        "output_name": "screenshot_5_ai_report.png",
        "title": "AI-Powered Reading Diagnostics",
        "subtitle": "Discover your unique reading persona,\nwriting style analysis, and smart book picks.",
        "crop_y": 0
    },
    {
        "filename": "group.png",
        "output_name": "screenshot_6_group.png",
        "title": "Read & Grow Together",
        "subtitle": "Join book clubs, compare real-time leaderboards,\nand stay motivated with fellow readers.",
        "crop_y": 0
    },
    {
        "filename": "myInfo.png",
        "output_name": "screenshot_7_myinfo.png",
        "title": "Personalized Goals & Settings",
        "subtitle": "Set reading goals, unlock achievement badges,\nand tailor app settings to your style.",
        "crop_y": 0
    }
]

# 4. 2D 선형 그라데이션 배경 생성 함수
def create_linear_gradient(width, height, start_hex, end_hex):
    c1 = tuple(int(start_hex.lstrip('#')[i:i+2], 16) for i in (0, 2, 4))
    c2 = tuple(int(end_hex.lstrip('#')[i:i+2], 16) for i in (0, 2, 4))
    
    base = Image.new("RGBA", (width, height))
    draw = ImageDraw.Draw(base)
    
    for y in range(height):
        r = int(c1[0] + (c2[0] - c1[0]) * (y / height))
        g = int(c1[1] + (c2[1] - c1[1]) * (y / height))
        b = int(c1[2] + (c2[2] - c1[2]) * (y / height))
        draw.line([(0, y), (width, y)], fill=(r, g, b, 255))
        
    return base

# 5. 모서리가 둥근 마스크 이미지 생성 함수
def create_rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([0, 0, size[0], size[1]], radius, fill=255)
    return mask

# 5.1. 이미지 비율 유지 크롭 함수 (왜곡 방지용)
def crop_to_target_aspect_ratio(img, target_w, target_h, crop_y_offset=0):
    orig_w, orig_h = img.size
    target_ratio = target_h / target_w
    orig_ratio = orig_h / orig_w
    
    if orig_ratio >= target_ratio:
        new_h = int(orig_w * target_ratio)
        start_y = crop_y_offset
        if start_y + new_h > orig_h:
            start_y = max(0, orig_h - new_h)
        return img.crop((0, start_y, orig_w, start_y + new_h))
    else:
        new_w = int(orig_h / target_ratio)
        start_x = (orig_w - new_w) // 2
        return img.crop((start_x, 0, start_x + new_w, orig_h))

# 6. 스마트폰 디바이스 목업 및 스크린샷 합성 처리 메인 루프
def generate_en_screenshots():
    canvas_w, canvas_h = 1080, 1920
    
    device_w, device_h = 700, 1400
    device_x = (canvas_w - device_w) // 2  # 가로 중앙 정렬 X=190
    device_y = 480                         # Y=480 ~ 1880
    
    bezel = 18
    screen_w = device_w - (bezel * 2)  # 664px
    screen_h = device_h - (bezel * 2)  # 1364px
    
    # 폰트 로드
    try:
        title_font = ImageFont.truetype(FONT_PATH_B, size=64)
        subtitle_font = ImageFont.truetype(FONT_PATH_R, size=34)
        print("나눔스퀘어라운드 폰트가 영문 스크린샷 생성에 로드되었습니다.")
    except IOError:
        print("시스템 영문 폰트로 폴백합니다.")
        try:
            title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", size=64, index=0)
            subtitle_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", size=34, index=0)
        except IOError:
            title_font = ImageFont.load_default()
            subtitle_font = ImageFont.load_default()

    for config in SCREENSHOT_CONFIGS_EN:
        target_filename = config["filename"]
        screenshot_path = os.path.join(EN_SCREENSHOT_DIR, target_filename)
        
        if not os.path.exists(screenshot_path):
            normalized_name = unicodedata.normalize('NFC', target_filename)
            screenshot_path = os.path.join(EN_SCREENSHOT_DIR, normalized_name)
            if not os.path.exists(screenshot_path):
                normalized_name = unicodedata.normalize('NFD', target_filename)
                screenshot_path = os.path.join(EN_SCREENSHOT_DIR, normalized_name)

        if not os.path.exists(screenshot_path):
            print(f"오류: 스크린샷 원본 이미지를 찾을 수 없습니다: {config['filename']}")
            continue
            
        print(f"처리 중: {os.path.basename(screenshot_path)} -> {config['output_name']}")
        
        # 1. 캔버스 배경 그라데이션 생성
        canvas = create_linear_gradient(canvas_w, canvas_h, GLOBAL_GRADIENT_START, GLOBAL_GRADIENT_END)
        
        # 2. 디바이스 부드러운 그림자(Shadow) 생성
        shadow_padding = 45
        shadow_w = device_w + shadow_padding * 2
        shadow_h = device_h + shadow_padding * 2
        shadow_img = Image.new("RGBA", (shadow_w, shadow_h), (0, 0, 0, 0))
        shadow_draw = ImageDraw.Draw(shadow_img)
        shadow_draw.rounded_rectangle(
            [shadow_padding, shadow_padding, shadow_padding + device_w, shadow_padding + device_h],
            radius=55,
            fill=(0, 0, 0, 160)
        )
        shadow_img = shadow_img.filter(ImageFilter.GaussianBlur(28))
        canvas.alpha_composite(shadow_img, (device_x - shadow_padding, device_y - shadow_padding))
        
        # 3. 홍보 문구(영문 텍스트) 그리기
        draw = ImageDraw.Draw(canvas)
        
        title_text = config["title"]
        title_bbox = draw.textbbox((0, 0), title_text, font=title_font)
        title_w = title_bbox[2] - title_bbox[0]
        title_x = (canvas_w - title_w) // 2
        draw.text((title_x, 110), title_text, fill="#FFFFFF", font=title_font)
        
        subtitle_lines = config["subtitle"].split('\n')
        curr_y = 210
        for line in subtitle_lines:
            sub_bbox = draw.textbbox((0, 0), line, font=subtitle_font)
            sub_w = sub_bbox[2] - sub_bbox[0]
            sub_x = (canvas_w - sub_w) // 2
            draw.text((sub_x, curr_y), line, fill="#E2E8F0", font=subtitle_font)
            curr_y += 50
            
        # 4. 디바이스 프레임(베젤) 그리기
        device_img = Image.new("RGBA", (device_w, device_h), (0, 0, 0, 0))
        dev_draw = ImageDraw.Draw(device_img)
        
        dev_draw.rounded_rectangle(
            [0, 0, device_w, device_h],
            radius=50,
            fill="#1E293B",  # Slate 800
            outline="#475569",  # 실버 하이라이트 베젤
            width=3
        )
        
        # 5. 스크린샷 이미지 크롭 및 매핑
        src_img = Image.open(screenshot_path).convert("RGBA")
        cropped_img = crop_to_target_aspect_ratio(src_img, screen_w, screen_h, crop_y_offset=config["crop_y"])
        screen_img = cropped_img.resize((screen_w, screen_h), Image.Resampling.LANCZOS)
        
        screen_mask = create_rounded_mask((screen_w, screen_h), 32)
        device_img.paste(screen_img, (bezel, bezel), screen_mask)
        
        # 6. 다이내믹 아일랜드 카메라 홀 드로잉
        island_w, island_h = 130, 28
        island_x = (device_w - island_w) // 2
        island_y = bezel + 12
        dev_draw.rounded_rectangle(
            [island_x, island_y, island_x + island_w, island_y + island_h],
            radius=14,
            fill="#090D16"
        )
        
        # 7. 완성된 디바이스 목업을 배경 캔버스에 안착
        canvas.alpha_composite(device_img, (device_x, device_y))
        
        # 8. 최종 품질로 저장
        final_output_path = os.path.join(OUTPUT_DIR, config["output_name"])
        canvas.convert("RGB").save(final_output_path, "PNG")
        print(f"영문 스크린샷 저장 완료: {final_output_path}")

# 7. 영문 대표 그래픽 이미지(1024x500) 생성 함수
def generate_en_feature_graphic():
    print("구글 플레이 스토어 영문 대표 그래픽 이미지(1024x500) 제작을 시작합니다...")
    canvas_w, canvas_h = 1024, 500
    
    canvas = create_linear_gradient(canvas_w, canvas_h, GLOBAL_GRADIENT_START, GLOBAL_GRADIENT_END)
    draw = ImageDraw.Draw(canvas)
    
    try:
        tag_font = ImageFont.truetype(FONT_PATH_R, size=14)
        title_font = ImageFont.truetype(FONT_PATH_B, size=44)
        slogan_font = ImageFont.truetype(FONT_PATH_R, size=18)
    except IOError:
        try:
            tag_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", size=14, index=0)
            title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", size=44, index=0)
            slogan_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", size=18, index=0)
        except IOError:
            tag_font = ImageFont.load_default()
            title_font = ImageFont.load_default()
            slogan_font = ImageFont.load_default()
            
    text_x = 80
    tag_y = 120
    title_y = 165
    slogan_y = 245
    
    # 1단: 카테고리 태그
    tag_text = "D I G I T A L   B O O K   L I F E"
    draw.text((text_x, tag_y), tag_text, fill="#C084FC", font=tag_font)
    
    # 2단: 영문 메인 타이틀
    title_text = "Where Your Reading\nIs Recorded"
    title_lines = title_text.split('\n')
    curr_title_y = title_y
    for line in title_lines:
        draw.text((text_x + 2, curr_title_y + 2), line, fill=(0, 0, 0, 160), font=title_font)
        draw.text((text_x, curr_title_y), line, fill="#FFFFFF", font=title_font)
        curr_title_y += 50
    
    # 3단: 영문 서브 설명
    slogan_text = "Track your books, gain AI insights,\nand build healthy reading habits."
    slogan_lines = slogan_text.split('\n')
    curr_y = curr_title_y + 15
    for line in slogan_lines:
        draw.text((text_x + 1, curr_y + 1), line, fill=(0, 0, 0, 140), font=slogan_font)
        draw.text((text_x, curr_y), line, fill="#CBD5E1", font=slogan_font)
        curr_y += 28
    
    # 4. 우측 디바이스 목업
    intro_filename = "myLibrary.png"
    intro_path = os.path.join(EN_SCREENSHOT_DIR, intro_filename)
    
    if not os.path.exists(intro_path):
        print(f"오류: 대표 그래픽용 이미지를 찾을 수 없습니다: {intro_filename}")
        return
        
    device_w, device_h = 260, 520
    device_x = 680
    device_y = 60
    
    shadow_p = 35
    shadow_w = device_w + shadow_p * 2
    shadow_h = device_h + shadow_p * 2
    shadow_img = Image.new("RGBA", (shadow_w, shadow_h), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow_img)
    shadow_draw.rounded_rectangle(
        [shadow_p, shadow_p, shadow_p + device_w, shadow_p + device_h],
        radius=44,
        fill=(0, 0, 0, 170)
    )
    shadow_img = shadow_img.filter(ImageFilter.GaussianBlur(18))
    canvas.alpha_composite(shadow_img, (device_x - shadow_p, device_y - shadow_p))
    
    device_img = Image.new("RGBA", (device_w, device_h), (0, 0, 0, 0))
    dev_draw = ImageDraw.Draw(device_img)
    
    dev_draw.rounded_rectangle(
        [0, 0, device_w, device_h],
        radius=42,
        fill="#1E293B",
        outline="#475569",
        width=3
    )
    
    bezel = 10
    screen_w = device_w - (bezel * 2)
    screen_h = device_h - (bezel * 2)
    
    src_img = Image.open(intro_path).convert("RGBA")
    cropped_img = crop_to_target_aspect_ratio(src_img, screen_w, screen_h, crop_y_offset=0)
    screen_img = cropped_img.resize((screen_w, screen_h), Image.Resampling.LANCZOS)
    screen_mask = create_rounded_mask((screen_w, screen_h), 28)
    
    device_img.paste(screen_img, (bezel, bezel), screen_mask)
    
    island_w, island_h = 64, 15
    island_x = (device_w - island_w) // 2
    island_y = bezel + 7
    dev_draw.rounded_rectangle(
        [island_x, island_y, island_x + island_w, island_y + island_h],
        radius=7,
        fill="#090D16"
    )
    
    canvas.alpha_composite(device_img, (device_x, device_y))
    
    final_output_path = os.path.join(OUTPUT_DIR, "feature_graphic_en.png")
    canvas.convert("RGB").save(final_output_path, "PNG")
    print(f"영문 대표 그래픽 저장 완료: {final_output_path}")

if __name__ == "__main__":
    generate_en_screenshots()
    generate_en_feature_graphic()
    print("모든 영문 스토어 등록용 이미지(스크린샷 7장 + 대표 그래픽 1장) 생성이 완료되었습니다!")
