"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Participante, Monitor,Administrador, Evento, Participantes_de_Eventos, Tipo_de_Evento, Socio
from api.utils import generate_sitemap, APIException
import requests
import json
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

## USER
#@jwt_required()
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
         user = User(            
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


@api.route('/user/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify('OK'), 200


@api.route('/user/<int:client_id>', methods=['PUT'])
def update_user(client_id):
    client = User.query.get(client_id)
    if client is None:
        return 'Not found', 404

    client.id = request.json.get('id', client.id)
    client.email = request.json.get('email', client.email)
    client.password = request.json.get('password', client.password)
    client.is_active = request.json.get('is_active', client.is_active)
    db.session.commit()

    response_body = {'id': client.id,
                     'email': client.email,
                     'password': client.password,
                     'is_active': client.is_active}

    return jsonify(response_body), 200



## PARTICIPANTE

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
    

@api.route('/participante/<int:user_id>', methods=['DELETE'])
def delete_participante(user_id):
    user = Participante.query.get(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify('OK'), 200


@api.route('/participante/<int:client_id>', methods=['PUT'])
def update_participante(client_id):
    client = Participante.query.get(client_id)
    if client is None:
        return 'Not found', 404

    client.id = request.json.get('id', client.id)
    client.id_user = request.json.get('id_user', client.id_user)
    client.name = request.json.get('name', client.name)
    client.last_name = request.json.get('last_name', client.last_name)
    client.url_image = request.json.get('url_image', client.url_image)
    client.numero_telefono = request.json.get('numero_telefono', client.numero_telefono)
    client.nombre_contacto_emergencia = request.json.get('nombre_contacto_emergencia', client.nombre_contacto_emergencia)
    client.numero_contacto_emergencia = request.json.get('numero_contacto_emergencia', client.numero_contacto_emergencia)
    client.asistencia_medica = request.json.get('asistencia_medica', client.asistencia_medica)
    db.session.commit()

    response_body = {'id': client.id,
                     'id_user': client.user_id,
                     'name': client.name,
                     'last_name': client.is_active,
                     'url_image': client.url_image,
                     'numero_telefono': client.numero_telefono,
                     'nombre_contacto_emergencia': client.nombre_contacto_emergencia,
                     'numero_contacto_emergencia': client.numero_contacto_emergencia,
                     'asistencia_medica': client.asistencia_medica}

    return jsonify(response_body), 200




## MONITOR

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


@api.route('/monitor/<int:user_id>', methods=['DELETE'])
def delete_monitor(user_id):
    user = Monitor.query.get(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify('OK'), 200


@api.route('/monitor/<int:client_id>', methods=['PUT'])
def update_monitor(client_id):
    client = Monitor.query.get(client_id)
    if client is None:
        return 'Not found', 404

    client.id = request.json.get('id', client.id)
    client.id_user = request.json.get('id_user', client.id_user)
    client.name = request.json.get('name', client.name)
    client.last_name = request.json.get('last_name', client.last_name)
    db.session.commit()

    response_body = {'id': client.id,
                     'id_user': client.id_user,
                     'name': client.name,
                     'last_name': client.last_name}

    return jsonify(response_body), 200

## EVENTO

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


@api.route('/evento/<int:user_id>', methods=['DELETE'])
def delete_evento(user_id):
    user = Evento.query.get(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify('OK'), 200


@api.route('/evento/<int:client_id>', methods=['PUT'])
def update_evento(client_id):
    client = Evento.query.get(client_id)
    if client is None:
        return 'Not found', 404

    client.id = request.json.get('id', client.id)
    client.fecha = request.json.get('fecha', client.fecha)
    client.id_tipo = request.json.get('id_tipo', client.id_tipo)
    client.lugar = request.json.get('lugar', client.lugar)
    client.id_monitor = request.json.get('id_monitor', client.id_monitor)
    client.cantidad_maxima_participantes = request.json.get('cantidad_maxima_participantes', client.cantidad_maxima_participantes)
    client.precio = request.json.get('precio', client.precio)
    client.realizado = request.json.get('realizado', client.realizado)
    db.session.commit()

    response_body = {'id': client.id,
                     'fecha': client.fecha,
                     'id_tipo': client.id_tipo,
                     'lugar': client.lugar,
                     'id_monitor': client.id_monitor,
                     'cantidad_maxima_participantes': client.cantidad_maxima_participantes,
                     'precio': client.precio,
                     'realizado': client.realizado}

    return jsonify(response_body), 200

## TIPO DE EVENTO

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
         tipo_de_evento = Tipo_de_Evento(           
                     name=request_body['name'],
                     descripcion=request_body['descripcion'],
                     dificultad=request_body['dificultad'],
                     categoria=request_body['categoria'],
                     apellido2=request_body['apellido2'],
                    )
         db.session.add(tipo_de_evento)
         db.session.commit()
         return jsonify(request_body), 200

    else:
        response_body = {"message": "Error. Method not allowed."}
        return response_body, 400


@api.route('/tipo-de-evento/<int:user_id>', methods=['DELETE'])
def delete_tipo_de_evento(user_id):
    user = Tipo_de_Evento.query.get(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify('OK'), 200


@api.route('/tipo-de-evento/<int:client_id>', methods=['PUT'])
def update_tipo_de_evento(client_id):
    client = Tipo_de_Evento.query.get(client_id)
    if client is None:
        return 'Not found', 404

    client.id = request.json.get('id', client.id)
    client.name = request.json.get('name', client.name)
    client.descripcion = request.json.get('descripcion', client.descripcion)
    client.dificultad = request.json.get('dificultad', client.dificultad)
    client.categoria = request.json.get('categoria', client.categoria)
    client.apellido2 = request.json.get('apellido2', client.apellido2)
    db.session.commit()

    response_body = {'id': client.id,
                     'name': client.name,
                     'descripcion': client.descripcion,
                     'dificultad': client.dificultad,
                     'categoria': client.categoria,
                     'apellido2': client.apellido2}

    return jsonify(response_body), 200


@api.route('/tipo-de-evento/<int:id>', methods=['GET'])
def get_tipo_de_evento(id):
    tipo_de_evento = Tipo_de_Evento.query.get(id)
    if tipo_de_evento is None:
        return jsonify({'error': 'Reader not found'}), 404

    return jsonify(tipo_de_evento.serialize()), 200


## PARTICIPANTES DE EVENTOS

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


@api.route('/participantes_de_evento/<int:user_id>', methods=['DELETE'])
def delete_participante_de_evento(user_id):
    user = Participantes_de_Eventos.query.get(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify('OK'), 200

@api.route('/participantes_de_evento/<int:client_id>', methods=['PUT'])
def update_participantes_de_evento(client_id):
    client = Participantes_de_Eventos.query.get(client_id)
    if client is None:
        return 'Not found', 404

    client.id = request.json.get('id', client.id)
    client.id_evento = request.json.get('id_evento', client.id_evento)
    client.id_participante = request.json.get('id_participante', client.id_participante)
    client.apto_medico = request.json.get('apto_medico', client.apto_medico)
    client.asistencia = request.json.get('asistencia', client.asistencia)
    db.session.commit()

    response_body = {'id': client.id,
                     'id_evento': client.id_evento,
                     'id_participante': client.id_participante,
                     'apto_medico': client.apto_medico,
                     'asistencia': client.asistencia}

    return jsonify(response_body), 200

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email = email).first()
    if not email or not password:
        return jsonify({"msg": "You need to send username and password"}), 400
    if not user:
        return jsonify({"msg": "User doesn't exist"}), 404
    if user and user.password == password:
        access_token = create_access_token(identity=email)
        response_body = {"access_token": access_token, "msg":"usuario logeado ok"}
        return response_body, 200
    else:
        return jsonify({"msg": "Error. Password is wrong."}), 400

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    if current_user:
        return jsonify(logged_in_as=current_user), 200
    else:
        return jsonify({"msg": "Not authorized."}), 400


# REGISTER

@api.route('/register-participante', methods=['GET','POST'])
def register_participante():
    if request.method == "GET":
        participante = Participante.query.all()
        results = []
        result_participante = [participanteserialize.serialize() for participanteserialize in participante]
        

        
        for item in result_participante:
            # print("#############", item)
            # print("#############", item["id_user"])
            
            datos = User.query.filter(item["id_user"] == User.id).first()
            result_datos = datos.serialize()
            
            item["email"] = result_datos["email"]
            item["is_active"] = result_datos["is_active"]
            
            results.append(item)
            print(results)
        
        
        response_body = {"message": "ok",
                        "results": results,
                        "Total_records": len(results)}
        return response_body, 200
    
    elif request.method == "POST":
         
         request_body = request.get_json()
         user = User(      
                     email=request_body['email'],
                     password=request_body['password'],
                     is_active=True #  true
                    )
         
         db.session.add(user)
         db.session.commit()
         
         participante = Participante(            
                     id_user= user.id,
                     name=request_body['name'],
                     last_name=request_body['last_name'],
                     #url_image=request_body['url_image'],
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


@api.route('/register-monitor', methods=['GET','POST'])
def register_monitor():

    if request.method == "GET":
        monitor = Monitor.query.all()
        results = []
        result_monitor = [monitorserialize.serialize() for monitorserialize in monitor]
        

        
        for item in result_monitor:
            # print("#############", item)
            # print("#############", item["id_user"])
            
            datos = User.query.filter(item["id_user"] == User.id).first()
            result_datos = datos.serialize()
            
            item["email"] = result_datos["email"]
            item["is_active"] = result_datos["is_active"]
            
            results.append(item)
            print(results)
        
        
        response_body = {"message": "ok",
                        "results": results,
                        "Total_records": len(results)}
        return response_body, 200
    
    elif request.method == "POST":
         
         request_body = request.get_json()
         user = User(      
                     email=request_body['email'],
                     password=request_body['password'],
                     is_active= True
                    )
         db.session.add(user)
         db.session.commit()
         monitor = Monitor(            
                     id_user= user.id,
                     name=request_body['name'],
                     last_name=request_body['last_name'],
                     
                    )
        
         
         db.session.add(monitor)
         db.session.commit()
         return jsonify(request_body), 200
        
 
    else:
        response_body = {"message": "Error. Method not allowed."}
        return response_body, 400






## SOCIO
#@jwt_required()
@api.route('/socio', methods=['GET', 'POST'])
def socio():
    if request.method == "GET":
        socios = Socio.query.all()
        results = [socio.serialize() for socio in socios]
        response_body = {"message": "ok",
                        "results": results,
                        "Total_records": len(results)}
        return response_body, 200
    
    elif request.method == "POST":
         
         request_body = request.get_json()
         socio = Socio(    
                     nombre=request_body['nombre'],
                     apellido=request_body['apellido'],           
                     email=request_body['email'],
                     rut=request_body['rut'],
                     numero_telefono=request_body['numero_telefono'],
                     genero=request_body['genero'],
                     password=request_body['password']
                    )
         db.session.add(socio)
         db.session.commit()
         return jsonify(request_body), 200
        
 
    else:
        response_body = {"message": "Error. Method not allowed."}
        return response_body, 400


@api.route('/socio/<int:socio_id>', methods=['DELETE'])
def delete_socio(socio_id):
    socio = Socio.query.get(socio_id)
    db.session.delete(socio)
    db.session.commit()
    return jsonify('OK'), 200


@api.route('/socio/<int:client_id>', methods=['PUT'])
def update_socio(client_id):
    client = Socio.query.get(client_id)
    if client is None:
        return 'Not found', 404

    client.id = request.json.get('id', client.id)
    client.nombre = request.json.get('nombre', client.nombre)
    client.apellido = request.json.get('apellido', client.apellido)
    client.email = request.json.get('email', client.email)
    client.rut = request.json.get('rut', client.rut)
    client.numero_telefono = request.json.get('numero_telefono', client.numero_telefono)
    client.genero = request.json.get('genero', client.genero)
    client.password = request.json.get('password', client.password)
    
    db.session.commit()

    response_body = {'id': client.id,
                     'nombre': client.nombre,
                     'apellido': client.apellido,
                     'email': client.email,
                     'rut': client.rut,
                     'numero_telefono': client.numero_telefono,
                     'genero': client.genero
                     }

    return jsonify(response_body), 200


## ADMINISTRADOR
#@jwt_required()
@api.route('/administrador', methods=['GET', 'POST'])
def administrador():
    if request.method == "GET":
        administradores = Administrador.query.all()
        results = [administrador.serialize() for administrador in administradores]
        response_body = {"message": "ok",
                        "results": results,
                        "Total_records": len(results)}
        return response_body, 200
    
    elif request.method == "POST":
         
         request_body = request.get_json()
         administrador = Administrador(    
                     nombre=request_body['nombre'],
                     apellido=request_body['apellido'],           
                     email=request_body['email'],
                     rut=request_body['rut'],
                     numero_telefono=request_body['numero_telefono'],
                     password=request_body['password']
                    )
         db.session.add(administrador)
         db.session.commit()
         return jsonify(request_body), 200
        
 
    else:
        response_body = {"message": "Error. Method not allowed."}
        return response_body, 400


@api.route('/administrador/<int:administrador_id>', methods=['DELETE'])
def delete_administrador(administrador_id):
    administrador = Administrador.query.get(administrador_id)
    db.session.delete(administrador)
    db.session.commit()
    return jsonify('OK'), 200


@api.route('/administrador/<int:client_id>', methods=['PUT'])
def update_administrador(client_id):
    client = Administrador.query.get(client_id)
    if client is None:
        return 'Not found', 404

    client.id = request.json.get('id', client.id)
    client.nombre = request.json.get('nombre', client.nombre)
    client.apellido = request.json.get('apellido', client.apellido)
    client.email = request.json.get('email', client.email)
    client.rut = request.json.get('rut', client.rut)
    client.numero_telefono = request.json.get('numero_telefono', client.numero_telefono)
    client.password = request.json.get('password', client.password)
    
    db.session.commit()

    response_body = {'id': client.id,
                     'nombre': client.nombre,
                     'apellido': client.apellido,
                     'email': client.email,
                     'rut': client.rut,
                     'numero_telefono': client.numero_telefono
                     }

    return jsonify(response_body), 200