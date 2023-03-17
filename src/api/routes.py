"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Participante, Monitor,Administradores, Evento, Participantes_de_Eventos, Tipo_de_Evento
from api.utils import generate_sitemap, APIException
import requests
import json

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['GET', 'POST'])
def user():
    if request.method == "GET":
        users = User.query.all()
        results = [user.serialize() for user in users]
        response_body = {"message": "ok",
                        "results": results,
                        "Total_records": len(results)}
        return response_body, 200
    
    elif request.method == "POST":
         
         request_body = request.get_json()
         user = User(id=request_body['id'],            
                     email=request_body['email'],
                     password=request_body['password'],
                     is_active=request_body['is_active']
                    )
         db.session.add(user)
         db.session.commit()
         return jsonify(request_body), 200
        
 
    else:
        response_body = {"message": "Error. Method not allowed."}
        return response_body, 400




@api.route('/participante', methods=['GET', 'POST'])
def funcionparticipante():
    if request.method == "GET":
        participantes = Participante.query.all()
        results = [participanteserialize.serialize() for participanteserialize in participantes]
        response_body = {"message": "ok",
                        "results": results,
                        "Total_records": len(results)}
        return response_body, 200
    
    elif request.method == "POST":
         
         request_body = request.get_json()
         participante = Participante(id=request_body['id'],            
                     id_user=request_body['id_user'],
                     name=request_body['name'],
                     last_name=request_body['last_name'],
                     url_image=request_body['url_image'],
                     numero_telefono=request_body['numero_telefono'],
                     nombre_contacto_emergencia=request_body['nombre_contacto_emergencia'],
                     numero_contacto_emergencia=request_body['numero_contacto_emergencia'],
                     asistencia_medica=request_body['asistencia_medica']
                    )
         db.session.add(participante)
         db.session.commit()
         return jsonify(request_body), 200
 
    else:
        response_body = {"message": "Error. Method not allowed."}
        return response_body, 400


@api.route('/administradores', methods=['GET', 'POST'])
def funcionadministradores():
    if request.method == "GET":
        administradores = Administradores.query.all()
        results = [administradorserialize.serialize() for administradorserialize in administradores]
        response_body = {"message": "ok",
                        "results": results,
                        "Total_records": len(results)}
        return response_body, 200
    
    elif request.method == "POST":
         
         request_body = request.get_json()
         administrador = Administradores(id=request_body['id'],            
                     id_user=request_body['id_user'],
                     name=request_body['name']                     
                    )
         db.session.add(administrador)
         db.session.commit()
         return jsonify(request_body), 200
 
    else:
        response_body = {"message": "Error. Method not allowed."}
        return response_body, 400

@api.route('/monitor', methods=['GET', 'POST'])
def funcionmonitor():
    if request.method == "GET":
        monitores = Monitor.query.all()
        results = [monitorserialize.serialize() for monitorserialize in monitores]
        response_body = {"message": "ok",
                        "results": results,
                        "Total_records": len(results)}
        return response_body, 200
    
    elif request.method == "POST":
         
         request_body = request.get_json()
         monitor = Monitor(id=request_body['id'],            
                     id_user=request_body['id_user'],
                     name=request_body['name'],
                     last_name=request_body['last_name']
                    )
         db.session.add(monitor)
         db.session.commit()
         return jsonify(request_body), 200
 
    else:
        response_body = {"message": "Error. Method not allowed."}
        return response_body, 400


@api.route('/evento', methods=['GET', 'POST'])
def evento():
    if request.method == "GET":
        eventos = Evento.query.all()
        results = [evento.serialize() for evento in eventos]
        response_body = {"message": "ok",
                        "results": results,
                        "Total_records": len(results)}
        return response_body, 200
    
    elif request.method == "POST":
         
         request_body = request.get_json()
         evento = Evento(id=request_body['id'],            
                     fecha=request_body['fecha'],
                     id_tipo=request_body['id_tipo'],
                     lugar=request_body['lugar'],
                     id_monitor=request_body['id_monitor'],
                     cantidad_maxima_participantes=request_body['cantidad_maxima_participantes'],
                     precio=request_body['precio'],
                     realizado=request_body['realizado']
                    )
         db.session.add(evento)
         db.session.commit()
         return jsonify(request_body), 200

    else:
        response_body = {"message": "Error. Method not allowed."}
        return response_body, 400


@api.route('/tipo-de-evento', methods=['GET', 'POST'])
def tiposdeeventos():
    if request.method == "GET":
        tipo_de_evento = Tipo_de_Evento.query.all()
        results = [tipo.serialize() for tipo in tipo_de_evento]
        response_body = {"message": "ok",
                        "results": results,
                        "Total_records": len(results)}
        return response_body, 200
    
    elif request.method == "POST":
         
         request_body = request.get_json()
         tipo_de_evento = Tipo_de_Evento(id=request_body['id'],            
                     name=request_body['name'],
                     descripcion=request_body['descripcion'],
                     dificultad=request_body['dificultad'],
                     categoria=request_body['categoria'],
                     url_imagen=request_body['url_imagen'],
                    )
         db.session.add(tipo_de_evento)
         db.session.commit()
         return jsonify(request_body), 200

    else:
        response_body = {"message": "Error. Method not allowed."}
        return response_body, 400

@api.route('/participantes_de_evento', methods=['GET','POST'])
def participantes():
    if request.method == "GET":
        participantes_evento = Participantes_de_Eventos.query.all()
        results = [participante.serialize() for participante in participantes_evento]
        response_body = {"message": "ok",
                        "results": results,
                        "Total_records": len(results)}
        return response_body, 200
    
    elif request.method == "POST":
         
         request_body = request.get_json()
         participante_de_evento = Participantes_de_Eventos(id=request_body['id'],            
                     id_evento=request_body['id_evento'],
                     id_participante=request_body['id_participante'],
                     apto_medico=request_body['apto_medico'],
                     asistencia=request_body['asistencia']
                    )
         db.session.add(participante_de_evento)
         db.session.commit()
         return jsonify(request_body), 200

    else:
        response_body = {"message": "Error. Method not allowed."}
        return response_body, 400