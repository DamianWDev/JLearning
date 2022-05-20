from fastapi import FastAPI
from API.container import Container
from API.module.manga import manga_route
from fastapi.middleware.cors import CORSMiddleware

# from logging.config import dictConfig
origins = [
    "http://localhost",
    "http://localhost:8080",
]

# dictConfig({
#     'version': 1,
#     'formatters': {'default': {
#         'format': '[%(asctime)s] %(levelname)s in %(module)s: %(message)s',
#     }},
#     'handlers': {'wsgi': {
#         'class': 'logging.StreamHandler',
#         'stream': 'ext://flask.logging.wsgi_errors_stream',
#         'formatter': 'default'
#     }},
#     'root': {
#         'level': 'INFO',
#         'handlers': ['wsgi']
#     }
# })
container = Container()

db = container.db()

# TODO: Remove await warning
db.create_database()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.container = container
app.include_router(manga_route.router)
