from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from API.container import Container
from API.module.manga import manga_route

origins = [
    "http://localhost",
    "http://localhost:8080",
]

container = Container()

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
