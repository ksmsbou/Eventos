# -*- coding: utf-8 -*-
from flask import request, session, Blueprint, json

CU3 = Blueprint('CU3', __name__)


@CU3.route('/cu3/AIdentificacion', methods=['POST'])
def AIdentificacion():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VPrincipal', 'msg':[ur'No Identificado']}, {'label':'/VPrincipalUsuario', 'msg':[ur'Vista de Usuario'], "actor":"usuario"}, {'label':'/VPrincipalAdministrador', 'msg':[ur'Vista de Administrador'], "actor":"administrador"}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@CU3.route('/cu3/ARegistro', methods=['POST'])
def ARegistro():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VPrincipal', 'msg':[ur'Registrado']}, {'label':'/VRegistro', 'msg':[ur'No Registrado']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@CU3.route('/cu3/VPrincipal')
def VPrincipal():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)



@CU3.route('/cu3/VRegistro')
def VRegistro():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure


    #Action code ends here
    return json.dumps(res)





#Use case code starts here


#Use case code ends here