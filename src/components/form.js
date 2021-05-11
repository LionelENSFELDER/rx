import React from "react";
import * as emailjs from 'emailjs-com/dist/email.min.js';
emailjs.init('user_o1JLUuc75Y9FwtRUQK2Hh');

export default function Form(){

  const SERVICE_ID = 'service_ecn9ldj';
  const TEMPLATE_ID = 'template_70zhpp3';
  const FORM = document.getElementById('contactForm');
  console.log(FORM);

  function handleReset(){
    Array.from(document.getElementsByClassName('form-control')).forEach(
      input => (input.value = "")
    );
    
  };
  

  function sendFom(e){
    emailjs.sendForm('service_ecn9ldj', 'template_70zhpp3', '#contactForm')
    .then(function(response) {
      if(response.status === 200){
        handleReset();
        alert('Votre message à bien été envoyé !');
      }
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
        alert('Oups il y a eu un problème. Vérifiez vos informations et envoyez à nouveau le formulaire.  ');
    });
  }

  return(
    <form id="contactForm">
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6">
          <div className="input-group mb-4">
            <span className="input-group-text" id="name">Prénom</span>
            <input type="text" name="name" className="form-control form-control-lg" placeholder="Prénom" aria-label="name" aria-describedby="name"/>
          </div>
          <div className="input-group">
            <span className="input-group-text" id="car">Voiture</span>
            <input type="text" name="car" className="form-control form-control-lg" placeholder="Voiture" aria-label="car" aria-describedby="car"/>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="input-group mb-4">
            <span className="input-group-text" id="tel">Téléphone</span>
            <input type="tel" name="tel" className="form-control form-control-lg" placeholder="Téléphone" aria-label="tel" aria-describedby="tel"/>
          </div>
          <div className="input-group">
            <span className="input-group-text" id="instagram">Instagram</span>
            <input type="text" name="instagram" className="form-control form-control-lg" placeholder="Instagram" aria-label="instagram" aria-describedby="instagram"/>
          </div>
        </div>
      </div>
      <div className="row g-3 mb-4">
        <div className="col">
          <textarea name="message" className="form-control form-control-lg" placeholder="Votre message"></textarea>
        </div>
      </div>
      <button type="button" className="btn btn-primary btn-lg" onClick={sendFom}>Envoyer</button>
    </form>
  )
}