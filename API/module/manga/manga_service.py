from manga_repository import MangaRepository


class MangaService:
    def __init__(self, manga_repository: MangaRepository):
        self.manga_repository = manga_repository

    async def add_manga(self, name: str, img_path: str) -> None:
        await self.manga_repository.insert(name, img_path)
