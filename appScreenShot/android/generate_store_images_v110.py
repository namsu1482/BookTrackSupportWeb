import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# 1. 경로 정의
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(BASE_DIR, "../../.."))
REF_PATH = os.path.join(PROJECT_ROOT, "docs/storeData/android/ko/ChatGPT Image 2026년 8월 25일 오후 04_43_42 (5).png")

# 부드럽고 세련된 프리텐다드(Pretendard) 폰트 적용
FONT_BOLD_PATH = os.path.join(BASE_DIR, "fonts/Pretendard-Bold.otf")
FONT_SEMIBOLD_PATH = os.path.join(BASE_DIR, "fonts/Pretendard-SemiBold.otf")
FONT_MEDIUM_PATH = os.path.join(BASE_DIR, "fonts/Pretendard-Medium.otf")
APPLE_FONT = "/System/Library/Fonts/AppleSDGothicNeo.ttc"

def get_title_font(size):
    if os.path.exists(FONT_BOLD_PATH):
        return ImageFont.truetype(FONT_BOLD_PATH, size)
    return ImageFont.truetype(APPLE_FONT, size, index=4)

def get_sub_font(size):
    if os.path.exists(FONT_MEDIUM_PATH):
        return ImageFont.truetype(FONT_MEDIUM_PATH, size)
    return ImageFont.truetype(APPLE_FONT, size, index=0)

def get_badge_font(size):
    if os.path.exists(FONT_SEMIBOLD_PATH):
        return ImageFont.truetype(FONT_SEMIBOLD_PATH, size)
    return ImageFont.truetype(APPLE_FONT, size, index=2)

def create_rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([0, 0, size[0], size[1]], radius=radius, fill=255)
    return mask

