import React from "react";
import Section from "../components/section";
import Navbar from "../components/navbar";
import ChartLine from "../components/chartLine";
import Map from '../../static/world_map.svg';
import Form from '../components/form';


export default function Home() {

  return <div>

    <Navbar />

    <Section id="featured">
      <div className="py-5">
        <div className="text-center">
          <h1>Lorem Ipsum Stale</h1>
          <button type="button" className="btn btn-lg btn-red">Contact</button>
        </div>
      </div>
    </Section>

    <Section id="stages">
      <div className="container py-5">
        <div className="row">
          <div className="col text-center">
            <div className="mb-4">
              <i className="las la-fire icon-medium font-red"></i>
            </div>
            <h4 className="mb-5">jsdhf sjdhf</h4>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam a ligula at augue pulvinar fermentum.
              Nulla id tincidunt ligula.
            </p>
          </div>
          <div className="col text-center">
            <div className="mb-4">
              <i className="las la-fire icon-medium font-red"></i>
            </div>
            <h4 className="mb-5">jsdhf sjdhf</h4>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam a ligula at augue pulvinar fermentum.
              Nulla id tincidunt ligula.
            </p>
          </div>
          <div className="col text-center">
            <div className="mb-4">
              <i className="las la-fire icon-medium font-red"></i>
            </div>
            <h4 className="mb-5">jsdhf sjdhf</h4>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam a ligula at augue pulvinar fermentum.
              Nulla id tincidunt ligula.
            </p>
          </div>

        </div>
      </div>
    </Section>

    <Section id="chart">
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h3>dsfdg ghgh fhfhjhj </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In ullamcorper lorem ante, et tempus orci imperdiet vel.
              Duis egestas egestas dolor commodo iaculis. Mauris ultricies velit in varius finibus.
              Duis eu facilisis lectus. Curabitur id ante quam. Vivamus sed lorem neque.
              Cras a dolor sagittis, placerat velit quis, venenatis leo.
            </p>
          </div>
          <div className="col">
            <div className="card shadow bg-transparent">
              <div className="card-body">
                <ChartLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section id="band">
      <div className="container py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-3">
                  <div className="">
                    <i className="las la-fire icon-medium icon-medium-rounded"></i>
                  </div>
                </div>
                <div className="col-9 d-flex flex-column justify-content-center">
                  <span className="">sdfgdfghdfgdfgdfg</span>
                  <p className="">
                    sdfsdfsdfsdfsdfsf
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-3">
                  <div className="">
                    <i className="las la-lemon icon-medium icon-medium-rounded"></i>
                  </div>
                </div>
                <div className="col-9 d-flex flex-column justify-content-center">
                  <span className="">sdfgdfghdfgdfgdfg</span>
                  <p className="">
                    sdfsdfsdfsdfsdfsf
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-3">
                  <div className="">
                    <i className="las la-rocket icon-medium icon-medium-rounded"></i>
                  </div>
                </div>
                <div className="col-9 d-flex flex-column justify-content-center">
                  <span className="">sdfgdfghdfgdfgdfg</span>
                  <p className="">
                    sdfsdfsdfsdfsdfsf
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section id="map">
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <div className="card shadow bg-grey">
              <div className="card-body">
                <img src={Map} alt="lieux d'implantation" />
              </div>
            </div>
          </div>
          <div className="col">
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
    </Section>

    <Section id="works">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="/works/1 (1).jpg" className="h-100" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="/works/1 (2).jpg" className="h-100" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="/works/1 (3).jpg" className="h-100" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="/works/1 (4).jpg" className="h-100" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="/works/1 (5).jpg" className="h-100" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="/works/1 (6).jpg" className="h-100" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="/works/1 (7).jpg" className="h-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section id="">
      <div className="container py-5">
        <div className="row">

          <div className="col">
            <div className="card bg-transparent">
              <div className="card-body">
                <h3>Dsfdg ghgh fhfhjhj </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  In ullamcorper lorem ante, et tempus orci imperdiet vel.
                </p>
                <img className="featured_audi" src="/audi.png" alt="" />
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row mb-3">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="d-inline-block d-flex flex-row align-items-center mb-3">
                      <i class="las la-car icon-medium font-red me-3"></i>
                      <h4 className="fs-5"> Lorem Ipsum ad</h4>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In ullamcorper lorem ante, et tempus orci imperdiet vel.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="d-inline-block d-flex flex-row align-items-center mb-3">
                      <i class="las la-car icon-medium font-red me-3"></i>
                      <h4 className="fs-5"> Lorem Ipsum ad</h4>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In ullamcorper lorem ante, et tempus orci imperdiet vel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="d-inline-block d-flex flex-row align-items-center mb-3">
                      <i class="las la-car icon-medium font-red me-3"></i>
                      <h4 className="fs-5"> Lorem Ipsum ad</h4>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In ullamcorper lorem ante, et tempus orci imperdiet vel.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="d-inline-block d-flex flex-row align-items-center mb-3">
                      <i class="las la-car icon-medium font-red me-3"></i>
                      <h4 className="fs-5"> Lorem Ipsum ad</h4>
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
    </Section>

    <Section id="form">
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="card mb-3">
                <div className="card-body">
                  <a href="#" className="fs-3">
                    <i className="lab la-instagram me-2"></i>
                    Suivez-nous sur Instagram
                  </a>
                </div>
              </div>
            </div>
            <Form />
          </div>
          <div className="col text-center">
            <div className="card">
              <div className="card-body">
                <img src="/engine.png" className="featured_engine" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section id="social">
      <div className="container py-5">
        <div className="container">
          <div className="row text-center">
            <div className="py-2">
              <a href="#" className="">
                <i className="lab la-instagram me-2 icon-big"></i>
              </a>
              <h1 className="">Suivez-nous sur Instagram</h1>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section id="">
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <div className="card text-center">
              <div className="card-body">
                <div className="mb-4">
                  <i class="las la-oil-can icon-medium"></i>
                </div>
                <h4 className="mb-5">jsdhf sjdhf</h4>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam a ligula at augue pulvinar fermentum.
                  Nulla id tincidunt ligula.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <div className="card-body">
                <div className="mb-4">
                  <i class="las la-tachometer-alt icon-medium"></i>
                </div>
                <h4 className="mb-5">jsdhf sjdhf</h4>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam a ligula at augue pulvinar fermentum.
                  Nulla id tincidunt ligula.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center bg-red">
              <div className="card-body">
                <div className="mb-4">
                  <i class="las la-save icon-medium"></i>
                </div>
                <h4 className="mb-5">jsdhf sjdhf</h4>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam a ligula at augue pulvinar fermentum.
                  Nulla id tincidunt ligula.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center bg-red">
              <div className="card-body">
                <div className="mb-4">
                  <i className="las la-microchip icon-medium"></i>
                </div>
                <h4 className="mb-5">jsdhf sjdhf</h4>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam a ligula at augue pulvinar fermentum.
                  Nulla id tincidunt ligula.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

  </div >
}
