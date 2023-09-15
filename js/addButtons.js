AFRAME.registerComponent("createbuttons", {
  init: function () {
    // 1. Crear el botón de calificación
    var button1 = document.createElement("button");
    button1.innerHTML = "ORDENAR AHORA";
    button1.setAttribute("id", "order-button");
    button1.setAttribute("class", "btn btn-danger ml-3 mr-3");

    // 2. Crear el botón del precio total
    var button2 = document.createElement("button");
    button2.innerHTML = "ORDENAR RESUMEN";
    button2.setAttribute("id", "order-summary-button");
    button2.setAttribute("class", "btn btn-danger ml-3");

    // 3. Anexar en algún lugar
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.appendChild(button2);
    buttonDiv.appendChild(button1);
  }
});
