import React from "react";
import jkangbw from "../images/jkangbw.jpg";

const About = () => {
  return (
    <>
      <section className="hero is-primary is-fullheight-with-navbar has-text-light">
        <div className="hero-body">
          <div className="container is-mobile is-centered">
            <div className="row">
              <div className="columns">
                <div className="column"></div>
                <div className="column is-half">
                  <div className="card">
                    <div className="card-content">
                      <p className="title is-size-4 has-text-dark has-text-centered">
                        Hi, welcome to my Portfolio site. My name is John Kang,
                        and I was born in Atlanta, Ga. I graduated from Georgia
                        Tech's Full Stack Program in May 2020.
                      </p>
                      <p className="title is-size-4 has-text-dark has-text-centered">
                        As a kid, I would make html websites for fun.
                        Considering how much our lives relate to technology, I
                        want to be part of the now. So we can develop for the
                        world tomorrow.
                      </p>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-left">
                            <figure className="image is-128x128">
                              <img
                                src={jkangbw}
                                alt="John Kang black and white"
                              />
                            </figure>
                          </div>
                          <div className="media-content has-text-centered">
                            <p className="title is-3 has-text-dark">
                              John Kang
                            </p>
                            <p className="subtitle is-5 has-text-dark">
                              Atlanta, Georgia
                            </p>

                            <p>
                              <i
                                className="fa fa-phone-square"
                                aria-hidden="true"
                              ></i>
                              <span> 678-616-1566</span>
                            </p>
                            <p>
                              <i
                                className="fa fa-envelope"
                                aria-hidden="true"
                              ></i>
                              <span> pollyfactor@hotmail.com</span>
                            </p>

                            <p>
                              <i className="fab fa-github-square"></i>
                              <span>
                                <a
                                  href="https://github.com/drivelikejehu"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {" "}
                                  github.com/drivelikejehu
                                </a>
                              </span>
                            </p>

                            <p>
                              <i className="fab fa-linkedin"></i>
                              <span>
                                <a
                                  href=" https://www.linkedin.com/in/drivelikejehu"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {" "}
                                  linkedin.com/in/drivelikejehu
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="card-footer-item">
                          <span className="tag is-light">Html</span>
                          <span className="tag is-light">CSS</span>
                          <span className="tag is-light">JavaScript</span>
                          <span className="tag is-light">jQuery</span>
                          <span className="tag is-light">Bootstrap</span>
                          <span className="tag is-light">JavaScript</span>
                          <span className="tag is-light">Bulma</span>
                          <span className="tag is-light">React</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
