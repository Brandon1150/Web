using System;
using System.Collections.Generic;

class Program
{
     static bool EsDivisiblePor3(int n)
    {
        int sum = 0;
        
        while (n > 0)
        {
            // Aqui se calcula la suma de los digitos donde sum es el acumulador de la suma y % 10 es el residuo de la division entre 10
            sum += n % 10;
            // Aqui se divide el valor de n entre 10
            n /= 10; 
        }
        // Aqui se divide la suma entre 3 y si el residuo es 0 es divisible por 3
        return sum % 3 == 0;
    }

   static void Main(string[] args)
    {
        int n = 69145;


        if (EsDivisiblePor3(n))
        {
            Console.WriteLine($"{n} es divisible por 3");
        }
        else
        {
            Console.WriteLine($"{n} no es divisible por 3");
        }
    }
}