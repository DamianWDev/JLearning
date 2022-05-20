from sqlalchemy.orm import sessionmaker

from API.module.db.model.manga import Manga


class MangaRepository:
    def __init__(self, session_maker: sessionmaker):
        self.session_maker = session_maker

    async def insert(self, name: str, img_path: str) -> None:
        manga = Manga(name=name, img_path=img_path)
        async with self.session_maker() as session:
            session.add(manga)
            await session.commit()
