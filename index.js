alert(
  "Bienvenido! \nPara simular el prestamo, Por favor ingrese los siguientes datos."
);
let nombre = prompt("Ingrese su NOMBRE");
let apellido = prompt("Ingrese su APELLIDO");
let edad = parseInt(prompt("Ingrese su EDAD"));
let nombreApellido = nombre + " " + apellido;

let correcto = prompt(
  "Los datos INGRESADOS son los siguientes:\nNOMBRE: " +
    nombre +
    "\nAPELLIDO: " +
    apellido +
    "\nEDAD: " +
    edad +
    "\n \nSi los datos son correctos escriba SI, caso contrario NO"
);

while (correcto != "si") {
  alert("Volve a ingresar tus DATOS");
  let nombre = prompt("Ingrese su NOMBRE");
  let apellido = prompt("Ingrese su APELLIDO");
  let edad = parseInt(prompt("Ingrese su EDAD"));

  correcto = prompt(
    "Los datos INGRESADOS son los siguientes:\nNOMBRE: " +
      nombre +
      "\nAPELLIDO: " +
      apellido +
      "\nEDAD: " +
      edad +
      "\n \nSi los datos son correctos escriba SI, caso contrario NO"
  );

  if (correcto == "si" || correcto == "SI") {
    break;
  }
}

alert(
  "Bienvenido " +
    nombreApellido +
    ". Es un gusto que haya accedido a vuestra plataforma.\nLe pediremos que ingrese el monto deseado y la cantidad de cuotas.\nLe recordamos que esta sujeto a verificacion crediticia."
);

let monto = parseInt(prompt("Ingresa el MONTO que desea simular"));
let cuotas = parseInt(prompt("Ingresa la cantidad de CUOTAS"));

prompt(
  `El monto seleccionado es de: $ ${monto} y la cantidad de cuotas son: ${cuotas}`
);

function esMayor (edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
