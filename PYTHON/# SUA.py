# SUA.py
#!/usr/bin/env python
# -*- coding: utf-8 -*-
#Librerias
from tkinter import *
from tkinter import messagebox as MessageBox
from tkinter import ttk
import pyodbc,mysql.connector,os,shutil,sys
from shutil import make_archive
import numpy as np
from os import path
from mysql.connector import errorcode
from datetime import date
from datetime import datetime



#Variables Globales para conexión
    #GAMMA2eNomina(IP PUBLICA / LISTA BLANCA)
host_db = "216.238.78.229"
port_db = "3306"
dbase = "SUA"
usr_db = "sua"
pwd_db = "oEtWMg@mgP3EC%bP"

    #GAMMA2eNomina(IP PUBLICA / LISTA BLANCA)
        # host_db = "localhost"
        # port_db = "3306"
        # dbase = "SUA"
        # usr_db = "root"
        # pwd_db = ""

    #VPN-GAMMA2eNomina
        #host_db = "172.16.11.250"
        #port_db = "3306"
        #dbase = "SUA"
        #usr_db = "sua"
        #pwd_db = "oEtWMg@mgP3EC%bP" #pwd_db = "oEtWMg@mgP3EC"+str(chr(37))+"bP"

    #mysqlSUA@GAMMA
        #host_db = "172.16.30.199"
        #port_db = "3306"
        #dbase = "SUA"
        #usr_db = "SUA"
        #pwd_db = "HnSbFbFMJ5Ur5MHK7Bgznhhy9dP7TZUH"



#Funciones

def log(Evento):
    bandera = path.exists("C:/Users/sistemas/Desktop/GeneradorSUA/log.txt")
    if(bandera):
        logtext = open("C:/Users/sistemas/Desktop/GeneradorSUA/log.txt","a+")
        logtext.write("\n" + str(datetime.now())[0:19] + " " + Evento)
        logtext.close()
    else:
        logtext = open("C:/Users/sistemas/Desktop/GeneradorSUA/log.txt","w+")
        logtext.write(str(datetime.now())[0:19] + " " + Evento)
        logtext.close()
def importNameDataBase():
    today = str(date.today())
    today = today.replace("-","")
    bandera = path.exists("C:/Users/sistemas/Desktop/GeneradorSUA/Respaldos")
    if(bandera):
        files = os.listdir("C:/Users/sistemas/Desktop/GeneradorSUA/Respaldos")
        if("SUA.sql" in files):
            nombre_act = "SUA_" + today + ".sql"
            bandera2 = path.exists("C:/Users/sistemas/Desktop/GeneradorSUA/Respaldos/" + nombre_act)
            if(bandera2):
                log("Ya existe el respaldo " + nombre_act)
                nombre_act = "SUA_" + today
                contador = 1
                bandera3 = True
                while(bandera3):
                    bandera3 = path.exists("C:/Users/sistemas/Desktop/GeneradorSUA/Respaldos/" + nombre_act + "(" + str(contador) + ").sql")
                    if(bandera3):
                        log("Ya existe el respaldo " + nombre_act + "(" + str(contador) + ").sql")
                        contador += 1
                    else:
                        log("Se actualizara la base actual con el nombre " + nombre_act + "(" + str(contador) + ").sql")
                        os.rename("C:/Users/sistemas/Desktop/GeneradorSUA/Respaldos/SUA.sql",
                        "C:/Users/sistemas/Desktop/GeneradorSUA/Respaldos/" + nombre_act + "(" + str(contador) + ").sql")
                        nombre_act = nombre_act + "(" + str(contador) + ").sql"
                        return nombre_act

            else:
                log("Se actualizara la base actual con el nombre " + nombre_act)
                os.rename("C:/Users/sistemas/Desktop/GeneradorSUA/Respaldos/SUA.sql",
                "C:/Users/sistemas/Desktop/GeneradorSUA/Respaldos/" + nombre_act)
                return nombre_act
        else:
            #SUA_20210319_1824
            log("No existen movimientos nuevos")
    else:
        log("No existen respaldos")
def importDataBase(usr_db, pwd_db, host_db, port_db, dbase, file):
    fdb = open('C:/Users/sistemas/Desktop/GeneradorSUA/Respaldos/' + file, 'r', encoding = "utf8")
    sqlFile = fdb.read()
    fdb.close()
    sqlCommands = sqlFile.split(';')
    cnn = mysql.connector.connect(
            user = usr_db,
            password = pwd_db,
            host = host_db,
            port = port_db,
            database = dbase
            )
    cursor = cnn.cursor()
    cursor.execute('DROP DATABASE ' + dbase)
    cursor.execute('CREATE DATABASE ' + dbase)
    cursor.execute('use ' + dbase)
    for command in sqlCommands:
        try:
            cursor.execute(command)
        except ValueError:
            log("Command skipped: " + str(ValueError))
    cnn.commit()
    cnn.close()
