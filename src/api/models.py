from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy import ForeignKey

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean)


    

    def __repr__(self):
        return f'<User {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_active": self.is_active
            # do not serialize the password, its a security breach
        }

class Participante(db.Model):
    __tablename__ = 'participante'
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, ForeignKey(User.id))
    name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    url_image = db.Column(db.String(100))
    numero_telefono = db.Column(db.Integer)
    nombre_contacto_emergencia = db.Column(db.String(100))
    numero_contacto_emergencia = db.Column(db.Integer)
    asistencia_medica = db.Column(db.String(100))
    
    user = relationship("User")

    def __repr__(self):
        return f'<Participante {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "id_user": self.id_user,
            "name": self.name,
            "last_name": self.last_name,
            "url_image": self.url_image,
            "numero_telefono": self.numero_telefono,
            "nombre_contacto_emergencia": self.nombre_contacto_emergencia,
            "numero_contacto_emergencia": self.numero_contacto_emergencia,
            "asistencia_medica": self.asistencia_medica
            # do not serialize the password, its a security breach
        }

class Administradores(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, ForeignKey(User.id))
    name = db.Column(db.String(100))
    
    user = relationship("User")
    

    def __repr__(self):
        return f'<Administradores {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "id_user": self.id_user,
            "name": self.name,
            
            # do not serialize the password, its a security breach
            }

class Monitor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, ForeignKey(User.id))
    name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    
    user = relationship("User")

    def __repr__(self):
        return f'<Monitor {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "id_user": self.id_user,
            "name": self.name,
            "last_name": self.last_name
            # do not serialize the password, its a security breach
            }


class Tipo_de_Evento(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    descripcion = db.Column(db.String(1000), unique=False, nullable=False)
    dificultad = db.Column(db.String(120), unique=False, nullable=False)
    categoria = db.Column(db.String(120), unique=False, nullable=False)
    apellido2 = db.Column(db.String(120), unique=False, nullable=False)

    

    def __repr__(self):
        return f'<Tipo_de_Evento {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "descripcion": self.descripcion,
            "dificultad": self.dificultad,
            "categoria": self.categoria,
            "apellido2": self.apellido2
            # do not serialize the password, its a security breach
        }

class Evento(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fecha = db.Column(db.String(80), unique=False, nullable=False)
    id_tipo = db.Column(db.Integer, ForeignKey(Tipo_de_Evento.id), unique=False, nullable=False)
    lugar = db.Column(db.String(120), unique=False, nullable=False)
    id_monitor = db.Column(db.Integer, ForeignKey(Monitor.id), unique=False, nullable=False)
    cantidad_maxima_participantes = db.Column(db.Integer, unique=False, nullable=False)
    precio = db.Column(db.Integer, unique=False, nullable=False)
    realizado = db.Column(db.Boolean)

    monitores = relationship("Monitor")
    tipo_de_evento = relationship("Tipo_de_Evento")
    
    

    

    def __repr__(self):
        return f'<Evento {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "fecha": self.fecha,
            "id_tipo": self.id_tipo,
            "lugar": self.lugar,
            "id_monitor": self.id_monitor,
            "cantidad_maxima_participantes": self.cantidad_maxima_participantes,
            "precio": self.precio,
            "realizado": self.realizado
            # do not serialize the password, its a security breach
        }



class Participantes_de_Eventos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_evento = db.Column(db.Integer, ForeignKey(Evento.id))
    id_participante = db.Column(db.Integer, ForeignKey(Participante.id))
    apto_medico = db.Column(db.Boolean)
    asistencia = db.Column(db.Boolean)

    participante = relationship("Participante")
    evento = relationship("Evento")

    def __repr__(self):
        return f'<Participantes_de_Eventos {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "id_evento": self.id_evento,
            "id_participante": self.id_participante,
            "apto_medico": self.apto_medico,
            "asistencia": self.asistencia
           
            # do not serialize the password, its a security breach
        }

class Socio(db.Model):
    __tablename__ = 'socio'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    apellido = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    rut = db.Column(db.String(120), unique=True, nullable=False)
    numero_telefono = db.Column(db.String(120), unique=False, nullable=False)
    genero = db.Column(db.String(120), unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    


    

    def __repr__(self):
        return f'<Socio {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "email": self.email,
            "rut": self.rut,
            "numero_telefono": self.numero_telefono,
            "genero": self.genero
            # do not serialize the password, its a security breach
        }