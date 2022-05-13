import os
from flask import Flask, jsonify, request, flash, redirect, url_for, Response, send_file
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename

from Models.models import *

UPLOAD_FOLDER = '/app/images'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

DB_STRING = r'postgresql://postgres:postgres@api_db_1:5432/postgres'

app = Flask(__name__)
# api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = DB_STRING
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.secret_key = 'super secret key'
db = SQLAlchemy(app)


def db_test():
    try:
        engine = create_engine(DB_STRING, echo=True, future=True)
        print("Connection finalized")
    except Exception as e:
        print("connecting error")
    Base.metadata.create_all(engine)
    print("Created structure")


def allowed_file(filename: str) -> bool:
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# TODO: Correct route to point on manga
@app.route('/manga', methods=['POST'])
def manga_image():
    if not os.path.exists(UPLOAD_FOLDER):
        os.mkdir(UPLOAD_FOLDER)

    if 'file' not in request.files:
        flash('No file part')
        return redirect(request.url)
    file = request.files['file']
    if file.filename == '':
        flash('No selected file')
        return redirect(request.url)
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return '', 200


@app.route('/manga/<filename>', methods=['GET'])
def get_manga_image(filename: str) -> Response:
    for file in os.listdir(UPLOAD_FOLDER):
        if filename == file:
            return send_file(os.path.join(UPLOAD_FOLDER, file), mimetype='image/gif')


@app.route('/kanji', methods=['GET', 'POST'])
def add_kanji():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('add_kanji', name=filename))
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''


class HelloWorld(Resource):

    @staticmethod
    def get():
        response = jsonify({'title': 'hello world!'})
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response

    def delete(self):
        pass


# api.add_resource(HelloWorld, '/')
db_test()

if __name__ == '__main__':
    print("elo")
    app.run(debug=True, port=5000)
