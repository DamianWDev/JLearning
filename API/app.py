from flask import Flask
from sqlalchemy import create_engine
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from consts import DB_STRING, UPLOAD_FOLDER
from manga.manga_controller import manga_bp

from .module.domain.base import Base
from logging.config import dictConfig

dictConfig({
    'version': 1,
    'formatters': {'default': {
        'format': '[%(asctime)s] %(levelname)s in %(module)s: %(message)s',
    }},
    'handlers': {'wsgi': {
        'class': 'logging.StreamHandler',
        'stream': 'ext://flask.logging.wsgi_errors_stream',
        'formatter': 'default'
    }},
    'root': {
        'level': 'INFO',
        'handlers': ['wsgi']
    }
})

app = Flask(__name__)
app.register_blueprint(manga_bp)

app.config['SQLALCHEMY_DATABASE_URI'] = DB_STRING
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.secret_key = 'super secret key'

# CORS applied on all routes
CORS(app)

db = SQLAlchemy(app)


def db_test():
    try:
        engine = create_engine(DB_STRING, echo=True, future=True)
        print("Connection finalized")
    except Exception as e:
        print("connecting error")
    Base.metadata.create_all(engine)
    print("Created structure")


db_test()

if __name__ == '__main__':
    app.run(debug=True, port=5000)
