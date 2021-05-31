import React from 'react'
import Section from '../components/section'
import Navbar from '../components/navbar'
import ChartLine from '../components/chartLine'
import Form from '../components/form'
import Slider from '../components/slider'

export default function Home() {
  const works = [
    './works/work01.jpg',
    './works/work02.jpg',
    './works/work03.jpg',
    './works/work04.jpg',
    './works/work05.jpg',
    './works/work06.jpg',
    './works/work07.jpg',
    './works/work08.jpg',
    './works/work09.jpg',
    './works/work10.jpg',
    './works/work11.jpg',
    './works/work12.jpg',
    './works/work13.jpg',
    './works/work14.jpg',
    // './works/work15.jpg',
    './works/work16.jpg',
    './works/work17.jpg',
    './works/work18.jpg',
    './works/work19.jpg',
    './works/work20.jpg',
    './works/work21.jpg',
    './works/work22.jpg',
    './works/work23.jpg',
    './works/work24.jpg',
    './works/work25.jpg',
    './works/work26.jpg',
    './works/work27.jpg',
    './works/work28.jpg',
    './works/work29.jpg',
    './works/work30.jpg',
    './works/work31.jpg',
    './works/work32.jpg',
    './works/work33.jpg',
    './works/work34.jpg',
    './works/work35.jpg',
    './works/work36.jpg'
  ]

  const slides = [
    './works/work19.jpg',
    './works/work18.jpg',
    './works/work17.jpg'
  ]

  return (
    <div>
      <Navbar />

      <Section id='featured' className=''>
        <Slider id='featured-slider' slides={slides} />
        <div id='scroll-down-icon' className='text-center'>
          <a href='#prestations'>
            <i className='las la-arrow-circle-down font-red' />
          </a>
        </div>
      </Section>

      <Section id='prestations'>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-12 col-lg-4 text-center'>
              <div className='mb-4'>
                <i className='las la-terminal icon-medium font-red' />
              </div>
              <h4 className='mb-5'>Reprogrammation</h4>
              <p className=''>
                Edition de cartographie moteur : économie, performance et mise à jour calculateur.
              </p>
            </div>
            <div className='col-12 col-lg-4 text-center'>
              <div className='mb-4'>
                <i className='las la-binoculars icon-medium font-red' />
              </div>
              <h4 className='mb-5'>Consulting</h4>
              <p className=''>
                Accompagnement de votre préparation : recherche de pièces performance, conseils et documentation technique et suivi du projet.
              </p>
            </div>
            <div className='col-12 col-lg-4 text-center'>
              <div className='mb-4'>
                <i className='las la-microchip icon-medium font-red' />
              </div>
              <h4 className='mb-5'>Diagnostique électronique</h4>
              <p className=''>
                Réalisation de diagnostique électronique, recherche de panne, vérification pré-controle technique.
                Un rapport détaillé vous est remi à la fin diagnostique.
              </p>
            </div>

          </div>
        </div>
      </Section>

      <Section id='sur-place'>
        <div className='container py-5'>
          <h1 className='mb-5'><i class='las la-oil-can me-2' />Intervention sur place</h1>
          <div className='row'>
            <div className='col-12 col-md-6'>
              {/* logo poignee de main */}
              <p className='mb-4'>
                Avant toute intervention, une inspection générale du moteur est effectuée.
                Nous effectuons ensuite l'acquisition des données pour connaître précisément l'état du moteur.
                En fonction des souhaits du client nous faisons des préconisations d'amélioration et d'ordre de puissance.
                Une phase de discution sur l'ajout d'options éventuelles (rupteur popcorn, Launch Control, stratégie de démarrage, EGR off etc...) est nécessaire pour pousser la personnalisation.
                Nous récupérons ensuite la cartographie d'origine pour l'éditer.
                Après l'injection de la cartographie modifiée nous effectuons des tests et l'acquisition des logs.
              </p>
              <div className=''>
                <nav>
                  <div className='nav nav-tabs' id='nav-tab' role='tablist'>
                    <button className='nav-link active' id='nav-home-tab' data-bs-toggle='tab' data-bs-target='#nav-home' type='button' role='tab' aria-controls='nav-home' aria-selected='true' style={{ color: '#0C8C40', fontWeight: 'bold' }}>Stage 1+</button>
                    <button className='nav-link' id='nav-profile-tab' data-bs-toggle='tab' data-bs-target='#nav-profile' type='button' role='tab' aria-controls='nav-profile' aria-selected='false' style={{ color: '#FF8A00', fontWeight: 'bold' }}>Stage 2+</button>
                    <button className='nav-link' id='nav-contact-tab' data-bs-toggle='tab' data-bs-target='#nav-contact' type='button' role='tab' aria-controls='nav-contact' aria-selected='false' style={{ color: '#FF3434', fontWeight: 'bold' }}>Stage 3+</button>
                  </div>
                </nav>
                <div className='tab-content' id='nav-tabContent'>
                  <div className='tab-pane fade show active' id='nav-home' role='tabpanel' aria-labelledby='nav-home-tab'>
                    <div>
                      <ul>
                        <li>Aucune modification mécanique nécessaire.</li>
                        <li>Plage de puissance : +15-25%.</li>
                      </ul>
                    </div>
                  </div>
                  <div className='tab-pane fade' id='nav-profile' role='tabpanel' aria-labelledby='nav-profile-tab'>
                    <div>
                      <ul>
                        <li>Filtre à air sport.</li>
                        <li>Catalyseur sport / décatalysé.</li>
                        <li>Embreillage sport si profile hard.</li>
                        <li>Plage de puissance : +25-40%.</li>
                      </ul>
                    </div>
                  </div>
                  <div className='tab-pane fade' id='nav-contact' role='tabpanel' aria-labelledby='nav-contact-tab'>
                    <div>
                      <ul>
                        <li>Filtre à air sport.</li>
                        <li>Catalyseur sport / décatalysé.</li>
                        <li>Embreillage sport.</li>
                        <li>turbo et injection.</li>
                        <li>Plage de puissance : +70-100%.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='card shadow bg-transparent'>
                <div className='card-body'>
                  <ChartLine />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id='a-distance'>
        <div className='container py-5'>
          <div className='container'>
            {/* icone intrernet et plug */}
            <h1 className='mb-5'><i class='las la-plug me-2' />Intervention à distance</h1>
            <div className='position-static row row-cols-1 row-cols-md-2 row-cols-lg-4'>
              <div className='col mb-4 mb-lg-0'>
                <div className='card border-0 flex-row align-items-center'>
                  <i className='las la-coffee icon-medium icon-rounded icon-rounded-light-red me-3' />
                  <span className=''>Prise de contact et expréssion du besoin par le client.</span>
                </div>
              </div>
              <div className='col mb-4 mb-lg-0'>
                <div className='card border-0 flex-row align-items-center'>
                  <i className='las la-save icon-medium icon-rounded icon-rounded-light-red me-3' />
                  <span className=''>Extraction et envoi du fichier de cartographie par le client.</span>
                </div>
              </div>
              <div className='col mb-4 mb-lg-0'>
                <div className='card border-0 flex-row align-items-center'>
                  <i className='las la-laptop-code icon-medium icon-rounded icon-rounded-light-red me-3' />
                  <span className=''>Edition personnalisé du fichier de cartographie.</span>
                </div>
              </div>
              <div className='col mb-4 mb-lg-0'>
                <div className='card border-0 flex-row align-items-center'>
                  <i className='las la-comments icon-medium icon-rounded icon-rounded-light-red me-3' />
                  <span className=''>Retours du client et ajustements.</span>
                </div>
              </div>
            </div>
            <span className='position-relative fw-lighter fst-italic font-black' style={{ fontSize: '0.8rem', top: '100%' }}>
              *Nous travaillons aussi avec les logs ciblés pour les utilisateurs expérimentés.
            </span>
          </div>
        </div>
      </Section>

      {/* <Section id='map'>
        <div className='container py-5'>
          <div className='row'>
            <div className='col'>
              <div className='card shadow bg-grey'>
                <div className='card-body'>
                  <img src={Map} alt='lieux d'implantation' />
                </div>
              </div>
            </div>
            <div className='col'>
              <h3>Usfdg ghgh fhfhjhj </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In ullamcorper lorem ante, et tempus orci imperdiet vel.
                Duis egestas egestas dolor commodo iaculis. Mauris ultricies velit in varius finibus.
                Duis eu facilisis lectus. Curabitur id ante quam. Vivamus sed lorem neque.
                Cras a dolor sagittis, placerat velit quis, venenatis leo.
              </p>
            </div>
          </div>
        </div>
      </Section> */}

      <Section id='realisations'>
        <div className='container py-5'>
          <h1 className='mb-5'><i class='las la-camera-retro me-2' />Réalisations</h1>
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
            {works.map(link => {
              return (
                <div className='col' key={works.indexOf(link)}>
                  <div className='card h-100'>
                    <img src={link} className='img-fluid' alt='' />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* <Section id=''>
        <div className='container py-5'>
          <div className='row'>

            <div className='col'>
              <div className='card bg-transparent'>
                <div className='card-body'>
                  <h3>Dsfdg ghgh fhfhjhj </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In ullamcorper lorem ante, et tempus orci imperdiet vel.
                  </p>
                  <img className='featured_audi' src='/audi.png' alt='' />
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='row mb-3'>
                <div className='col'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-inline-block d-flex flex-row align-items-center mb-3'>
                        <i className='las la-car icon-medium font-red me-3'></i>
                        <h4 className='fs-5'> Lorem Ipsum ad</h4>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In ullamcorper lorem ante, et tempus orci imperdiet vel.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-inline-block d-flex flex-row align-items-center mb-3'>
                        <i className='las la-car icon-medium font-red me-3'></i>
                        <h4 className='fs-5'> Lorem Ipsum ad</h4>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In ullamcorper lorem ante, et tempus orci imperdiet vel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-inline-block d-flex flex-row align-items-center mb-3'>
                        <i className='las la-car icon-medium font-red me-3'></i>
                        <h4 className='fs-5'> Lorem Ipsum ad</h4>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In ullamcorper lorem ante, et tempus orci imperdiet vel.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='d-inline-block d-flex flex-row align-items-center mb-3'>
                        <i className='las la-car icon-medium font-red me-3'></i>
                        <h4 className='fs-5'> Lorem Ipsum ad</h4>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In ullamcorper lorem ante, et tempus orci imperdiet vel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section> */}

      <Section id='contact'>
        <div className='container py-5'>
          <h1 className='mb-5'><i class='las la-bullhorn me-2' />Contact</h1>
          <div className='row'>
            <div className='col-12 col-lg-6'>
              <Form />
            </div>
            <div className='col-12 col-lg-6 text-center'>
              <div className='card'>
                <div className='card-body'>
                  <img src='./engine.png' className='featured_engine' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id='social'>
        <div className='container py-5'>
          <div className='container'>
            <div className='row text-center'>
              <div className='py-2'>
                <a href='https://www.instagram.com/rxdev.technics/' target='_blank' rel='noreferrer' className=''>
                  <i className='lab la-instagram me-2 icon-big' />
                </a>
                <h1 className=''>Suivez-nous sur Instagram</h1>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* <Section id=''>
        <div className='container py-5'>
          <div className='row'>
            <div className='col'>
              <div className='card text-center'>
                <div className='card-body'>
                  <div className='mb-4'>
                    <i className='las la-oil-can icon-medium'></i>
                  </div>
                  <h4 className='mb-5'>jsdhf sjdhf</h4>
                  <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam a ligula at augue pulvinar fermentum.
                    Nulla id tincidunt ligula.
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card text-center'>
                <div className='card-body'>
                  <div className='mb-4'>
                    <i className='las la-tachometer-alt icon-medium'></i>
                  </div>
                  <h4 className='mb-5'>jsdhf sjdhf</h4>
                  <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam a ligula at augue pulvinar fermentum.
                    Nulla id tincidunt ligula.
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card text-center bg-red'>
                <div className='card-body'>
                  <div className='mb-4'>
                    <i className='las la-save icon-medium'></i>
                  </div>
                  <h4 className='mb-5'>jsdhf sjdhf</h4>
                  <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam a ligula at augue pulvinar fermentum.
                    Nulla id tincidunt ligula.
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card text-center bg-red'>
                <div className='card-body'>
                  <div className='mb-4'>
                    <i className='las la-microchip icon-medium'></i>
                  </div>
                  <h4 className='mb-5'>jsdhf sjdhf</h4>
                  <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam a ligula at augue pulvinar fermentum.
                    Nulla id tincidunt ligula.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section> */}

      <Section id='footer'>
        <footer>
          <div className='container'>
            <p className=''>
              © 2021, RX. Made with <i className='las la-burn' /> by <a href='https://lioens.dev/'>Lionel Ensfelder</a>.
            </p>
          </div>
        </footer>
      </Section>

    </div>
  )
}
