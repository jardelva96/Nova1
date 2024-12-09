from . import db

class Repositorio(db.Model):
    __tablename__ = 'repositorios'

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    proprietario = db.Column(db.String(100), nullable=False)
    estrelas = db.Column(db.Integer, nullable=False)
