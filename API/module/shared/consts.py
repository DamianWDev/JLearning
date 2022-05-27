import os

UPLOAD_FOLDER = '/app/images'
ALLOWED_EXTENSIONS = {'webp', 'png', 'jpg', 'jpeg', 'gif'}
DB_CONNECTION_STRING = r'postgresql+asyncpg://postgres:postgres@172.19.0.2:5432/postgres'
TEST_UPLOAD_FOLDER = os.path.join("/app/images")