def make_store_composition(
    fg_screen_path,
    bg_screen_path,
    title_prefix,
    title_accent,
    subtitle_lines,
    badges,
    output_android_path,
    output_ios_path
):
    canvas_w, canvas_h = 941, 1672
    ref = Image.open(REF_PATH).convert("RGBA")
    
    # 1. 배경 준비 (상단 우측 3D 오픈북 및 스파클링 에셋 온전히 보존, 하단 부드러운 파스텔 그라데이션)
    clean_bg = Image.new("RGBA", (canvas_w, canvas_h))
    cbd = ImageDraw.Draw(clean_bg)
    for y in range(canvas_h):
        ratio = y / canvas_h
        r = int(247 - (247 - 222) * ratio)
        g = int(249 - (249 - 231) * ratio)
        b = int(253 - (253 - 247) * ratio)
        cbd.line([(0, y), (canvas_w, y)], fill=(r, g, b, 255))
        
    canvas = ref.copy()
    
    # 기존 텍스트 영역(y:130~370, x:0~730)을 깨끗한 그라데이션으로 자연스럽게 덮어쓰기
    text_cover = clean_bg.crop((0, 130, 730, 370))
    canvas.paste(text_cover, (0, 130))
    
    # 디바이스 배치 영역(y:370 ~ 1672)도 깨끗한 배경으로 교체 (회색 여백 및 기존 디바이스 완전 제거)
    bottom_cover = clean_bg.crop((0, 370, canvas_w, canvas_h))
    canvas.paste(bottom_cover, (0, 370))
    
    draw = ImageDraw.Draw(canvas)
    
    # 2. 메인 타이틀 및 서브타이틀 (부드러운 프리텐다드 폰트 적용)
    title_font = get_title_font(56)
    title_x = 74
    title_y = 158
    draw.text((title_x, title_y), title_prefix, fill="#0F172A", font=title_font)
    prefix_w = title_font.getlength(title_prefix)
    draw.text((title_x + prefix_w, title_y), title_accent, fill="#0062FF", font=title_font)
    
    sub_font = get_sub_font(26)
    sub_x = 76
    sub_y = 256
    for line in subtitle_lines:
        draw.text((sub_x, sub_y), line, fill="#64748B", font=sub_font)
        sub_y += 38
        
    # 3. 우측 배경 보조 디바이스 카드 렌더링 (잘라낸 스크린샷 크기에 맞춤)
    bg_raw = Image.open(bg_screen_path).convert("RGBA")
    bg_w = 340
    bg_scaled_h = int(bg_raw.height * (bg_w / bg_raw.width))
    bg_h = bg_scaled_h
    bg_x, bg_y = 610, 480
    bg_radius = 34
    
    bg_resized = bg_raw.resize((bg_w, bg_h), Image.Resampling.LANCZOS)
    bg_card = Image.new("RGBA", (bg_w, bg_h), (0, 0, 0, 0))
    bg_mask = create_rounded_mask((bg_w, bg_h), bg_radius)
    bg_card.paste(bg_resized, (0, 0), bg_mask)
    
    bg_draw = ImageDraw.Draw(bg_card)
    bg_draw.rounded_rectangle([0, 0, bg_w, bg_h], radius=bg_radius, outline="#CBD5E1", width=2)
    
    # 보조 카드 그림자
    bg_shadow = Image.new("RGBA", (bg_w + 60, bg_h + 60), (0, 0, 0, 0))
    bgs_draw = ImageDraw.Draw(bg_shadow)
    bgs_draw.rounded_rectangle([30, 30, 30 + bg_w, 30 + bg_h], radius=bg_radius, fill=(15, 23, 42, 45))
    bg_shadow = bg_shadow.filter(ImageFilter.GaussianBlur(20))
    canvas.alpha_composite(bg_shadow, (bg_x - 30, bg_y - 20))
    canvas.alpha_composite(bg_card, (bg_x, bg_y))
    
    # 4. 전면 메인 스마트폰 목업 (스크린샷 잘라낸 부분까지만 정밀하게 프레임 크기 동적 조절)
    fg_raw = Image.open(fg_screen_path).convert("RGBA")
    
    fg_w = 510
    bezel_h = 14
    screen_w = fg_w - bezel_h * 2  # 482px
    status_bar_h = 58
    
    # 스크린샷의 실제 종횡비에 정확히 맞춘 컨텐츠 높이
    content_h = int(fg_raw.height * (screen_w / fg_raw.width))
    screen_h = status_bar_h + content_h
    fg_h = screen_h + bezel_h * 2  # 하단 여백 없이 정확히 딱 맞춤
    phone_radius = 52
    screen_radius = 42
    
    fg_x = 100
    fg_y = 390
    
    # 폰트 외곽 드롭 섀도우
    fg_shadow = Image.new("RGBA", (fg_w + 80, fg_h + 80), (0, 0, 0, 0))
    fgs_draw = ImageDraw.Draw(fg_shadow)
    fgs_draw.rounded_rectangle([40, 40, 40 + fg_w, 40 + fg_h], radius=phone_radius, fill=(15, 23, 42, 60))
    fg_shadow = fg_shadow.filter(ImageFilter.GaussianBlur(28))
    canvas.alpha_composite(fg_shadow, (fg_x - 40, fg_y - 20))
    
    # 폰 본체 프레임
    phone_frame = Image.new("RGBA", (fg_w, fg_h), (0, 0, 0, 0))
    pf_draw = ImageDraw.Draw(phone_frame)
    pf_draw.rounded_rectangle(
        [0, 0, fg_w, fg_h],
        radius=phone_radius,
        fill="#1C1E23",
        outline="#475569",
        width=3
    )
    
    # 내부 스크린 영역 (상단 상태바 + 스크린샷 컨텐츠)
    fg_resized = fg_raw.resize((screen_w, content_h), Image.Resampling.LANCZOS)
    screen_canvas = Image.new("RGBA", (screen_w, screen_h), "#FFFFFF")
    sc_draw = ImageDraw.Draw(screen_canvas)
    
    # 상단 상태 표시줄
    time_font = get_title_font(21)
    sc_draw.text((36, 18), "9:41", fill="#0F172A", font=time_font)
    
    # 다이내믹 아일랜드
    island_w, island_h = 108, 28
    island_x = (screen_w - island_w) // 2
    sc_draw.rounded_rectangle(
        [island_x, 15, island_x + island_w, 15 + island_h],
        radius=island_h // 2,
        fill="#000000"
    )
    
    # 안테나 바, 와이파이, 배터리 아이콘
    sig_x = screen_w - 95
    for i in range(4):
        hb = 6 + i * 3
        sc_draw.rounded_rectangle([sig_x + i * 6, 29 - hb, sig_x + i * 6 + 4, 29], radius=1, fill="#0F172A")
    sc_draw.ellipse([screen_w - 65, 21, screen_w - 55, 31], fill="#0F172A")
    sc_draw.rounded_rectangle([screen_w - 48, 19, screen_w - 22, 31], radius=3, outline="#0F172A", width=2)
    sc_draw.rectangle([screen_w - 45, 22, screen_w - 25, 28], fill="#0F172A")
    sc_draw.rectangle([screen_w - 22, 23, screen_w - 20, 27], fill="#0F172A")
    
    # 상태바 바로 아래에 스크린샷 컨텐츠 완벽 정합 (하단 빈 공간 0px)
    screen_canvas.paste(fg_resized, (0, status_bar_h))
    
    # 스크린 둥근 모서리 마스킹
    screen_mask = create_rounded_mask((screen_w, screen_h), screen_radius)
    phone_frame.paste(screen_canvas, (bezel_h, bezel_h), screen_mask)
    canvas.alpha_composite(phone_frame, (fg_x, fg_y))
    
    # 5. 좌측 플로팅 특징 뱃지 (Pill Card)
    badge_font = get_badge_font(25)
    icon_font = ImageFont.truetype(APPLE_FONT, 25, index=1)
    
    for b_symbol, b_text, b_y, b_color in badges:
        symbol_w = icon_font.getlength(b_symbol + " ")
        text_w = badge_font.getlength(b_text)
        pw = int(symbol_w + text_w) + 48
        ph = 56
        px = 28
        
        # 뱃지 드롭 섀도우
        ps = Image.new("RGBA", (pw + 40, ph + 40), (0, 0, 0, 0))
        psd = ImageDraw.Draw(ps)
        psd.rounded_rectangle([20, 20, 20 + pw, 20 + ph], radius=ph // 2, fill=(70, 80, 110, 40))
        ps = ps.filter(ImageFilter.GaussianBlur(14))
        canvas.alpha_composite(ps, (px - 20, b_y - 12))
        
        # 뱃지 카드 본체
        p_img = Image.new("RGBA", (pw, ph), (0, 0, 0, 0))
        pd = ImageDraw.Draw(p_img)
        pd.rounded_rectangle([0, 0, pw, ph], radius=ph // 2, fill="#FFFFFF", outline="#E2E8F0", width=2)
        pd.text((22, 14), b_symbol, fill=b_color, font=icon_font)
        pd.text((22 + int(symbol_w), 14), b_text, fill=b_color, font=badge_font)
        
        canvas.alpha_composite(p_img, (px, b_y))
        
    # Android 해상도 저장 (941 x 1672)
    os.makedirs(os.path.dirname(output_android_path), exist_ok=True)
    final_android = canvas.convert("RGB")
    final_android.save(output_android_path, "PNG", quality=95)
    print(f"Android 저장 완료: {output_android_path} (Frame Height: {fg_h}px)")
    
    # iOS 해상도 저장 (1242 x 2688)
    os.makedirs(os.path.dirname(output_ios_path), exist_ok=True)
    final_ios = canvas.resize((1242, 2688), Image.Resampling.LANCZOS).convert("RGB")
    final_ios.save(output_ios_path, "PNG", quality=95)
    print(f"iOS 저장 완료: {output_ios_path}")

if __name__ == "__main__":
    # 1. 독서 기록 전체 탭 스토어 이미지 생성
    make_store_composition(
        fg_screen_path="/tmp/cropped_review_current.png",
        bg_screen_path="/tmp/cropped_diary_editor.png",
        title_prefix="독서의 모든 기록을 ",
        title_accent="한눈에",
        subtitle_lines=[
            "독서 캘린더와 일일 다이어리, 감상평까지",
            "나만의 독서 여정을 차곡차곡 쌓아보세요."
        ],
        badges=[
            ("★", "독서 캘린더", 610, "#4F46E5"),
            ("♥", "나의 기록 스타일", 780, "#7C3AED"),
            ("❝", "전체 기록 요약", 950, "#2563EB")
        ],
        output_android_path=os.path.join(PROJECT_ROOT, "docs/storeData/android/ko/08_독서기록_전체.png"),
        output_ios_path=os.path.join(PROJECT_ROOT, "docs/storeData/ios/renewal_ios_images_ko/08_독서기록_전체.png")
    )

    # 2. 다이어리 기록 화면 스토어 이미지 생성
    make_store_composition(
        fg_screen_path="/tmp/cropped_diary_editor.png",
        bg_screen_path="/tmp/cropped_review_current.png",
        title_prefix="소중한 생각을 ",
        title_accent="다이어리로 기록",
        subtitle_lines=[
            "사진과 감성 테마, 자유로운 서식으로",
            "오늘의 독서 감상을 기록해 보세요."
        ],
        badges=[
            ("★", "독서 다이어리", 610, "#4F46E5"),
            ("♥", "나만의 감성 테마", 780, "#7C3AED"),
            ("❝", "기록 저장하기", 950, "#2563EB")
        ],
        output_android_path=os.path.join(PROJECT_ROOT, "docs/storeData/android/ko/09_독서다이어리_기록.png"),
        output_ios_path=os.path.join(PROJECT_ROOT, "docs/storeData/ios/renewal_ios_images_ko/09_독서다이어리_기록.png")
    )
