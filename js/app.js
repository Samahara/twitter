// crear variables de los elementos de HTML
var text = document.getElementById('message');
var button = document.getElementById('twittear');
var twittsArea = document.getElementById('twitts_container');

/*
  if(text === ""){
    .addEventListener('', );
  }else{
    .addEventListener('', textUser);
    button.style = #D61E80;
  }
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

  text.value = " ";
}

button.addEventListener("click", textUser);
