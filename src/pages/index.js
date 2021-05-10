import React from "react";
import Section from "../components/section";
import Navbar from "../components/navbar";
import ChartLine from "../components/chartLine";
import map from '../../static/world_map.svg';


export default function Home() {

  return <div>

    <Navbar />

    <Section id="featured">
      <div className="py-5">
        <div className="text-center">
          <h1>Lorem Ipsum Stale</h1>
          <button type="button" class="btn btn-lg btn-primary">Contact</button>
        </div>
      </div>
    </Section>

    <Section id="stages">
      <div class="container py-5">
        <div class="row">
          <div class="col text-center">
            <div className="mb-4">
              <img src="/puce.png" className="bigIcon" />
            </div>
            <h4 className="mb-5">jsdhf sjdhf</h4>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nam a ligula at augue pulvinar fermentum. 
              Nulla id tincidunt ligula.
            </p>
          </div>
          <div class="col text-center">
            <div className="mb-4">
              <img src="/puce.png" className="bigIcon" />
            </div>
            <h4 className="mb-5">jsdhf sjdhf</h4>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nam a ligula at augue pulvinar fermentum. 
              Nulla id tincidunt ligula.
            </p>
          </div>
          <div class="col text-center">
            <div className="mb-4">
              <img src="/puce.png" className="bigIcon" />
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
        <div class="row">
          <div class="col">
            <h3>dsfdg ghgh fhfhjhj </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              In ullamcorper lorem ante, et tempus orci imperdiet vel. 
              Duis egestas egestas dolor commodo iaculis. Mauris ultricies velit in varius finibus. 
              Duis eu facilisis lectus. Curabitur id ante quam. Vivamus sed lorem neque. 
              Cras a dolor sagittis, placerat velit quis, venenatis leo.
            </p>
          </div>
          <div class="col">
            <div className="card shadow bg-transparent">
              <div className="card-body">
              <ChartLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section id="map">
      <div className="container py-5">
        <div class="row">
          <div class="col">
            <div className="card shadow bg-transparent">
              <div className="card-body">
              <img src={map} alt="lieux d'implantation" />
              </div>
            </div>
          </div>
          <div class="col">
            <h3>dsfdg ghgh fhfhjhj </h3>
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
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="/works/1 (1).jpg" class="h-100" alt="..." />
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="/works/1 (2).jpg" class="h-100" alt="..." />
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="/works/1 (3).jpg" class="h-100" alt="..." />
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="/works/1 (4).jpg" class="h-100" alt="..." />
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="/works/1 (5).jpg" class="h-100" alt="..." />
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="/works/1 (6).jpg" class="h-100" alt="..." />
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="/works/1 (7).jpg" class="h-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section id="">
      <div className="container py-5">
        <div class="row">

          <div class="col">
            <h3>dsfdg ghgh fhfhjhj </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              In ullamcorper lorem ante, et tempus orci imperdiet vel.
            </p>
            <img className="featured_half_section" src="/audi.png" alt="" />
          </div>

          <div class="col">
            <div class="row mb-3">
              <div class="col">
                <div className="card bg-transparent">
                  <div className="d-inline-block mb-3">
                    <img src="/puce.png" className="bigIcon" />
                    <span className="fs-5"> Lorem Ipsum ad</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    In ullamcorper lorem ante, et tempus orci imperdiet vel.
                  </p>
                </div>
              </div>
              <div class="col">
                <div className="card bg-transparent">
                  <div className="d-inline-block mb-3">
                    <img src="/puce.png" className="bigIcon" />
                    <span className="fs-5"> Lorem Ipsum ad</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    In ullamcorper lorem ante, et tempus orci imperdiet vel.
                  </p>
                </div>
              </div>
            </div>

            <div class="row">
              
              <div class="col">
                <div className="card bg-transparent">
                  <div className="d-inline-block mb-3">
                    <img src="/puce.png" className="bigIcon" />
                    <span className="fs-5"> Lorem Ipsum ad</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    In ullamcorper lorem ante, et tempus orci imperdiet vel.
                  </p>
                </div>
              </div>
              <div class="col">
                <div className="card bg-transparent">
                  <div className="d-inline-block mb-3">
                    <img src="/puce.png" className="bigIcon" />
                    <span className="fs-5"> Lorem Ipsum ad</span>
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
    </Section>

  </div>
}
