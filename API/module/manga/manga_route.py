from dependency_injector.wiring import inject, Provide
from fastapi import APIRouter, Depends, UploadFile, status, HTTPException, Form

from API.module.manga.manga_service import MangaService
from API.container import Container
from API.module.shared.file_manager import UnsupportedExtensionException

router = APIRouter(
    prefix='/manga'
)


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

# @manga_bp.post('/')
# async def post_manga(self):
#     name = request.form['name']
#     file = request.files['image']
#
#     try:
#         filename = await self.file_manager.save(file)
#         await self.manga_service.add_manga(name, filename)
#         return '', 200
#     except UnsupportedExtensionException:
#         return '', 400
