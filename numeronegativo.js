var i, lista, n, valor;
n = Number.parseInt(input("Ingrese cantidad de valores: "));
lista = [];
i = 0;

for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
  valor = Number.parseInt(input("Ingrese valor: "));
  lista.append(valor);
}

for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
  if (lista[i] < 0) {
    console.log("El valor ", lista[i], " es negativo");
  }
}