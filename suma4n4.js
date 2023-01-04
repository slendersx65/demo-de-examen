import * as os from 'os';
import * as msvcrt from 'msvcrt';
var cont, i, n, num, suma, x;

function LimpiarPantalla() {
  if (os.name === "posix") {
    os.system("clear");
  } else {
    if (os.name === "ce" || os.name === "nt" || os.name === "dos") {
      os.system("cls");
    }
  }
}

n = Number.parseInt(input("Ingrese la cantidad de datos: "));
x = Number.parseInt(input("Ingrese desde donde se inicializa el problema: "));
num = x;
suma = 0;
cont = 0;
console.log("Los numeros serian: ");

for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
  if (cont % 4 === 0) {
    console.log(`${num}`);
  }

  cont += 1;
  num += 1;
}

cont = 0;
i = 0;
console.log("La suma de los numeros de 4 en 4 es: ");

for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
  if (cont % 4 === 0) {
    suma = suma + x;
    console.log(`La suma sería ${suma}`);
  }

  cont += 1;
  x += 1;
}

msvcrt.getch();
os.system("cls");
