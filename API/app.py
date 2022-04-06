from urllib import response
from flask import Flask, jsonify
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        response = jsonify({'title': 'hello world!'})
        response.headers.add("Access-Control-Allow-Origin", "*")
    
        return response

api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
    app.run(debug=True)