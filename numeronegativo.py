n = int(input("Ingrese cantidad de valores: "))
lista = []
i = 0
for i in range(n):
    valor = int(input("Ingrese valor: "))
    lista.append(valor)

for i in range(n):
    if lista[i] < 0:
        print("El valor ", lista[i], " es negativo")
