from typing import List
from sqlalchemy import select
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import AsyncSession
from API.module.db.model.manga import Manga


class MangaRepository:
    def __init__(self, session_maker: sessionmaker):
        self.session_maker = session_maker

    async def find_all(self) -> List[Manga]:
        session: AsyncSession
        async with self.session_maker() as session:
            return (await session.execute(select(Manga))).all()

    async def insert(self, name: str, img_path: str, img_extension: str) -> None:
        manga = Manga(name=name, img_path=img_path, img_extension=img_extension)
        session: AsyncSession
        async with self.session_maker() as session:
            session.add(manga)
            await session.commit()
