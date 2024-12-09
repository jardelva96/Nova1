from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from config import Config  # Certifique-se de que 'Config' existe no seu 'config.py'

db = SQLAlchemy()
migrate = Migrate()

def create_app(config_name=None):
    app = Flask(__name__)
    app.config.from_object(Config)  # Ajuste aqui para carregar configurações específicas
    CORS(app)
    db.init_app(app)
    migrate.init_app(app, db)

    from app.routes import main_bp
    app.register_blueprint(main_bp)

    return app
