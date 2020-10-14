import React from "react";
import "./About.css";
import jkangbw from "../images/jkangbw.jpg";
import bulma from "../images/bulma.png";
import css from "../images/css.png";
import jsx from "../images/jsx.png";
import react from "../images/react.png";

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
                        Welcome to my Portfolio site. I am full MERN stack
                        developer born and based out of Atlanta, Ga. My main
                        focus is in React.js with a MySql backend. As a kid I
                        used to make HTML sites for fun. Now I like to build
                        MERN-stack application using React. This portfolio is a
                        currently evolving snapshot in my journey.{" "}
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
                              <span> JohnKangDev@outlook.com</span>
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
                        {/* <div className="card-footer-item">
                          <span className="tag is-light">Html</span>
                          <span className="tag is-light">CSS</span>
                          <span className="tag is-light">JavaScript</span>
                          <span className="tag is-light">jQuery</span>
                          <span className="tag is-light">Bootstrap</span>
                          <span className="tag is-light">JavaScript</span>
                          <span className="tag is-light">Bulma</span>
                          <span className="tag is-light">React</span>
                        </div> */}
                        <div className="card-footer-item">
                          Portfolio built with{" "}
                          <img
                            src={bulma}
                            className="fontIcon"
                            alt="bulma icon"
                          />{" "}
                          <img src={css} className="fontIcon" alt="css icon" />{" "}
                          <img src={jsx} className="fontIcon" alt="jsx icon" />{" "}
                          <img
                            src={react}
                            className="fontIcon"
                            alt="react icon"
                          />{" "}
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
