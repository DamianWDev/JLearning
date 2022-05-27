from fastapi import UploadFile
from API.module.manga.manga_repository import MangaRepository
from API.module.shared.file_manager import FileManager


class MangaService:
    def __init__(self, file_manager: FileManager, manga_repository: MangaRepository) -> None:
        self.file_manager = file_manager
        self.manga_repository = manga_repository

    async def get_mangas(self):
        return await self.manga_repository.find_all()

    async def add_manga(self, file: UploadFile, name: str) -> None:
        filename, img_extension = await self.file_manager.save(file)
        await self.manga_repository.insert(name, filename, img_extension)
