import * as random from 'random';
var lista, n;
lista = [];
n = Number.parseInt(input("Ingrese cantidad de elementos para la lista: "));

for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
  lista.append(random.randint(0, 100));
}

console.log(lista);