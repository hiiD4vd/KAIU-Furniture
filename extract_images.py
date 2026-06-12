import cv2
import os

img_path = r"C:\Users\Asus\.gemini\antigravity-ide\brain\f47ccfc2-ac55-4bfc-9475-621e8c96754b\media__1781239311638.png"
out_dir = r"c:\daud\projek bisnis\KAIU Furniture\kaiu-web\public\design_assets"
os.makedirs(out_dir, exist_ok=True)

img = cv2.imread(img_path)
if img is not None:
    h, w = img.shape[:2]
    
    # Left image: left half
    left_img = img[:, :int(w/2)]
    cv2.imwrite(os.path.join(out_dir, "img_0.jpg"), left_img)
    
    # Right image: bottom right quadrant
    right_img = img[int(h/2):, int(w/2):]
    cv2.imwrite(os.path.join(out_dir, "img_1.jpg"), right_img)
    print("Images extracted successfully!")
else:
    print("Could not read image.")
