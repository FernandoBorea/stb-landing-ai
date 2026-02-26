# Card images for product catalogue

- **Standard canvas:** `928 × 1160` px (4:5 aspect ratio).
- **Naming:** `*_card.png` (e.g. `sandia_card.png`, `coffee_card.png`).
- **Content:** Image is center-fitted on the canvas; extra space is transparent.

To standardize existing card images, from project root:

```bash
python3 -m venv .venv-resize && .venv-resize/bin/pip install Pillow && .venv-resize/bin/python scripts/resize_card_images.py
rm -rf .venv-resize
```
