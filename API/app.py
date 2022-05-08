import os
from flask import Flask, jsonify, request, flash, redirect, url_for
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename

from Models.models import *

UPLOAD_FOLDER = '/'
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

    # print("Toooo")
    # meta = MetaData(db)
    #
    # film_table = Table('films', meta,
    #                    Column('title', String),
    #                    Column('director', String),
    #                    Column('year', String))
    #
    # with db.connect() as conn:
    #     # Create
    #
    #
    #
    #     film_table.create(checkfirst=True)
    #     insert_statement = film_table.insert().values(title="Doctor Strange", director="Scott Derrickson", year='2020')
    #     conn.execute(insert_statement)
    #
    #     # Read
    #     select_statement = film_table.select()
    #     result_set = conn.execute(select_statement)
    #     for r in result_set:
    #         print(r)
    #
    #     # Update
    #     update_statement = film_table.update().where(film_table.c.year == "2016").values(title="Some2016Film")
    #     conn.execute(update_statement)
    #
    #     # Delete
    #     delete_statement = film_table.delete().where(film_table.c.year == "2016")
    #     conn.execute(delete_statement)
    #
    #     # Delete Table
    #     film_table.drop(checkfirst=True)


@app.route('/query-example')
def query_example():
    return 'Query String Example'


@app.route('/form-example')
def form_example():
    return 'Form Data Example'


@app.route('/json-example')
def json_example():
    return jsonify({
        'name': 'Dybek',
        'Surname': 'Jebany'
    })


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/', methods=['GET', 'POST'])
def upload_file():
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
            return redirect(url_for('upload_file', name=filename))
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
