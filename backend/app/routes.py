from flask import Blueprint, jsonify
from flask_restful import Api, Resource

main_bp = Blueprint("main", __name__)
api = Api(main_bp)

# Rota para a raiz
@main_bp.route("/")
def home():
    return jsonify({"message": "Bem-vindo à API NEO-J!"})

class RepositorioList(Resource):
    def get(self):
        return jsonify({"message": "Lista de repositórios"})
    # Adicione outros métodos (POST, etc.) se necessário

api.add_resource(RepositorioList, "/repositorios")
