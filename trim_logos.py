import os
from PIL import Image

def trim_and_pad(image_path, padding=20):
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        
        # Get the bounding box of the non-zero regions
        bbox = img.getbbox()
        
        if bbox:
            # Crop the image to the bounding box
            cropped_img = img.crop(bbox)
            
            # Create a new image with the desired padding
            new_width = cropped_img.width + 2 * padding
            new_height = cropped_img.height + 2 * padding
            
            new_img = Image.new("RGBA", (new_width, new_height), (0, 0, 0, 0))
            
            # Paste the cropped image onto the center of the new image
            new_img.paste(cropped_img, (padding, padding))
            
            # Save the result, overwriting the original
            new_img.save(image_path)
            print(f"Processed: {image_path} (New size: {new_width}x{new_height})")
        else:
            print(f"Skipped (Clean image): {image_path}")
            
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

def main():
    target_dirs = [
        "website/assets/img/logo",
        "website/assets/img/gallons"
    ]
    
    for target_dir in target_dirs:
        if not os.path.exists(target_dir):
            print(f"Directory not found: {target_dir}")
            continue

        print(f"Processing directory: {target_dir}")
        for filename in os.listdir(target_dir):
            if filename.lower().endswith(".png"):
                full_path = os.path.join(target_dir, filename)
                trim_and_pad(full_path)

if __name__ == "__main__":
    main()
