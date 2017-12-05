// crear variables de los elementos de HTML
var text = document.getElementById('message');
var button = document.getElementById('twittear');
var twittsArea = document.getElementById('twitts_container');
var counter = document.getElementById('counter');

// contador de caracteres
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
// agrandar la textarea conforme al texto
var resizeTextArea = function(){
    text.style.height = "118px";
    text.style.height = text.scrollHeight + 18 + "px";
}
// crear una función que guarde el mensaje
var textUser = function(e) {
  e.preventDefault();
  // creando contenedores para los mensajes del usuario
  var messageContainer = document.createElement('div');
  var message = document.createElement('p');
  var userName = document.createElement('p');
  var userCode = document.createElement('span');
  //agregando atributos
  userName.className = "name";
  message.innerText = text.value;
  userName.innerText = "CODEHOUND";
  userCode.innerText = " @CODEHOUND";
  // agregar los elementos a los elementos existentes
  userName.appendChild(userCode);
  messageContainer.appendChild(userName);
  messageContainer.appendChild(message);
  twittsArea.appendChild(messageContainer);

  text.value = ""; //NOTA: NO DEJAR ESPACIOS EN BLANCO PORQUE LO RECONOCE COMO CARACTER
  text.placeholder = "¿Qué está pasando?";
}


text.addEventListener("keyup", counterCharacter);
text.addEventListener("keydown", resizeTextArea);
button.addEventListener("click", textUser);
