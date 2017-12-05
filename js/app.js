// crear variables de los elementos de HTML
var text = document.getElementById('message');
var button = document.getElementById('twittear');
var twittsArea = document.getElementById('twitts_container');
var counter = document.getElementById('counter');

//contador de caracteres
var counterCharacter = function() {
  // creando una variable count que inice en 0 y guarde la longitud de la cadena
  // del text area.
  var count = 0;
  count = text.value.length;
  counter.value = 140 - count;

  if(count > 140){
    button.disabled = true;
    button.style.background = "#EEA5CC";
    counter.style.color = "red";
  }else if(count >= 130){
    button.disabled = false;
    button.style.background = "#D61E80";
    counter.style.color = "orange";
  }else if(count >= 120){
    button.disabled = false;
    button.style.background = "#D61E80";
    counter.style.color = "green";
  }else if(count <= 0){
    button.disabled = true;
    button.style.background= "#EEA5CC";
  }else{
    button.disabled = false;
    button.style.background = "#D61E80";
    counter.style.color = "gray";
  }

}

/*
var resizeTextArea = function(){

}*/

// crear una función que guarde el mensaje
var textUser = function(e) {
  e.preventDefault();
  // creando contenedores para los mensajes del usuario
  var messageContainer = document.createElement('div');
  var message = document.createElement('p');
  //agregando atributos
  message.innerText = text.value;
  // agregar los elementos a los elementos existentes
  messageContainer.appendChild(message);
  twittsArea.appendChild(messageContainer);

  text.value = ""; //NOTA: NO DEJAR ESPACIOS EN BLANCO PORQUE LO RECONOCE COMO CARACTER
  text.placeholder = "¿Qué está pasando?";
}

text.addEventListener("keyup", counterCharacter);
button.addEventListener("click", textUser);
