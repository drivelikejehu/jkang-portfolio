import React from "react";
import john from "../images/jkangbw.jpg";

const About = () => {
  return (
    <>
      <section className="hero is-primary is-fullheight-with-navbar has-text-light">
        <div className="hero-body">
          <div className="container">
            <div className="row">
              <div className="columns">
                <div className="column"></div>
                <div className="column is-half">
                  <div className="card">
                    <div className="card-content">
                      <p className="title has-text-dark has-text-right">
                        As a kid, I would make html websites for fun.
                        Considering how much our lives relate to technology, I
                        want to be part of the future. So I can join the
                        expanding network of developers, who love what they do.
                      </p>
                    </div>
                    <footer className="card-footer">
                      <p className="card-footer-item">
                        <span>
                          View on{" "}
                          <a href="https://twitter.com/codinghorror/status/506010907021828096">
                            Twitter
                          </a>
                        </span>
                      </p>
                      <p className="card-footer-item">
                        <span>
                          Share on <a href="/#">Facebook</a>
                        </span>
                      </p>
                    </footer>
                  </div>
                </div>
                <div className="column"></div>
                <div className="column is-one-third">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-42x42">
                        <img src={john} alt="John Kang black and white" />
                      </figure>
                    </div>
                    <div className="card-content"></div>
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
