import React, { useEffect, useRef } from "react";
import * as emailjs from 'emailjs-com/dist/email.min.js';
emailjs.init('user_o1JLUuc75Y9FwtRUQK2Hh');

export default function Form() {

  function handleReset() {
    Array.from(document.getElementsByClassName('form-control')).forEach(
      input => (input.value = "")
    );

  };

  const inputElement = useRef(null);
  const formElement = useRef(null);

  const Input = props => {
    return (
      <input
        ref={inputElement}
        className="form-control form-control-lg"
        pattern={props.pattern}
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        aria-label={props.ariaLabel}
        aria-describedby={props.ariaDescribedBy} 
        required={props.required}
      />
    )
  }
  const Form = props => {
    return (
      <form id={props.id} ref={formElement}>{props.children}</form>
    )
  }


  function validateForm(e) {;
    let formIsValid = formElement.current.reportValidity();
    if(formIsValid){
      sendFom(e);
    }
  }


  function sendFom(e) {
    emailjs.sendForm('service_ecn9ldj', 'template_70zhpp3', '#contactForm')
      .then(function (response) {
        if (response.status === 200) {
          alert('Votre message à bien été envoyé !')
          handleReset();
        }
      }, function (error) {
        alert('Oups il y a eu un problème. Vérifiez vos informations et envoyez à nouveau le formulaire.  ');
      });
  }

  return (
    <div className="card bg-transparent">
      <Form id={"contactForm"}>
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6">
            <div className="input-group mb-4">
              <span className="input-group-text">
                <i className="las la-user-tie"></i>
              </span>
              <Input
                pattern={"^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+"}
                id={"name"}
                type={"text"}
                name={"name"}
                placeholder={"Prénom"}
                ariaLabel={"name"}
                ariaDescribedBy={"name"} 
                required={"required"}
              />
            </div>
            <div className="input-group">
              <span className="input-group-text">
                <i className="las la-car-side"></i>
              </span>
              <Input
                pattern={"^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+"}
                id={"car"}
                type={"text"}
                name={"car"}
                placeholder={"Voiture"}
                ariaLabel={"car"}
                ariaDescribedBy={"car"}
                required={"required"}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="input-group mb-4">
              <span className="input-group-text">
                <i className="las la-mobile"></i>
              </span>
              <Input
                pattern={"^[0-9]{10}$"}
                id={"car"}
                type={"tel"}
                name={"tel"}
                placeholder={"Téléphne"}
                ariaLabel={"tel"}
                ariaDescribedBy={"tel"}
                required={"required"}
              />
            </div>
            <div className="input-group">
              <span className="input-group-text">
                <i className="lab la-instagram"></i>
              </span>
              <Input
                pattern= {"^[a-zA-Z0-9 -_]+$"}
                id={"instagram"}
                type={"text"}
                name={"instagram"}
                placeholder={"Instagram"}
                ariaLabel={"instagram"}
                ariaDescribedBy={"instagram"}
                required={"required"}
              />
            </div>
          </div>
        </div>
        <div className="row g-3 mb-4">
          <div className="col">
            <textarea name="message" className="form-control form-control-lg" placeholder="Votre message" required="required"></textarea>
          </div>
        </div>
        <button type="button" className="btn btn-lg btn-red" onClick={validateForm}>Envoyer</button>
      </Form>

    </div>
  )
}