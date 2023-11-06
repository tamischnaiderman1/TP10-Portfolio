import React from "react";
import './Contacto.css'

export default function Contacto() {
  return (
    <div className="App">
      <h1>Contacto</h1>
      <footer>
<form action="" class="form_main">
    <div class="inputContainer">
        <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#2e2e2e" viewBox="0 0 36 36">
         </svg>
    <input type="text" class="inputField" id="username" placeholder="Nombre"/>
    </div>
    
<div class="inputContainer">
    <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#2e2e2e" viewBox="0 0 36 36">
    </svg>
    <input type="password" class="inputField" id="password" placeholder="Mail"/>
</div>
<div class="inputContainer">
    <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#2e2e2e" viewBox="0 0 36 36">
    </svg>
    <input type="password" class="inputField" id="password" placeholder="Telefono"/>
</div>
<div class="inputContainer">
    <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#2e2e2e" viewBox="0 0 36 36">
    </svg>
    <input type="password" class="inputField" id="password" placeholder="Mensaje"/>
</div>
           
<button id="button">Enviar</button>
</form>
      </footer>
    </div>
  );
}



