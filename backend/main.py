from app import create_app, db
from flask_migrate import Migrate

app = create_app()  # Remova 'development', pois o padrão foi definido.

migrate = Migrate(app, db)

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'app': app}

if __name__ == "__main__":
    app.run(debug=True)
