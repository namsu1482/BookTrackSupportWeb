#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
iOS App Store 전용 스토어 홍보 이미지 생성기 (한글 주석 규정 준수)
- 해상도: 1320 x 2868 (iPhone 16 Pro Max / 15 Pro Max 규격)
- 시뮬레이터 실기기 캡처 네이티브 스크린샷 100% 비율 정합 (스트레칭/화질 저하 제로)
- Pretendard 볼드/세미볼드 폰트 적용
- 한국어 2종 및 영문 2종 완전 생성
"""

import os
import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "../../.."))
FONT_DIR = os.path.join(PROJECT_ROOT, "docs/appScreenShot/android/fonts")

# 폰트 로드
FONT_BOLD = os.path.join(FONT_DIR, "Pretendard-Bold.otf")
FONT_SEMIBOLD = os.path.join(FONT_DIR, "Pretendard-SemiBold.otf")
FONT_MEDIUM = os.path.join(FONT_DIR, "Pretendard-Medium.otf")
APPLE_FONT = "/System/Library/Fonts/AppleSDGothicNeo.ttc"

def get_font(font_path, size, index=0):
    try:
        return ImageFont.truetype(font_path, size, index=index)
    except Exception:
        return ImageFont.load_default()

def create_rounded_mask(size, radius):
    """안티앨리어싱이 적용된 둥근 모서리 마스크 생성"""
    factor = 4
    mask = Image.new("L", (size[0] * factor, size[1] * factor), 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([0, 0, size[0] * factor, size[1] * factor], radius=radius * factor, fill=255)
    return mask.resize(size, Image.Resampling.LANCZOS)

def create_phone_mockup(screenshot_path, screen_w, bezel_w=18, radius=56, is_front=True):
    """
    네이티브 iOS 스크린샷을 기반으로 왜곡 없이 정밀한 iPhone 목업 프레임을 생성합니다.
    """
    sc = Image.open(screenshot_path).convert("RGBA")
    sc_orig_w, sc_orig_h = sc.size
    
    # 원본 종횡비 정확히 유지 (스트레칭 방지)
    screen_h = int(screen_w * (sc_orig_h / sc_orig_w))
    sc_resized = sc.resize((screen_w, screen_h), Image.Resampling.LANCZOS)
    
    # 폰 본체 크기 (베젤 포함)
    phone_w = screen_w + bezel_w * 2
    phone_h = screen_h + bezel_w * 2
    
    # 프레임 베이스 (외부 티타늄 엣지 + 블랙 베젤)
    phone_img = Image.new("RGBA", (phone_w, phone_h), (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(phone_img)
    
    # 외부 테두리
    outer_radius = radius + bezel_w // 2
    if is_front:
        pdraw.rounded_rectangle([0, 0, phone_w, phone_h], radius=outer_radius, fill="#0F172A", outline="#CBD5E1", width=2)
    else:
        pdraw.rounded_rectangle([0, 0, phone_w, phone_h], radius=outer_radius, fill="#1E293B", outline="#E2E8F0", width=2)
        
    # 스크린 마스킹 및 페이스트
    sc_mask = create_rounded_mask((screen_w, screen_h), radius)
    phone_img.paste(sc_resized, (bezel_w, bezel_w), sc_mask)
    
    return phone_img

def create_shadow(image, blur_radius=35, offset=(0, 20), opacity=55):
    """부드러운 프리미엄 드롭 섀도우 생성"""
    w, h = image.size
    pad = blur_radius * 2 + 30
    shadow_w = w + pad * 2
    shadow_h = h + pad * 2
    
    shadow_canvas = Image.new("RGBA", (shadow_w, shadow_h), (0, 0, 0, 0))
    alpha = image.split()[3]
    
    # 그림자 마스크 생성
    s_mask = Image.new("RGBA", (w, h), (15, 23, 42, opacity))
    s_mask.putalpha(alpha)
    
    # 캔버스에 붙이고 블러 처리
    shadow_canvas.paste(s_mask, (pad + offset[0], pad + offset[1]), s_mask)
    shadow_blurred = shadow_canvas.filter(ImageFilter.GaussianBlur(blur_radius))
    
    return shadow_blurred, pad

def make_ios_composition(
    template_path,
    fg_screen_path,
    bg_screen_path,
    title_prefix,
    title_accent,
    subtitle_lines,
    badges,
    output_path,
    bg_top_colors=((247, 246, 250), (245, 246, 249)),
    bg_phone_colors=((245, 246, 249), (236, 240, 248))
):
    print(f"==> iOS 이미지 생성 시작: {output_path}")
    base_tpl = Image.open(template_path).convert("RGBA")
    canvas = base_tpl.copy()
    
    # 2. 텍스트 영역 클리어 (배경 그라데이션 자연스럽게 블렌딩, x: 70 ~ 1100, y: 310 ~ 670)
    top_clean = Image.new("RGBA", (1030, 360), (0, 0, 0, 0))
    t_draw = ImageDraw.Draw(top_clean)
    c1, c2 = bg_top_colors
    for y_idx in range(360):
        ratio = y_idx / 360.0
        r = int(c1[0] * (1 - ratio) + c2[0] * ratio)
        g = int(c1[1] * (1 - ratio) + c2[1] * ratio)
        b = int(c1[2] * (1 - ratio) + c2[2] * ratio)
        t_draw.line([(0, y_idx), (1030, y_idx)], fill=(r, g, b, 255))
    canvas.paste(top_clean, (70, 310))
    
    # 폰 및 그림자 잔상 영역 초기화 (y: 670 ~ 2550)
    phone_clean = Image.new("RGBA", (1260, 1900), (0, 0, 0, 0))
    p_draw = ImageDraw.Draw(phone_clean)
    p1, p2 = bg_phone_colors
    for y_idx in range(1900):
        ratio = y_idx / 1900.0
        r = int(p1[0] * (1 - ratio) + p2[0] * ratio)
        g = int(p1[1] * (1 - ratio) + p2[1] * ratio)
        b = int(p1[2] * (1 - ratio) + p2[2] * ratio)
        p_draw.line([(0, y_idx), (1260, y_idx)], fill=(r, g, b, 255))
    canvas.paste(phone_clean, (30, 670))
    
    # 3. 타이틀 & 서브타이틀 렌더링
    draw = ImageDraw.Draw(canvas)
    title_font = get_font(FONT_BOLD, 74)
    sub_font = get_font(FONT_MEDIUM, 38)
    
    # 타이틀
    title_y = 360
    prefix_w = title_font.getlength(title_prefix)
    draw.text((80, title_y), title_prefix, fill="#0F172A", font=title_font)
    draw.text((80 + prefix_w, title_y), title_accent, fill="#2563EB", font=title_font)
    
    # 서브타이틀
    sub_y = 480
    for idx, line in enumerate(subtitle_lines):
        draw.text((80, sub_y + idx * 56), line, fill="#64748B", font=sub_font)
        
    # 4. 후면 폰 (배경 목업, 우측 배치)
    bg_w = 640
    bg_phone = create_phone_mockup(bg_screen_path, screen_w=bg_w, bezel_w=16, radius=52, is_front=False)
    bg_shadow, bg_pad = create_shadow(bg_phone, blur_radius=32, offset=(10, 20), opacity=50)
    
    bg_x = 570
    bg_y = 740
    canvas.alpha_composite(bg_shadow, (bg_x - bg_pad, bg_y - bg_pad))
    canvas.alpha_composite(bg_phone, (bg_x, bg_y))
    
    # 5. 전면 폰 (메인 목업, 좌측 배치)
    fg_w = 700
    fg_phone = create_phone_mockup(fg_screen_path, screen_w=fg_w, bezel_w=18, radius=58, is_front=True)
    fg_shadow, fg_pad = create_shadow(fg_phone, blur_radius=40, offset=(15, 25), opacity=65)
    
    fg_x = 100
    fg_y = 690
    canvas.alpha_composite(fg_shadow, (fg_x - fg_pad, fg_y - fg_pad))
    canvas.alpha_composite(fg_phone, (fg_x, fg_y))
    
    # 6. 좌측 플로팅 특징 뱃지 (Pill Cards)
    badge_font = get_font(FONT_SEMIBOLD, 34)
    icon_font = get_font(APPLE_FONT, 34, index=1)
    
    for b_symbol, b_text, b_y, b_color in badges:
        sym_w = icon_font.getlength(b_symbol + " ")
        txt_w = badge_font.getlength(b_text)
        pw = int(sym_w + txt_w) + 68
        ph = 76
        px = 35
        
        # 뱃지 드롭 섀도우
        ps = Image.new("RGBA", (pw + 50, ph + 50), (0, 0, 0, 0))
        psd = ImageDraw.Draw(ps)
        psd.rounded_rectangle([25, 25, 25 + pw, 25 + ph], radius=ph // 2, fill=(70, 80, 110, 45))
        ps_blurred = ps.filter(ImageFilter.GaussianBlur(16))
        canvas.alpha_composite(ps_blurred, (px - 25, b_y - 20))
        
        # 뱃지 카드 본체
        p_card = Image.new("RGBA", (pw, ph), (0, 0, 0, 0))
        pd = ImageDraw.Draw(p_card)
        pd.rounded_rectangle([0, 0, pw, ph], radius=ph // 2, fill="#FFFFFF", outline="#E2E8F0", width=2)
        pd.text((30, 20), b_symbol, fill=b_color, font=icon_font)
        pd.text((30 + int(sym_w), 20), b_text, fill=b_color, font=badge_font)
        
        canvas.alpha_composite(p_card, (px, b_y))
        
    # 최종 저장 (1320 x 2868)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    final_out = canvas.convert("RGB")
    final_out.save(output_path, "PNG", quality=95)
    print(f"✅ 저장 완료: {output_path} ({final_out.size})")

if __name__ == "__main__":
    TPL_KO = os.path.join(PROJECT_ROOT, "docs/storeData/ios/renewal_ios_images_ko/ChatGPT Image 2026년 8월 25일 오후 05_52_34 (5).png")
    TPL_EN = os.path.join(PROJECT_ROOT, "docs/storeData/ios/renewal_ios_image_en/ChatGPT Image 2026년 8월 25일 오후 10_35_09 (1).png")
    
    # 1. 08_독서기록_전체 (한국어)
    make_ios_composition(
        template_path=TPL_KO,
        fg_screen_path="/tmp/ios_ko_review.png",
        bg_screen_path="/tmp/ios_ko_diary.png",
        title_prefix="독서의 모든 기록을 ",
        title_accent="한눈에",
        subtitle_lines=[
            "독서 캘린더와 일일 다이어리, 감상평까지",
            "나만의 독서 여정을 차곡차곡 쌓아보세요."
        ],
        badges=[
            ("★", "독서 캘린더", 1020, "#4F46E5"),
            ("♥", "나의 기록 스타일", 1280, "#7C3AED"),
            ("◆", "전체 기록 요약", 1540, "#2563EB")
        ],
        output_path=os.path.join(PROJECT_ROOT, "docs/storeData/ios/renewal_ios_images_ko/08_독서기록_전체.png"),
        bg_top_colors=((247, 246, 250), (245, 246, 249)),
        bg_phone_colors=((245, 246, 249), (236, 240, 248))
    )

    # 2. 09_독서다이어리_기록 (한국어)
    make_ios_composition(
        template_path=TPL_KO,
        fg_screen_path="/tmp/ios_ko_diary.png",
        bg_screen_path="/tmp/ios_ko_review.png",
        title_prefix="소중한 생각을 ",
        title_accent="다이어리로 기록",
        subtitle_lines=[
            "사진과 감성 테마, 자유로운 서식으로",
            "오늘의 독서 감상을 기록해 보세요."
        ],
        badges=[
            ("★", "독서 다이어리", 1020, "#4F46E5"),
            ("♥", "나만의 감성 테마", 1280, "#7C3AED"),
            ("◆", "기록 저장하기", 1540, "#2563EB")
        ],
        output_path=os.path.join(PROJECT_ROOT, "docs/storeData/ios/renewal_ios_images_ko/09_독서다이어리_기록.png"),
        bg_top_colors=((247, 246, 250), (245, 246, 249)),
        bg_phone_colors=((245, 246, 249), (236, 240, 248))
    )

    # 3. 08_reading_log_all (영어)
    make_ios_composition(
        template_path=TPL_EN,
        fg_screen_path="/tmp/ios_en_review.png",
        bg_screen_path="/tmp/ios_en_diary.png",
        title_prefix="All Reading Logs ",
        title_accent="in One Place",
        subtitle_lines=[
            "Calendar, daily diary, and detailed reviews",
            "Build your reading journey step by step."
        ],
        badges=[
            ("★", "Reading Calendar", 1020, "#4F46E5"),
            ("♥", "My Writing Style", 1280, "#7C3AED"),
            ("◆", "Total Overview", 1540, "#2563EB")
        ],
        output_path=os.path.join(PROJECT_ROOT, "docs/storeData/ios/renewal_ios_image_en/08_reading_log_all.png"),
        bg_top_colors=((249, 249, 251), (254, 253, 253)),
        bg_phone_colors=((254, 253, 253), (244, 246, 250))
    )

    # 4. 09_reading_diary (영어)
    make_ios_composition(
        template_path=TPL_EN,
        fg_screen_path="/tmp/ios_en_diary.png",
        bg_screen_path="/tmp/ios_en_review.png",
        title_prefix="Capture Thoughts in ",
        title_accent="Daily Diary",
        subtitle_lines=[
            "Photos, aesthetic themes, and rich formatting",
            "Journal your daily reading impressions."
        ],
        badges=[
            ("★", "Reading Diary", 1020, "#4F46E5"),
            ("♥", "Aesthetic Themes", 1280, "#7C3AED"),
            ("◆", "Save Record", 1540, "#2563EB")
        ],
        output_path=os.path.join(PROJECT_ROOT, "docs/storeData/ios/renewal_ios_image_en/09_reading_diary.png"),
        bg_top_colors=((249, 249, 251), (254, 253, 253)),
        bg_phone_colors=((254, 253, 253), (244, 246, 250))
    )
