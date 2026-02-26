#!/usr/bin/env python3
"""
Resize *_card.png images to a standard canvas (4:5 aspect).
Uses center-fit: image is scaled to fit inside canvas, centered; rest is transparent.
Output overwrites originals; run from project root.
"""
import os
import sys

# Standard card canvas: 4:5 aspect (e.g. 928 x 1160)
CARD_WIDTH = 928
CARD_HEIGHT = 1160

GALLONS_DIR = "assets/img/gallons"
CARD_SUFFIX = "_card.png"


def main():
    try:
        from PIL import Image
    except ImportError:
        print("Pillow not installed. Run: pip install Pillow")
        sys.exit(1)

    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    gallons_path = os.path.join(base_dir, GALLONS_DIR)
    if not os.path.isdir(gallons_path):
        print(f"Directory not found: {gallons_path}")
        sys.exit(1)

    updated = 0
    for name in os.listdir(gallons_path):
        if not name.endswith(CARD_SUFFIX):
            continue
        path = os.path.join(gallons_path, name)
        if not os.path.isfile(path):
            continue
        try:
            im = Image.open(path).convert("RGBA")
        except Exception as e:
            print(f"Skip {name}: {e}")
            continue
        w, h = im.size
        if w == CARD_WIDTH and h == CARD_HEIGHT:
            print(f"OK (already) {name}")
            continue
        # Scale to fit inside CARD_WIDTH x CARD_HEIGHT, center on canvas
        scale = min(CARD_WIDTH / w, CARD_HEIGHT / h)
        new_w = int(round(w * scale))
        new_h = int(round(h * scale))
        resized = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
        canvas = Image.new("RGBA", (CARD_WIDTH, CARD_HEIGHT), (0, 0, 0, 0))
        x = (CARD_WIDTH - new_w) // 2
        y = (CARD_HEIGHT - new_h) // 2
        canvas.paste(resized, (x, y))
        canvas.save(path, "PNG", optimize=True)
        print(f"Resized {name} ({w}x{h} -> {CARD_WIDTH}x{CARD_HEIGHT})")
        updated += 1
    print(f"Done. Updated {updated} images.")


if __name__ == "__main__":
    main()
