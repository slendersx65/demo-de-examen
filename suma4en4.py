import os

import msvcrt



def LimpiarPantalla():



    if os.name == "posix":

        os.system ("clear")

    elif os.name == "ce" or os.name == "nt" or os.name == "dos":

         os.system ("cls")



n=int(input("Ingrese la cantidad de datos: "))

x=int(input("Ingrese desde donde se inicializa el problema: "))

num=x

suma=0

cont=0

print("Los numeros serian: ")

for i in range(n):

    if(cont%4==0):

        print(f"{num}")

    cont+=1

    num+=1

cont=0

i=0

print("La suma de los numeros de 4 en 4 es: ")

for i in range(n):

    if(cont%4==0):

        suma=suma+x

        print(f"La suma sería {suma}")

    cont+=1

    x+=1

msvcrt.getch()



os.system("cls")