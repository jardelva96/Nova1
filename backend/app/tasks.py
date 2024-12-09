import pika, json
from . import db
from .models import Repositorio

def processar_repositorios(ch, method, properties, body):
    data = json.loads(body)
    for item in data:
        novo_repo = Repositorio(**item)
        db.session.add(novo_repo)
    db.session.commit()
    ch.basic_ack(delivery_tag=method.delivery_tag)

def iniciar_consumidor():
    connection = pika.BlockingConnection(pika.ConnectionParameters('rabbitmq'))
    channel = connection.channel()
    channel.queue_declare(queue='repositorios')
    channel.basic_consume(queue='repositorios', on_message_callback=processar_repositorios)
    channel.start_consuming()
