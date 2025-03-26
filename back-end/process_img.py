import io
from PIL import Image

def process_img(image_file):
    try:
        img = Image.open(io.BytesIO(image_file.read()))
        img = img.convert("L")
        img = img.resize((256,256))

        return img

    except Exception as e:
        print(f"Error to process image {e}")

        return None