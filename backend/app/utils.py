import json

def repositorios_para_json(repositorios):
    """
    Converte uma lista de objetos de repositórios em um formato JSON.
    """
    return json.dumps([
        {
            "id": repo.id,
            "nome": repo.nome,
            "proprietario": repo.proprietario,
            "estrelas": repo.estrelas,
        }
        for repo in repositorios
    ])
