
# Esta función es un custom de la función max con 2 numeros

def custom_maximum(a, b):
    """
    Return the maximum of two numbers a and b.
    
    Parameters:
        a (int): First number
        b (int): Second number
        
    Returns:
        int: The maximum of a and b
    """
    if a > b:
        return a
    elif b > a:
        return b
    elif b == a:
        raise Exception("Los dos valores son iguales")
    
    

# Esta función es un custom de la función max con 3 numeros

def custom_maximum_3(a, b, c):
    """
    Return the maximum of three numbers a, b and c.
    
    Parameters:
        a (int): First number
        b (int): Second number
        c (int): Third number
        
    Returns:
        int: The maximum of a, b and c
    """
    if a > b:
        if a > c:
            return a
        else:
            return c
    else:
        if b > c:
            return b
        else:
            return c
 
# Prueba de la función custom_maximum_3
    prueba = custom_maximum_3(1, 2, 3);
    print(prueba);

# Prueba de la función custom_maximum
    prueba = custom_maximum(1, 2);
    print(prueba);