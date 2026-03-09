from pathlib import Path

from PIL import Image


SOURCE_DIR = Path(__file__).resolve().parents[1] / "assets" / "img" / "logo"
OUTPUT_DIR = SOURCE_DIR / "logos_carousel"
TARGET_HEIGHT = 220
CAROUSEL_LOGOS = [
    "acesa_logo.png",
    "borea_labs_logo.png",
    "cardona_consultores_logo.png",
    "cesal_logo.png",
    "scarts_logo.png",
    "world_chef_logo.png",
    "blue_logo.png",
]


def crop_to_visible_bounds(image: Image.Image) -> Image.Image:
    alpha = image.getchannel("A")
    bbox = alpha.getbbox()
    if bbox is None:
        return image
    return image.crop(bbox)


def resize_to_height(image: Image.Image, target_height: int) -> Image.Image:
    width, height = image.size
    if height == target_height:
        return image
    target_width = max(1, round(width * (target_height / height)))
    return image.resize((target_width, target_height), Image.Resampling.LANCZOS)


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for filename in CAROUSEL_LOGOS:
        source_path = SOURCE_DIR / filename
        output_path = OUTPUT_DIR / filename

        with Image.open(source_path).convert("RGBA") as image:
            normalized = resize_to_height(crop_to_visible_bounds(image), TARGET_HEIGHT)
            normalized.save(output_path)
            print(f"saved {output_path.relative_to(SOURCE_DIR.parent)} -> {normalized.size}")


if __name__ == "__main__":
    main()
