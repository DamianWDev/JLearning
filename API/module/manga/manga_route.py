from dependency_injector.wiring import inject, Provide
from fastapi import APIRouter, Depends, UploadFile, status, HTTPException, Form
from fastapi.responses import ORJSONResponse
from API.module.manga.manga_service import MangaService
from API.container import Container
from API.module.shared.file_manager import UnsupportedExtensionException

router = APIRouter(
    prefix='/manga'
)


@router.get('/mangas/', status_code=status.HTTP_200_OK, response_class=ORJSONResponse)
@inject
async def get_mangas(manga_service: MangaService = Depends(Provide(Container.manga_service))):
    return await manga_service.get_mangas()


@router.post('/', status_code=status.HTTP_201_CREATED)
@inject
async def add_manga(
        image: UploadFile,
        name: str = Form(),
        manga_service: MangaService = Depends(Provide(Container.manga_service))
):
    try:
        await manga_service.add_manga(image, name)
        return {"message": "Manga has been added"}
    except UnsupportedExtensionException:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Sent file has invalid extension")
