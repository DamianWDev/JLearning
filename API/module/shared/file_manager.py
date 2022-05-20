import uuid

from aiofile import AIOFile
from fastapi import UploadFile

from API.consts import TEST_UPLOAD_FOLDER, ALLOWED_EXTENSIONS


class UnsupportedExtensionException(Exception):
    pass


class FileNotFoundException(Exception):
    pass


class FileManager:
    async def save(self, file: UploadFile) -> (str, str):
        extension: str = self.__get_valid_extension(file.filename)
        filename: str = str(uuid.uuid4())
        path = self.__build_path(filename, extension)

        async with AIOFile(path, 'wb+') as afp:
            await afp.write(await file.read())
            return filename, extension

    def __build_path(self, filename: str, extension: str) -> str:
        return f"{TEST_UPLOAD_FOLDER}/{filename}.{extension}"

    def __get_valid_extension(self, name: str) -> str:
        if '.' in name:
            extension = name.rsplit('.', 1)[1].lower()
            if extension in ALLOWED_EXTENSIONS:
                return extension

        raise UnsupportedExtensionException
