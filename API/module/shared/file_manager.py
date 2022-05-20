import uuid
from aiofile import AIOFile
from fastapi import UploadFile

from API.consts import TEST_UPLOAD_FOLDER, ALLOWED_EXTENSIONS


class UnsupportedExtensionException(Exception):
    pass


class FileNotFoundException(Exception):
    pass


class FileManager:

    # async def find(self, filename: str) -> bytes:
    #     path = self.build_path(filename)
    #
    #     async with AIOFile(path, "rb+") as afp:
    #         file_bytes = await afp.read()
    #         if file_bytes == 0:
    #             raise FileNotFoundException
    #         else:
    #             return file_bytes

    async def save(self, file: UploadFile) -> str:
        extension: str = self.__get_valid_extension(file.filename)
        filename: str = str(uuid.uuid4())
        path = self.__build_path(f"{filename}.{extension}")

        async with AIOFile(path, 'wb+') as afp:
            await afp.write(await file.read())
            return filename

    def __build_path(self, filename: str) -> str:
        return f"{TEST_UPLOAD_FOLDER}/{filename}"

    def __get_valid_extension(self, name: str) -> str:
        if '.' in name:
            extension = name.rsplit('.', 1)[1].lower()
            if extension in ALLOWED_EXTENSIONS:
                return extension

        raise UnsupportedExtensionException
