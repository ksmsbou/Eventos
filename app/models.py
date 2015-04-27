from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nickname   = db.Column(db.String(64), index=True, unique=True)
    contrasena = db.Column(db.String(16), index=True, unique=True)
    
    def __repr__(self):
        return '<User %r>' % (self.nickname)


class Event(db.Model):
    id             = db.Column(db.Integer, primary_key=True)
    name           = db.Column(db.String(128))
    descripccion   = db.Column(db.String(256))
    ubicacion      = db.Column(db.String(256))
    fecha          = db.Column(db.DateTime)
    capacidad      = db.Column(db.Integer)
    disponibilidad = db.Column(db.Integer)
    afiche         = db.Column(db.String(256))

    def __repr__(self):
        return '<Event %r>' % (self.name)


class Person(db.Model):
    id         = db.Column(db.Integer, primary_key=True)
    nombres    = db.Column(db.String(128))
    apellidos  = db.Column(db.String(128))
    nickname   = db.Column(db.String(64), index=True, unique=True)
    contrasena = db.Column(db.String(16))
    edad       = db.Column(db.Integer)
    telefono   = db.Column(db.String(11))
    correo     = db.Column(db.String(120), index=True, unique=True)
    admin      = db.Column(db.Boolean)

    def __repr__(self):
        return '<Person %r>' % (self.nombres) % (self.apellidos)
        
