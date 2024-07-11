

# Esta función verifica si  un caracter es vocal


def isVocal(caracter):

    Vocal_valida = ['a', 'e', 'i', 'o', 'u']
# __doc__ = """Esta función verifica si  un caracter es vocal"""


    if caracter in Vocal_valida:

    # if (Vocal_valida == "a" or Vocal_valida == "e" or Vocal_valida == "i" or Vocal_valida == "o" or Vocal_valida == "u"):

        return True
    else:
        return False