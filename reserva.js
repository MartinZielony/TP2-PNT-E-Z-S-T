//Asigna la fecha actual al input e impide seleccionar una fecha anterior a la actual
//Slice devuelve los caracteres desde la posicion de el primer parametro hasta el segundo
window.onload = function () {
    const inputFecha = document.getElementById("fechaLlegada");
    const fechaActual = new Date().toISOString().slice(0, 10);
    inputFecha.value = fechaActual;
    //Se edita el atributo "min" de acuerdo a la fecha actual para que no se puedan seleccionar fechas inválidas.
    document.getElementsByName("fechaLlegada")[0].setAttribute('min', fechaActual);
};


//En base a un patrón que permite nada más el ingreso de letras mayúsculas y minúsculas entre A y Z
//Validamos cada vez que se deja de presionar una tecla que el valor del input cumpla con el patrón
function validarString(input) {
    let valor = input.value;
    let soloLetras = /^[a-zA-Z]+$/;
    if (soloLetras.test(valor)) {
        input.classList.remove("error");
    } else {
        input.classList.add("error");
        alert("El valor ingresado solo debe contener letras");
        input.value = "";
    }
}

//En base a un patrón que permite nada más números entre el 0 y el 9 inclusive
//Validamos cada vez que se deja de presionar una tecla que el valor del input cumpla con el patrón
function validarTelefono(input) {
    let valor = input.value;
    let soloNumeros = /^[0-9]+$/;
    if (soloNumeros.test(valor)) {
        input.classList.remove("error");
    } else {
        input.classList.add("error");
        alert("El valor ingresado solo debe contener numeros");
        input.value = "";
    }
}

//En base a un patrón que se asegura de que haya un @ presente en el String
//Validamos cada vez que se selecciona otro elemento que el valor del input cumpla con el patrón
function validarEmail(input) {
    let valor = input.value;
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValido.test(valor)) {
        input.classList.remove("error");
    } else {
        input.classList.add("error");
        alert("El valor ingresado no es un email válido");
        input.value;
    }
}

function mostrarReserva() {
    // Obtener todos los elementos de checkbox
    var checkboxes = document.querySelectorAll("input[type='checkbox']");

    // Array para almacenar los elementos marcados
    var elementosSeleccionados = [];

    // Iterar sobre los checkboxes
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            elementosSeleccionados.push(checkbox.value);
        }
    });

    var mensaje = "Nombre: " + document.getElementById("fname").value +
        ", Apellido: " + document.getElementById("lname").value +
        ", (Mail: " + document.getElementById("email").value + ") \n" +
        "Teléfono: " + document.getElementById("telefono").value + "\n" +
        "En la fecha " + document.getElementById("fechaLlegada").value + " a las " +
        document.getElementById("horario").value + "hs \n" +
        document.getElementById("cantPersonas").value + " personas. \n";

    if (elementosSeleccionados.length > 0) {
        mensaje += "Alergias: " + elementosSeleccionados
    }

    alert(mensaje);
}
