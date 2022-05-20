from dependency_injector import containers, providers

from API.module.db.database import Database
from API.module.manga.manga_repository import MangaRepository
from API.module.manga.manga_service import MangaService
from API.module.shared.file_manager import FileManager
from API.consts import DB_STRING


class Container(containers.DeclarativeContainer):
    wiring_config = containers.WiringConfiguration(modules=[".module.manga.manga_route"])

    db = providers.Singleton(Database, db_url=DB_STRING)

    manga_repository = providers.Factory(MangaRepository, session_maker=db.provided.session_maker)

    file_manager = providers.Factory(FileManager)

    manga_service = providers.Factory(MangaService, file_manager=file_manager, manga_repository=manga_repository)
