import logging
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import declarative_base, sessionmaker
from API.module.shared.consts import DB_CONNECTION_STRING

logger = logging.getLogger(__name__)

Base = declarative_base()


class Database:

    def __init__(self, db_url: str = DB_CONNECTION_STRING) -> None:
        self._engine = create_async_engine(db_url, future=True, echo=True)
        self.session_maker = sessionmaker(self._engine, expire_on_commit=False, class_=AsyncSession)

    async def create_database(self) -> None:
        async with self._engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)
            await conn.run_sync(Base.metadata.create_all)
