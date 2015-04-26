# -*- coding: utf-8 -*-
from flask import request, session, Blueprint, json

CU1 = Blueprint('CU1', __name__)


@CU1.route('/cu1/ACrearEvento', methods=['POST'])
def ACrearEvento():
    #Access to POST/PUT fields using request.form['name']
    #Access to file fields using request.files['name']
    results = [{'label':'/VPrincipalAdministrador', 'msg':[ur'Evento Creado']}, {'label':'/VPrincipalAdministrador', 'msg':[ur'Evento No Creado']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@CU1.route('/cu1/AEliminarEvento')
def AEliminarEvento():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VListaEventos', 'msg':[ur'Evento Eliminado']}, {'label':'/VEliminarEvento', 'msg':[ur'Evento No Eliminado']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@CU1.route('/cu1/AModificarEvento', methods=['POST'])
def AModificarEvento():
    #Access to POST/PUT fields using request.form['name']
    #Access to file fields using request.files['name']
    results = [{'label':'/VListaEventos', 'msg':[ur'Evento Modificado']}, {'label':'/VModificarEvento', 'msg':[ur'Evento No Modificado']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@CU1.route('/cu1/AVerEvento')
def AVerEvento():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VListaEventos', 'msg':[ur'Evento Visto']}, {'label':'/VListaEventos', 'msg':[ur'Evento No Visto']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@CU1.route('/cu1/AVerParticipantes')
def AVerParticipantes():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VPrincipalAdministrador', 'msg':[ur'Lista de Participantes Vista']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@CU1.route('/cu1/VCrearEvento')
def VCrearEvento():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@CU1.route('/cu1/VEliminarEvento')
def VEliminarEvento():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@CU1.route('/cu1/VListaEventos')
def VListaEventos():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@CU1.route('/cu1/VModificarEvento')
def VModificarEvento():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@CU1.route('/cu1/VPrincipalAdministrador')
def VPrincipalAdministrador():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@CU1.route('/cu1/VVerEvento')
def VVerEvento():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)





#Use case code starts here


#Use case code ends here