lista = []
import random
n = int(input("Ingrese cantidad de elementos para la lista: "))
for i in range(n):
    lista.append(random.randint(0, 100))

print(lista)