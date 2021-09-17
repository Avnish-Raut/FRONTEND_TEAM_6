import React from "react";
import sec_image from "../src/images/ae5ae16a1f8bdad663c96a699d91e646-removebg-preview.png";
import third_image from "../src/images/elegantmind-e-commerce-ui-kit-josetcastaneda-removebg-preview.png";
import fourth_image from "../src/images/pair-programming-concept-illustration_114360-2170-removebg-preview.png";
import custom_image from "../src/images/20946019-removebg.png";
import { BsFillCaretRightFill } from "react-icons/bs";
import "../src/index.css";
import card_1 from "../src/images/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept_74855-9812.jpg";
import card_2 from "../src/images/unemployment-insurance-abstract-concept-vector-illustration-unemployment-benefits-lost-job-tired-stressed-businessman-claim-form-workers-compensation-paper-work-interview-abstract-metaphor_335657-1355.jpg";
import card_3 from "../src/images/depositphotos_90443984-stock-illustration-bonus-employee-reward-benefits-promotion.jpg";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import main_image from "../src/images/173e4ac918977f8f603a714349d85128.png";

const Home = () => {
  return (
    <>
      <section id="first-section" className="d-flex align-items-center">
        <div className="container-fluid nav_bg pt-5 my-5  ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1">
                  <h1>
                    Nurture your Business with{" "}
                    <strong className="brand-name">Merklebits</strong>
                  </h1>
                  <h3 className="my-2">A Domain with Every Solution</h3>
                  <div className="mt-5">
                    <a href=" " className="btn btn-outline-light custom_button">
                      Get Started
                    </a>
                  </div>
                </div>
                <div class="col-md">
                  <img
                    src={main_image}
                    className="img-fluid animated"
                    alt="main_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="second-section" className="d-flex align-items-center">
        <div className="container-fluid nav_bg pt-5 mt-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div class="col-md">
                  <img
                    src={sec_image}
                    className="img-fluid second_main_image animated"
                    alt="sec_image"
                  />
                </div>
                <div class="col-md p-5">
                  <h2 className="text-white">Education</h2>
                  <p className="lead">
                    Education is a utility which makes human a personality.
                  </p>
                  <p>
                    Enhance your skills with us . Learn more about real life
                    products and improve in the technical environment. Visit out
                    website for more information.
                  </p>
                  <a href=" " class="btn btn-outline-light custom_button mt-3">
                    <BsFillCaretRightFill /> Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="third-section" className="d-flex align-items-center">
        <div className="container-fluid nav_bg pt-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div class="col-md p-5">
                  <h2>Ecommerce</h2>
                  <p className="lead">
                    E-Mind . The website to have customers enjoy the feel of
                    buying products at reasonable prices
                  </p>
                  <p>
                    We see our customers as invited guests to a party, and we
                    are the hosts. It’s our job every day to make every
                    important aspect of the customer experience a little bit
                    better. Have a look at our variety of products
                  </p>
                  <a
                    href=" "
                    className="btn btn-outline-light custom_button mt-3"
                  >
                    <BsFillCaretRightFill /> Look More
                  </a>
                </div>
                <div class="col-md">
                  <img
                    src={third_image}
                    className="img-fluid animated"
                    alt="third_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fourth-section" className="d-flex align-items-center">
        <div className="container-fluid nav_bg pt-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md">
                  <img
                    src={fourth_image}
                    className="img- animated"
                    alt="fourth_image"
                  />
                </div>
                <div className="col-md p-5">
                  <h2>Software Development</h2>
                  <p className="lead text-white">
                    Where innovation meets excellence
                  </p>
                  <p className="text-white">
                    Our company is dedicated to developing software products for
                    our customers. To view our previously made software products
                    click the button.
                  </p>
                  <a href=" " class="btn btn-outline-light custom_button mt-3">
                    <BsFillCaretRightFill /> Click here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="custom-section" className="d-flex align-items-center">
        <div className="container-fluid nav_bg pt-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div class="col-md p-5">
                  <h2>Import and Export</h2>
                  <p className="lead">
                    Import and Export to make your life easy.
                  </p>
                  <p>
                    Our company exports of goods and services as percentage of
                    GDP is 18.43% and imports of goods and services as
                    percentage of GDP is 20.96%.
                  </p>
                  <a
                    href=" "
                    className="btn btn-outline-light custom_button mt-3"
                  >
                    <BsFillCaretRightFill /> Look More
                  </a>
                </div>
                <div class="col-md">
                  <img
                    src={custom_image}
                    className="img-fluid animated"
                    alt="custom_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fifth-container" className="d-flex align-items-center">
        <div class="container pt-5">
          <h3 class="text-center main_heading">Frequently Asked Questions</h3>
          <hr />
          <div class="accordion accordion-flush" id="questions">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                >
                  Where exactly are you located?
                </button>
              </h2>
              <div
                id="question-one"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Our Main Office is located at St.Francis Institute of
                  Technology.
                  <br />
                  Mount Poinsur, S.V.P. Road, Borivali (West), Mumbai 400 103.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-two"
                >
                  In which field do we extend?
                </button>
              </h2>
              <div
                id="question-two"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  We have our own ecommerce company,a software developing
                  company ,a educational institution company and an import and
                  export company.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-three"
                >
                  Which internship do we provide?
                </button>
              </h2>
              <div
                id="question-three"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  We provide internship for students in the field of
                  frontend,backend,machine learning and AL.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-four"
                >
                  How Do I sign up for the internship?
                </button>
              </h2>
              <div
                id="question-four"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Our LinkedIn account provides all updates on timings and types
                  of internship , 15 days before the start of the internship.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-five"
                >
                  Do you help me find a job?
                </button>
              </h2>
              <div
                id="question-five"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Yes ofcourse. We provide you with the experience you need to
                  work in a team , to work with real life problems and we always
                  welcome you to ask any question related to your project and
                  also placements.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sixth-container">
        <div className="my-5">
          <h3 className="text-center"> Our Services</h3>
          <hr />
          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-5 pt-5">
                  <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                      <img src={card_1} className="card-img-top" alt="card_1" />
                      <div className="card-body">
                        <h5 className="card-title">Benefits</h5>
                        <p className="card-text">
                          An organizational structure is a system that outlines
                          how certain activities are directed in order to
                          achieve the goals of an organization.
                        </p>
                        <a href=" " className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                      <img src={card_3} className="card-img-top" alt="card_3" />
                      <div className="card-body">
                        <h5 className="card-title">Bonus</h5>
                        <p className="card-text">
                          A financial compensation that is above and beyond the
                          normal payment expectations of its recipient.
                        </p>
                        <a href=" " className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                      <img src={card_2} className="card-img-top" alt="card_2" />
                      <div className="card-body">
                        <h5 className="card-title">Checklist</h5>
                        <p className="card-text">
                          A checklist is a list of all the things that you need
                          to do, information that you want to find out, or
                          things that you need to take somewhere.
                        </p>
                        <a href=" " className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="seventh-container" class="container main-footer">
        <footer class="py-5 mx-auto">
          <h3
            className="text-center main_heading+
  "
          >
            Contact-Us
          </h3>
          <hr />
          <div class="row pt-5">
            <div class="col-2">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href=" " class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href=" " class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href=" " class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href=" " class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href=" " class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-2">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href=" " class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href=" " class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href=" " class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href=" " class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href=" " class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-7 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div class="d-flex w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  />
                  <button class="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </footer>

        <div class="centerdiv pb-5">
          <a href=" ">
            <FaFacebook />
          </a>

          <a href=" ">
            <FiTwitter />
          </a>

          <a href=" ">
            <FaLinkedinIn />
          </a>

          <a href=" ">
            <AiFillYoutube />
          </a>

          <a href=" ">
            <FiMail />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