def consultaSQLPat(usr_db, pwd_db, host_db, port_db, dbase, opcion, tabla, reg_pat, cc):
    array = []
    try:
        cnn = mysql.connector.connect(
        user = usr_db,
        password = pwd_db,
        host = host_db,
        port = port_db,
        database = dbase
        )
        cursor = cnn.cursor()
        cursor.execute("SELECT DATABASE()")
        namedb = str(cursor.fetchone()).split(",")[0][2:-1]
        log("Estas usando la base de datos: " + namedb)
        if(opcion =="select" or opcion == "SELECT"):
            cursor = cnn.cursor()
            if(reg_pat == None and cc == None):
                cursor.execute("SELECT REG_PATR,centroCostos FROM " + tabla)
            elif(reg_pat != None and cc == None):
                cursor.execute("SELECT REG_PATR,centroCostos FROM " + tabla + " WHERE REG_PATR='" + reg_pat + "'")
            elif(reg_pat != None and cc != None):
                cursor.execute("SELECT REG_PATR,centroCostos FROM " + tabla + " WHERE REG_PATR='" + reg_pat + "' AND centroCostos='" + cc + "'")
            res = cursor.fetchall()
            for x in res:
                array.append(x)
            return array
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            log("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            log("Database does not exist")
        else:
            log(err)
    else:
        cnn.close()
def consultaSQLNet(usr_db, pwd_db, host_db, port_db, dbase, opcion, tabla, regPatr, cc):
    array = []
    try:
        cnn = mysql.connector.connect(
            user = usr_db,
            password = pwd_db,
            host = host_db,
            port = port_db,
            database = dbase
            )
        if(opcion == "select" or opcion == "SELECT"):
            if(tabla == "Incapacidades"):
                cursor = cnn.cursor()
                cursor.execute("SELECT * FROM " + tabla + " WHERE Reg_Pat='" + regPatr + "' AND centroCostos='" + cc + "'")
                res = cursor.fetchall()
                for x in res:
                    x = x[:-2]
                    array.append(x)
                return array
            elif(tabla == "Patron"):
                cursor = cnn.cursor()
                #cursor.execute("SELECT * FROM "+tabla+" WHERE REG_PAT='"+regPatr+"' AND centroCostos='"+cc+"'")
                cursor.execute("SELECT * FROM "+tabla+" WHERE REG_PAT='"+regPatr+"'")
                res = cursor.fetchall()
                for x in res:
                    x=x[:-2]
                    array.append(x)
                return array
            elif(tabla == "Prima_RT"):
                cursor = cnn.cursor()
                #cursor.execute("SELECT * FROM "+tabla+" WHERE Reg_Pat='"+regPatr+"' AND centroCostos='"+cc+"'")
                cursor.execute("SELECT * FROM " + tabla + " WHERE Reg_Pat='" + regPatr + "'")
                res = cursor.fetchall()
                for x in res:
                    x = x[:-2]
                    array.append(x)
                return array
            else:
                cursor = cnn.cursor()
                cursor.execute("SELECT * FROM " + tabla + " WHERE REG_PATR='" + regPatr + "' AND centroCostos='" + cc + "'")
                res = cursor.fetchall()
                for x in res:
                    x = x[:-2]
                    array.append(x)
                return array
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    else:
        cnn.close()
def creacionMSAccessEmpty(e):
    movs_RC = e.split('_')
    reg_PatrA = movs_RC[0]
    bandera = path.exists("C:/Users/sistemas/Desktop/GeneradorSUA/SUA")
    if(bandera):
        bandera2 = path.exists('C:/Users/sistemas/Desktop/GeneradorSUA/SUAS/' + reg_PatrA)
        if(bandera2):
            #Si existe carpeta del Registro Patronal
            original = 'C:/Users/sistemas/Desktop/GeneradorSUA/SUA'
            bandera3 = path.exists('C:/Users/sistemas/Desktop/GeneradorSUA/SUAS/' + reg_PatrA + '/' + e)
            if(bandera3): shutil.rmtree('C:/Users/sistemas/Desktop/GeneradorSUA/SUAS/' + reg_PatrA + '/' + e)
            target = ('C:/Users/sistemas/Desktop/GeneradorSUA/SUAS/' + reg_PatrA + '/' + e)
            shutil.copytree(original,target)
        else:
            #Si no existe carpeta del Registro Patronal
            original = 'C:/Users/sistemas/Desktop/GeneradorSUA/SUA'
            target = ('C:/Users/sistemas/Desktop/GeneradorSUA/SUAS/' + reg_PatrA + '/' + e)
            shutil.copytree(original,target)
    else:
        log("No hay base de respaldo vacia")
def removeZip(regPat):
    movs_RC = regPat.split('_')
    reg_PatrA = movs_RC[0]
    bandera = path.exists('C:/Users/sistemas/Desktop/GeneradorSUA/SUAS/' + reg_PatrA + '/' + regPat + '.zip')
    if(bandera):
        os.remove('C:/Users/sistemas/Desktop/GeneradorSUA/SUAS/' + reg_PatrA + '/' + regPat + '.zip')
def regs_Pat(reg_pat,cc):
    regs_Array = []
    if (reg_pat != None and cc != None):
        a_Mov = consultaSQLPat(usr_db, pwd_db, host_db, port_db, dbase, "select", "Movtos", reg_pat, cc)
    elif (reg_pat != None and cc == None):
        a_Mov = consultaSQLPat(usr_db, pwd_db, host_db, port_db, dbase, "select", "Movtos", reg_pat, None)
    elif(reg_pat == None and cc == None):
        a_Mov = consultaSQLPat(usr_db, pwd_db, host_db, port_db, dbase, "select", "Movtos", None, None)
    if(len(a_Mov) > 0):
        for y in a_Mov:
            reg_pat = y[0]
            centroCostos = y[1]
            name = reg_pat + '_' + centroCostos
            if(not(name in regs_Array)):
                regs_Array.append(name)
        return regs_Array
    else:
        return 0
def compressZip(e):
    movs_RC = e.split('_')
    reg_PatrA = movs_RC[0]
    bandera = path.exists("C:/Users/sistemas/Desktop/GeneradorSUA/SUAS/" + reg_PatrA + "/" + e)
    if(bandera):
        root_dir = "C:/Users/sistemas/Desktop/GeneradorSUA/SUAS/" + reg_PatrA + "/" + e 
        shutil.make_archive("C:/Users/sistemas/Desktop/GeneradorSUA/SUAS/" + reg_PatrA + "/"+ e,"zip", root_dir)
        #os.rename('C:/Users/sistemas/Desktop/GeneradorSUA/'+e+'.zip', 'C:/Users/sistemas/Desktop/GeneradorSUA/SUAS/'+reg_PatrA+'/'+e+'.zip')
        shutil.rmtree('C:/Users/sistemas/Desktop/GeneradorSUA/SUAS/' + reg_PatrA + '/' + e)
    else:
    	log("La carpeta del registro patronal no existe")
def tablas(regPat, cc):
    a_Afil = consultaSQLNet(usr_db, pwd_db, host_db, port_db, dbase, "select", "Afiliacion", regPat, cc)
    a_Aseg = consultaSQLNet(usr_db, pwd_db, host_db, port_db, dbase, "select", "Asegura", regPat, cc)
    a_AuSr = consultaSQLNet(usr_db, pwd_db, host_db, port_db, dbase, "select", "AusentismosSR", regPat, cc)
    a_Inc = consultaSQLNet(usr_db, pwd_db, host_db, port_db, dbase,"select", "Incapacidades", regPat, cc)
    a_Mov = consultaSQLNet(usr_db, pwd_db, host_db, port_db, dbase,"select", "Movtos", regPat, cc)
    a_MovObr = consultaSQLNet(usr_db, pwd_db, host_db, port_db, dbase, "select", "MovtosObra", regPat, cc)
    a_Patron = consultaSQLNet(usr_db, pwd_db, host_db, port_db, dbase, "select", "Patron", regPat, cc)
    a_PrimaRT = consultaSQLNet(usr_db, pwd_db, host_db, port_db, dbase, "select", "Prima_RT", regPat, cc)
    return a_Afil, a_Aseg, a_AuSr, a_Inc, a_Mov, a_MovObr, a_Patron, a_PrimaRT
def insertarSQLNet(e, a_Afil, a_Aseg, a_AuSr, a_Inc, a_Mov, a_MovObr, a_Patron, a_PrimaRT):
    movs_RC = e.split('_')
    reg_PatrA = movs_RC[0]
    msaDriver = "{Microsoft Access Driver (*.mdb, *.accdb)}"
    dir_MSA = path.realpath('C:/Users/sistemas/Desktop/GeneradorSUA/SUAS/' + reg_PatrA + '/' + e + '/SUA.MDB')
    log("INSERTando datos de: " + reg_PatrA)
    pwd_MSA = "S5@N52V49"
    try:
        conn = pyodbc.connect(r"Driver=" + msaDriver + ";" + r"Dbq=" + dir_MSA + ";" + r"PWD=" + pwd_MSA + ";")
        cursor = conn.cursor()
        for x in a_Afil:
            x = str(x).replace("None","null")
            x = str(x).replace("''","null")
            try:
                cursor.execute('insert into Afiliacion values ' + str(x))
                #print("INSERT Afil: " +x)
            except:
                log('ERROR Afil: ' + x)
    except:
        log("Error Conexion Access")
    cursor.commit()
    
    for y in a_Aseg:
        #y = str(y)
        y = str(y).replace("None","null")
        y = str(y).replace("''","0")
        try:
            cursor.execute('insert into Asegura values ' + y)
            #print("INSERT Aseg: " +y)
        except:
            log("ERROR Aseg: " + y)
    cursor.commit()

    for z in a_AuSr:
        z = str(z).replace("None","null")
        z = str(z).replace("''","null")
        try:
            cursor.execute('insert into AusentismosSR values ' + str(z))
            #print("INSERT AuSr: " +z)
        except:
            log('ERROR AuSr: ' + z)
    cursor.commit()

    for a in a_Inc:
        a = str(a).replace("None","null")
        a = str(a).replace("''","null")
        try:
            cursor.execute('insert into Incapacidades values ' + a)
            #print("INSERT Inc: " +a)
        except:
            log('ERROR Inc: ' + a)
    cursor.commit()

    for b in a_Mov:
        b = str(b).replace("None","null")
        b = str(b).replace("''","null")
        try:
            cursor.execute('insert into Movtos values ' + b)
            #print("INSERT Mov: " +b)
        except:
            log('ERROR Mov: ' + b)
    cursor.commit()

    for c in a_MovObr:
        c = str(c).replace("None","null")
        c = str(c).replace("''","null")
        try:
            cursor.execute('insert into MovtosObra values ' + str(c))
            #print("INSERT MovObr: " +c)
        except:
            log('ERROR MovObr: ' + c)
    cursor.commit()

    for d in a_Patron:
        d = str(d).replace("None","null")
        d = str(d).replace("null","''")
        try:
            cursor.execute('insert into Patron values ' + str(d))
        except:
            log('ERROR Patron: ' + d)
    cursor.commit()

    for f in a_PrimaRT:
        f = str(f).replace("None","null")
        f = str(f).replace("''","null")
        try:
            cursor.execute('insert into Prima_RT values ' + str(f))
        except:
            log('ERROR PrimaRT: ' + f)
    cursor.commit()

    #Los elementos en la cadena hay que declararlos como string para que no los tome como tupla, debido a
    #que la inyeccion se hace con strings o enteros(en el caso de los numeros).
    #cadena =  ['("202101","110.21","1.47")','("202102","110.907","1.47")','("202103","110.907","1.47")']
    #for g in cadena:
        #try:
            #cursor.execute('insert into INPC values ' + str(g))
        #except:
            #log('ERROR INCP: ' + g)
    #cursor.commit()

#Aviso
def aviso(opt, msg):
    #Avisos
    if opt == 1:
        MessageBox.showinfo("Completado", msg)
        
    #Advertencias
    if opt == 2:
        MessageBox.showwarning("Advertencia", msg)
    #Errores
    if opt == 3:
        MessageBox.showerror("Error", msg)
#Principal
def principal(opt, arg1, arg2):
    if opt == 3:
        val1 = str(arg1)
        val2 = str(arg2)
        regs_Pat_r = regs_Pat(val1,val2)
        log("Datos ingresados: Registro Patronal: " + str(val1) + "CC: " + str(val2))
    elif opt == 2:
        val1 = str(arg1)
        regs_Pat_r = regs_Pat(val1,None)
        log("Datos ingresados: Registro Patronal: " + str(val1))
    elif opt==1:
        log("Ejecución Completa")
        regs_Pat_r = regs_Pat(None,None)
        

    if(regs_Pat_r == 0):
        log("No hay movimientos")
        aviso(3,"No hay movimientos")
    else:
        for e in regs_Pat_r:
            movs_RC = e.split('_')
            reg_PatrA = movs_RC[0]
            centroCostos_A = movs_RC[1]
            removeZip(e)
            creacionMSAccessEmpty(e)#Se crean las carpetas correspondientes
            a_Afil,a_Aseg,a_AuSr,a_Inc,a_Mov,a_MovObr,a_Patron,a_PrimaRT = tablas(reg_PatrA, centroCostos_A)
            insertarSQLNet(e,a_Afil,a_Aseg,a_AuSr,a_Inc,a_Mov,a_MovObr,a_Patron,a_PrimaRT)
            compressZip(e)#Comprime al final todo lo trabajado
        aviso(1,"Suas Generados")

               