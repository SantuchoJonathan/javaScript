/*Este proyecto se basa sobre un SIMULADOR DE PRESTAMOS. 
El mismo es en base a una determinada TNA "Tasa Nominal Anual", la cual se incluyo en una variable y puede ser modificada cada vez que se necesite.
Primero, le pedimos al cliente que ingrese unos datos personales, como nombre, apellido y edad, ya que la persona tendria que contar con mayoria de edad para poder acceder. Despues de haber ingresados estos datos, se le notifica si son correctos los datos ingresados. En caso de ser que si, que continue colocando el monto que desea obtener y la cantidad de cuotas a abonar. Posteriormente, a modo de confirmacion, le solicitamos que confirme los datos, y si son correctos, calcula en valor de las cuotas aproximadas, en funcion del monto y cuotas seleccionadas.
*/
alert(
  "Bienvenido!\nPara simular el prestamo, Por favor ingrese los siguientes datos."
);

//Las proximas 3 variables seran usadas como informacion
let nombre = prompt("Ingrese su NOMBRE");
let apellido = prompt("Ingrese su APELLIDO");
let edad = parseInt(prompt("Ingrese su EDAD"));

//Funcion creada para concatenar los datos de la variable nombre y apellido
function nombreyApellido(nombre, apellido) {
  let nombreapellido = nombre + " " +apellido;
  return nombreapellido;
}

let nombreApellido = nombreyApellido(nombre, apellido);

let confirmar = true;

//Esta funcion es para evitar copiar lo mismo en varios lados
function ingresoDatos() {
  let nombre = prompt("Ingrese su NOMBRE");
  let apellido = prompt("Ingrese su APELLIDO");
  let edad = parseInt(prompt("Ingrese su EDAD"));
}

let correcto = parseInt(
  prompt(
    "Los datos INGRESADOS son los siguientes:\nNOMBRE: " +
      nombre +
      "\nAPELLIDO: " +
      apellido +
      "\nEDAD: " +
      edad +
      "\n \nSi los datos son correctos digite 1, caso contrario digite 2"
  )
);

//En este cicle, le pedimos al cliente que verifique los datos Ingresados. Si son correctos que salga de este bucle y qeu se dirija a pedirle otro dato. En caso de que los datos sean incorrectos, le damos la oportunidad de volver a ingresar los datos.
while (confirmar === true) {
  if (correcto === 1) {
    alert(
      "Bienvenido " +
        nombreyApellido(nombre, apellido) +
        ". Es un gusto que hayas accedido a vuestra plataforma.\nLe pediremos que ingrese el monto deseado y la cantidad de cuotas.\nLe recordamos que esta sujeto a verificacion crediticia."
    );
    break;
  } else if (correcto === 2) {
    alert("Volve a ingresar tus DATOS");
    ingresoDatos();

    correcto = parseInt(
      prompt(
        "Los datos INGRESADOS son los siguientes:\nNOMBRE: " +
          nombre +
          "\nAPELLIDO: " +
          apellido +
          "\nEDAD: " +
          edad +
          "\n \nSi los datos son correctos digite 1, caso contrario digite 2"
      )
    );
  } else {
    alert("Los datos ingresados son Incorrectos");
    alert("Volve a ingresar tus DATOS");
    ingresoDatos();

    correcto = parseInt(
      prompt(
        "Los datos INGRESADOS son los siguientes:\nNOMBRE: " +
          nombre +
          "\nAPELLIDO: " +
          apellido +
          "\nEDAD: " +
          edad +
          "\n \nSi los datos son correctos digite 1, caso contrario digite 2"
      )
    );
  }
}

//Estas variables son para pedirle al cliente informacion del monto y las cuotas que desea
let monto = parseInt(prompt("Ingresa el MONTO que desea simular"));
let cuotas = parseInt(prompt("Ingresa la cantidad de CUOTAS"));
let confirmacion = parseInt(
  prompt(
    `El monto seleccionado es de: $ ${monto} y la cantidad de cuotas son: ${cuotas}. \nSi esto es correco, presiones 1 para simular o 2 para volver a ingresar el monto y/o cuota.`
  )
);

//Funcion para calcular cuota constante
function cuotasConstantesCalculo() {
  const cuotaConstante = parseInt(
    (monto * Math.pow(1 + cuotasTasaNominal, cuotas) * cuotasTasaNominal) /
      (Math.pow(1 + cuotasTasaNominal, cuotas) - 1)
  );
  return cuotaConstante;
}

//tna= Tasa Nominal Anual
let tna = 86.5;
//impuesto IVA
const iva = 0.21;
//TNA, como lo dice es anual, se tuvo que dividir en 12 para calcularlo por mes
const cuotasTasaNominal = tna / 100 / 12;
//Hacemos mencion de la funcion arriba descripta
let resultadoCuotas = cuotasConstantesCalculo();
//Esta variable es para poder definir el interes mensual que genera el monto que eligio el cliente
let interesFinal = monto * cuotasTasaNominal;
//Esta variable corresponde al total a abonar. Esta incluido el interes, y el IVA 
let cuotasPagar = resultadoCuotas + interesFinal * iva;

while (confirmacion !== 1) {
  monto = parseInt(prompt("Ingresa el MONTO que desea simular"));
  cuotas = parseInt(prompt("Ingresa la cantidad de CUOTAS"));
  confirmacion = parseInt(
    prompt(
      `El monto seleccionado es de: $ ${monto} y la cantidad de cuotas son: ${cuotas}. \nSi estos datos son correctos, presiones 1 para simular o 2 para volver a ingresar el monto y/o cuota.`
    )
  );

  if (confirmacion === 1) {
    break;
  }
}
//Cuadro de alerta para informarle al cliente los cuotas aproximadas
alert(
  `En base a la TNA de ${tna}%, los valores de las ${cuotas} cuotas aproximadas seran de $ ${cuotasPagar}`
);
