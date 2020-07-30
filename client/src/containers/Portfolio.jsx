import React from "react";
import burger from "../images/burger.png";
import poke from "../images/poke.png";
import supnsip from "../images/supnsip.png";

const Portfolio = () => {
  return (
    <>
      <section className="hero is-primary is-fullheight-with-navbar has-text-light">
        <div className="hero-body">
          <div className="container">
            <div className="row">
              <div className="title is-2">Portfolio</div>
              <div className="columns">
                <div className="column is-one-third">
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Eat Da Burger</span>
                      </p>
                    </header>
                    <div className="card-image">
                      <figure className="image is-3by2">
                        <img src={burger} alt="Eat Da Burger application" />
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a
                        href="https://github.com/drivelikejehu/Eat-Da-Burger"
                        className="card-footer-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                      <a
                        href="https://immense-thicket-63740.herokuapp.com/"
                        className="card-footer-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Deployed
                      </a>
                    </footer>
                  </div>
                </div>
                <div className="column is-one-third">
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>PokeBattle</span>
                      </p>
                    </header>
                    <div className="card-image">
                    <figure className="image is-3by2">
                        <img src={poke} alt="PokeBattle" />
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a
                        href="https://github.com/drivelikejehu/PokeBattle"
                        className="card-footer-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                      <a
                        href="https://ancient-bayou-34435.herokuapp.com/"
                        className="card-footer-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Deployed
                      </a>
                    </footer>
                  </div>
                </div>
                <div className="column is-one-third">
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <span>Sup 'N' Sip</span>
                      </p>
                    </header>
                    <div className="card-image">
                    <figure className="image is-3by2">
                        <img src={supnsip} alt="dinner and drink app" />
                      </figure>
                    </div>
                    <footer className="card-footer">
                      <a
                        href="https://github.com/drivelikejehu/Sup-N-Sip"
                        className="card-footer-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                      <a
                        href="https://drivelikejehu.github.io/Sup-N-Sip/"
                        className="card-footer-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Deployed
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
