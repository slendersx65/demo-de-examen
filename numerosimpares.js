var i, m, n;
n = Number.parseInt(input("ingrese el limite inferior:"));
m = Number.parseInt(input("ingrese el limite superior:"));
i = 0;
console.log("Los valores impares comprendidos entre ", n, " y ", m, " son: ");

for (var i = n, _pj_a = m; i < _pj_a; i += 1) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}