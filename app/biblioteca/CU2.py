# -*- coding: utf-8 -*-
from flask import request, session, Blueprint, json

CU2 = Blueprint('CU2', __name__)


@CU2.route('/cu2/ACertificado')
def ACertificado():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VPrincipalUsuario', 'msg':[ur'Certificado obtenido']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@CU2.route('/cu2/ACredencial')
def ACredencial():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VPrincipalUsuario', 'msg':[ur'Credencial recibida']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@CU2.route('/cu2/AReservarEvento', methods=['POST'])
def AReservarEvento():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VEventosInscritos', 'msg':[ur'Reservado']}, {'label':'/VEventosNoInscritos', 'msg':[ur'No Reservado']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@CU2.route('/cu2/AVerEventoInscrito')
def AVerEventoInscrito():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VEventosInscritos', 'msg':[ur'Visto Inscrito']}, {'label':'/VPrincipalUsuario', 'msg':[ur'No Visto Inscrito']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@CU2.route('/cu2/AVerEventoNoInscrito')
def AVerEventoNoInscrito():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VEventosNoInscritos', 'msg':[ur'Visto No Inscrito']}, {'label':'/VPrincipalUsuario', 'msg':[ur'No Visto El No Inscrito']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@CU2.route('/cu2/AVerEventosInscritos')
def AVerEventosInscritos():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VPrincipalUsuario', 'msg':[ur'Vistos Inscritos']}, {'label':'/VPrincipalUsuario', 'msg':[ur'No Vistos Inscritos']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@CU2.route('/cu2/AVerEventosNoInscritos')
def AVerEventosNoInscritos():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VPrincipalUsuario', 'msg':[ur'Vistos No Inscritos']}, {'label':'/VPrincipalUsuario', 'msg':[ur'No Vistos Los No Inscritos']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@CU2.route('/cu2/VEventoInscrito')
def VEventoInscrito():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@CU2.route('/cu2/VEventoNoInscrito')
def VEventoNoInscrito():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@CU2.route('/cu2/VEventosInscritos')
def VEventosInscritos():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@CU2.route('/cu2/VEventosNoInscritos')
def VEventosNoInscritos():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@CU2.route('/cu2/VPrincipalUsuario')
def VPrincipalUsuario():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)





#Use case code starts here


#Use case code ends here