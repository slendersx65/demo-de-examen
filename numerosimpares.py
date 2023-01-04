n = int(input("ingrese el limite inferior:"))
m =int(input("ingrese el limite superior:"))
i = 0
print("Los valores impares comprendidos entre ", n, " y ", m, " son: ")
for i in range(n,m):
    if(i%2!=0):
        print (i)