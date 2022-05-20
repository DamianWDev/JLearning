import uuid
from aiofile import AIOFile
from werkzeug.datastructures import FileStorage

from consts import TEST_UPLOAD_FOLDER, ALLOWED_EXTENSIONS


class UnsupportedExtensionException(Exception):
    pass


class FileNotFoundException(Exception):
    pass


class FileManager:

    async def find(self, filename: str) -> bytes:
        path = self.build_path(filename)

        async with AIOFile(path, "rb+") as afp:
            file_bytes = await afp.read()
            if file_bytes == 0:
                raise FileNotFoundException
            else:
                return file_bytes

    async def save(self, file: FileStorage) -> str:
        extension: str = self.get_valid_extension(file.filename)
        filename: str = str(uuid.uuid4())
        path = self.build_path(f"filename/{extension}")

        async with AIOFile(path, 'wb+') as afp:
            await afp.write(file.stream.read())
            return filename

    def build_path(self, filename: str) -> str:
        return f"{TEST_UPLOAD_FOLDER}/{filename}"

    def get_valid_extension(self, name: str) -> str:
        if '.' in name:
            extension = name.rsplit('.', 1)[1].lower()
            if extension in ALLOWED_EXTENSIONS:
                return extension

        raise UnsupportedExtensionException
