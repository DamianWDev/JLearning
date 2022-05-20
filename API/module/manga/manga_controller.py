import io
from manga_service import MangaService
from flask import Blueprint, request, send_file

from shared.file_manager import FileManager, UnsupportedExtensionException, FileNotFoundException

manga_bp = Blueprint('manga', __name__, url_prefix='/api/manga')


class MangaController:

    def __init__(self, file_manager: FileManager, manga_service: MangaService):
        self.file_manager = file_manager
        self.manga_service = manga_service

    @manga_bp.get('/<filename>')
    async def get_manga_image(self, filename: str):
        try:
            file = await self.file_manager.find(filename)
            return send_file(io.BytesIO(file), mimetype='manga/gif')
        except FileNotFoundException:
            return '', 400

    @manga_bp.post('/')
    async def post_manga(self):
        name = request.form['name']
        file = request.files['image']

        try:
            filename = await self.file_manager.save(file)
            await self.manga_service.add_manga(name, filename)
            return '', 200
        except UnsupportedExtensionException:
            return '', 400
